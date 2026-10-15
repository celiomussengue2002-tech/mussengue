import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonialsData } from '../data/siteData';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="depoimentos" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Title and Nav Buttons */}
        <div className="flex items-end justify-between mb-12 sm:mb-14">
          <div>
            <span className="text-[#0070F3] font-bold text-xs tracking-[0.16em] uppercase block mb-2.5">
              DEPOIMENTOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-tight">
              O que os nossos clientes dizem
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full border border-blue-200 bg-white text-[#0070F3] hover:bg-blue-50 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full bg-[#EBF3FF] border border-blue-200 text-[#0070F3] hover:bg-[#0070F3] hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Seguinte"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                {/* Quote */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8 font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div>
                {/* Author Info */}
                <div className="flex items-center gap-3 mb-2.5">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover border border-slate-100 shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
                      {item.author}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-normal">
                      {item.role}, {item.company}
                    </p>
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
