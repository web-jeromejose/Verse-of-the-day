import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, Globe, HandHeart, MapPin, PlayCircle } from "lucide-react";

import { church } from "@/data/church";

export const Route = createFileRoute("/church")({
  head: () => ({
    meta: [
      { title: "JCTGBTG Church — One God" },
      {
        name: "description",
        content: "Kilalanin ang JCTGBTG Church: One God Creed, mission, vision, online worship schedule at mga paparating na events.",
      },
      { property: "og:title", content: "JCTGBTG Church — One God" },
      { property: "og:description", content: "This is a church for all. This is where you belong." },
      { property: "og:image", content: church.bishop.photo },
      { name: "twitter:image", content: church.bishop.photo },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChurchPage,
});

function ChurchPage() {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = church.events.filter((e) => e.date >= today);

  return (
    <main className="mx-auto min-h-screen max-w-md pb-14">
      <header className="sticky top-0 z-20 flex items-center gap-3 bg-background/85 px-4 py-3 backdrop-blur">
        <Link to="/" aria-label="Balik sa home" className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <p className="font-display text-lg font-semibold text-foreground">Ang Ating Simbahan</p>
      </header>

      {/* Intro */}
      <section className="px-5 pt-2">
        <div className="relative animate-rise overflow-hidden rounded-[2rem] bg-ink-gradient p-7 text-ink-foreground shadow-soft">
          <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-sun/25 blur-3xl animate-float" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.3em] text-sun">{church.tagline}</p>
          <h1 className="relative mt-3 text-4xl font-semibold leading-tight">{church.name}</h1>
          <p className="relative mt-3 text-ink-foreground/85">{church.welcome}</p>
        </div>
      </section>

      {/* Bishop */}
      <section className="mt-6 px-5">
        <div className="overflow-hidden rounded-3xl border bg-card">
          <img
            src={church.bishop.photo}
            alt={church.bishop.name}
            width={600}
            height={450}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Mensahe ng Bishop</p>
            <p className="mt-3 font-display text-lg leading-snug text-foreground">“{church.bishop.message}”</p>
            <p className="mt-3 text-sm font-semibold text-muted-foreground">— {church.bishop.name}</p>
          </div>
        </div>
      </section>

      {/* Creed */}
      <section className="mt-6 px-5">
        <div className="paper-grain rounded-3xl border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">One God Creed</p>
          <p className="mt-3 leading-relaxed text-foreground">{church.creed}</p>
          <p className="mt-4 rounded-2xl bg-accent p-4 text-sm leading-relaxed text-accent-foreground">
            <strong>Sa madaling salita:</strong> Iisa lang ang Diyos. Siya ang Ama sa paglikha, nagpakita sa laman bilang
            si Jesus para tayo'y tubusin, at Siya rin ang Banal na Espiritu na bumabago sa atin.
          </p>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="mt-6 grid gap-3 px-5">
        <InfoCard title="Our Mission" text={church.mission} />
        <InfoCard title="Our Vision" text={church.vision} />
      </section>

      {/* Schedule */}
      <section className="mt-8 px-5">
        <h2 className="text-2xl font-semibold text-foreground">Manood Online</h2>
        <ul className="mt-4 space-y-3">
          {church.schedule.map((s) => (
            <li key={s.title} className="flex gap-4 rounded-3xl border bg-card p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                <PlayCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.when}</p>
              </div>
            </li>
          ))}
        </ul>
        <ExternalButton href={church.watchUrl} label="Watch Online" />
      </section>

      {/* London satellite */}
      <section className="mt-8 px-5">
        <h2 className="text-2xl font-semibold text-foreground">JCTGBTG UK Satellite Church</h2>
        <div className="mt-4 rounded-3xl border bg-card p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">{church.london.title}</p>
          <p className="mt-2 font-display text-xl font-semibold text-foreground">{church.london.pastor}</p>
          <p className="mt-3 flex items-start gap-1.5 text-sm text-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{church.london.venue}<br />{church.london.address}</span>
          </p>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-foreground">
            <CalendarDays className="h-4 w-4 shrink-0 text-primary" /> {church.london.service}
          </p>
          <p className="mt-4 rounded-2xl bg-accent p-4 text-sm leading-relaxed text-accent-foreground">
            Kabayan sa UK? Welcome ka dito! Sama-sama tayong sumamba tuwing Linggo — ikaw ay belong dito.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a href={church.london.mapUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-secondary-foreground">
              Directions <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={church.london.facebook} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-1 rounded-full bg-sunrise px-4 py-3 text-sm font-semibold text-primary-foreground">
              Facebook <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>


      {/* Events */}
      {upcoming.length > 0 && (
        <section className="mt-8 px-5">
          <h2 className="text-2xl font-semibold text-foreground">Mga Paparating</h2>
          {upcoming.map((e) => (
            <article key={e.title} className="mt-4 overflow-hidden rounded-3xl border bg-card">
              <img src={e.image} alt={e.title} loading="lazy" className="aspect-video w-full object-cover" />
              <div className="p-5">
                <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  <CalendarDays className="h-4 w-4" /> {e.label}
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-foreground">{e.title}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {e.place}
                </p>
                <p className="mt-3 leading-relaxed text-foreground">{e.text}</p>
                <a href={e.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Join <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Links */}
      <section className="mt-8 grid grid-cols-2 gap-3 px-5">
        <LinkTile href={church.bibleStudyUrl} icon={<BookOpen className="h-5 w-5" />} label="Join a Bible Study" />
        <LinkTile href={church.prayerUrl} icon={<HandHeart className="h-5 w-5" />} label="Prayer Request" />
        <LinkTile href={church.findUrl} icon={<MapPin className="h-5 w-5" />} label="Hanapin ang Simbahan" />
        <LinkTile href={church.website} icon={<Globe className="h-5 w-5" />} label="jctgbtg.com" />
      </section>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border bg-card p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">{title}</p>
      <p className="mt-3 leading-relaxed text-foreground">{text}</p>
    </div>
  );
}

function ExternalButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-sunrise px-5 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform active:scale-[0.98]"
    >
      {label} <ArrowUpRight className="h-5 w-5" />
    </a>
  );
}

function LinkTile({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col gap-3 rounded-3xl border bg-card p-5 transition-transform active:scale-[0.98]"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">{icon}</span>
      <span className="text-sm font-semibold leading-snug text-foreground">{label}</span>
    </a>
  );
}
