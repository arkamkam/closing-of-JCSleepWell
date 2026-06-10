"use client";

type MapEmbedProps = {
  src: string;
  title: string;
};

/** Stable iframe mount — avoids remounting when the parent layout re-renders. */
export function MapEmbed({ src, title }: MapEmbedProps) {
  return (
    <iframe
      title={title}
      src={src}
      className="absolute inset-0 h-full w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
