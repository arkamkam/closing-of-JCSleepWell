import Link from "next/link";
import { ProgramViewToggle } from "@/components/ProgramViewToggle";
import { SpeakerBios } from "@/components/SpeakerBios";
import { EVENT } from "@/lib/program";
import { REGISTER_URL } from "@/lib/register";

export const metadata = {
  title: "Program Details | JC Sleep Well Symposium 2026",
  description: EVENT.themeEn,
};

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="border-b border-zinc-200 bg-[#34657B] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-amber-100">
            {EVENT.date} · {EVENT.timeRange}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Program Details
          </h1>
          <p className="mt-4 text-lg font-medium text-white/95">{EVENT.themeEn}</p>
          <p className="mt-2 text-base text-white/85">{EVENT.themeZh}</p>
          <p className="mt-4 text-sm text-white/80">
            Venue: {EVENT.venue} ({EVENT.venueZh})
          </p>
          <Link
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3 text-sm font-bold text-[#34657B] transition hover:bg-zinc-100"
          >
            Register
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-2xl font-bold text-zinc-900">Day Rundown</h2>
        <p className="mb-8 text-sm text-zinc-600">
          Full schedule from opening ceremony through panel discussion. Switch
          between vertical and horizontal views below.
        </p>
        <ProgramViewToggle />
      </section>

      <section className="border-t border-zinc-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-2 text-2xl font-bold text-zinc-900">Speaker Profiles</h2>
          <p className="mb-8 text-sm text-zinc-600">
            Biographies for confirmed symposium speakers. Additional speaker
            profiles will be added as they are confirmed.
          </p>
          <SpeakerBios />
        </div>
      </section>
    </div>
  );
}
