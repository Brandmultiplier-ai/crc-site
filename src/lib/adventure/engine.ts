import {
  ALIASES,
  DESCRIPTIONS,
  EXITS,
  FILES,
  RESPONSES,
  ROOM_NAMES,
  ROOM_WORDS,
  type Direction,
  type Room,
  type WorldState,
} from "./data";

/** A line printed to the screen. A line may end in a link (a case study, or the Diagnostic). */
export interface Line {
  text: string;
  kind?: "cmd" | "exits";
  link?: { href: string; label: string } | { diagnostic: true; label: string };
}

/** Side effects the UI performs after printing: navigate to a page, or scroll to a section. */
export type Effect =
  | { type: "navigate"; href: string; delayMs: number }
  | { type: "scroll"; targetId: string; delayMs: number };

export interface StepResult {
  state: WorldState;
  lines: Line[];
  effect?: Effect;
}

const DIAGNOSTIC_LINK: Line["link"] = { diagnostic: true, label: " Book the Diagnostic." };
const STACK_FILES = /^(microsoft|nike|google|intel|sony|nickelodeon)$/;
const READ_FILE =
  /^(?:read|open|examine|x) (ledger|microsoft|disney|nike|google|intel|sony|hard rock|bettercloud|remark|tria|apto|nickelodeon|red cross)$/;

/** Own-property lookup, so input like "constructor" never reaches Object.prototype. */
function lookup<T>(table: Record<string, T>, key: string): T | undefined {
  return Object.hasOwn(table, key) ? table[key] : undefined;
}

export function exitsLine(room: Room): string {
  const exits = Object.entries(EXITS[room]) as [Direction, Room][];
  return `Exits: ${exits.map(([dir, to]) => `${dir} (${ROOM_NAMES[to]})`).join(", ")}.`;
}

/** Quick-command chips for the current room. */
export function chipsFor(room: Room): string[] {
  const extra =
    room === "archive" ? ["read ledger", "browse"] : room === "road" ? ["timeline"] : [];
  return [...Object.keys(EXITS[room]), ...extra, "look", "inventory", "help"];
}

function describe(state: WorldState): Line[] {
  const description: Line = { text: DESCRIPTIONS[state.room](state) };
  if (state.room === "door" && state.doorOpen) description.link = DIAGNOSTIC_LINK;
  return [description, { text: exitsLine(state.room), kind: "exits" }];
}

/** Lowercases, strips movement verbs and articles, and resolves aliases. */
function normalise(raw: string): string {
  let c = raw
    .trim()
    .toLowerCase()
    .replace(/[.!]+$/, "")
    .replace(/\s+/g, " ");
  c = c
    .replace(/^(go|walk|head|move|run|travel|step|climb)( over| out| back)? (to )?/, "")
    .replace(/^to /, "")
    .replace(/\b(the|a|an|at)\b ?/g, "")
    .trim();
  const examine = c.match(
    /^(examine|x|look|inspect|use) (bass|bass guitar|guitar|whistle|wing|board|foil board|wing-foil board|plunge|cold plunge|cushion|notebooks|notebook|backpacks|backpack)$/,
  );
  if (examine) c = examine[2];
  c = c.replace(/ (file|folder|case file|case study)$/, "");
  return lookup(ALIASES, c) ?? c;
}

