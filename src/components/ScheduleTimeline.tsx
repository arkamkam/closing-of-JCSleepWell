import Link from "next/link";
import { EVENT, programItems, type ProgramItem } from "@/lib/program";

const AFTERNOON_START_MIN = 14 * 60;
const CIRCLE_SIZE_DESKTOP = "h-20 w-20 xl:h-[5.5rem] xl:w-[5.5rem]";

function formatTime12(time: string) {
  const [h, m] = time.split(":").map(Number);
  const hour = h % 12 || 12;
  const ampm = h < 12 ? "AM" : "PM";
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

function timeToMinutes(time: string) {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

const morningItems = programItems.filter(
  (item) => timeToMinutes(item.timeStart) < AFTERNOON_START_MIN,
);
const afternoonItems = programItems.filter(
  (item) => timeToMinutes(item.timeStart) >= AFTERNOON_START_MIN,
);

type Theme = "amber" | "teal" | "violet";

const themes: Theme[] = ["amber", "teal", "violet"];

const themeClasses: Record<
  Theme,
  { ring: string; pointerBorder: string }
> = {
  amber: {
    ring: "border-amber-400 text-amber-600",
    pointerBorder: "border-amber-400",
  },
  teal: {
    ring: "border-teal-400 text-teal-600",
    pointerBorder: "border-teal-400",
  },
  violet: {
    ring: "border-violet-500 text-violet-700",
    pointerBorder: "border-violet-500",
  },
};

function themeForKind(kind: ProgramItem["kind"], index: number): Theme {
  if (kind === "keynote") return "teal";
  if (kind === "symposium") return "violet";
  if (kind === "break") return "amber";
  if (kind === "ceremony") return "amber";
  if (kind === "panel") return "teal";
  return themes[index % themes.length];
}

function splitSymposiumTitle(title: string) {
  const match = title.match(/^(Symposium \d+:)\s*(.+)$/i);
  if (!match) return null;
  return { label: match[1], subtitle: match[2] };
}

function EventTitle({
  item,
  compact = false,
}: {
  item: ProgramItem;
  compact?: boolean;
}) {
  const split = item.kind === "symposium" ? splitSymposiumTitle(item.title) : null;
  const textClass = compact
    ? "text-[11px] leading-snug sm:text-xs lg:text-sm"
    : "text-base leading-snug sm:text-lg";

  if (split) {
    return (
      <>
        <span className={`block font-bold ${textClass}`}>{split.label}</span>
        <span className={`mt-0.5 block font-semibold ${textClass}`}>
          {split.subtitle}
        </span>
      </>
    );
  }

  return <span className={`block font-bold ${textClass}`}>{item.title}</span>;
}

function EventCard({
  item,
  theme,
  compact = false,
  position = "below",
}: {
  item: ProgramItem;
  theme: Theme;
  compact?: boolean;
  position?: "above" | "below";
}) {
  const t = themeClasses[theme];

  return (
    <article
      className={`relative w-full bg-white shadow-md shadow-zinc-200/80 ring-1 ring-zinc-100 ${
        compact
          ? "rounded-lg px-3.5 py-2 xl:px-4 xl:py-2.5"
          : "rounded-2xl p-4 sm:p-5"
      }`}
    >
      <span
        className={`pointer-events-none absolute left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white ${
          position === "above"
            ? `-bottom-2 border-b border-r ${t.pointerBorder}`
            : `-top-2 border-t border-l ${t.pointerBorder}`
        }`}
        aria-hidden
      />
      <h3 className="text-center text-zinc-900">
        <EventTitle item={item} compact={compact} />
      </h3>
    </article>
  );
}

function TimeNode({
  timeStart,
  timeEnd,
  theme,
  compact = false,
}: {
  timeStart: string;
  timeEnd: string;
  theme: Theme;
  compact?: boolean;
}) {
  const t = themeClasses[theme];
  return (
    <div
      className={`relative z-10 flex shrink-0 flex-col items-center justify-center rounded-full border-2 border-dashed bg-white text-center font-semibold leading-tight ${t.ring} ${
        compact
          ? `${CIRCLE_SIZE_DESKTOP} px-1 text-[10px] xl:text-[11px]`
          : "h-24 w-24 px-1.5 text-[10px] sm:h-28 sm:w-28 sm:text-xs"
      }`}
    >
      <span>{timeStart}</span>
      <span
        className={`font-normal opacity-80 ${compact ? "text-[8px]" : "text-[9px] sm:text-[10px]"}`}
      >
        to
      </span>
      <span>{timeEnd}</span>
    </div>
  );
}

function VerticalTimelineTrack({
  items,
  globalStartIndex = 0,
}: {
  items: ProgramItem[];
  globalStartIndex?: number;
}) {
  return (
    <div className="relative">
      <div
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 border-l border-dashed border-zinc-300"
        aria-hidden
      />

      <ul className="space-y-12 sm:space-y-14">
        {items.map((item, index) => {
          const theme = themeForKind(item.kind, globalStartIndex + index);

          return (
            <li
              key={item.id}
              className="relative flex flex-col items-center gap-4 px-1"
            >
              <TimeNode
                timeStart={formatTime12(item.timeStart)}
                timeEnd={formatTime12(item.timeEnd)}
                theme={theme}
              />
              <EventCard item={item} theme={theme} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function HorizontalTimelineTrack({
  items,
  globalStartIndex = 0,
  evenSpread = false,
  className = "",
}: {
  items: ProgramItem[];
  globalStartIndex?: number;
  evenSpread?: boolean;
  className?: string;
}) {
  const count = items.length;
  if (count === 0) return null;

  const lineInset = count > 1 ? `${50 / count}%` : "50%";

  return (
    <div className={evenSpread ? "w-full" : "overflow-x-auto pb-2 scrollbar-thin"}>
      <div className={evenSpread ? "w-full" : "w-max min-w-full px-1"}>
        <div
          className={`relative flex min-h-56 w-full items-center py-5 xl:min-h-64 xl:py-6 ${className}`}
        >
          {count > 1 ? (
            <div
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 border-t border-dashed border-zinc-300"
              style={{ left: lineInset, right: lineInset }}
              aria-hidden
            />
          ) : null}

          {items.map((item, index) => {
            const theme = themeForKind(item.kind, globalStartIndex + index);
            const cardAbove = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative ${
                  evenSpread ? "min-w-0 flex-1" : "w-36 shrink-0 xl:w-40"
                }`}
              >
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                  <TimeNode
                    timeStart={formatTime12(item.timeStart)}
                    timeEnd={formatTime12(item.timeEnd)}
                    theme={theme}
                    compact
                  />
                </div>

                {cardAbove ? (
                  <div className="absolute bottom-[calc(50%+2.75rem)] left-1/2 z-20 w-[calc(100%+2rem)] max-w-64 -translate-x-1/2 xl:bottom-[calc(50%+3rem)] xl:max-w-72 2xl:max-w-80">
                    <EventCard
                      item={item}
                      theme={theme}
                      compact
                      position="above"
                    />
                  </div>
                ) : (
                  <div className="absolute top-[calc(50%+2.75rem)] left-1/2 z-20 w-[calc(100%+2rem)] max-w-64 -translate-x-1/2 xl:top-[calc(50%+3rem)] xl:max-w-72 2xl:max-w-80">
                    <EventCard
                      item={item}
                      theme={theme}
                      compact
                      position="below"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function PeriodSection({
  title,
  timeRange,
  items,
  globalStartIndex = 0,
  horizontal = false,
  evenSpread = false,
  className = "",
  trackClassName = "",
  headerClassName = "",
}: {
  title: string;
  timeRange: string;
  items: ProgramItem[];
  globalStartIndex?: number;
  horizontal?: boolean;
  evenSpread?: boolean;
  className?: string;
  trackClassName?: string;
  headerClassName?: string;
}) {
  return (
    <section
      aria-labelledby={`period-${title.toLowerCase()}`}
      className={className}
    >
      <div
        className={`mb-6 ${
          horizontal ? "lg:mb-8" : "mb-8 text-center lg:mb-10"
        } ${headerClassName}`}
      >
        <h3
          id={`period-${title.toLowerCase()}`}
          className="text-lg font-bold text-zinc-900 sm:text-xl"
        >
          {title}
        </h3>
        <p className="mt-0.5 text-sm text-zinc-500">{timeRange}</p>
      </div>
      {horizontal ? (
        <HorizontalTimelineTrack
          items={items}
          globalStartIndex={globalStartIndex}
          evenSpread={evenSpread}
          className={trackClassName}
        />
      ) : (
        <VerticalTimelineTrack
          items={items}
          globalStartIndex={globalStartIndex}
        />
      )}
    </section>
  );
}

function CompactTimelineList({
  items,
  desktop = false,
}: {
  items: ProgramItem[];
  desktop?: boolean;
}) {
  return (
    <ul className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-zinc-200/80">
      {items.map((item, index) => (
        <li
          key={item.id}
          className={`flex gap-3 px-4 py-3 ${
            desktop ? "lg:gap-4 lg:px-5 lg:py-3.5" : ""
          } ${index > 0 ? "border-t border-zinc-100" : ""} ${
            item.kind === "break" ? "bg-zinc-50/80" : ""
          }`}
        >
          <p
            className={`w-[6.75rem] shrink-0 text-[11px] font-semibold leading-snug text-zinc-500 sm:w-28 sm:text-xs ${
              desktop ? "lg:w-32 lg:text-sm" : ""
            }`}
          >
            {formatTime12(item.timeStart)}
            <span className="font-normal"> – {formatTime12(item.timeEnd)}</span>
          </p>
          <div className="min-w-0 flex-1 text-sm leading-snug text-zinc-900">
            <EventTitle item={item} compact />
          </div>
        </li>
      ))}
    </ul>
  );
}

function MobileCompactTimeline() {
  return (
    <div className="space-y-8 lg:hidden">
      <section aria-labelledby="period-morning-mobile">
        <div className="mb-4 text-center">
          <h3
            id="period-morning-mobile"
            className="text-lg font-bold text-zinc-900"
          >
            Morning
          </h3>
          <p className="mt-0.5 text-sm text-zinc-500">9:30 AM – 2:00 PM</p>
        </div>
        <CompactTimelineList items={morningItems} />
      </section>

      <section aria-labelledby="period-afternoon-mobile">
        <div className="mb-4 text-center">
          <h3
            id="period-afternoon-mobile"
            className="text-lg font-bold text-zinc-900"
          >
            Afternoon
          </h3>
          <p className="mt-0.5 text-sm text-zinc-500">2:00 PM – 6:00 PM</p>
        </div>
        <CompactTimelineList items={afternoonItems} />
      </section>
    </div>
  );
}

function MobileVerticalTimeline() {
  return <MobileCompactTimeline />;
}

function DesktopCompactTimeline() {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-10 xl:gap-x-14">
      <section aria-labelledby="period-morning-desktop">
        <div className="mb-5 text-center lg:mb-6">
          <h3
            id="period-morning-desktop"
            className="text-xl font-bold text-zinc-900"
          >
            Morning
          </h3>
          <p className="mt-0.5 text-sm text-zinc-500">9:30 AM – 2:00 PM</p>
        </div>
        <CompactTimelineList items={morningItems} desktop />
      </section>

      <section aria-labelledby="period-afternoon-desktop">
        <div className="mb-5 text-center lg:mb-6">
          <h3
            id="period-afternoon-desktop"
            className="text-xl font-bold text-zinc-900"
          >
            Afternoon
          </h3>
          <p className="mt-0.5 text-sm text-zinc-500">2:00 PM – 6:00 PM</p>
        </div>
        <CompactTimelineList items={afternoonItems} desktop />
      </section>
    </div>
  );
}

export function ScheduleTimeline() {
  return (
    <section
      id="schedule"
      className="relative scroll-mt-20 bg-zinc-100 py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-violet-300/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <header className="mb-10 text-center md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Schedule
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Day-of timeline
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            <span className="lg:hidden">
              {EVENT.date} · {EVENT.timeRange}. Morning and afternoon at a glance.
            </span>
            <span className="hidden lg:inline">
              {EVENT.date} · {EVENT.timeRange}. Time and session titles only —
              see program details for speakers and abstracts.
            </span>
          </p>
        </header>

        <MobileVerticalTimeline />

        <div className="mt-10 text-center md:mt-12 lg:hidden">
          <Link
            href="/program"
            className="text-sm font-semibold text-[#34657B] underline-offset-4 transition hover:text-[#2a5163] hover:underline"
          >
            View full program details & speaker profiles →
          </Link>
        </div>
      </div>

      <div className="relative mx-auto hidden w-full max-w-6xl px-4 lg:block lg:px-8 xl:px-10">
        <DesktopCompactTimeline />

        <div className="mt-10 text-center md:mt-12">
          <Link
            href="/program"
            className="text-sm font-semibold text-[#34657B] underline-offset-4 transition hover:text-[#2a5163] hover:underline"
          >
            View full program details & speaker profiles →
          </Link>
        </div>
      </div>
    </section>
  );
}
