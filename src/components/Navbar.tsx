"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { REGISTER_URL } from "@/lib/register";

const links = [
  { href: "/", label: "Home" },
  { href: "/location", label: "Location" },
  { href: "/#schedule", label: "Schedule" },
];

const registerClassName =
  "shrink-0 rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-400";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-6 md:py-5 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:contents">
          <Link href="/" className="shrink-0 text-lg font-bold tracking-tight text-white">
            Symposium
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

        <ul className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-white/10 pt-3 text-sm font-medium text-white/90 md:w-auto md:flex-1 md:flex-nowrap md:justify-center md:border-t-0 md:pt-0 md:gap-8">
          {links.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : href.startsWith("/#")
                  ? false
                  : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative pb-1 transition hover:text-white ${
                    active ? "text-white" : "text-white/80"
                  }`}
                >
                  {label}
                  {active ? (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-pink-500" />
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
