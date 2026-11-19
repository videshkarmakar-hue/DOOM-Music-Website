import {
  ArrowRight,
  Download,
  Smartphone,
} from 'lucide-react';
import { APP_INFO } from '../data/doomData';

interface DownloadSectionProps {
  onDownloadTrigger: (sourceLabel: string) => void;
}

const HIGHLIGHTS = [
  {
    index: '01.',
    title: 'Low-End Device Optimization',
    detail:
      'Engineered with a lean memory footprint so playback stays fluid on entry-level Android hardware.',
  },
  {
    index: '02.',
    title: 'Spotify & YouTube Music Alternative',
    detail:
      'Stream tracks cleanly without bloated background overhead or unnecessary system drain.',
  },
  {
    index: '03.',
    title: 'Direct arm64 Build',
    detail:
      'Clean official release package hosted on GitHub Releases for fast, direct Android installation.',
  },
];

export function DownloadSection({
  onDownloadTrigger,
}: DownloadSectionProps) {

  return (
    <section
      id="download"
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#1A1D20] border border-white/[0.06] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        {/* Left: Core Value */}
        <div className="lg:col-span-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F9FA] text-balance">
            Get {APP_INFO.brand} {APP_INFO.brandSuffix}
          </h2>

          <p className="mt-4 text-base font-medium leading-relaxed text-[#DEE2E6]">
            {APP_INFO.taglinePrimary}
          </p>
        </div>

        {/* Right: Multiple Eye-Catching Download Button Variations */}
        <div className="lg:col-span-6 flex flex-col gap-3.5">
          {/* Style 1: Metallic Slate Gradient Capsule CTA */}
          <a
            href={APP_INFO.apkUrl}
            download={APP_INFO.fileName}
            onClick={() => onDownloadTrigger('Primary Release Button')}
            className="group relative flex min-h-[52px] items-center justify-between overflow-hidden rounded-full bg-gradient-to-r from-[#495057] via-[#5C646D] to-[#495057] px-6 py-3.5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_28px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#565E66] hover:via-[#6C757D] hover:to-[#565E66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="flex items-center gap-3 min-w-0">
              <Download className="h-5 w-5 shrink-0 text-[#F8F9FA] transition-transform duration-200 group-hover:translate-y-0.5" />
              <span className="truncate text-sm sm:text-base font-semibold tracking-tight">
                Download DOOM - Music APK
              </span>
            </span>
            <span className="ml-3 flex items-center gap-1.5 text-xs font-medium text-[#E9ECEF] tabular-nums whitespace-nowrap shrink-0">
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </a>

          {/* Style 2: Architectural Matte Surface Release Button */}
          <a
            href={APP_INFO.apkUrl}
            download={APP_INFO.fileName}
            onClick={() => onDownloadTrigger('Architectural Direct APK Button')}
            className="group flex min-h-[54px] items-center justify-between rounded-2xl border border-[#495057] bg-[#212529] px-5 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ADB5BD]/70 hover:bg-[#272C31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ADB5BD]"
          >
            <span className="flex items-center gap-3.5 min-w-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#495057]/40 text-[#E9ECEF] transition-colors duration-200 group-hover:bg-[#495057] group-hover:text-white">
                <Smartphone className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-[#F8F9FA]">
                  Direct Android Installer (.apk)
                </span>
              </span>
            </span>
            <ArrowRight className="ml-3 h-4 w-4 shrink-0 text-[#ADB5BD] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white" />
          </a>
        </div>
      </div>

      {/* Hairline-separated optimization highlights (Features Anchor) */}
      <div
        id="features"
        className="mt-10 grid gap-6 border-t border-white/[0.07] pt-8 md:grid-cols-3 md:gap-8"
      >
        {HIGHLIGHTS.map((item) => (
          <div key={item.index}>
            <h3 className="font-display text-base font-semibold text-[#F8F9FA]">
              <span className="mr-2 text-[#ADB5BD] tabular-nums">{item.index}</span>
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#ADB5BD]">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
