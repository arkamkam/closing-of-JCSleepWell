import {
  programItems,
  symposiumBlocks,
  type ProgramItem,
} from "@/lib/program";

const kindStyles: Record<ProgramItem["kind"], string> = {
  ceremony: "border-l-amber-500 bg-amber-50",
  keynote: "border-l-teal-600 bg-teal-50",
  symposium: "border-l-violet-600 bg-violet-50",
  break: "border-l-zinc-400 bg-zinc-50",
  panel: "border-l-[#34657B] bg-brand-light",
  other: "border-l-sky-600 bg-sky-50",
};

function formatTimeRange(start: string, end: string) {
  return `${start} – ${end}`;
}

export function ProgramRundownVertical() {
  return (
    <div className="space-y-3">
      {programItems.map((item) => {
        const symposium =
          item.symposiumId &&
          symposiumBlocks.find((s) => s.id === item.symposiumId);

        return (
          <article
            key={item.id}
            className={`rounded-xl border border-zinc-200 border-l-4 bg-white p-4 shadow-sm sm:p-5 ${kindStyles[item.kind]}`}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <time className="shrink-0 font-mono text-sm font-semibold text-[#34657B]">
                {formatTimeRange(item.timeStart, item.timeEnd)}
              </time>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-zinc-900 sm:text-lg">
                  {item.title}
                </h3>
                {item.speaker ? (
                  <p className="mt-1 text-sm text-zinc-600">{item.speaker}</p>
                ) : null}
              </div>
            </div>

            {symposium ? (
              <ul className="mt-4 space-y-3 border-t border-zinc-200 pt-4">
                {symposium.talks.map((talk) => (
                  <li key={talk.title} className="text-sm">
                    <p className="font-medium text-zinc-800">{talk.title}</p>
                    <p className="mt-0.5 text-zinc-500">{talk.speaker}</p>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
