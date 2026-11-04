import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Headphones,
  Lightbulb,
  ListMusic,
  Loader2,
  Mic2,
  Pause,
  Play,
  Repeat,
  SkipBack,
  SkipForward,
  Square,
  Volume2,
} from "lucide-react";

import { verses } from "@/data/verses";
import { sections, type SectionId } from "@/data/sections";
import { audioFacts, listeningTips } from "@/data/audio";
import {
  audioUrl,
  chapterUrl,
  extractVerses,
  fmtTime,
  parseRef,
  readers,
  segment,
  timingsUrl,
  verseAt,
  type ReaderId,
} from "@/lib/audio";

export const Route = createFileRoute("/audio")({
  validateSearch: (s: Record<string, unknown>): { day?: number } => {
    const d = Number(s["day"]);
    return d >= 1 && d <= 30 ? { day: d } : {};
  },
  head: () => ({
    meta: [
      { title: "Pakinggan — Audio Bible Verses" },
      {
        name: "description",
        content:
          "Pakinggan ang 30 Bible verses nang libre: verse-by-verse audio, buong chapter, loop, bilis ng pagbasa at Taglish na paliwanag.",
      },
      { property: "og:title", content: "Pakinggan — Audio Bible Verses" },
      {
        property: "og:description",
        content: "Libreng audio ng Bible verses na may Taglish na paliwanag at fun facts tungkol sa pakikinig.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AudioPage,
});

type Mode = "verse" | "chapter";
const speeds = [0.75, 1, 1.25, 1.5];

function AudioPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const day = search.day ?? 1;
  const v = verses.find((x) => x.day === day)!;
  const ref = useMemo(() => parseRef(v.ref), [v.ref]);

  const [reader, setReader] = useState<ReaderId>("souer");
  const [mode, setMode] = useState<Mode>("verse");
  const [speed, setSpeed] = useState(1);
  const [loop, setLoop] = useState(false);
  const [autoNext, setAutoNext] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [buffering, setBuffering] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [section, setSection] = useState<SectionId>("all");
  const [fact, setFact] = useState(0);

  const audio = useRef<HTMLAudioElement>(null);
  const pendingPlay = useRef(false);
  const raf = useRef<number | null>(null);

  const timingsQ = useQuery({
    queryKey: ["bsb-timings", ref?.book, ref?.chapter, reader],
    queryFn: async () => {
      const r = await fetch(timingsUrl(ref!, reader));
      if (!r.ok) throw new Error("timings");
      return ((await r.json()) as { verses: number[] }).verses;
    },
    enabled: !!ref,
    staleTime: Infinity,
  });
  const chapterQ = useQuery({
    queryKey: ["bsb-chapter", ref?.book, ref?.chapter],
    queryFn: async () => {
      const r = await fetch(chapterUrl(ref!));
      if (!r.ok) throw new Error("chapter");
      const j = await r.json();
      return extractVerses(j.chapter.content);
    },
    enabled: !!ref,
    staleTime: Infinity,
  });

  const timings = timingsQ.data;
  const seg = timings && ref ? segment(timings, ref, duration) : { start: 0, end: duration };
  const range = mode === "verse" ? seg : { start: 0, end: duration || seg.end };
  const current = timings ? verseAt(timings, time) : 0;
  const featured = (n: number) => !!ref && n >= ref.from && n <= ref.to;

  const stopRaf = () => {
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = null;
  };

  const goDay = useCallback(
    (d: number, autoplay: boolean) => {
      pendingPlay.current = autoplay;
      setTime(0);
      setDuration(0);
      navigate({ search: { day: d }, replace: true, resetScroll: false });
    },
    [navigate],
  );

  const onSegmentEnd = useCallback(() => {
    const a = audio.current;
    if (!a) return;
    if (loop) {
      a.currentTime = range.start;
      return;
    }
    if (autoNext && day < 30) {
      a.pause();
      goDay(day + 1, true);
      return;
    }
    a.pause();
    a.currentTime = range.start;
    setTime(range.start);
  }, [loop, autoNext, day, goDay, range.start]);

  // Precise tracking while playing so verse-only mode stops right at the verse end.
  useEffect(() => {
    if (!playing) return stopRaf();
    const tick = () => {
      const a = audio.current;
      if (a) {
        setTime(a.currentTime);
        if (a.currentTime >= range.end - 0.08 && range.end > 0) onSegmentEnd();
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return stopRaf;
  }, [playing, range.end, onSegmentEnd]);

  useEffect(() => {
    if (audio.current) audio.current.playbackRate = speed;
  }, [speed, playing]);

  const play = async () => {
    const a = audio.current;
    if (!a || !timings) return;
    if (a.currentTime < range.start - 0.3 || a.currentTime >= range.end - 0.1) a.currentTime = range.start;
    a.playbackRate = speed;
    try {
      await a.play();
    } catch {
      setPlaying(false);
    }
  };

  // Start playback once the new chapter audio + timings are both ready.
  useEffect(() => {
    if (pendingPlay.current && timings && duration > 0) {
      pendingPlay.current = false;
      const a = audio.current;
      if (a) a.currentTime = mode === "verse" ? segment(timings, ref!, duration).start : 0;
      play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timings, duration, day, reader]);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (playing) a.pause();
    else play();
  };

  const seekTo = (t: number) => {
    const a = audio.current;
    if (!a) return;
    a.currentTime = t;
    setTime(t);
    if (!playing) play();
  };

  const pickReader = (r: ReaderId) => {
    if (r === reader) return;
    pendingPlay.current = playing;
    setDuration(0);
    setTime(0);
    setReader(r);
  };

  const pickMode = (m: Mode) => {
    setMode(m);
    const a = audio.current;
    if (a && timings && m === "verse") {
      a.currentTime = seg.start;
      setTime(seg.start);
    }
  };

  const segLen = Math.max(range.end - range.start, 0.001);
  const pct = Math.min(100, Math.max(0, ((time - range.start) / segLen) * 100));
  const loading = timingsQ.isLoading || (buffering && playing) || (!duration && !timingsQ.isError);
  const failed = timingsQ.isError || !ref;

  const active = sections.find((s) => s.id === section)!;
  const list = verses.filter((x) => x.day >= active.from && x.day <= active.to);

  return (
    <main className="mx-auto min-h-screen max-w-md pb-16">
      {ref && (
        <audio
          ref={audio}
          src={audioUrl(ref, reader)}
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onWaiting={() => setBuffering(true)}
          onPlaying={() => setBuffering(false)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onEnded={() => {
            setPlaying(false);
            onSegmentEnd();
          }}
        />
      )}

      <header className="sticky top-0 z-20 flex items-center gap-3 bg-background/85 px-4 py-3 backdrop-blur">
        <Link
          to="/"
          aria-label="Balik sa home"
          className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Audio Bible</p>
          <h1 className="font-display text-xl font-semibold leading-tight text-foreground">Pakinggan ang Salita</h1>
        </div>
        <Headphones className="h-6 w-6 text-primary" />
      </header>

      {/* Player */}
      <section className="px-4 pt-2">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-gradient p-6 text-ink-foreground shadow-soft">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sun/20 blur-3xl" />
          <div className="relative flex items-center justify-between">
            <span className="rounded-full bg-ink-foreground/10 px-3 py-1 text-xs font-semibold">Day {v.day}</span>
            <Equalizer active={playing && !buffering} />
          </div>
          <p className="relative mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-sun">{v.theme}</p>
          <h2 className="relative mt-1 font-display text-3xl font-semibold">{v.ref}</h2>

          <div className="relative mt-4 min-h-24 font-display text-lg leading-snug text-ink-foreground/90">
            {chapterQ.data ? (
              chapterQ.data
                .filter((x) => featured(x.number))
                .map((x) => (
                  <span
                    key={x.number}
                    className={`transition-colors duration-300 ${
                      playing && current === x.number ? "text-sun" : ""
                    }`}
                  >
                    <sup className="mr-0.5 text-xs opacity-60">{x.number}</sup>
                    {x.text}{" "}
                  </span>
                ))
            ) : (
              <span className="opacity-60">{v.text}</span>
            )}
          </div>

          {/* Progress */}
          <div className="relative mt-5">
            <input
              type="range"
              aria-label="Posisyon ng audio"
              min={range.start}
              max={range.end || 1}
              step={0.1}
              value={Math.min(Math.max(time, range.start), range.end || 1)}
              onChange={(e) => seekTo(Number(e.target.value))}
              className="audio-range w-full"
              style={{ ["--pct" as string]: `${pct}%` }}
              disabled={!timings || !duration}
            />
            <div className="mt-1 flex justify-between text-xs tabular-nums text-ink-foreground/70">
              <span>{fmtTime(Math.max(0, time - range.start))}</span>
              <span>{fmtTime(segLen)}</span>
            </div>
          </div>

          {/* Transport */}
          <div className="relative mt-3 flex items-center justify-between">
            <IconBtn label="Nakaraang araw" onClick={() => day > 1 && goDay(day - 1, playing)} disabled={day <= 1}>
              <SkipBack className="h-5 w-5" />
            </IconBtn>
            <IconBtn
              label="Ulitin"
              active={loop}
              onClick={() => setLoop((l) => !l)}
            >
              <Repeat className="h-5 w-5" />
            </IconBtn>
            <button
              onClick={toggle}
              disabled={failed || !timings}
              aria-label={playing ? "I-pause" : "I-play"}
              className="grid h-20 w-20 place-items-center rounded-full bg-sunrise text-primary-foreground shadow-glow transition-transform active:scale-95 disabled:opacity-50"
            >
              {loading && !failed ? (
                <Loader2 className="h-8 w-8 animate-spin" />
              ) : playing ? (
                <Pause className="h-9 w-9 fill-current" />
              ) : (
                <Play className="ml-1 h-9 w-9 fill-current" />
              )}
            </button>
            <IconBtn label="Bilis" onClick={() => setSpeed(speeds[(speeds.indexOf(speed) + 1) % speeds.length]!)}>
              <span className="text-sm font-bold">{speed}×</span>
            </IconBtn>
            <IconBtn label="Susunod na araw" onClick={() => day < 30 && goDay(day + 1, playing)} disabled={day >= 30}>
              <SkipForward className="h-5 w-5" />
            </IconBtn>
          </div>
          {failed && (
            <p className="relative mt-3 text-center text-sm text-sun">
              Hindi ma-load ang audio ngayon. I-check ang internet mo at subukan ulit.
            </p>
          )}
        </div>
      </section>

      {/* Options */}
      <section className="space-y-4 px-5 pt-6">
        <Segmented
          label="Ano ang papakinggan?"
          icon={<Volume2 className="h-4 w-4" />}
          value={mode}
          onChange={pickMode}
          options={[
            { id: "verse", label: "Verse lang" },
            { id: "chapter", label: `Buong ${v.ref.split(":")[0]}` },
          ]}
        />
        <Segmented
          label="Sino ang magbabasa?"
          icon={<Mic2 className="h-4 w-4" />}
          value={reader}
          onChange={pickReader}
          options={readers.map((r) => ({ id: r.id, label: r.label, hint: r.hint }))}
        />
        <button
          onClick={() => setAutoNext((a) => !a)}
          aria-pressed={autoNext}
          className="flex w-full items-center gap-3 rounded-2xl border bg-card p-4 text-left"
        >
          <ListMusic className="h-5 w-5 text-primary" />
          <span className="flex-1">
            <span className="block text-sm font-semibold text-foreground">Auto-next</span>
            <span className="block text-xs text-muted-foreground">Tuloy-tuloy sa susunod na araw pagkatapos</span>
          </span>
          <span
            className={`relative h-7 w-12 rounded-full transition-colors ${autoNext ? "bg-primary" : "bg-muted"}`}
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-card shadow transition-all ${
                autoNext ? "left-6" : "left-1"
              }`}
            />
          </span>
        </button>
      </section>

      {/* Chapter read-along */}
      <section className="px-5 pt-8">
        <h2 className="flex items-center gap-2 text-xl font-semibold text-foreground">
          <BookOpen className="h-5 w-5 text-primary" /> Read-along
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          I-tap ang kahit anong verse para doon magsimula. Naka-highlight ang verse ng araw na ito.
        </p>
        <div className="mt-4 max-h-96 overflow-y-auto rounded-3xl border bg-card p-4">
          {chapterQ.isLoading && <p className="text-sm text-muted-foreground">Nilo-load ang chapter…</p>}
          {chapterQ.data?.map((x) => {
            const isNow = playing && current === x.number;
            return (
              <button
                key={x.number}
                onClick={() => {
                  if (!timings) return;
                  if (!featured(x.number)) setMode("chapter");
                  seekTo(timings[x.number - 1] ?? 0);
                }}
                className={`block w-full rounded-xl px-3 py-2 text-left text-[0.95rem] leading-relaxed transition-colors ${
                  isNow
                    ? "bg-primary text-primary-foreground"
                    : featured(x.number)
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground"
                }`}
              >
                <sup className="mr-1 font-semibold opacity-70">{x.number}</sup>
                {x.text}
              </button>
            );
          })}
        </div>
      </section>

      <Explainer key={v.day} text={`${v.theme}. ${v.explain}`} />

      {/* Fun facts */}
      <section className="px-5 pt-8">
        <button
          onClick={() => setFact((f) => (f + 1) % audioFacts.length)}
          className="paper-grain block w-full rounded-3xl border bg-card p-6 text-left shadow-soft"
        >
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Lightbulb className="h-4 w-4" /> Alam mo ba? · {fact + 1}/{audioFacts.length}
          </p>
          <div key={fact} className="animate-pop">
            <p className="mt-3 font-display text-xl font-semibold text-foreground">{audioFacts[fact]!.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{audioFacts[fact]!.body}</p>
          </div>
          <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            I-tap para sa susunod <ArrowRight className="h-4 w-4" />
          </p>
        </button>

        <div className="mt-4 rounded-3xl bg-secondary p-5">
          <p className="text-sm font-semibold text-secondary-foreground">Tips sa pakikinig</p>
          <ul className="mt-2 space-y-2 text-sm text-secondary-foreground/85">
            {listeningTips.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-primary">•</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Playlist */}
      <section className="pt-10">
        <h2 className="px-5 text-2xl font-semibold text-foreground">Playlist</h2>
        <div className="no-scrollbar mt-4 flex gap-2 overflow-x-auto px-5 pb-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                section === s.id ? "bg-foreground text-background" : "bg-secondary text-secondary-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        <ul className="mt-4 space-y-2 px-5">
          {list.map((x) => {
            const isCur = x.day === day;
            return (
              <li key={x.day}>
                <button
                  onClick={() => {
                    if (isCur) toggle();
                    else {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      goDay(x.day, true);
                    }
                  }}
                  className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${
                    isCur ? "border-primary bg-accent" : "bg-card"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                      isCur ? "bg-sunrise text-primary-foreground" : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {isCur && playing ? <Equalizer active small /> : <Play className="h-4 w-4 fill-current" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-primary">
                      Day {x.day} · {x.ref}
                    </span>
                    <span className="block truncate font-display font-semibold text-foreground">{x.theme}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="px-5 pt-8">
        <Link
          to="/day/$day"
          params={{ day: String(v.day) }}
          className="flex items-center justify-between rounded-3xl border bg-card p-5"
        >
          <span>
            <span className="block text-sm text-muted-foreground">Gusto mo pang lumalim?</span>
            <span className="block font-display text-lg font-semibold text-foreground">
              Basahin ang Day {v.day} reflection
            </span>
          </span>
          <ArrowRight className="h-5 w-5 text-primary" />
        </Link>
      </section>

      <footer className="px-6 pt-10 text-center text-xs leading-relaxed text-muted-foreground">
        Audio at read-along text: Berean Standard Bible (BSB), public domain, mula sa{" "}
        <a href="https://bible.helloao.org" target="_blank" rel="noreferrer" className="underline">
          Free Use Bible API
        </a>
        . Kaya medyo iba ang wording sa NIV/NKJV na nasa daily readings.
      </footer>
    </main>
  );
}

function Explainer({ text }: { text: string }) {
  const [supported, setSupported] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    setSupported("speechSynthesis" in window);
    return () => {
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    };
  }, []);

  if (!supported) return null;

  const speak = () => {
    const s = window.speechSynthesis;
    if (speaking) {
      s.cancel();
      setSpeaking(false);
      return;
    }
    s.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const voice =
      s.getVoices().find((x) => /^fil|^tl/i.test(x.lang)) ?? s.getVoices().find((x) => /^en/i.test(x.lang));
    if (voice) u.voice = voice;
    u.lang = voice?.lang ?? "fil-PH";
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    s.speak(u);
  };

  return (
    <section className="px-5 pt-8">
      <div className="flex items-center gap-4 rounded-3xl border-2 border-dashed border-primary/40 bg-card p-5">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
          <Volume2 className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <p className="font-display text-base font-semibold text-foreground">Pakinggan ang Taglish na paliwanag</p>
          <p className="text-xs text-muted-foreground">Gamit ang boses ng phone mo — iba-iba ang tunog kada device.</p>
        </div>
        <button
          onClick={speak}
          aria-label={speaking ? "Itigil ang paliwanag" : "Pakinggan ang paliwanag"}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"
        >
          {speaking ? <Square className="h-4 w-4 fill-current" /> : <Play className="ml-0.5 h-5 w-5 fill-current" />}
        </button>
      </div>
    </section>
  );
}

function IconBtn({
  children,
  label,
  onClick,
  disabled,
  active,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-pressed={active}
      className={`grid h-12 w-12 place-items-center rounded-full transition-colors disabled:opacity-30 ${
        active ? "bg-sun text-ink" : "bg-ink-foreground/10"
      }`}
    >
      {children}
    </button>
  );
}

function Segmented<T extends string>({
  label,
  icon,
  value,
  onChange,
  options,
}: {
  label: string;
  icon: React.ReactNode;
  value: T;
  onChange: (v: T) => void;
  options: { id: T; label: string; hint?: string }[];
}) {
  return (
    <div>
      <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {icon} {label}
      </p>
      <div className="flex gap-2 rounded-2xl bg-secondary p-1.5">
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => onChange(o.id)}
            aria-pressed={value === o.id}
            className={`flex-1 rounded-xl px-2 py-2.5 text-sm font-semibold transition-all ${
              value === o.id ? "bg-card text-foreground shadow-soft" : "text-secondary-foreground/70"
            }`}
          >
            {o.label}
            {o.hint && <span className="block text-[0.65rem] font-normal opacity-70">{o.hint}</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

function Equalizer({ active, small }: { active: boolean; small?: boolean }) {
  return (
    <span className={`flex items-end gap-0.5 ${small ? "h-4" : "h-6"}`} aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`w-1 rounded-full bg-sun ${active ? "animate-eq" : ""}`}
          style={{ height: active ? undefined : "30%", animationDelay: `${i * 140}ms` }}
        />
      ))}
    </span>
  );
}
