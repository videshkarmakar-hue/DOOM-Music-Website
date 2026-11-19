import { APP_INFO, DEVELOPER_INFO } from '../data/doomData';

export function Footer() {
  return (
    <footer className="rounded-2xl bg-[#1A1D20] border border-white/[0.06] px-6 py-5 sm:px-10 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-base font-bold tracking-tight text-[#F8F9FA]">
            {APP_INFO.brand}
          </span>
          <span className="text-xs font-medium text-[#ADB5BD]">
            {APP_INFO.brandSuffix}
          </span>
        </div>

        <p className="text-xs sm:text-sm font-medium text-[#CED4DA]">
          {DEVELOPER_INFO.creditLine}
        </p>

        <div className="flex items-center gap-5 text-xs font-medium text-[#ADB5BD]">
          <a
            href="#home"
            className="transition-colors hover:text-white whitespace-nowrap"
          >
            Top
          </a>
          <a
            href="#download"
            className="transition-colors hover:text-white whitespace-nowrap"
          >
            Download
          </a>
          <a
            href="#developer"
            className="transition-colors hover:text-white whitespace-nowrap"
          >
            Developer
          </a>
        </div>
      </div>
    </footer>
  );
}
