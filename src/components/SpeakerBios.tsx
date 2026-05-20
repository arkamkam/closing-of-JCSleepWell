import { speakers } from "@/lib/program";
import { SpeakerPhoto } from "./SpeakerPhoto";

export function SpeakerBios() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {speakers.map((speaker) => (
        <article
          key={speaker.id}
          className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm"
        >
          <div className="flex items-start gap-4 p-5 sm:p-6">
            {speaker.photo ? (
              <SpeakerPhoto
                src={speaker.photo}
                alt={speaker.name}
                speakerId={speaker.id}
              />
            ) : null}
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-zinc-900">{speaker.name}</h3>
              <p className="mt-1 text-sm text-zinc-600">{speaker.role}</p>
              {speaker.presentationTitle ? (
                <p className="mt-3 text-sm font-medium text-[#34657B]">
                  {speaker.presentationTitle}
                </p>
              ) : null}
            </div>
          </div>
          <div className="border-t border-zinc-100 px-5 py-4 sm:px-6">
            <p className="text-sm leading-relaxed text-zinc-600">
              {speaker.biography}
            </p>
            {speaker.abstract ? (
              <details className="mt-4 group">
                <summary className="cursor-pointer text-sm font-semibold text-teal-700 transition hover:text-teal-800">
                  View abstract
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {speaker.abstract}
                </p>
              </details>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
