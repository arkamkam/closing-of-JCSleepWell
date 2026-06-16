import Link from "next/link";
import { OrganizerBanner } from "./OrganizerBanner";

const IG = "https://www.instagram.com/jcsleepwell/";
const FB = "https://www.facebook.com/jcsleepwell/";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-800">
      <div className="mx-auto max-w-6xl px-5 py-7 sm:px-7 sm:py-8 lg:max-w-7xl lg:px-10 lg:py-9">
        <div className="mb-4 flex w-full flex-wrap items-center justify-center gap-6 sm:mb-5 sm:gap-8">
          <Link
            href={IG}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-700 underline-offset-2 hover:text-zinc-900 hover:underline"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/res/Instagram_logo_2022.svg.webp"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            />
            Instagram
          </Link>
          <Link
            href={FB}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-700 underline-offset-2 hover:text-zinc-900 hover:underline"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/res/Facebook_Logo_2023.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            />
            Facebook
          </Link>
        </div>

        <OrganizerBanner variant="footer" />
      </div>
    </footer>
  );
}
