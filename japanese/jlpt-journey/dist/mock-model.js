"use strict";
const mockBank = [];
const mockMinutes = [12, 14, 16, 18, 20];
const mockSkill = (index) => Math.floor(index / 3);

function unusedMockForms(book, level) {
  const used = new Set(
    book.history.filter((x) => x.level === level).map((x) => x.form),
  );
  if (book.active?.level === level) used.add(book.active.form);
  return mockBank[level]
    .map((_, index) => index)
    .filter((index) => !used.has(index));
}

function startMock(book, level, now) {
  if (book.active) return;
  const available = unusedMockForms(book, level);
  if (!available.length) return;
  const form = available[0];
  book.active = {
    id: level + "-" + form,
    level,
    form,
    started: now,
    deadline: now + mockMinutes[level] * 60000,
    index: 0,
    answers: Array(mockBank[level][form].length).fill(null),
  };
}

function finishMock(book, now) {
  const attempt = book.active;
  if (!attempt) return null;
  const points = [0, 0, 0, 0];
  mockBank[attempt.level][attempt.form].forEach((q, index) => {
    if (attempt.answers[index] === q.answer) points[mockSkill(index)]++;
  });
  const total = points.reduce((a, b) => a + b, 0);
  const result = {
    ...attempt,
    ended: Math.min(now, attempt.deadline),
    timedOut: now >= attempt.deadline,
    points,
    total,
    ready: total >= 9 && points.every((n) => n >= 2),
  };
  book.history.push(result);
  book.active = null;
  return result;
}

function applyMockResult(state, result) {
  if (state.lastMock === result.id) return false;
  // A lower-level check can inform review without moving the learner backwards.
  if (result.ready)
    state.level = Math.max(state.level, Math.min(4, result.level + 1));
  state.lastMock = result.id;
  state.mockFocus = result.points.map((n) => (3 - n) * 2);
  return true;
}
