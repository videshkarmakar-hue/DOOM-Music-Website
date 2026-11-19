import { useState } from 'react';
import { ChevronRight, Download, Menu, X } from 'lucide-react';
import { APP_INFO } from '../data/doomData';

interface NavbarProps {
  onDownloadTrigger: (sourceLabel: string) => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Download', href: '#download' },
  { label: 'Developer', href: '#developer' },
];

export function Navbar({ onDownloadTrigger }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-20 px-6 pt-6 sm:px-10 sm:pt-8 lg:px-14">
      <div className="flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand mark echoing reference top-left orb */}
        <a
          href="#home"
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ADB5BD] rounded-md"
        >
          <span
            aria-hidden="true"
            className="matte-sphere-sm inline-block h-6 w-6 transition-transform duration-200 group-hover:scale-105"
          />
          <span className="font-display text-lg font-bold tracking-tight text-[#F8F9FA]">
            {APP_INFO.brand}
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 lg:gap-9"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#CED4DA] transition-colors duration-150 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ADB5BD] rounded-sm px-0.5"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary nav action + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={APP_INFO.apkUrl}
            download={APP_INFO.fileName}
            onClick={() => onDownloadTrigger('Navigation Bar')}
            className="group inline-flex items-center gap-2 rounded-full border border-[#495057] bg-[#212529]/90 px-4 py-2 text-xs font-semibold text-[#F8F9FA] transition-all duration-200 hover:border-[#ADB5BD]/70 hover:bg-[#495057] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ADB5BD]"
          >
            <Download className="h-3.5 w-3.5 text-[#ADB5BD] transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-white" />
            <span>Get APK</span>
            <ChevronRight className="h-3.5 w-3.5 text-[#ADB5BD] transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#343A40] bg-[#212529] text-[#F8F9FA] transition-colors hover:border-[#6C757D] md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ADB5BD]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="mt-4 flex flex-col gap-1 rounded-xl border border-[#343A40] bg-[#212529]/95 p-3 md:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex min-h-[44px] items-center justify-between rounded-lg px-3 text-sm font-medium text-[#E9ECEF] transition-colors hover:bg-[#343A40]/70 hover:text-white"
            >
              <span>{item.label}</span>
              <ChevronRight className="h-4 w-4 text-[#ADB5BD]" />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
