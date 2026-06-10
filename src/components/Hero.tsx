import Image from "next/image";
import Link from "next/link";
import { REGISTER_URL } from "@/lib/register";

const HERO_BG = "/res/JC_closingv2.png";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100dvh-7.25rem)] overflow-hidden bg-[#eef2f7] text-[#2a5163] md:min-h-[calc(100dvh-5rem)] md:bg-transparent lg:min-h-[calc(100dvh-4.75rem)]">
      <Image
        src={HERO_BG}
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-contain object-center md:object-cover md:object-[50%_45%] lg:object-center"
      />

      <div className="relative flex min-h-[inherit] flex-col pb-6 pt-4 sm:pb-8 sm:pt-5 lg:pt-4">
        <div className="flex flex-1 flex-col items-center justify-start px-4 pt-5 text-center sm:pt-6 md:justify-start md:pt-8 lg:pt-10 xl:pt-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#34657B] sm:text-base [text-shadow:0_1px_8px_rgba(255,255,255,0.9)]">
            September 14, 2026 · 9:30 AM – 6:00 PM
          </p>
          <h1 className="max-w-4xl text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:0_1px_10px_rgba(255,255,255,0.85)]">
            Jockey Club Sleep Well Project
            <span className="block">Finale cum International Conference 2026</span>
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-base text-[#2a5163]/90 sm:text-lg [text-shadow:0_1px_8px_rgba(255,255,255,0.9)]">
            賽馬會樂眠無憂計劃成果分享暨國際研討會2026
          </p>
          <p className="mt-3 max-w-xl text-pretty text-sm text-[#34657B]/85 sm:text-base [text-shadow:0_1px_8px_rgba(255,255,255,0.9)]">
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
      </div>
    </section>
  );
}
