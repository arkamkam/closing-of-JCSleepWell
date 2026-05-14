import type { Metadata } from "next";
import Link from "next/link";
import { IconMapPin } from "@/components/icons";

/** Google Maps embed for 鄭裕彤樓 — interaction disabled via `pointer-events-none` wrapper. */
const CHEUNG_YU_TUNG_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.4475904249744!2d114.20795527603846!3d22.412173238829755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040620c2f0273b%3A0x908bdf177aa469b3!2z6YSt6KOV5b2k5qiT!5e0!3m2!1szh-TW!2sus!4v1778646175272!5m2!1szh-TW!2sus";

export const metadata: Metadata = {
  title: "Location · Project Closing Symposium",
  description: "Venue and travel details — 鄭裕彤樓, The Chinese University of Hong Kong.",
};

export default function LocationPage() {
  return (
    <main className="flex-1 pt-8 sm:pt-10">
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
          Location
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-zinc-900">
          Where we meet
        </h1>
        <p className="mt-4 text-lg text-zinc-600">
          September 14, 2026 · 9:30 AM – 6:00 PM. Venue:{" "}
          <span className="font-medium text-zinc-800">鄭裕彤樓</span>（香港中文大學 ·
          沙田）。
        </p>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-lg shadow-zinc-200/80 ring-1 ring-zinc-100 sm:p-8">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <IconMapPin className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-bold text-zinc-900">鄭裕彤樓</h2>
              <p className="mt-1 text-zinc-600">
                Cheung Yu Tung Building
                <br />
                The Chinese University of Hong Kong, Shatin, N.T., Hong Kong
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl bg-zinc-200 ring-1 ring-zinc-200">
            {/* Blocks pan, zoom, and clicks on the embedded map */}
            <div className="pointer-events-none relative aspect-4/3 w-full min-h-[260px] max-h-[min(70vh,540px)] sm:min-h-[300px]">
              <iframe
                title="鄭裕彤樓 — Google Maps"
                src={CHEUNG_YU_TUNG_MAP_EMBED}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/"
            className="font-semibold text-violet-700 underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
