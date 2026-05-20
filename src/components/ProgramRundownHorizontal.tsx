import { programItems, symposiumBlocks } from "@/lib/program";

export function ProgramRundownHorizontal() {
  return (
    <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm">
      <div className="border-b border-zinc-200 bg-zinc-50 px-4 py-3 sm:px-5">
        <h3 className="text-base font-bold text-zinc-900">Schedule table</h3>
        <p className="mt-1 text-sm text-zinc-500">
          Full rundown in columns — suitable for presentations and printing
        </p>
      </div>
      <table className="min-w-[720px] w-full text-left text-sm">
        <thead>
          <tr className="border-b border-zinc-200 bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
            <th className="px-4 py-3 font-semibold">Time</th>
            <th className="px-4 py-3 font-semibold">Event</th>
            <th className="px-4 py-3 font-semibold">Speaker</th>
          </tr>
        </thead>
        <tbody>
          {programItems.flatMap((item) => {
            const symposium =
              item.symposiumId &&
              symposiumBlocks.find((s) => s.id === item.symposiumId);

            if (symposium) {
              return [
                <tr
                  key={item.id}
                  className="border-b border-zinc-100 bg-violet-50/80"
                >
                  <td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-[#34657B]">
                    {item.timeStart}–{item.timeEnd}
                  </td>
                  <td className="px-4 py-3 font-semibold text-zinc-900">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 text-zinc-400">—</td>
                </tr>,
                ...symposium.talks.map((talk) => (
                  <tr
                    key={`${item.id}-${talk.title}`}
                    className="border-b border-zinc-100"
                  >
                    <td className="px-4 py-3" />
                    <td className="px-4 py-3 text-zinc-800">{talk.title}</td>
                    <td className="px-4 py-3 text-zinc-600">{talk.speaker}</td>
                  </tr>
                )),
              ];
            }

            return (
              <tr key={item.id} className="border-b border-zinc-100">
                <td className="whitespace-nowrap px-4 py-3 font-mono text-xs font-semibold text-[#34657B]">
                  {item.timeStart}–{item.timeEnd}
                </td>
                <td className="px-4 py-3 text-zinc-800">{item.title}</td>
                <td className="px-4 py-3 text-zinc-600">
                  {item.speaker ?? "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
