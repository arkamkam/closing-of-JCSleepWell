import Link from "next/link";

/** Local file in `public/res/` (synced from `res/`). */
const SESSION_AVATAR_SRC =
  "/res/" +
  encodeURIComponent("JC Sleep Well Project_Horizontal logo (PNG).png");

type Theme = "amber" | "teal" | "violet";

type Slot = {
  id: string;
  timeStart: string;
  timeEnd: string;
  title: string;
  description: string;
  speaker: { name: string; title: string };
  theme: Theme;
};

const slots: Slot[] = [
  {
    id: "1",
    timeStart: "9:30 AM",
    timeEnd: "10:15 AM",
    title: "Doors open & breakfast",
    description:
      "Grab coffee, find your seat, and reconnect before we kick things off. A relaxed start to the final milestone day.",
    speaker: { name: "Hosts", title: "Program team" },
    theme: "amber",
  },
  {
    id: "2",
    timeStart: "10:15 AM",
    timeEnd: "12:00 PM",
    title: "What we built — highlights reel",
    description:
      "A walkthrough of the biggest wins, tricky problems we solved, and the impact on customers. Bring your questions.",
    speaker: { name: "Alex Rivera", title: "Engineering lead" },
    theme: "teal",
  },
  {
    id: "3",
    timeStart: "12:00 PM",
    timeEnd: "1:15 PM",
    title: "Lunch & hallway track",
    description:
      "Celebrate together over lunch. Use this time for informal demos, thank-yous, and photos.",
    speaker: { name: "Everyone", title: "Open floor" },
    theme: "violet",
  },
  {
    id: "4",
    timeStart: "1:15 PM",
    timeEnd: "3:30 PM",
    title: "Deep dives & lightning talks",
    description:
      "Short sessions from each squad on decisions, tradeoffs, and lessons learned. Fast-paced and collaborative.",
    speaker: { name: "Squad leads", title: "Rotating mic" },
    theme: "amber",
  },
  {
    id: "5",
    timeStart: "3:30 PM",
    timeEnd: "5:00 PM",
    title: "Retrospective & acknowledgements",
    description:
      "Honest reflection on the journey, shout-outs, and space for gratitude before we turn the page.",
    speaker: { name: "Jordan Lee", title: "Program director" },
    theme: "teal",
  },
  {
    id: "6",
    timeStart: "5:00 PM",
    timeEnd: "6:00 PM",
    title: "Closing toast",
    description:
      "A short closing moment, next steps for documentation and handoff, then we wrap at 6:00 PM.",
    speaker: { name: "Leadership", title: "Closing remarks" },
    theme: "violet",
  },
];

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

function SessionAvatar() {
  const box =
    "flex h-14 w-[7.25rem] shrink-0 items-center justify-center rounded-xl bg-white p-1.5 ring-1 ring-zinc-200/90 sm:h-16 sm:w-[8.5rem] sm:p-2";
  return (
    // eslint-disable-next-line @next/next/no-img-element -- encoded filename in public/res
    <img
      src={SESSION_AVATAR_SRC}
      alt=""
      className={`${box} object-contain`}
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

function Card({
  slot,
  side,
}: {
  slot: Slot;
  side: "left" | "right";
}) {
  const t = themeClasses[slot.theme];
  const pointerTowardLine =
    side === "right"
      ? `-left-2 top-11 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-l bg-white ${t.pointerBorder}`
      : `-right-2 top-11 h-3.5 w-3.5 translate-x-1/2 rotate-45 border-t border-r bg-white ${t.pointerBorder}`;

  const speakerRow =
    side === "right" ? (
      <div className="flex items-center gap-3">
        <SessionAvatar />
        <div className="min-w-0 text-left">
          <p className="font-bold text-zinc-900">{slot.speaker.name}</p>
          <p className="text-sm text-zinc-500">{slot.speaker.title}</p>
        </div>
      </div>
    ) : (
      <div className="flex flex-row-reverse items-center gap-3">
        <SessionAvatar />
        <div className="min-w-0 text-right">
          <p className="font-bold text-zinc-900">{slot.speaker.name}</p>
          <p className="text-sm text-zinc-500">{slot.speaker.title}</p>
        </div>
      </div>
    );

  const btnAlign = side === "right" ? "self-start" : "self-end";

  return (
    <article
      id={`session-${slot.id}`}
      className="relative max-w-xl rounded-2xl bg-white p-5 shadow-lg shadow-zinc-200/80 ring-1 ring-zinc-100 sm:p-6"
    >
      <span
        className={`pointer-events-none absolute border-2 ${pointerTowardLine}`}
        aria-hidden
      />
      {speakerRow}
      <h3 className="mt-4 text-xl font-bold text-zinc-900 sm:text-2xl">
        {slot.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
        {slot.description}
      </p>
      <Link
        href={`#session-${slot.id}`}
        className={`mt-5 inline-flex rounded-lg px-4 py-2 text-sm font-semibold transition ${t.btn} ${btnAlign}`}
      >
        Read more
      </Link>
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
            September 14, 2026 · 9:30 AM – 6:00 PM. Sessions alternate around the
            center line like your reference layout.
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
      </div>
    </section>
  );
}
