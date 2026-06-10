import Link from "next/link";
import { EVENT } from "@/lib/program";

const PHONE = "+852 39710550";
const EMAIL = "jcsleepwell@cuhk.edu.hk";

export const metadata = {
  title: "Contact Us | JC Sleep Well Symposium 2026",
  description: "Get in touch about the JC Sleep Well Project finale conference.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="border-b border-zinc-200 bg-[#34657B] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-4 text-white/90">
            Questions about registration, the program, or venue access? Reach out
            to the organising team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-zinc-900">Get in touch</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-zinc-700">Phone</dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${PHONE.replace(/\s/g, "")}`}
                    className="text-lg font-medium text-[#34657B] transition hover:text-[#2a5163]"
                  >
                    {PHONE}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-700">Email</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-lg font-medium text-[#34657B] transition hover:text-[#2a5163]"
                  >
                    {EMAIL}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-zinc-900">Event</h2>
            <p className="mt-2 text-sm text-zinc-700">{EVENT.themeEn}</p>
            <p className="mt-1 text-sm text-zinc-500">{EVENT.themeZh}</p>
            <p className="mt-4 text-sm text-zinc-700">
              {EVENT.date} · {EVENT.timeRange}
            </p>
            <p className="mt-1 text-sm text-zinc-700">{EVENT.venue}</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-bold text-zinc-900">
              Direction and Map
            </h2>
            <p className="mt-3 text-sm text-zinc-600">
              The symposium will be held at HCICC, Cheng Yu Tung Building, CUHK.
              See the Direction and Map page for venue details and travel
              directions.
            </p>
            <Link
              href="/location"
              prefetch={false}
              className="mt-4 inline-flex text-sm font-semibold text-[#34657B] transition hover:text-[#2a5163]"
            >
              View directions and map →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
