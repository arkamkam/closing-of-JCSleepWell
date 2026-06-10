"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { REGISTER_URL } from "@/lib/register";

const links = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program Details" },
  { href: "/location", label: "Direction and Map" },
  { href: "/contact", label: "Contact Us" },
];

const registerClassName =
  "shrink-0 rounded-full bg-[#34657B] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-[#2a5163]";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:py-5 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:contents">
          <Link
            href="/"
            className="shrink-0 text-lg font-bold tracking-tight text-[#34657B]"
          >
            JC Sleep Well
          </Link>
          <Link
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${registerClassName} md:hidden`}
          >
            Register
          </Link>
        </div>

        <ul className="flex w-full flex-nowrap items-center justify-between gap-x-1 border-t border-zinc-100 pt-3 text-xs font-medium leading-tight text-zinc-600 min-[400px]:text-sm sm:gap-x-3 md:w-auto md:flex-1 md:justify-center md:gap-8 md:border-t-0 md:pt-0">
          {links.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <li key={href} className="shrink-0">
                <Link
                  href={href}
                  prefetch={false}
                  className={`relative whitespace-nowrap pb-1 transition hover:text-[#34657B] ${
                    active ? "font-semibold text-[#34657B]" : "text-zinc-600"
                  }`}
                >
                  {label}
                  {active ? (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-[#34657B]" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${registerClassName} hidden md:inline-flex`}
        >
          Register
        </Link>
      </nav>
    </header>
  );
}
