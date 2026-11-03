import { useCallback, useEffect, useState } from "react";

const KEY = "verses30:progress:v1";
const EVENT = "verses30:progress-change";

export type Progress = {
  done: number[];
  favorites: number[];
  notes: Record<number, string>;
  challenges: number[];
};

const empty: Progress = { done: [], favorites: [], notes: {}, challenges: [] };

function read(): Progress {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

function write(p: Progress) {
  window.localStorage.setItem(KEY, JSON.stringify(p));
  window.dispatchEvent(new Event(EVENT));
}

const toggleIn = (arr: number[], day: number) =>
  arr.includes(day) ? arr.filter((d) => d !== day) : [...arr, day];

/** Reading progress, favorites and journal notes, kept on this device. */
export function useProgress() {
  const [progress, setProgress] = useState<Progress>(empty);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProgress(read());
    setReady(true);
    const sync = () => setProgress(read());
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const update = useCallback((fn: (p: Progress) => Progress) => write(fn(read())), []);

  return {
    progress,
    ready,
    markDone: (day: number) =>
      update((p) => (p.done.includes(day) ? p : { ...p, done: [...p.done, day] })),
    toggleDone: (day: number) => update((p) => ({ ...p, done: toggleIn(p.done, day) })),
    toggleFavorite: (day: number) => update((p) => ({ ...p, favorites: toggleIn(p.favorites, day) })),
    toggleChallenge: (day: number) =>
      update((p) => ({ ...p, challenges: toggleIn(p.challenges, day) })),
    saveNote: (day: number, text: string) =>
      update((p) => ({ ...p, notes: { ...p.notes, [day]: text } })),
  };
}

/** First day not yet finished, or 30 when everything is done. */
export function nextDay(done: number[]) {
  for (let d = 1; d <= 30; d++) if (!done.includes(d)) return d;
  return 30;
}
