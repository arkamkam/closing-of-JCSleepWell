import Link from "next/link";
import {
  EVENT,
  programItems,
  speakers,
  symposiumBlocks,
  type ProgramItem,
} from "@/lib/program";
import { getPhotoFramingByName, SpeakerPhoto } from "@/components/SpeakerPhoto";

/** Local file in `public/res/` (synced from `res/`). */
const DEFAULT_AVATAR_SRC =
  "/res/" +
  encodeURIComponent("JC Sleep Well Project_Horizontal logo (PNG).png");

type Theme = "amber" | "teal" | "violet";

type Slot = {
  id: string;
  timeStart: string;
  timeEnd: string;
  title: string;
  description: string;
  speaker: { name: string; title: string; photo?: string; speakerId?: string };
  theme: Theme;
  isBreak: boolean;
};

const themes: Theme[] = ["amber", "teal", "violet"];

function formatTime12(time: string) {
  const [h, m] = time.split(":").map(Number);
  const hour = h % 12 || 12;
  const ampm = h < 12 ? "AM" : "PM";
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

function themeForKind(kind: ProgramItem["kind"], index: number): Theme {
  if (kind === "keynote") return "teal";
  if (kind === "symposium") return "violet";
  if (kind === "break") return "amber";
  return themes[index % themes.length];
}

function findSpeaker(name?: string, speakerId?: string) {
  if (speakerId) {
    const byId = speakers.find((s) => s.id === speakerId);
    if (byId) {
      return {
        name: byId.name,
        title: byId.role,
        photo: byId.photo,
        speakerId: byId.id,
      };
    }
  }
  if (!name) return null;
  const byName = speakers.find(
    (s) => s.name === name || name.includes(s.name.split(" ").slice(-1)[0]!),
  );
  if (byName) {
    return {
      name: byName.name,
      title: byName.role,
      photo: byName.photo,
      speakerId: byName.id,
    };
  }
  return { name, title: "Speaker", photo: undefined, speakerId: undefined };
}

function buildSlots(): Slot[] {
  return programItems.map((item, index) => {
    const symposium = item.symposiumId
      ? symposiumBlocks.find((s) => s.id === item.symposiumId)
      : undefined;

    let description = "";
    let speaker: Slot["speaker"] = findSpeaker(item.speaker) ?? {
      name: "TBC",
      title: "—",
    };

    if (symposium) {
      description = symposium.talks
        .map((talk) => `• ${talk.title} (${talk.speaker})`)
        .join("\n");
      const featured = symposium.talks.find((t) => t.speakerId);
      speaker =
        findSpeaker(featured?.speaker, featured?.speakerId) ?? {
          name: "Symposium speakers",
          title: `${symposium.talks.length} presentations`,
        };
    } else if (item.kind === "break") {
      description = "Scheduled break.";
      speaker = { name: "Break", title: "—" };
    } else if (item.speaker) {
      description = `Presented by ${item.speaker}.`;
    } else {
      description = "Details to be announced.";
      speaker = { name: "TBC", title: "—" };
    }

    return {
      id: item.id,
      timeStart: formatTime12(item.timeStart),
      timeEnd: formatTime12(item.timeEnd),
      title: item.title,
      description,
      speaker,
      theme: themeForKind(item.kind, index),
      isBreak: item.kind === "break",
    };
  });
}

const slots = buildSlots();

const themeClasses: Record<
  Theme,
  { ring: string; btn: string; pointerBorder: string }
> = {
  amber: {
    ring: "border-amber-400 text-amber-600",
    btn: "bg-amber-500 hover:bg-amber-400 text-white",
    pointerBorder: "border-amber-400",
  },
  teal: {
    ring: "border-teal-400 text-teal-600",
    btn: "bg-teal-500 hover:bg-teal-400 text-white",
    pointerBorder: "border-teal-400",
  },
  violet: {
    ring: "border-violet-500 text-violet-700",
    btn: "bg-violet-600 hover:bg-violet-500 text-white",
    pointerBorder: "border-violet-500",
  },
};

function SessionAvatar({
  photo,
  speakerId,
  name,
}: {
  photo?: string;
  speakerId?: string;
  name?: string;
}) {
  const src = photo ?? DEFAULT_AVATAR_SRC;
  const isLogo = !photo;

  if (isLogo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt=""
        className="flex h-14 w-[7.25rem] shrink-0 items-center justify-center rounded-xl bg-white object-contain p-1.5 ring-1 ring-zinc-200/90 sm:h-16 sm:w-[8.5rem] sm:p-2"
      />
    );
  }

  return (
    <SpeakerPhoto
      src={src}
      alt={name ?? ""}
      size="sm"
      speakerId={speakerId}
      framing={getPhotoFramingByName(name)}
    />
  );
}

