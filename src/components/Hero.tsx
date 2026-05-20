import Link from "next/link";
import { REGISTER_URL } from "@/lib/register";
import { Countdown } from "./Countdown";

const BRAND = "#34657B";

export function Hero() {
  return (
    <section
      className="relative min-h-svh overflow-hidden text-white"
      style={{ backgroundColor: BRAND }}
    >
      <div className="relative flex min-h-svh flex-col pb-8 pt-6 sm:pt-8">
        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-amber-200/95 sm:text-base">
            September 14, 2026 · 9:30 AM – 6:00 PM
          </p>
          <h1 className="max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Jockey Club Sleep Well Project
            <span className="block">Finale cum International Conference 2026</span>
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-white/85 sm:text-lg">
            賽馬會樂眠無憂計劃成果分享暨國際研討會2026
          </p>
          <p className="mt-3 max-w-xl text-pretty text-sm text-white/75 sm:text-base">
            A full-day programme at CUHK — keynotes, symposium sessions, and
            panel discussion on sleep health across the lifespan.
          </p>

          <Link
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-amber-400 px-10 py-3.5 text-base font-bold text-zinc-950 shadow-lg shadow-black/20 transition hover:bg-amber-300"
          >
            Register
          </Link>
        </div>

        <div className="mt-auto px-4 pt-10">
          <Countdown />
        </div>
      </div>
    </section>
  );
}
