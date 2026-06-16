import Link from "next/link";
import type { ReactNode } from "react";

export function PartnerLink({
  href,
  label,
  className,
  children,
}: {
  href?: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const base =
    "inline-flex w-fit max-w-full shrink-0 items-center justify-center transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600";
  if (!href) {
    return <span className={`${base} ${className ?? ""}`}>{children}</span>;
  }
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${base} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
