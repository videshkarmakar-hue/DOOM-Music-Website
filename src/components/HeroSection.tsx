import { ArrowDownRight, Download } from 'lucide-react';
import { motion } from 'motion/react';
import { APP_INFO } from '../data/doomData';
import { Navbar } from './Navbar';
import { ReferenceBackdrop } from './ReferenceBackdrop';

interface HeroSectionProps {
  onDownloadTrigger: (sourceLabel: string) => void;
}

export function HeroSection({ onDownloadTrigger }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#1A1D20] border border-white/[0.06] shadow-[0_28px_70px_rgba(0,0,0,0.48)]"
    >
      <ReferenceBackdrop />

      <Navbar onDownloadTrigger={onDownloadTrigger} />

      <div className="relative z-10 flex min-h-[440px] sm:min-h-[510px] lg:min-h-[560px] flex-col justify-center px-6 py-16 sm:px-10 md:px-14 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          {/* Prominent bold DOOM with small - Music side label */}
          <h1 className="font-display flex flex-wrap items-baseline gap-x-3 gap-y-1 text-balance">
            <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F8F9FA] leading-none">
              {APP_INFO.brand}
            </span>
            <span className="font-sans text-base sm:text-xl font-medium tracking-normal text-[#ADB5BD]">
              {APP_INFO.brandSuffix}
            </span>
          </h1>

          <p className="mt-4 max-w-md text-base sm:text-lg font-medium leading-relaxed text-[#CED4DA]">
            {APP_INFO.taglinePrimary}
          </p>

          {/* Dual Capsule CTAs matching the exact reference silhouette */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href={APP_INFO.apkUrl}
              download={APP_INFO.fileName}
              onClick={() => onDownloadTrigger('Hero Primary CTA')}
              className="group relative inline-flex min-h-[44px] items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-b from-[#6C757D] to-[#495057] px-7 py-2.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_10px_24px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:from-[#7A838C] hover:to-[#525A62] active:translate-y-0 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Download className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
              <span>Download APK</span>
            </a>

            <a
              href="#download"
              className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[#495057] bg-[#1A1D20]/80 px-7 py-2.5 text-sm font-medium text-[#E9ECEF] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ADB5BD] hover:bg-[#212529] hover:text-white active:translate-y-0 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ADB5BD]"
            >
              <span>Learn More</span>
              <ArrowDownRight className="h-4 w-4 text-[#ADB5BD] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-white" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
