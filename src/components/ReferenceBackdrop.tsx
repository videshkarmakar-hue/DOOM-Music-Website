export function ReferenceBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
    >
      {/* Subtle tonal illumination matching reference surface depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 78% 24%, rgba(73, 80, 87, 0.28) 0%, rgba(26, 29, 32, 0) 58%)',
        }}
      />

      {/* Micro-dot grids (mid-right and lower-center) */}
      <div className="reference-dot-grid absolute right-[5%] top-[44%] h-28 w-36 opacity-55" />
      <div className="reference-dot-grid absolute bottom-[12%] left-[42%] h-24 w-36 opacity-45" />

      {/* Large upper-right matte 3D sphere */}
      <div className="matte-sphere absolute right-[3%] top-[9%] h-28 w-28 sm:h-36 sm:w-36 md:right-[5%] md:top-[11%] md:h-44 md:w-44" />

      {/* Small mid-right floating matte sphere */}
      <div className="matte-sphere-sm absolute right-[23%] top-[46%] h-7 w-7 sm:h-9 sm:w-9 md:right-[25%] md:top-[48%] md:h-10 md:w-10" />

      {/* Medium bottom-left matte sphere */}
      <div className="matte-sphere absolute bottom-[6%] left-[4%] h-20 w-20 sm:h-24 sm:w-24 md:bottom-[7%] md:left-[5%] md:h-28 md:w-28" />

      {/* Sweeping diagonal architectural wave curves in bottom-right corner */}
      <svg
        viewBox="0 0 800 320"
        fill="none"
        preserveAspectRatio="none"
        className="absolute bottom-0 right-0 h-44 w-full sm:h-56 md:h-64 md:w-4/5"
      >
        <defs>
          <linearGradient id="waveLayerOne" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1A1D20" stopOpacity="0" />
            <stop offset="55%" stopColor="#2C3136" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#495057" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="waveLayerTwo" x1="15%" y1="100%" x2="100%" y2="10%">
            <stop offset="0%" stopColor="#141618" stopOpacity="0" />
            <stop offset="50%" stopColor="#23272B" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#343A40" stopOpacity="0.72" />
          </linearGradient>
          <linearGradient id="waveRim" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#495057" stopOpacity="0" />
            <stop offset="45%" stopColor="#ADB5BD" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#6C757D" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        <path
          d="M 140 320 C 330 285, 560 215, 800 45 L 800 320 Z"
          fill="url(#waveLayerOne)"
        />
        <path
          d="M 270 320 C 440 280, 620 225, 800 118 L 800 320 Z"
          fill="url(#waveLayerTwo)"
        />
        <path
          d="M 140 320 C 330 285, 560 215, 800 45"
          stroke="url(#waveRim)"
          strokeWidth="1.25"
        />
        <path
          d="M 270 320 C 440 280, 620 225, 800 118"
          stroke="url(#waveRim)"
          strokeWidth="1"
          strokeOpacity="0.65"
        />
      </svg>
    </div>
  );
}
