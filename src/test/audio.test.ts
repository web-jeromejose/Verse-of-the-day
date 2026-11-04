import { describe, expect, it } from "vitest";

import { verses } from "@/data/verses";
import { parseRef, segment, verseAt } from "@/lib/audio";

describe("audio bible", () => {
  it("finds audio for every one of the 30 verses", () => {
    expect(verses.filter((v) => !parseRef(v.ref)).map((v) => v.ref)).toEqual([]);
  });

  it("reads a verse range like Proverbs 3:5–6", () => {
    expect(parseRef("Proverbs 3:5–6")).toEqual({ book: "PRO", chapter: 3, from: 5, to: 6 });
    expect(parseRef("Psalm 23:1")).toEqual({ book: "PSA", chapter: 23, from: 1, to: 1 });
  });

  it("plays only the plan's verses, ending where the next verse starts", () => {
    const t = [5, 10, 20, 30];
    expect(segment(t, { book: "X", chapter: 1, from: 2, to: 3 }, 40)).toEqual({ start: 10, end: 30 });
    expect(segment(t, { book: "X", chapter: 1, from: 4, to: 4 }, 40)).toEqual({ start: 30, end: 40 });
    expect(verseAt(t, 12)).toBe(2);
  });
});
