import { describe, expect, it } from "vitest";

import { verses } from "@/data/verses";
import { buildQuiz } from "@/lib/quiz";
import { nextDay } from "@/lib/progress";

describe("reading plan", () => {
  it("has exactly 30 days numbered 1 to 30", () => {
    expect(verses.map((v) => v.day)).toEqual(Array.from({ length: 30 }, (_, i) => i + 1));
  });

  it("continues at the first unfinished day", () => {
    expect(nextDay([])).toBe(1);
    expect(nextDay([1, 2, 4])).toBe(3);
  });
});

describe("quiz", () => {
  it("asks 5 questions, each with 4 unique options including the right reference", () => {
    const qs = buildQuiz(verses, 5);
    expect(qs).toHaveLength(5);
    for (const q of qs) {
      expect(q.options).toHaveLength(4);
      expect(new Set(q.options).size).toBe(4);
      expect(q.options).toContain(q.verse.ref);
    }
  });
});
