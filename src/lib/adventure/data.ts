/** World data for CRC Adventure, the text adventure on the home page. */

export type Room = "studio" | "archive" | "road" | "deck" | "door";
export type Direction = "north" | "east" | "south" | "west";

export interface WorldState {
  room: Room;
  /** Picked up the fork on the road. */
  hasFork: boolean;
  /** Times the stuck door was tried without the fork. */
  doorTries: number;
  doorOpen: boolean;
}

export const INITIAL_STATE: WorldState = {
  room: "studio",
  hasFork: false,
  doorTries: 0,
  doorOpen: false,
};

/** Case files that exist as pages on this site. */
export const FILES: Record<string, { name: string; url: string; line: string }> = {
  apto: {
    name: "Apto Solutions",
    url: "/work/apto-solutions/",
    line: "You open the Apto Solutions file. It smells faintly of revenue.",
  },
  ledger: {
    name: "Ledger",
    url: "/work/ledger/",
    line: "You open the Ledger file. Two sub-brands fall out.",
  },
  bettercloud: {
    name: "BetterCloud",
    url: "/work/bettercloud/",
    line: "You open the BetterCloud file. A quarter of a market, regained.",
  },
  remark: {
    name: "Remark",
    url: "/work/remark-growth-marketing/",
    line: "You open the Remark file. Page views, everywhere.",
  },
  tria: {
    name: "Tria Beauty",
    url: "/work/tria-beauty/",
    line: "You open the Tria Beauty file. It glows slightly.",
  },
  "hard rock": {
    name: "Hard Rock Cafe",
    url: "/work/hard-rock-cafe/",
    line: "You open the Hard Rock file. It is the oldest one here, and the loudest.",
  },
  disney: {
    name: "Disney",
    url: "/work/#disney",
    line: "You open the Disney file. River water, sunscreen, a paddle, a stack of park copy, and a Vacation Club newsletter.",
  },
};

export const STUDIO_DESCRIPTION =
  "You are standing in a small studio in Aspen, Colorado: a water person's office on a mountain. A bass guitar leans in one corner, a wing-foil board in the other. A whistle and two backpacks hang by the door. Case files line the north wall. A road runs east, a deck lies west, and to the south is a door marked BrandMultiplier.";

export const DESCRIPTIONS: Record<Room, (s: WorldState) => string> = {
  studio: () => STUDIO_DESCRIPTION,
  archive: () =>
    "The archive. 30+ years of case files: Microsoft, Disney, Nike, Google, Intel, Sony, Hard Rock, Ledger, BetterCloud, Apto, Remark, Tria. One lies open on the desk. Along the back wall, a shelf of notebooks, more than ten years of them. Try: read ledger. Or: browse, to walk the stacks.",
  road: (s) =>
    "The road runs east through thirty-some years: a TRS-80, four languages, Hard Rock Cafe, the agency years, Accenture. " +
    (s.hasFork
      ? "The road splits ahead. You already took the fork."
      : "Up ahead, there is a fork in the road.") +
    " Type timeline to walk it.",
  deck: () =>
    "A deck facing the mountains. In the corner, a cold plunge. It is 39 degrees. A cushion sits on the boards, worn flat in one spot.",
  door: (s) =>
    s.doorOpen
      ? "The BrandMultiplier door stands open. A sign inside reads: The Diagnostic."
      : "A door marked BrandMultiplier. It's stuck: the frame swelled over a long winter, and there's a gap by the latch too thin for fingers.",
};

export const EXITS: Record<Room, Partial<Record<Direction, Room>>> = {
  studio: { north: "archive", east: "road", south: "door", west: "deck" },
  deck: { east: "studio" },
  archive: { south: "studio" },
  road: { west: "studio" },
  door: { north: "studio" },
};

export const ROOM_NAMES: Record<Room, string> = {
  studio: "studio",
  archive: "archive",
  road: "road",
  deck: "deck",
  door: "BrandMultiplier door",
};

