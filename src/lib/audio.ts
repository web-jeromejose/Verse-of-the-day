// Free, public-domain audio Bible: Berean Standard Bible (BSB) via the Free Use Bible API.
// https://bible.helloao.org — no API key, CORS open, includes per-verse audio timings.

const API = "https://bible.helloao.org/api/BSB";
const AUDIO = "https://audio.bible.helloao.org/api/BSB";

const BOOKS: Record<string, string> = {
  Genesis: "GEN",
  Exodus: "EXO",
  Psalm: "PSA",
  Psalms: "PSA",
  Proverbs: "PRO",
  Isaiah: "ISA",
  Jeremiah: "JER",
  Lamentations: "LAM",
  Micah: "MIC",
  Matthew: "MAT",
  Mark: "MRK",
  Luke: "LUK",
  John: "JHN",
  Acts: "ACT",
  Romans: "ROM",
  "1 Corinthians": "1CO",
  "2 Corinthians": "2CO",
  Galatians: "GAL",
  Ephesians: "EPH",
  Philippians: "PHP",
  Colossians: "COL",
  "2 Timothy": "2TI",
  Hebrews: "HEB",
  James: "JAS",
  "1 John": "1JN",
  Revelation: "REV",
};

export type ParsedRef = { book: string; chapter: number; from: number; to: number };

/** "Matthew 22:37–39" → { book: "MAT", chapter: 22, from: 37, to: 39 } */
export function parseRef(ref: string): ParsedRef | null {
  const m = ref.match(/^(.+?)\s+(\d+):(\d+)(?:\s*[–-]\s*(\d+))?$/);
  if (!m) return null;
  const book = BOOKS[m[1]!.trim()];
  if (!book) return null;
  const from = Number(m[3]);
  return { book, chapter: Number(m[2]), from, to: m[4] ? Number(m[4]) : from };
}

export const readers = [
  { id: "souer", label: "Souer", hint: "Malalim at kalmado" },
  { id: "hays", label: "Hays", hint: "Mainit at malinaw" },
  { id: "david", label: "David", hint: "Mabilis at diretso" },
] as const;
export type ReaderId = (typeof readers)[number]["id"];

export const audioUrl = (r: ParsedRef, reader: ReaderId) =>
  `${AUDIO}/${r.book}/${r.chapter}/audio/${reader}.mp3`;
export const timingsUrl = (r: ParsedRef, reader: ReaderId) =>
  `${API}/${r.book}/${r.chapter}.${reader}.audioTimings.json`;
export const chapterUrl = (r: ParsedRef) => `${API}/${r.book}/${r.chapter}.json`;

/** Start/end seconds of the plan's verse range inside the chapter recording. */
export function segment(timings: number[], r: ParsedRef, duration: number) {
  const start = timings[r.from - 1] ?? 0;
  const end = timings[r.to] ?? (duration || start + 30);
  return { start, end };
}

/** Which verse number is being read at time t. */
export function verseAt(timings: number[], t: number) {
  let v = 0;
  for (let i = 0; i < timings.length; i++) if (timings[i]! <= t + 0.05) v = i + 1;
  return v;
}

type ContentPart = string | { text?: string; noteId?: number; lineBreak?: boolean };
type ChapterItem = { type: string; number?: number; content?: ContentPart[] };

/** Flattens the API's chapter JSON into plain verse lines. */
export function extractVerses(content: ChapterItem[]) {
  return content
    .filter((c) => c.type === "verse" && typeof c.number === "number")
    .map((c) => ({
      number: c.number!,
      text: (c.content ?? [])
        .map((p) => (typeof p === "string" ? p : (p.text ?? "")))
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim(),
    }));
}

export const fmtTime = (s: number) => {
  if (!Number.isFinite(s) || s < 0) s = 0;
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};
