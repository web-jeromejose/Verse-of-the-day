import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  Heart,
  Lightbulb,
  PenLine,
  Share2,
  Sparkles,
  Target,
} from "lucide-react";
import { toast } from "sonner";

import { getVerse } from "@/data/verses";
import { useProgress } from "@/lib/progress";

export const Route = createFileRoute("/day/$day")({
  loader: ({ params }) => {
    const v = getVerse(Number(params.day));
    if (!v) throw notFound();
    return v;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Hindi mahanap" }, { name: "robots", content: "noindex" }] };
    const title = `Day ${loaderData.day}: ${loaderData.ref} — ${loaderData.theme}`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.why },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.text },
      ],
    };
  },
  component: DayPage,
});

const tabs = [
  { id: "why", label: "Bakit Sikat?" },
  { id: "explain", label: "Paliwanag" },
  { id: "today", label: "Sa Buhay Ngayon" },
] as const;

function DayPage() {
  const v = Route.useLoaderData();
  const navigate = useNavigate();
  const { progress, ready, markDone, toggleFavorite, toggleChallenge, saveNote } = useProgress();
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("why");
  const [factOpen, setFactOpen] = useState(false);
  const [note, setNote] = useState("");
  const [celebrate, setCelebrate] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const isDone = progress.done.includes(v.day);
  const isFav = progress.favorites.includes(v.day);
  const challengeDone = progress.challenges.includes(v.day);

  useEffect(() => {
    setTab("why");
    setFactOpen(false);
    setCelebrate(false);
    window.scrollTo({ top: 0 });
  }, [v.day]);

  useEffect(() => {
    if (ready) setNote(progress.notes[v.day] ?? "");
    // only load the saved note when the day changes or storage first loads
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, v.day]);

  const plainText = `“${v.text.replace(/^[“"]|[”"]$/g, "")}” — ${v.ref} (${v.version})`;

  const copy = async () => {
    await navigator.clipboard.writeText(plainText);
    toast.success("Na-copy ang verse!");
  };

  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: v.ref, text: plainText, url: window.location.href });
      } catch {
        /* user cancelled */
      }
    } else {
      copy();
    }
  };

  const finish = () => {
    markDone(v.day);
    setCelebrate(true);
    toast.success(`Amen! Tapos na ang Day ${v.day} 🙏`);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    if (!touch.current || !t) return;
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < 80 || Math.abs(dy) > 60) return;
    const target = dx < 0 ? v.day + 1 : v.day - 1;
    if (target >= 1 && target <= 30) navigate({ to: "/day/$day", params: { day: String(target) } });
  };

  return (
    <main className="mx-auto min-h-screen max-w-md pb-12">
      {/* Top bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between bg-background/85 px-4 py-3 backdrop-blur">
        <Link to="/" aria-label="Balik sa listahan" className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="flex-1 px-4">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Day {v.day} ng 30
          </p>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-sunrise transition-all" style={{ width: `${(v.day / 30) * 100}%` }} />
          </div>
        </div>
        <button
          onClick={() => {
            toggleFavorite(v.day);
            if (!isFav) toast("Na-save sa Favorites ❤️");
          }}
          aria-label={isFav ? "Alisin sa favorites" : "I-save sa favorites"}
          aria-pressed={isFav}
          className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary"
        >
          <Heart className={`h-5 w-5 transition-transform ${isFav ? "scale-110 fill-current" : ""}`} />
        </button>
      </header>

      <div
        key={v.day}
        onTouchStart={(e) => {
          const t = e.touches[0];
          if (t) touch.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={onTouchEnd}
        className="px-5"
      >
        {/* Verse card */}
        <section className="relative mt-2 animate-rise overflow-hidden rounded-[2rem] bg-ink-gradient p-7 text-ink-foreground shadow-soft">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sun/25 blur-3xl animate-float" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-sun">{v.theme}</p>
          <blockquote className="relative mt-4 font-display text-[1.65rem] font-medium leading-snug">
            {v.text}
          </blockquote>
          <p className="relative mt-5 text-sm font-semibold text-ink-foreground/80">
            {v.ref} <span className="font-normal opacity-70">{v.version}</span>
          </p>
          <div className="relative mt-6 flex gap-2">
            <button onClick={copy} className="flex items-center gap-1.5 rounded-full bg-ink-foreground/10 px-4 py-2 text-sm font-semibold">
              <Copy className="h-4 w-4" /> Copy
            </button>
            <button onClick={share} className="flex items-center gap-1.5 rounded-full bg-ink-foreground/10 px-4 py-2 text-sm font-semibold">
              <Share2 className="h-4 w-4" /> Share
            </button>
          </div>
        </section>

        {/* Tabs */}
        <section className="mt-6">
          <div role="tablist" className="grid grid-cols-3 gap-1 rounded-full bg-secondary p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-2 py-2.5 text-xs font-semibold transition-all ${
                  tab === t.id ? "bg-card text-foreground shadow-soft" : "text-secondary-foreground/70"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div key={tab} className="mt-4 animate-rise rounded-3xl border bg-card p-6">
            <p className="text-[1.05rem] leading-relaxed text-card-foreground">{v[tab]}</p>
            {tab !== "today" && (
              <button
                onClick={() => setTab(tab === "why" ? "explain" : "today")}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
              >
                Next: {tab === "why" ? "Paliwanag" : "Sa Buhay Ngayon"} <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </section>

        {/* Fun fact */}
        <section className="mt-6">
          <button
            onClick={() => setFactOpen((o) => !o)}
            aria-expanded={factOpen}
            className="w-full rounded-3xl bg-accent p-6 text-left text-accent-foreground transition-transform active:scale-[0.99]"
          >
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
              <Lightbulb className="h-4 w-4" /> Alam mo ba?
            </p>
            {factOpen ? (
              <p className="mt-3 animate-pop leading-relaxed">{v.fact}</p>
            ) : (
              <p className="mt-3 font-display text-lg font-semibold">
                I-tap para sa isang interesting fact ✨
              </p>
            )}
          </button>
        </section>

        {/* Reflection */}
        <section className="mt-6 rounded-3xl border bg-card p-6">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <PenLine className="h-4 w-4" /> Pagnilayan
          </p>
          <p className="mt-3 font-display text-lg font-semibold leading-snug text-foreground">{v.question}</p>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onBlur={() => saveNote(v.day, note)}
            rows={4}
            placeholder="Isulat dito ang sagot mo… (sa device mo lang ito naka-save)"
            className="mt-4 w-full resize-none rounded-2xl border bg-background p-4 text-base text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30"
          />
          <button
            onClick={() => {
              saveNote(v.day, note);
              toast.success("Na-save ang reflection mo");
            }}
            className="mt-2 text-sm font-semibold text-primary"
          >
            I-save
          </button>
        </section>

        {/* Challenge */}
        <section className="mt-6">
          <button
            onClick={() => {
              toggleChallenge(v.day);
              if (!challengeDone) toast("Laban! Kaya mo 'yan 💪");
            }}
            aria-pressed={challengeDone}
            className={`flex w-full items-start gap-4 rounded-3xl border-2 p-5 text-left transition-colors ${
              challengeDone ? "border-success bg-success/10" : "border-dashed border-primary/50 bg-card"
            }`}
          >
            <div
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                challengeDone ? "bg-success text-success-foreground" : "bg-secondary text-primary"
              }`}
            >
              {challengeDone ? <Check className="h-5 w-5 animate-pop" /> : <Target className="h-5 w-5" />}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Challenge ngayong araw
              </p>
              <p className="mt-1 font-semibold leading-snug text-foreground">{v.challenge}</p>
              <p className="mt-2 text-xs font-semibold text-primary">
                {challengeDone ? "Tapos na! ✔" : "I-tap kapag nagawa mo"}
              </p>
            </div>
          </button>
        </section>

        {/* Finish */}
        <section className="mt-8 text-center">
          {isDone || celebrate ? (
            <div className="animate-pop rounded-3xl bg-success/10 p-6">
              <Sparkles className="mx-auto h-8 w-8 text-success" />
              <p className="mt-2 font-display text-xl font-semibold text-foreground">Amen! Tapos na ang Day {v.day}</p>
              {v.day < 30 ? (
                <Link
                  to="/day/$day"
                  params={{ day: String(v.day + 1) }}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-sunrise px-6 py-3 font-semibold text-primary-foreground shadow-glow"
                >
                  Day {v.day + 1} na! <ArrowRight className="h-5 w-5" />
                </Link>
              ) : (
                <Link
                  to="/quiz"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-sunrise px-6 py-3 font-semibold text-primary-foreground shadow-glow"
                >
                  Subukan ang Quiz <ArrowRight className="h-5 w-5" />
                </Link>
              )}
            </div>
          ) : (
            <button
              onClick={finish}
              className="w-full rounded-full bg-sunrise px-6 py-4 text-lg font-semibold text-primary-foreground shadow-glow transition-transform active:scale-[0.98]"
            >
              Amen, tapos na ako! 🙏
            </button>
          )}
        </section>

        {/* Prev / next */}
        <nav className="mt-8 flex items-center justify-between text-sm font-semibold">
          {v.day > 1 ? (
            <Link to="/day/$day" params={{ day: String(v.day - 1) }} className="flex items-center gap-1 text-muted-foreground">
              <ArrowLeft className="h-4 w-4" /> Day {v.day - 1}
            </Link>
          ) : (
            <span />
          )}
          <span className="text-xs text-muted-foreground/70">Swipe ← →</span>
          {v.day < 30 ? (
            <Link to="/day/$day" params={{ day: String(v.day + 1) }} className="flex items-center gap-1 text-muted-foreground">
              Day {v.day + 1} <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </main>
  );
}