/** Words that name a room and take you straight there. */
export const ROOM_WORDS: Record<string, Room> = {
  studio: "studio",
  home: "studio",
  inside: "studio",
  office: "studio",
  archive: "archive",
  library: "archive",
  stacks: "archive",
  road: "road",
  deck: "deck",
  outside: "deck",
  porch: "deck",
  door: "door",
  "brandmultiplier door": "door",
};

/** Fixed responses. */
export const RESPONSES: Record<string, string> = {
  help: "Try: look, north, east, south, west, take, open, use, sit, read, inventory. Some things here are more literal than they look.",
  latin:
    "moveo, movere, movi, motum: to move. The root of emotion and motivation. Also, more or less, the whole job.",
  who: "Chris Rubin. Wrote some of his first programs on a TRS-80, the first website for Hard Rock Cafe, and his best pitches for Accenture. Founder of CRC. Now building BrandMultiplier.",
  xyzzy: "Nothing happens. It never did.",
  hello: "Hello. Type help if you're lost. Most people are, at first.",
  bass: "You pick up the bass and play. Badly, but with conviction. It's indie rock, so that's allowed.",
  sing: "You sing. The neighbors are mostly elk. They've heard worse.",
  foil: "A water person living on a mountain: a fish out of water. So you wing-foil. A wing, a board, a hydrofoil, whatever wind shows up. Most days you fly. Some days you swim.",
  football:
    "A whistle on a lanyard. You coached your son's flag football team to four championships in five years. The whistle still works.",
  plunge:
    "You lower yourself into 39-degree water. Three minutes later you climb out, fully awake and faintly regretful. You'll do it again tomorrow.",
  meditate:
    "You sit on the cushion and breathe. At least once a day for more than ten years, and the mind still wanders off. You bring it back. That's the whole trick.",
  notebooks:
    "At least 1,000 words a day, for more than ten years. Most of it will never be published. All of it is why the rest reads the way it does.",
  backpacks:
    "Two backpacks, one for each twin: a boy and a girl. You help raise them. They supply most of your best material. None of it goes on the website.",
};

/** Synonyms, normalised before a command is interpreted. */
export const ALIASES: Record<string, string> = {
  l: "look",
  i: "inventory",
  inv: "inventory",
  h: "help",
  "?": "help",
  hi: "hello",
  n: "north",
  e: "east",
  s: "south",
  w: "west",
  "play bass": "bass",
  play: "bass",
  guitar: "bass",
  "play guitar": "bass",
  music: "bass",
  "wing foil": "foil",
  wingfoil: "foil",
  "wing-foil": "foil",
  surf: "foil",
  swim: "foil",
  water: "foil",
  "flag football": "football",
  "cold plunge": "plunge",
  "take plunge": "plunge",
  "get in plunge": "plunge",
  "enter plunge": "plunge",
  sit: "meditate",
  "sit on cushion": "meditate",
  meditation: "meditate",
  cushion: "meditate",
  breathe: "meditate",
  notebook: "notebooks",
  "read notebooks": "notebooks",
  "read notebook": "notebooks",
  shelf: "notebooks",
  write: "notebooks",
  journal: "notebooks",
  backpack: "backpacks",
  twins: "backpacks",
  kids: "backpacks",
  wing: "foil",
  board: "foil",
  "foil board": "foil",
  "wing-foil board": "foil",
  hydrofoil: "foil",
  "bass guitar": "bass",
  "take bass": "bass",
  "take whistle": "football",
  "blow whistle": "football",
  "take wing": "foil",
  "take board": "foil",
  coach: "football",
  whistle: "football",
  movere: "latin",
  about: "who",
  whoami: "who",
  back: "home",
  "go back": "home",
  studio: "home",
  history: "timeline",
  work: "browse",
  files: "browse",
  "case files": "browse",
};
