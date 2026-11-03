import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, BookOpen, Check, Heart, Shuffle, Sparkles, Trophy } from "lucide-react";

import hero from "@/assets/hero-sunrise.jpg";
import { verses, type Verse } from "@/data/verses";
import { sections, type SectionId } from "@/data/sections";
import { nextDay, useProgress } from "@/lib/progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "30 Sikat na Bible Verses — Explained in Taglish" },
      {
        name: "description",
        content:
          "Basahin ang 30 pinaka-sikat na Bible verses, ipinaliwanag sa Taglish, may reflection para sa buhay ngayon, fun facts at quiz.",
      },
      { property: "og:title", content: "30 Sikat na Bible Verses — Explained in Taglish" },
      {
        property: "og:description",
        content: "Isang verse kada araw. Taglish na paliwanag, hugot sa buhay ngayon, at fun facts.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { progress, ready } = useProgress();
  const [section, setSection] = useState<SectionId>("all");
  const [onlyFav, setOnlyFav] = useState(false);

  const done = progress.done.length;
  const pct = Math.round((done / 30) * 100);
  const continueDay = nextDay(progress.done);
  const active = sections.find((s) => s.id === section)!;
  const list = verses.filter(
    (v) =>
      v.day >= active.from &&
      v.day <= active.to &&
      (!onlyFav || progress.favorites.includes(v.day)),
  );

  return (
    <main className="mx-auto min-h-screen max-w-md pb-16">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Pagsikat ng araw sa ibabaw ng rice terraces"
          width={864}
          height={1152}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-fade" />
        <div className="px-6 pb-10 pt-14">
          <Link
            to="/church"
            className="inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold text-primary backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" /> JCTGbTg Church · One God
          </Link>
          <h1 className="mt-5 animate-rise text-5xl font-semibold leading-[1.02] tracking-tight text-ink-foreground">
            30 Sikat na
            <br />
            <em className="font-medium text-sun">Bible Verses</em>
          </h1>
          <p className="mt-4 max-w-xs animate-rise text-base leading-relaxed text-ink-foreground/90 [animation-delay:120ms]">
            Explained in Taglish — may hugot sa buhay ngayon, fun facts, at konting laro.
          </p>

          <div className="mt-36 animate-rise rounded-3xl bg-card/95 p-5 shadow-soft backdrop-blur [animation-delay:220ms]">
            <div className="flex items-center gap-4">
              <ProgressRing pct={ready ? pct : 0} />
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Progress mo
                </p>
                <p className="font-display text-2xl font-semibold text-foreground">
                  {ready ? done : 0} <span className="text-base text-muted-foreground">/ 30 araw</span>
                </p>
              </div>
            </div>
            <Link
              to="/day/$day"
              params={{ day: String(continueDay) }}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-sunrise px-5 py-3.5 text-base font-semibold text-primary-foreground shadow-glow transition-transform active:scale-[0.98]"
            >
              {done === 0 ? "Simulan ang Day 1" : done === 30 ? "Balikan ang Day 30" : `Ituloy: Day ${continueDay}`}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <RandomVerse />

      {/* Quiz CTA */}
      <section className="px-5 pt-6">
        <Link
          to="/quiz"
          className="flex items-center gap-4 rounded-3xl bg-ink-gradient p-5 text-ink-foreground shadow-soft transition-transform active:scale-[0.98]"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sun/20 text-sun">
            <Trophy className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="font-display text-lg font-semibold">Verse Quiz</p>
            <p className="text-sm text-ink-foreground/75">Kilala mo ba kung saan galing ang verse?</p>
          </div>
          <ArrowRight className="h-5 w-5 text-sun" />
        </Link>
        <Link
          to="/church"
          className="mt-3 flex items-center gap-4 rounded-3xl border bg-card p-5 transition-transform active:scale-[0.98]"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sunrise text-primary-foreground">
            <Church className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="font-display text-lg font-semibold text-foreground">JCTGbTg Church</p>
            <p className="text-sm text-muted-foreground">One God Creed, worship schedule at events</p>
          </div>
          <ArrowRight className="h-5 w-5 text-primary" />
        </Link>
      </section>

      {/* Day list */}
      <section className="pt-10">
        <div className="flex items-end justify-between px-5">
          <h2 className="text-2xl font-semibold text-foreground">Lahat ng Araw</h2>
          <button
            onClick={() => setOnlyFav((v) => !v)}
            aria-pressed={onlyFav}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
              onlyFav
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground"
            }`}
          >
            <Heart className={`h-3.5 w-3.5 ${onlyFav ? "fill-current" : ""}`} /> Favorites
          </button>
        </div>

        <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto px-5 pb-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                section === s.id
                  ? "bg-foreground text-background"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <ul className="mt-5 space-y-3 px-5">
          {list.map((v, i) => (
            <DayRow
              key={v.day}
              v={v}
              index={i}
              done={progress.done.includes(v.day)}
              fav={progress.favorites.includes(v.day)}
            />
          ))}
          {list.length === 0 && (
            <li className="rounded-3xl border border-dashed p-8 text-center text-sm text-muted-foreground">
              Wala ka pang favorite dito. I-tap ang puso sa isang verse para i-save.
            </li>
          )}
        </ul>
      </section>

      <footer className="px-6 pt-14 text-center">
        <Link to="/church" className="inline-block">
          <p className="font-display text-2xl font-semibold text-foreground">JCTGbTg Church</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">One God</p>
          <p className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Kilalanin ang simbahan <ArrowRight className="h-4 w-4" />
          </p>
        </Link>
        <p className="mt-4 text-xs text-muted-foreground">Scripture: NIV & NKJV.</p>
      </footer>
    </main>
  );
}

function DayRow({ v, index, done, fav }: { v: Verse; index: number; done: boolean; fav: boolean }) {
  return (
    <li className="animate-rise" style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}>
      <Link
        to="/day/$day"
        params={{ day: String(v.day) }}
        className="flex items-center gap-4 rounded-3xl border bg-card p-4 transition-transform active:scale-[0.98]"
      >
        <div
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-display text-lg font-semibold ${
            done ? "bg-success text-success-foreground" : "bg-accent text-accent-foreground"
          }`}
        >
          {done ? <Check className="h-5 w-5" /> : v.day}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">{v.ref}</p>
          <p className="truncate font-display text-base font-semibold text-foreground">{v.theme}</p>
          <p className="truncate text-sm text-muted-foreground">{v.text}</p>
        </div>
        {fav && <Heart className="h-4 w-4 shrink-0 fill-primary text-primary" />}
      </Link>
    </li>
  );
}

