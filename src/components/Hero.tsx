import Link from "next/link";
import { EVENT } from "@/lib/program";
import { REGISTER_URL } from "@/lib/register";

const HERO_BG = "/res/JC_closingv2.webp";

export function Hero() {
  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-[#eef2f7] text-[#2a5163] max-md:h-[calc(100svh-7.25rem)] md:min-h-[calc(100dvh-5rem)] lg:min-h-[calc(100dvh-4.75rem)]">
      {/* Mobile: scale to full hero height (proportional) — illustration behind text, anchored to bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transform-[translate3d(0,0,0)] bg-bottom bg-no-repeat backface-hidden md:hidden"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "auto 100%",
          backgroundPosition: "72% bottom",
        }}
      />
      {/* Desktop: full-bleed cover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden transform-[translate3d(0,0,0)] bg-cover bg-position-[center_45%] bg-no-repeat backface-hidden md:block lg:bg-center"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />

      {/* Text overlaid on the illustration (mobile + desktop) */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 max-md:absolute max-md:inset-0 max-md:pb-[28vh] sm:px-6 md:py-10">
        <div className="max-w-5xl text-center [text-shadow:0_1px_8px_rgb(255_255_255/0.95),0_0_20px_rgb(255_255_255/0.85)] md:-translate-y-8 lg:-translate-y-10">
          <p className="mb-3 text-sm font-bold uppercase leading-snug tracking-[0.12em] text-[#34657B] sm:text-base sm:tracking-[0.2em] md:hidden">
            <span className="block">{EVENT.date}</span>
            <span className="mt-0.5 block">· {EVENT.timeRange}</span>
          </p>
          <p className="mb-3 hidden text-sm font-bold uppercase leading-snug tracking-[0.12em] text-[#34657B] sm:text-base sm:tracking-[0.2em] md:block">
            {EVENT.date} · {EVENT.timeRange}
          </p>
          <h1 className="text-[clamp(1.15rem,5vw,2.75rem)] font-extrabold leading-tight tracking-tight">
            <span className="block md:whitespace-nowrap">
              Jockey Club Sleep Well Project
            </span>
            <span className="mt-1 block md:whitespace-nowrap">
              Finale cum International Conference 2026
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[clamp(0.9rem,3.8vw,1.125rem)] font-semibold leading-snug text-[#2a5163] sm:mt-4 sm:text-lg">
            賽馬會樂眠無憂計劃成果分享暨國際研討會2026
          </p>

          <Link
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3.5 text-base font-bold text-zinc-950 shadow-lg shadow-black/20 transition hover:bg-amber-300 sm:mt-8 sm:px-10 sm:py-3.5 md:mt-10"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}
