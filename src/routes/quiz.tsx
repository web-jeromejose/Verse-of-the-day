import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw, X } from "lucide-react";

import { verses } from "@/data/verses";
import { buildQuiz, scoreMessage, type Question } from "@/lib/quiz";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Verse Quiz — Bible Verses" },
      { name: "description", content: "5 tanong: hulaan kung saang libro at chapter galing ang sikat na Bible verse." },
      { property: "og:title", content: "Verse Quiz — Kilala mo ba ang mga sikat na verses?" },
      { property: "og:description", content: "Subukan ang galing mo sa mga Bible verses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuizPage,
});

const TOTAL = 5;

function QuizPage() {
  const [qs, setQs] = useState<Question[]>([]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const restart = () => {
    setQs(buildQuiz(verses, TOTAL));
    setI(0);
    setPicked(null);
    setScore(0);
  };

  // Shuffle only in the browser so the server and client render the same first frame.
  useEffect(restart, []);

  const finished = qs.length > 0 && i >= qs.length;
  const q = qs[i];

  const pick = (opt: string) => {
    if (picked || !q) return;
    setPicked(opt);
    if (opt === q.answer) setScore((s) => s + 1);
  };

  return (
    <main className="mx-auto min-h-screen max-w-md px-5 pb-12">
      <header className="flex items-center gap-3 py-4">
        <Link to="/" aria-label="Balik sa home" className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="flex-1 text-2xl font-semibold text-foreground">Verse Quiz</h1>
        <span className="rounded-full bg-accent px-3 py-1 text-sm font-bold text-accent-foreground">
          {score} pts
        </span>
      </header>

      {!q && !finished && <div className="mt-10 h-64 animate-pulse rounded-3xl bg-muted" />}

      {q && !finished && (
        <div key={i} className="animate-rise">
          <div className="flex gap-1.5">
            {qs.map((_, k) => (
              <div key={k} className={`h-1.5 flex-1 rounded-full ${k <= i ? "bg-primary" : "bg-muted"}`} />
            ))}
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Tanong {i + 1} ng {qs.length} · Saan galing ito?
          </p>
          <blockquote className="mt-3 rounded-3xl bg-ink-gradient p-6 font-display text-xl leading-snug text-ink-foreground shadow-soft">
            {q.verse.text}
          </blockquote>

          <div className="mt-5 grid gap-3">
            {q.options.map((opt) => {
              const isAnswer = opt === q.answer;
              const isPicked = opt === picked;
              const state = !picked
                ? "border-border bg-card text-foreground"
                : isAnswer
                  ? "border-success bg-success/15 text-foreground"
                  : isPicked
                    ? "border-destructive bg-destructive/10 text-foreground"
                    : "border-border bg-card text-muted-foreground opacity-60";
              return (
                <button
                  key={opt}
                  onClick={() => pick(opt)}
                  disabled={!!picked}
                  className={`flex items-center justify-between rounded-2xl border-2 px-5 py-4 text-left font-semibold transition-all active:scale-[0.98] ${state}`}
                >
                  {opt}
                  {picked && isAnswer && <Check className="h-5 w-5 animate-pop text-success" />}
                  {picked && isPicked && !isAnswer && <X className="h-5 w-5 animate-pop text-destructive" />}
                </button>
              );
            })}
          </div>

          {picked && (
            <div className="mt-5 animate-rise rounded-3xl bg-accent p-5 text-accent-foreground">
              <p className="font-display text-lg font-semibold">
                {picked === q.answer ? "Tama! 🎉" : `Sayang! ${q.answer} 'yan.`}
              </p>
              <p className="mt-1 text-sm leading-relaxed">Tema: {q.verse.theme}. {q.verse.why}</p>
              <button
                onClick={() => {
                  setI((n) => n + 1);
                  setPicked(null);
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-sunrise px-5 py-3 font-semibold text-primary-foreground shadow-glow"
              >
                {i + 1 < qs.length ? "Susunod" : "Tingnan ang score"} <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      )}

      {finished && (
        <div className="mt-10 animate-pop rounded-[2rem] bg-ink-gradient p-8 text-center text-ink-foreground shadow-soft">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sun">Score mo</p>
          <p className="mt-2 font-display text-7xl font-semibold">
            {score}
            <span className="text-3xl opacity-60">/{qs.length}</span>
          </p>
          <p className="mt-4 leading-relaxed text-ink-foreground/85">{scoreMessage(score, qs.length)}</p>
          <button
            onClick={restart}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-sunrise px-5 py-3.5 font-semibold text-primary-foreground shadow-glow"
          >
            <RotateCcw className="h-5 w-5" /> Laro ulit
          </button>
          <Link to="/" className="mt-4 inline-block text-sm font-semibold text-sun">
            Balik sa mga verses
          </Link>
        </div>
      )}
    </main>
  );
}
