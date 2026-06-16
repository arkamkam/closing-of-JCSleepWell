import { PartnerLink } from "./PartnerLink";
import { URL_CU, URL_CUFM, URL_JC, coOrg } from "@/lib/partners";

type OrganizerBannerProps = {
  variant?: "hero" | "footer";
};

/**
 * Hero logo sizes — edit the classes below to tune mobile / tablet / desktop.
 *
 * h-*        = logo height
 * max-w-*    = max logo width (prevents one logo from dominating the row)
 *
 * Breakpoints: default = phone, sm: = ≥640px, lg: = ≥1024px (desktop)
 */
const HERO_LOGO_CLASS =
  "block w-auto object-contain h-10 max-w-[7rem] sm:h-11 sm:max-w-[10rem] lg:h-12 lg:max-w-[12rem]";

/**
 * 捐助 (JC) — tune separately from HERO_LOGO_CLASS.
 * This logo is very wide; visible size is usually capped by h-*, not max-w-*.
 */
const HERO_DONOR_LOGO_CLASS =
  "block w-auto object-contain h-20 max-w-[10rem] sm:h-11 sm:max-w-[10rem] lg:h-18 lg:max-w-[18rem]";

/** Hero outer padding — increase lg:px / xl:px for more side space on desktop. */
const HERO_CONTAINER_CLASS =
  "mx-auto w-full max-w-[90rem] px-2 sm:px-4 lg:px-16 xl:px-24";

/** Row 1 (主辦 + 捐助) max width on desktop — increase lg:max-w-* to spread wider. */
const HERO_ROW1_CLASS =
  "grid grid-cols-2 items-start gap-x-3 gap-y-3 sm:gap-x-8 lg:mx-auto lg:max-w-4xl lg:gap-x-16 xl:max-w-5xl xl:gap-x-24";

/** Row 2 (協辦) desktop — full width with logos pushed to the sides. */
const HERO_COORG_DESKTOP_CLASS =
  "mx-auto hidden w-full max-w-[85rem] lg:flex lg:items-center lg:justify-between lg:gap-x-8 xl:gap-x-12";

/** Footer logo sizes (page bottom). */
const FOOTER_HOST_CLASS =
  "block h-14 w-auto max-w-full object-contain sm:h-16 lg:h-16";

/** 頁尾 — 協辦 logo */
const FOOTER_PARTNER_CLASS =
  "block h-14 w-auto max-w-[10.5rem] object-contain sm:h-16 sm:max-w-48 lg:max-h-16 lg:max-w-52";

/** 頁尾 — 捐助 (JC); separate from FOOTER_PARTNER_CLASS for the same reason as hero. */
const FOOTER_DONOR_LOGO_CLASS =
  "block h-14 w-auto max-w-[10.5rem] object-contain sm:h-16 sm:max-w-48 lg:max-h-16 lg:max-w-52";

export function OrganizerBanner({ variant = "hero" }: OrganizerBannerProps) {
  const compact = variant === "hero";

  const headingClass = compact
    ? "text-xs font-semibold text-zinc-800 sm:text-sm"
    : "text-sm font-semibold text-zinc-900 sm:text-base";

  if (compact) {
    return (
      <div className={HERO_CONTAINER_CLASS}>
        <div className="space-y-3 sm:space-y-4">
          <div className={HERO_ROW1_CLASS}>
            <div className="flex flex-col items-center text-center">
              <h2 className={`mb-1.5 ${headingClass}`}>主辦機構：</h2>
              <div className="flex flex-col items-center gap-y-2 sm:flex-row sm:gap-x-3">
                <PartnerLink href={URL_CU} label="香港中文大學（官方網站）">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/res/MAIN_LOGO_CU.svg"
                    alt=""
                    width={240}
                    height={42}
                    className={HERO_LOGO_CLASS}
                    loading="eager"
                  />
                </PartnerLink>
                <PartnerLink href={URL_CUFM} label="香港中文大學醫學院（官方網站）">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/res/MAIN_LOGO_CUFM.svg"
                    alt=""
                    width={240}
                    height={42}
                    className={HERO_LOGO_CLASS}
                    loading="eager"
                  />
                </PartnerLink>
              </div>
            </div>

            <div className="flex flex-col items-center text-center">
              <h2 className={`mb-1.5 ${headingClass}`}>捐助機構：</h2>
              <PartnerLink href={URL_JC} label="香港賽馬會慈善及社區貢獻">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/res/MAIN_LOGO_JC.png"
                  alt=""
                  width={320}
                  height={90}
                  className={HERO_DONOR_LOGO_CLASS}
                  loading="eager"
                />
              </PartnerLink>
            </div>
          </div>

          <section>
            <h2 className={`mb-2 text-center ${headingClass}`}>協辦機構：</h2>
            <div className="space-y-3 px-1 lg:hidden">
              <div className="flex items-center justify-center gap-x-2.5 sm:gap-x-4">
                {coOrg.slice(0, 3).map(({ src, alt, href }) => (
                  <PartnerLink key={src} href={href} label={alt}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className={HERO_LOGO_CLASS} loading="eager" />
                  </PartnerLink>
                ))}
              </div>
              <div className="flex items-center justify-center gap-x-3 sm:gap-x-5">
                {coOrg.slice(3, 5).map(({ src, alt, href }) => (
                  <PartnerLink key={src} href={href} label={alt}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className={HERO_LOGO_CLASS} loading="eager" />
                  </PartnerLink>
                ))}
              </div>
            </div>
            <div className={HERO_COORG_DESKTOP_CLASS}>
              {coOrg.map(({ src, alt, href }) => (
                <PartnerLink key={src} href={href} label={alt}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className={HERO_LOGO_CLASS} loading="eager" />
                </PartnerLink>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-0 xl:gap-x-8">
      <div className="flex flex-col gap-4 sm:gap-5">
        <section className="text-left">
          <h2 className={`mb-2 ${headingClass}`}>主辦機構：</h2>
          <div className="grid w-full max-w-2xl grid-cols-2 items-center gap-x-3 sm:max-w-3xl sm:gap-x-4 lg:max-w-none">
            <PartnerLink href={URL_CU} label="香港中文大學（官方網站）">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/res/MAIN_LOGO_CU.svg"
                alt=""
                width={240}
                height={42}
                className={FOOTER_HOST_CLASS}
                loading="lazy"
              />
            </PartnerLink>
            <PartnerLink href={URL_CUFM} label="香港中文大學醫學院（官方網站）">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/res/MAIN_LOGO_CUFM.svg"
                alt=""
                width={240}
                height={42}
                className={FOOTER_HOST_CLASS}
                loading="lazy"
              />
            </PartnerLink>
          </div>
        </section>

        <section className="text-left">
          <h2 className={`mb-2 ${headingClass}`}>
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
                className={FOOTER_DONOR_LOGO_CLASS}
                loading="lazy"
              />
            </PartnerLink>
          </div>
        </section>
      </div>

      <section className="text-left lg:pt-0">
        <h2 className={`mb-2 ${headingClass}`}>協辦機構：</h2>
        <div className="grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-2">
          {coOrg.map(({ src, alt, href }) => (
            <div
              key={src}
              className="flex min-h-14 w-full items-center justify-center sm:min-h-16"
            >
              <PartnerLink href={href} label={alt}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className={FOOTER_PARTNER_CLASS} loading="lazy" />
              </PartnerLink>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
