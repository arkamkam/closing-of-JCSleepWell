import Image from "next/image";
import { speakers } from "@/lib/program";

export type PhotoFraming = {
  /** CSS object-position — bias toward top so heads aren't clipped */
  objectPosition?: string;
  /** Scale image inside circle (1 = fill edge-to-edge) */
  scale?: number;
  /** Circle background when scale < 1 — match photo backdrop */
  backdrop?: string;
};

const framingBySpeakerId: Record<string, PhotoFraming> = {
  "sijing-chen": { objectPosition: "center 8%" },
  "bei-huang": { objectPosition: "center 10%" },
};

export function getPhotoFraming(speakerId?: string): PhotoFraming {
  if (!speakerId) return {};
  return framingBySpeakerId[speakerId] ?? {};
}

export function getPhotoFramingByName(name?: string): PhotoFraming {
  if (!name) return {};
  const match = speakers.find(
    (s) => s.name === name || name.includes(s.name.split(" ").slice(-1)[0]!),
  );
  return match ? getPhotoFraming(match.id) : {};
}

type SpeakerPhotoProps = {
  src: string;
  alt: string;
  size?: "sm" | "md";
  speakerId?: string;
  framing?: PhotoFraming;
};

const sizeClasses = {
  sm: "h-14 w-14 sm:h-16 sm:w-16",
  md: "h-24 w-24",
};

export function SpeakerPhoto({
  src,
  alt,
  size = "md",
  speakerId,
  framing: framingOverride,
}: SpeakerPhotoProps) {
  const framing = framingOverride ?? getPhotoFraming(speakerId);
  const {
    objectPosition = "center center",
    scale = 1,
    backdrop,
  } = framing;

  return (
    <div
      className={`shrink-0 rounded-full border-2 border-[#34657B] p-0.5 ${sizeClasses[size]}`}
    >
      <div
        className="relative h-full w-full overflow-hidden rounded-full"
        style={{ backgroundColor: backdrop ?? "#e4e4e7" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{
            objectPosition,
            transform: scale !== 1 ? `scale(${scale})` : undefined,
          }}
          sizes={size === "sm" ? "64px" : "96px"}
        />
      </div>
    </div>
  );
}
