import { useState } from 'react';
import {
  ArrowUpRight,
  Disc3,
  Facebook,
  Globe,
  Instagram,
  Youtube,
} from 'lucide-react';
import { DEVELOPER_INFO, type DeveloperLink } from '../data/doomData';

function getPlatformIcon(id: DeveloperLink['id']) {
  switch (id) {
    case 'website':
      return Globe;
    case 'spotify':
      return Disc3;
    case 'instagram':
      return Instagram;
    case 'youtube':
      return Youtube;
    case 'facebook':
      return Facebook;
  }
}

export function DeveloperSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="developer"
      className="rounded-2xl sm:rounded-3xl bg-[#1A1D20] border border-white/[0.06] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14 shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
        {/* Developer Portrait & Attribution */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-5">
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 shrink-0 overflow-hidden rounded-2xl border border-[#495057] bg-[#212529] shadow-[0_12px_28px_rgba(0,0,0,0.4)]">
            {!imageError ? (
              <img
                src={DEVELOPER_INFO.imageUrl}
                alt={`${DEVELOPER_INFO.name} portrait`}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#495057] to-[#212529] font-display text-2xl font-bold tracking-tight text-[#F8F9FA]">
                VK
              </div>
            )}
          </div>

          <div>
            <p className="text-xs font-medium text-[#ADB5BD]">
              Developer Credit
            </p>
            <h2 className="font-display mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F9FA]">
              {DEVELOPER_INFO.name}
            </h2>
            <p className="mt-1.5 text-sm text-[#ADB5BD]">
              {DEVELOPER_INFO.role}
            </p>
          </div>
        </div>

        {/* Five Reactive Developer Links */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {DEVELOPER_INFO.links.map((link) => {
            const Icon = getPlatformIcon(link.id);
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[56px] items-center justify-between gap-3 rounded-xl border border-[#343A40] bg-[#212529]/85 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#6C757D] hover:bg-[#272C31] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ADB5BD]"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#495057]/35 text-[#CED4DA] transition-colors duration-200 group-hover:bg-[#495057] group-hover:text-white">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-[#F8F9FA]">
                      {link.label}
                    </span>
                    <span className="block truncate text-xs text-[#ADB5BD]">
                      {link.handle}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-[#ADB5BD] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
