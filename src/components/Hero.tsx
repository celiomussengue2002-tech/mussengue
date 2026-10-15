import { ArrowRight } from 'lucide-react';
import { assets } from '../data/siteData';

interface HeroProps {
  onExploreServices: () => void;
  onTalkToTeam: () => void;
}

export function Hero({ onExploreServices, onTalkToTeam }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pb-0 bg-[#071732] overflow-hidden text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 pt-4 sm:pt-8 lg:pb-24">
            {/* Eyebrow */}
            <div className="mb-4 sm:mb-5">
              <span className="text-[#38BDF8] text-xs font-bold tracking-[0.18em] uppercase">
                SOLUÇÕES DE TECNOLOGIA PARA O SEU NEGÓCIO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.1] text-white mb-6">
              Tecnologia que <br />
              impulsiona o seu <br />
              <span className="text-[#0080FF] text-[#0070F3]">negócio.</span>
            </h1>

            {/* Subparagraph */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-lg mb-8 font-normal">
              Desenvolvemos websites, sistemas e soluções de IT para ajudar empresas a operar, crescer e competir no mundo digital.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 bg-[#0070F3] hover:bg-[#005fd1] text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Explorar Serviços</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onTalkToTeam}
                className="inline-flex items-center justify-center text-white hover:text-white font-medium text-sm px-6 py-3 rounded-lg border border-slate-600/90 hover:border-slate-400 bg-transparent hover:bg-white/5 transition-all active:scale-[0.98] cursor-pointer"
              >
                Falar com a equipa
              </button>
            </div>
          </div>

          {/* Right Column: Man working on laptop + Right-hand tag list */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end">
            
            <div className="relative w-full max-w-md lg:max-w-none flex items-end justify-center">
              
              {/* Photo */}
              <div className="relative w-full overflow-hidden rounded-t-2xl lg:rounded-none">
                <img
                  src={assets.heroImage}
                  alt="Profissional de tecnologia Biru com portátil"
                  className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover object-top filter brightness-[1.03] contrast-[1.04]"
                  loading="eager"
                />

                {/* Subtle soft gradient fade at the bottom matching dark navy bg */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#071732] to-transparent pointer-events-none" />
              </div>

              {/* Vertical Stacked Tags (Matching Mockup exactly: Sites. Sistemas. Suporte. Crescimento.) */}
              <div className="hidden sm:flex flex-col gap-1.5 absolute right-2 sm:right-4 top-16 z-20 text-slate-300 text-xs font-normal tracking-wide select-none drop-shadow-md">
                <span>Sites.</span>
                <span>Sistemas.</span>
                <span>Suporte.</span>
                <span>Crescimento.</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
