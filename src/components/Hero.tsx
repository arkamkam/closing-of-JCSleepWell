import Link from "next/link";
import { REGISTER_URL } from "@/lib/register";

const HERO_BG = "/res/JC_closingv2.png";

export function Hero() {
  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-white text-[#2a5163] max-md:h-[calc(100dvh-7.25rem)] max-md:min-h-0 md:min-h-[calc(100dvh-5rem)] md:bg-[#eef2f7] lg:min-h-[calc(100dvh-4.75rem)]">
      {/* Mobile: full-screen hero; complete illustration at full width */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transform-[translate3d(0,0,0)] bg-bottom bg-no-repeat backface-hidden md:hidden"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "100% auto",
        }}
      />
      {/* Desktop: full-bleed cover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden transform-[translate3d(0,0,0)] bg-cover bg-position-[center_45%] bg-no-repeat backface-hidden md:block lg:bg-center"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-start px-4 pb-6 pt-20 max-md:absolute max-md:inset-0 md:relative md:justify-center md:py-6">
        <div className="max-w-5xl text-center [text-shadow:0_1px_8px_rgb(255_255_255/0.95),0_0_20px_rgb(255_255_255/0.85)]">
          <p className="mb-3 text-sm font-bold uppercase leading-snug tracking-[0.12em] text-[#34657B] sm:text-base sm:tracking-[0.2em]">
            September 14, 2026 · 9:30 AM – 6:00 PM
          </p>
          <h1 className="text-[clamp(1.25rem,5.5vw,2.75rem)] font-extrabold leading-tight tracking-tight">
            <span className="block md:whitespace-nowrap">
              Jockey Club Sleep Well Project
            </span>
            <span className="mt-1 block md:whitespace-nowrap">
              Finale cum International Conference 2026
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base font-semibold leading-snug text-[#2a5163] sm:mt-4 sm:text-lg">
            賽馬會樂眠無憂計劃成果分享暨國際研討會2026
          </p>

          <Link
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3.5 text-base font-bold text-zinc-950 shadow-lg shadow-black/20 transition hover:bg-amber-300 sm:mt-10 sm:px-10 sm:py-3.5"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
}
