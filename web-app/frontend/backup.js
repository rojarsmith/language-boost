// Keep validation independent of the DOM so backup compatibility can be tested.
export const MAX_BACKUP_BYTES = 5 * 1024 * 1024;
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const text = value => typeof value === 'string';
const date = value => text(value) && /^\d{4}-\d{2}-\d{2}T/.test(value) && Number.isFinite(Date.parse(value));
const integer = (value, min, max) => Number.isInteger(value) && value >= min && value <= max;
function requireValid(condition, message) {
  if (!condition) throw new Error(message);
}
function pick(value, keys) { return Object.fromEntries(keys.map(key => [key, value[key]])); }

export function parseBackup(source, lessons, curriculumVersion) {
  let data;
  try { data = JSON.parse(source); } catch { throw new Error('無法讀取 JSON，請選擇由本網站匯出的備份。'); }
  requireValid(object(data) && data.version === 1, '不支援此備份版本，請選擇 v1 備份。');
  requireValid(data.curriculum_version === undefined || data.curriculum_version === curriculumVersion, '教材版本不相容，無法還原。');
  requireValid(date(data.exported_at), '備份匯出時間無效。');
  const p = data.preferences;
  requireValid(object(p) && text(p.name) && p.name.trim().length > 0 && p.name.length <= 50 &&
    ['en','ja'].includes(p.language) && [30,60,90,120].includes(p.minutes) &&
    ['product','project','sales','engineering'].includes(p.role) && typeof p.support === 'boolean' &&
    ['starter','stretch'].includes(p.level) && [0.65,0.85,1,1.15].includes(p.rate) &&
    ['Asia/Taipei','Asia/Tokyo','America/Los_Angeles','America/New_York','Europe/London','UTC'].includes(p.timezone),
  '偏好設定無效，請使用完整的原始備份。');
  requireValid(Array.isArray(data.attempts) && Array.isArray(data.reviews), '備份缺少練習或複習清單。');
  const catalog = new Map(lessons.map(lesson => [lesson.id, lesson.language]));
  const ids = new Set();
  const attempts = data.attempts.map(a => {
    requireValid(object(a) && text(a.id) && a.id.length > 0 && !ids.has(a.id) &&
      catalog.has(a.lesson_id) && catalog.get(a.lesson_id) === a.language && date(a.created_at) &&
      integer(a.seconds, 0, 7200) && integer(a.confidence, 1, 5) &&
      ['sound','meaning','retrieval','structure','context'].includes(a.bottleneck) &&
      ['transcript','followup','transfer'].every(key => text(a[key])) && a.transfer.trim().length > 0 &&
      ['listening_correct','listening_checked','used_script','used_transfer_prompt'].every(key => typeof a[key] === 'boolean'),
    '練習紀錄無效、ID 重複或包含未知教材，未還原任何資料。');
    ids.add(a.id);
    return pick(a, ['id','lesson_id','language','created_at','seconds','confidence','bottleneck','transcript','followup','transfer','listening_correct','listening_checked','used_script','used_transfer_prompt']);
  }).sort((a,b) => Date.parse(b.created_at) - Date.parse(a.created_at));
  const reviewIds = new Set();
  const reviews = data.reviews.map(r => {
    requireValid(object(r) && catalog.has(r.lesson_id) && !reviewIds.has(r.lesson_id) &&
      integer(r.stage, 0, 4) && date(r.due), '複習排程無效、重複或包含未知教材。');
    reviewIds.add(r.lesson_id);
    return pick(r, ['lesson_id','stage','due']);
  });
  return {prefs:pick(p, ['name','language','minutes','role','support','level','rate','timezone']), attempts, reviews};
}
