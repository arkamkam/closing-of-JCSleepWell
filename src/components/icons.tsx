import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconArmchair({ className, ...p }: IconProps) {
  return (
    <svg {...stroke} className={className} {...p}>
      <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
      <path d="M3 11v5a2 2 0 0 0 2 2h1.5a2 2 0 0 0 1.6-.8l1.6-2.13a1 1 0 0 1 1.6 0L13.5 19.2a2 2 0 0 0 1.6.8H19a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" />
    </svg>
  );
}

export function IconUsers({ className, ...p }: IconProps) {
  return (
    <svg {...stroke} className={className} {...p}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function IconMapPin({ className, ...p }: IconProps) {
  return (
    <svg {...stroke} className={className} {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function IconTrain({ className, ...p }: IconProps) {
  return (
    <svg {...stroke} className={className} {...p}>
      <rect width="16" height="16" x="4" y="3" rx="2" />
      <path d="M4 11h16" />
      <path d="M12 3v2" />
      <path d="m8 19-2 2" />
      <path d="m16 19 2 2" />
      <path d="M8 15h0" />
      <path d="M16 15h0" />
    </svg>
  );
}

export function IconCar({ className, ...p }: IconProps) {
  return (
    <svg {...stroke} className={className} {...p}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 3.2A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}
