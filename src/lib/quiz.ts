import type { Verse } from "@/data/verses";

export type Question = { verse: Verse; options: string[]; answer: string };

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Builds `count` questions, each with the right reference plus 3 wrong ones. */
export function buildQuiz(all: Verse[], count = 5, rand: () => number = Math.random): Question[] {
  return shuffle(all, rand)
    .slice(0, count)
    .map((verse) => {
      const wrong = shuffle(
        all.filter((v) => v.day !== verse.day).map((v) => v.ref),
        rand,
      ).slice(0, 3);
      return { verse, answer: verse.ref, options: shuffle([verse.ref, ...wrong], rand) };
    });
}

export function scoreMessage(score: number, total: number) {
  const r = score / total;
  if (r === 1) return "Perfect! Bible scholar ka na! 🏆";
  if (r >= 0.6) return "Ang galing! Konti na lang, pro ka na.";
  if (r > 0) return "Okay lang 'yan! Balikan ang mga verses at subukan ulit.";
  return "Walang score pero walang judgment (Matthew 7:1 😉). Try ulit!";
}