/** Interprets one command against the world. Pure: no DOM, no timers. */
export function step(state: WorldState, raw: string): StepResult | null {
  if (!raw.trim()) return null;
  const echo: Line = { text: `> ${raw.trim()}`, kind: "cmd" };
  const c = normalise(raw);
  const say = (text: string, link?: Line["link"], next: WorldState = state): StepResult => ({
    state: next,
    lines: [echo, { text, link }],
  });
  const go = (room: Room): StepResult => {
    const next = { ...state, room };
    return { state: next, lines: [echo, ...describe(next)] };
  };

  if (/^(north|south|east|west)$/.test(c)) {
    const to = EXITS[state.room][c as Direction];
    return to ? go(to) : say(`You can't go that way. ${exitsLine(state.room)}`);
  }
  if (c === "home") return go("studio");
  const roomWord = lookup(ROOM_WORDS, c);
  if (roomWord) return go(roomWord);
  if (c === "look") return go(state.room);

  // The fork in the road.
  if (
    /^(take|get|grab|pick up|pickup) ?fork$/.test(c) ||
    (c === "fork" && state.room === "road" && !state.hasFork)
  ) {
    if (state.hasFork) return say("You already have it.");
    if (state.room !== "road") return say("What fork?");
    return say(
      "You take the fork. It's an ordinary dinner fork, slightly bent. Somewhere, Yogi Berra nods.",
      undefined,
      { ...state, hasFork: true },
    );
  }
  if (
    /^(take |go |turn )?(left|right)( fork| road| path)?$/.test(c) ||
    /^take (left|right)/.test(c)
  ) {
    if (state.room !== "road") return say("Left of what?");
    return say(
      "You walk a long way. The road bends, and bends, and brings you back to the same spot." +
        (state.hasFork ? "" : " There is still a fork in the road."),
    );
  }
  if (/^(examine|x|look) fork$/.test(c)) {
    if (state.hasFork)
      return say("A dinner fork. Four tines, one slightly bent. Surprisingly useful.");
    return say(
      state.room === "road"
        ? "The road splits in two. There is a fork in the road. It's right there."
        : "What fork?",
    );
  }

  // The BrandMultiplier door.
  if (
    /^(use fork|pry|pry door|pry open door|open door with fork|use fork on door|pry door with fork|pry latch|pry latch with fork|lift latch with fork|jimmy door)$/.test(
      c,
    )
  ) {
    if (!state.hasFork) return say(c.includes("fork") ? "You don't have a fork." : "With what?");
    if (state.room !== "door") return say("There's nothing here to use it on.");
    if (state.doorOpen) return say("The door's already open.");
    return say(
      "You work the fork into the gap and lift the latch. The door swings open. Inside: founders whose teams can't tell the story without them. Yet. A sign on the wall reads: The Diagnostic.",
      DIAGNOSTIC_LINK,
      { ...state, doorOpen: true },
    );
  }
  if (/^(open|push|pull|kick|knock|knock on|force) door$|^open$|^(enter|door)$/.test(c)) {
    if (state.room !== "door") {
      return say("There's no door here. The BrandMultiplier door is south of the studio.");
    }
    if (state.doorOpen) return say("It's open.", DIAGNOSTIC_LINK);
    const next = { ...state, doorTries: state.doorTries + 1 };
    return say(
      next.doorTries >= 2 && !state.hasFork
        ? "It won't budge. Something thin and strong might work that latch. Wasn't there a fork in the road?"
        : "It won't budge.",
      undefined,
      next,
    );
  }

  if (c === "take" || c === "get") return say("Take what?");
  if (c === "inventory") {
    return say(
      "You are carrying: one TRS-80, four languages (one of them dead), a bass you play badly" +
        (state.hasFork ? ", a slightly bent fork" : "") +
        ", and a Diagnostic " +
        (state.doorOpen ? "worth booking." : "you haven't booked yet."),
    );
  }

  // Case files.
  const fileKey = c.match(READ_FILE)?.[1] ?? (lookup(FILES, c) || STACK_FILES.test(c) ? c : null);
  if (fileKey) {
    const file = lookup(FILES, fileKey);
    if (file) {
      return {
        ...say(file.line, { href: file.url, label: ` Read the ${file.name} case study.` }),
        effect: { type: "navigate", href: file.url, delayMs: 900 },
      };
    }
    const name = fileKey.replace(/\b\w/g, (m) => m.toUpperCase());
    return say(`The ${name} file is in the stacks: type browse.`);
  }
  if (c === "browse") {
    return {
      ...say("You walk the stacks."),
      effect: { type: "scroll", targetId: "work", delayMs: 350 },
    };
  }
  if (c === "timeline") {
    return {
      ...say("You walk the road, one year at a time."),
      effect: { type: "scroll", targetId: "throughline", delayMs: 350 },
    };
  }
  const response = lookup(RESPONSES, c);
  if (response) return say(response);
  return say(`I don't know how to "${raw.trim()}". Type help.`);
}
