import Link from "next/link";
import type { ReactNode } from "react";

const IG = "https://www.instagram.com/jcsleepwell/";
const FB = "https://www.facebook.com/jcsleepwell/";

const URL_CU = "https://www.cuhk.edu.hk/chinese/";
const URL_CUFM = "https://www.med.cuhk.edu.hk/";
const URL_JC = "https://charities.hkjc.com/zh-hk/index";

const coOrg: { src: string; alt: string; href?: string }[] = [
  { src: "/res/CFSC.png", alt: "基督教家庭服務中心", href: "https://www.cfsc.org.hk/" },
  { src: "/res/hkskhw.png", alt: "香港聖公會福利協會", href: "https://www.skhwc.org.hk/zh-hant/" },
  { src: "/res/MHAHK.png", alt: "香港心理衞生會", href: "https://www.mhahk.org.hk/" },
  { src: "/res/SJS.png", alt: "聖雅各福群會", href: "https://sjs.org.hk/tc/front/front.php" },
  { src: "/res/UCN.png", alt: "基督教聯合那打素社康服務", href: "https://www.ucn.org.hk/zh-hant/" },
];

function PartnerLink({
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

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-white text-zinc-800">
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

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-0 xl:gap-x-8">
          <div className="flex flex-col gap-4 sm:gap-5">
            <section className="text-left">
              <h2 className="mb-2 text-sm font-semibold text-zinc-900 sm:text-base">
                主辦機構：
              </h2>
              <div className="grid w-full max-w-2xl grid-cols-2 items-center gap-x-3 sm:max-w-3xl sm:gap-x-4 lg:max-w-none">
                <div className="flex w-full min-w-0 items-center justify-center">
                  <PartnerLink href={URL_CU} label="香港中文大學（官方網站）">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/res/MAIN_LOGO_CU.svg"
                      alt=""
                      width={240}
                      height={42}
                      className="block h-16 w-auto max-w-full object-contain object-center sm:h-18 lg:h-16"
                      loading="lazy"
                    />
                  </PartnerLink>
                </div>
                <div className="flex w-full min-w-0 items-center justify-center">
                  <PartnerLink href={URL_CUFM} label="香港中文大學醫學院（官方網站）">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/res/MAIN_LOGO_CUFM.svg"
                      alt=""
                      width={240}
                      height={42}
                      className="block h-16 w-auto max-w-full object-contain object-center sm:h-18 lg:h-16" 
                      loading="lazy"
                    />
                  </PartnerLink>
                </div>
              </div>
            </section>

            <section className="text-left">
              <h2 className="mb-2 text-sm font-semibold text-zinc-900 sm:text-base">
                <span className="pointer-events-none select-none">捐助機構：</span>
              </h2>
              <div className="flex justify-start">
                <PartnerLink href={URL_JC} label="香港賽馬會慈善及社區貢獻">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/res/MAIN_LOGO_JC.png"
                    alt=""
                    width={320}
                    height={90}
                    className="block h-16 w-auto max-w-full object-contain object-left sm:h-24 lg:h-22"
                    loading="lazy"
                  />
                </PartnerLink>
              </div>
            </section>
          </div>

          <section className="text-left lg:pt-0">
            <h2 className="mb-2 text-sm font-semibold text-zinc-900 sm:text-base">
              協辦機構：
            </h2>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2 sm:gap-x-4 sm:gap-y-3">
              {coOrg.map(({ src, alt, href }) => (
                <div
                  key={src}
                  className="flex min-h-16 w-full min-w-0 items-center justify-center sm:min-h-24 lg:min-h-14"
                >
                  <PartnerLink href={href} label={alt}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt=""
                      className="block h-auto max-h-14 w-auto max-w-[min(100%,10.5rem)] object-contain sm:max-h-17 sm:max-w-48 lg:max-h-20 lg:max-w-52"
                      loading="lazy"
                    />
                  </PartnerLink>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
