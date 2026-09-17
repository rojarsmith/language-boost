# External-claim approval gate

## Current gate status

**STOP: The US$200M model and commercial terms are not approved for external financial guidance.**

The keynote may be used for internal rehearsal. Before any external audience, every red or yellow claim below needs an owner, approved wording, evidence, and date.

## Status definitions

- **GREEN:** Current public or repository evidence supports the exact wording.
- **YELLOW:** Evidence exists, but scope, date, audience, or wording requires approval.
- **RED:** Scenario, commercial term, customer claim, or financial statement without approval.

## Approval rule

A verbal approval is not enough for a red claim. Record:

- Exact sentence
- Audience and event
- Slide number
- Evidence
- Approver name and role
- Approval date
- Expiration or recheck date

## Product and release claims

| Status | Claim | Current safe wording | Evidence | Required approval |
|---|---|---|---|---|
| GREEN | Product identity | EDT HMI Studio is a visual development environment for embedded touch interfaces. | Current source and public page | Product owner |
| GREEN | AI role | The assistant can create or edit project content through the editor. | Public page and current source | Product owner |
| GREEN | Public Alpha | The 0.8.5 Alpha is available for evaluation by key stakeholders. | Official page checked 2026-09-18 | Product／Marketing |
| YELLOW | Beta availability | The Beta is now available for evaluation. | Official page must show Beta | Product／QA／Legal／Marketing |
| YELLOW | GA month | General release is planned for [month]. | Official page currently says Dec 2026 | CEO／Product／Legal／Marketing |
| YELLOW | Windows support | The public Alpha page lists Windows 10/11 64-bit. | Official page | Product／QA |
| RED | macOS and Linux production support | [No approved wording] | Old marketing and build paths are insufficient | Product／QA／Support |
| GREEN | Three source board profiles | The current source includes three board profiles. | Current board definitions | Engineering／Product |
| YELLOW | Production-ready board support | [Name exact board and tested release] | Release test report required | QA／Engineering／Product |
| GREEN | Current serial protocols | Modbus RTU and configurable serial commands are implemented. | Current source and examples | Engineering／Product |
| RED | Production CAN or Ethernet | [Do not claim] | Runtime path incomplete | Engineering／Product／QA |
| YELLOW | EVK RS-485 | The hardware is present; the supported software path needs confirmation. | Board definition and release test | Engineering／QA |
| GREEN | F746 and H747 media scope | Use the board-specific wording in the product truth file. | Video docs and 0.8.7 source | Engineering／QA |

## AI, security, and data claims

| Status | Claim | Current safe wording | Required approval |
|---|---|---|---|
| GREEN | Provider choice | Users can configure OpenRouter or Ollama. | Product |
| YELLOW | Local inference | Ollama can stay local when configured to a local host. | Security／Product |
| RED | Data never leaves customer site | [Do not claim without complete architecture and contract] | Security／Legal |
| RED | Enterprise privacy, retention, region, and training policy | [To be defined] | Security／Privacy／Legal |
| RED | AI quality guarantee | [Do not claim] | Product／Legal／QA |
| YELLOW | One-step undo | An applied AI change can be undone as one step. | Product／QA |
| GREEN | Hardware boundary | The assistant does not operate target hardware. | Product／Engineering |

## Commercial claims

| Status | Claim | Current safe wording | Required approval |
|---|---|---|---|
| RED | Studio is free with EDT hardware | We are evaluating a model linked to compatible EDT-manufactured displays. | CEO／Finance／Legal／Sales／Channel |
| RED | Subscription price or perpetual license | I will confirm the approved pricing in writing. | Finance／Product／Legal |
| RED | AI reseller or managed usage price | We are evaluating provider and managed-service options. | Finance／Security／Legal／Product |
| RED | Distributor margin and discount | I will confirm the approved channel terms. | Channel／Finance／Legal |
| RED | Regional exclusivity | We have no approved exclusivity commitment. | Executive sponsor／Legal／Sales |
| RED | Deal ownership and revenue attribution | The policy must be defined before the pilot. | Sales／Finance／Channel |
| RED | SLA, warranty, and response time | I will confirm the approved support terms. | Support／Legal／Product |
| RED | NRE, custom board, and delivery time | We will scope the target and provide an approved proposal. | Engineering／Operations／Finance／Sales |

## Financial and market claims

| Status | Claim | Current safe wording | Required approval |
|---|---|---|---|
| RED | US$200M target | This is a scenario model and strategic North Star, not approved guidance. | CEO／Board／Finance／IR／Legal |
| RED | Year for US$200M | The model has no approved date. | CEO／Board／Finance／IR |
| RED | 80 programs at US$2M | This is an illustrative assumption. | Sales／Finance／Business Units |
| RED | 2,000 teams at US$10K | This is an illustrative assumption. | Product／Finance／Sales |
| RED | 10 agreements at US$2M | This is an illustrative assumption. | CEO／Legal／Finance／Product |
| RED | US$200M is ARR | Do not use. Most of the scenario is hardware revenue. | Finance／IR／Legal |
| RED | TWD2.0B internal scenario | Do not show externally until reconciled with the keynote model. | Finance／IR／Legal |
| YELLOW | US$11.60B HMI market in 2030 | Third-party estimate from Grand View Research. | Marketing／IR／Legal |
| YELLOW | US$200M is 1.7% of US$11.60B | Arithmetic scale context only, not a market-share forecast. | Finance／IR／Legal |
| RED | Customer count, pipeline, design wins, conversion, or savings | [No public number without evidence and approval] | Sales／Finance／IR／Legal |

## Slide-by-slide release

| Slides | Gate |
|---|---|
| 1 to 11 | Product owner checks current technical wording and Demo |
| 12 | Product, QA, Legal, and Marketing confirm public status within 24 hours |
| 13 to 15 | Executive sponsor and channel leadership approve strategy wording |
| 16 to 20 | CEO, Finance, IR, and Legal approve every number and label |
| 21 to 22 | Functional owners accept metrics, account scope, and review date |
| 23 | Executive sponsor approves the final ask |

## Required sign-off record

| Function | Name | Approved scope | Date | Recheck date | Signature／written record |
|---|---|---|---|---|---|
| Executive sponsor |  |  |  |  |  |
| Product |  |  |  |  |  |
| Engineering／QA |  |  |  |  |  |
| Sales／Channel |  |  |  |  |  |
| Finance |  |  |  |  |  |
| Investor Relations |  |  |  |  |  |
| Legal／Privacy／Security |  |  |  |  |  |
| Marketing／Communications |  |  |  |  |  |

## Final 24-hour check

- [ ] Official page version, release date, audience, roadmap, and download terms captured
- [ ] Alpha or Beta line selected, with the unused line deleted from the presenter view
- [ ] Product source commit and release notes rechecked
- [ ] Live Demo built from the approved package
- [ ] Every slide number matches the script
- [ ] US$200M label says “Illustrative scenario” and “Not approved guidance”
- [ ] Every financial number has unit and annual basis
- [ ] Market sources and access date appear in speaker notes
- [ ] Customer names and confidential data removed
- [ ] Pricing, channel, SLA, privacy, and roadmap answers approved
- [ ] Follow-up owner and date available for unanswered questions

If any red claim remains on an external slide without written approval, remove the claim. Do not soften the label and leave the number.