function ProgressRing({ pct }: { pct: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-16 w-16">
      <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
        <circle cx="32" cy="32" r={r} className="fill-none stroke-muted" strokeWidth="7" />
        <circle
          cx="32"
          cy="32"
          r={r}
          className="fill-none stroke-primary transition-[stroke-dashoffset] duration-700"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (pct / 100) * c}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-sm font-bold text-foreground">
        {pct}%
      </span>
    </div>
  );
}

function RandomVerse() {
  const [v, setV] = useState<Verse | null>(null);
  const [spin, setSpin] = useState(0);

  const draw = () => {
    let next: Verse;
    do {
      next = verses[Math.floor(Math.random() * verses.length)]!;
    } while (v && next.day === v.day);
    setV(next);
    setSpin((s) => s + 1);
  };

  return (
    <section className="px-5 pt-8">
      <div className="paper-grain rounded-3xl border bg-card p-6 shadow-soft">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <BookOpen className="h-4 w-4" /> Bunot ng Verse
        </p>
        {v ? (
          <div key={spin} className="animate-pop">
            <p className="mt-3 font-display text-xl leading-snug text-foreground">“{v.text.replace(/^[“"]|[”"]$/g, "")}”</p>
            <p className="mt-2 text-sm font-semibold text-muted-foreground">— {v.ref}</p>
            <Link
              to="/day/$day"
              params={{ day: String(v.day) }}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              Basahin ang paliwanag <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <p className="mt-3 font-display text-xl leading-snug text-foreground">
            Kailangan mo ba ng salita ngayon? Bumunot ka ng isang verse.
          </p>
        )}
        <button
          onClick={draw}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border-2 border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors active:bg-primary active:text-primary-foreground"
        >
          <Shuffle className="h-4 w-4" /> {v ? "Bumunot ulit" : "Bumunot"}
        </button>
      </div>
    </section>
  );
}
