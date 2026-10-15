import { ArrowRight } from 'lucide-react';
import { processSteps } from '../data/siteData';

export function ProcessSection() {
  return (
    <section id="processo" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <span className="text-[#0070F3] font-bold text-xs tracking-[0.16em] uppercase block mb-2.5">
            COMO FUNCIONA
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-tight mb-3">
            Do primeiro contacto <br className="hidden sm:inline" />
            ao resultado.
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-normal max-w-md">
            Um processo simples, transparente e focado no seu objetivo.
          </p>
        </div>

        {/* 4 Steps Row matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {processSteps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col">
              {/* Step Number Circle + Connecting Arrow */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-[#EBF3FF] text-[#0070F3] font-bold text-sm flex items-center justify-center">
                  {step.number}
                </div>

                {/* Arrow to the right between steps */}
                {idx < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#0070F3] hidden lg:block" />
                )}
              </div>

              {/* Step Title */}
              <h3 className="text-base font-bold text-[#0F172A] mb-1.5">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