function TimeNode({
  timeStart,
  timeEnd,
  theme,
}: {
  timeStart: string;
  timeEnd: string;
  theme: Theme;
}) {
  const t = themeClasses[theme];
  return (
    <div
      className={`relative z-10 flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-2 border-dashed bg-white px-2 text-center text-xs font-semibold leading-tight sm:h-32 sm:w-32 sm:text-sm ${t.ring}`}
    >
      <span>{timeStart}</span>
      <span className="text-[10px] font-normal opacity-80 sm:text-xs">to</span>
      <span>{timeEnd}</span>
    </div>
  );
}

function Card({ slot, side }: { slot: Slot; side: "left" | "right" }) {
  const t = themeClasses[slot.theme];
  const pointerTowardLine =
    side === "right"
      ? `-left-2 top-11 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-l bg-white ${t.pointerBorder}`
      : `-right-2 top-11 h-3.5 w-3.5 translate-x-1/2 rotate-45 border-t border-r bg-white ${t.pointerBorder}`;

  const speakerRow =
    side === "right" ? (
      <div className="flex items-center gap-3">
        <SessionAvatar
          photo={slot.speaker.photo}
          speakerId={slot.speaker.speakerId}
          name={slot.speaker.name}
        />
        <div className="min-w-0 text-left">
          <p className="font-bold text-zinc-900">{slot.speaker.name}</p>
          <p className="text-sm text-zinc-500">{slot.speaker.title}</p>
        </div>
      </div>
    ) : (
      <div className="flex flex-row-reverse items-center gap-3">
        <SessionAvatar
          photo={slot.speaker.photo}
          speakerId={slot.speaker.speakerId}
          name={slot.speaker.name}
        />
        <div className="min-w-0 text-right">
          <p className="font-bold text-zinc-900">{slot.speaker.name}</p>
          <p className="text-sm text-zinc-500">{slot.speaker.title}</p>
        </div>
      </div>
    );

  const btnAlign = side === "right" ? "self-start" : "self-end";

  return (
    <article className="relative max-w-xl rounded-2xl bg-white p-5 shadow-lg shadow-zinc-200/80 ring-1 ring-zinc-100 sm:p-6">
      <span
        className={`pointer-events-none absolute border-2 ${pointerTowardLine}`}
        aria-hidden
      />
      {speakerRow}
      <h3 className="mt-4 text-xl font-bold text-zinc-900 sm:text-2xl">
        {slot.title}
      </h3>
      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-zinc-600 sm:text-base">
        {slot.description}
      </p>
      {!slot.isBreak ? (
        <Link
          href="/program"
          className={`mt-5 inline-flex rounded-lg px-4 py-2 text-sm font-semibold transition ${t.btn} ${btnAlign}`}
        >
          View program
        </Link>
      ) : null}
    </article>
  );
}

export function ScheduleTimeline() {
  return (
    <section
      id="schedule"
      className="relative scroll-mt-20 overflow-hidden bg-zinc-100 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-violet-300/40 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Schedule
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Day-of timeline
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            {EVENT.date} · {EVENT.timeRange}. Sessions alternate around the
            center line — scroll for the full day rundown.
          </p>
        </header>

        <div className="relative">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 border-l border-dashed border-zinc-300 md:block"
            aria-hidden
          />

          <ul className="space-y-14 md:space-y-20">
            {slots.map((slot, index) => {
              const cardOnRight = index % 2 === 0;
              return (
                <li key={slot.id}>
                  <div className="flex flex-col items-center gap-5 md:hidden">
                    <TimeNode
                      timeStart={slot.timeStart}
                      timeEnd={slot.timeEnd}
                      theme={slot.theme}
                    />
                    <Card slot={slot} side={cardOnRight ? "right" : "left"} />
                  </div>

                  <div className="hidden items-stretch gap-0 md:flex">
                    <div className="flex min-h-px flex-1 items-center justify-end pr-6 lg:pr-10">
                      {!cardOnRight ? <Card slot={slot} side="left" /> : null}
                    </div>
                    <div className="flex w-36 shrink-0 justify-center pt-4">
                      <TimeNode
                        timeStart={slot.timeStart}
                        timeEnd={slot.timeEnd}
                        theme={slot.theme}
                      />
                    </div>
                    <div className="flex min-h-px flex-1 items-center justify-start pl-6 lg:pl-10">
                      {cardOnRight ? <Card slot={slot} side="right" /> : null}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-14 text-center">
          <Link
            href="/program"
            className="text-sm font-semibold text-[#34657B] underline-offset-4 transition hover:text-[#2a5163] hover:underline"
          >
            View full program details & speaker profiles →
          </Link>
        </p>
      </div>
    </section>
  );
}
