import type { Metadata } from "next";
import Link from "next/link";
import { IconMapPin } from "@/components/icons";
import { MapEmbed } from "@/components/MapEmbed";

/** Google Maps embed for Cheng Yu Tung Building — interaction disabled via wrapper. */
const CHEUNG_YU_TUNG_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.4475904249744!2d114.20795527603846!3d22.412173238829755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040620c2f0273b%3A0x908bdf177aa469b3!2z6YSt6KOV5b2k5qiT!5e0!3m2!1szh-TW!2sus!4v1778646175272!5m2!1szh-TW!2sus";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Direction and Map · JC Sleep Well Symposium 2026",
  description:
    "Directions to Henry Cheng International Conference Centre, Cheng Yu Tung Building, The Chinese University of Hong Kong.",
};

function DirectionList({ items }: { items: string[] }) {
  return (
    <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

export default function LocationPage() {
  return (
    <main className="flex-1 pt-8 sm:pt-10">
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
          Direction and Map
        </p>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-zinc-900">
          Getting to HCICC
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600">
          Welcome to CUHK! Serving as a prime location for hosting international
          academic conferences, the Henry Cheng International Conference Centre
          (HCICC) at Cheng Yu Tung Building is well connected to public transport
          network. Getting here is easier than you can imagine.
        </p>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-lg shadow-zinc-200/80 ring-1 ring-zinc-100 sm:p-8">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <IconMapPin className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-bold text-zinc-900">
                Henry Cheng International Conference Centre
              </h2>
              <p className="mt-1 text-zinc-600">
                1-2/F Cheng Yu Tung Building
                <br />
                The Chinese University of Hong Kong
                <br />
                Shatin, New Territories, Hong Kong
              </p>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-xl bg-zinc-200 ring-1 ring-zinc-200">
            <div className="pointer-events-none relative aspect-4/3 w-full min-h-[260px] max-h-[min(70vh,540px)] sm:min-h-[300px]">
              <MapEmbed
                title="Cheng Yu Tung Building — Google Maps"
                src={CHEUNG_YU_TUNG_MAP_EMBED}
              />
            </div>
          </div>
        </div>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-xl font-bold text-zinc-900">
              From Downtown to HCICC
            </h2>

            <h3 className="mt-6 text-base font-semibold text-zinc-800">
              By Mass Transit Railway (MTR)
            </h3>
            <DirectionList
              items={[
                "Interchange East Rail Line at Kowloon Tong Station",
                "Take any trains (East Rail Line) heading to Lo Wu / Lok Ma Chau Station",
                "Get off at University Station",
                "Leave the station through Exit B, turn right and go straight ahead for a 3 minutes' walk to Cheng Yu Tung Building",
              ]}
            />

            <h3 className="mt-6 text-base font-semibold text-zinc-800">
              By Taxi
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Take a red or green taxi and get off directly at Cheng Yu Tung
              Building, CUHK.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900">
              From Hong Kong International Airport to HCICC
            </h2>
            <h3 className="mt-6 text-base font-semibold text-zinc-800">
              By Bus and Mass Transit Railway (MTR)
            </h3>
            <DirectionList
              items={[
                "Take airport bus route number A41 from the airport to the Shatin Central Bus Terminal (Shatin New Town Plaza)",
                "Walk to MTR Shatin Station and take the East Rail Line (any train heading to Lo Wu / Lok Ma Chau Station)",
                "Get off at University Station",
                "Leave the station through Exit B, turn right and go straight ahead for a 3 minutes' walk to Cheng Yu Tung Building",
              ]}
            />
          </div>
        </section>

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
