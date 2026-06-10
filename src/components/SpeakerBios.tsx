import type { ReactNode } from "react";
import { speakers } from "@/lib/program";
import { SpeakerPhoto } from "./SpeakerPhoto";

function CollapsibleText({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <details className={`group ${className}`}>
      <summary className="cursor-pointer text-sm font-semibold text-teal-700 transition hover:text-teal-800">
        {label}
      </summary>
      <div className="mt-2 text-sm leading-relaxed text-zinc-600">{children}</div>
    </details>
  );
}

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
          <div className="space-y-4 border-t border-zinc-100 px-5 py-4 sm:px-6">
            <CollapsibleText label="View biography">
              <p>{speaker.biography}</p>
            </CollapsibleText>
            {speaker.abstract ? (
              <CollapsibleText label="View abstract">
                <p>{speaker.abstract}</p>
              </CollapsibleText>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
