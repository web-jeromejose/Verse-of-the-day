import { useEffect, useState } from "react";
import { BellRing, Video } from "lucide-react";

import { church } from "@/data/church";

function isUkThursday(now = new Date()) {
  const day = new Intl.DateTimeFormat("en-GB", { weekday: "long", timeZone: "Europe/London" }).format(now);
  return day === "Thursday";
}

export function ThursdayReminder() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(isUkThursday()), []);
  if (!show) return null;
  const s = church.ukBibleStudy;

  return (
    <section className="px-5 pt-6">
      <div className="animate-rise rounded-3xl border bg-accent p-5 text-accent-foreground shadow-soft">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <BellRing className="h-4 w-4" /> Reminder · Huwebes ngayon!
        </p>
        <p className="mt-2 font-display text-xl font-semibold text-foreground">Bible Study mamayang {s.time}</p>
        <p className="mt-1 text-sm leading-relaxed">
          Huwag kalimutan, kapatid! Sama-sama tayong mag-aral ng Salita ng Diyos via Zoom.
        </p>
        <a
          href={s.zoomUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-sunrise px-5 py-3.5 font-semibold text-primary-foreground shadow-glow transition-transform active:scale-[0.98]"
        >
          <Video className="h-5 w-5" /> Join sa Zoom
        </a>
      </div>
    </section>
  );
}
