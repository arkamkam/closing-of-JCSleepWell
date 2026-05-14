"use client";

import { useEffect, useState } from "react";

const EVENT_START = new Date("2026-09-14T09:30:00");
const COUNTDOWN_BAR = "#2a5568";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getRemaining(target: Date) {
  const now = Date.now();
  const end = target.getTime();
  const diff = Math.max(0, end - now);
  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return { days, hours, minutes, seconds: secs };
}

type Remaining = ReturnType<typeof getRemaining>;

export function Countdown() {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    setRemaining(getRemaining(EVENT_START));
    const id = window.setInterval(() => {
      setRemaining(getRemaining(EVENT_START));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const units: { value: string; label: string }[] = remaining
    ? [
        { value: String(remaining.days), label: "Days" },
        { value: String(remaining.hours), label: "Hours" },
        { value: String(remaining.minutes), label: "Minutes" },
        { value: pad(remaining.seconds), label: "Seconds" },
      ]
    : [
        { value: "—", label: "Days" },
        { value: "—", label: "Hours" },
        { value: "—", label: "Minutes" },
        { value: "—", label: "Seconds" },
      ];

  return (
    <div
      className="mx-auto flex w-[min(100%,56rem)] items-stretch justify-center overflow-hidden rounded-2xl px-2 py-4 shadow-xl shadow-black/25 ring-1 ring-white/15 sm:px-6 sm:py-6"
      style={{ backgroundColor: COUNTDOWN_BAR }}
      aria-busy={remaining === null}
    >
      {units.map((u, i) => (
        <div key={u.label} className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center px-1 sm:px-4">
            <span className="min-w-[2.5ch] text-center text-2xl font-bold tabular-nums text-white sm:min-w-[3ch] sm:text-4xl md:text-5xl">
              {u.value}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/85 sm:text-xs">
              {u.label}
            </span>
          </div>
          {i < units.length - 1 ? (
            <span
              className="select-none text-xl font-light text-white/50 sm:text-3xl"
              aria-hidden
            >
              :
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
