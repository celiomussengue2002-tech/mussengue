import { Zap, Shield, Users, ArrowRight } from 'lucide-react';
import { assets } from '../data/siteData';

interface AboutUsProps {
  onLearnMore: () => void;
}

export function AboutUs({ onLearnMore }: AboutUsProps) {
  return (
    <section id="sobre-nos" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Layout: Left Content, Center Team Photo, Right 3 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & Story Button */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[#0070F3] font-bold text-xs tracking-[0.16em] uppercase block mb-2.5">
              SOBRE NÓS
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.15] mb-5">
              Mais do que tecnologia, <br />
              parceiros do seu crescimento.
            </h2>

            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 font-normal max-w-md">
              Somos uma equipa apaixonada por tecnologia, focada em criar soluções digitais que geram resultados reais. Ajudamos empresas a modernizar os seus processos, aumentar a eficiência e preparar-se para o futuro.
            </p>

            <div>
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 bg-[#0070F3] hover:bg-[#005fd1] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Conheça a nossa história</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Column: Collaborative Team Photo */}
          <div className="lg:col-span-4 relative flex items-center justify-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-md border border-slate-100">
              <img
                src={assets.aboutTeamImage}
                alt="Equipa Biru Technology Solutions em colaboração"
                className="w-full h-[280px] sm:h-[320px] object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: 3 Pillars (Agilidade, Segurança, Parceria) */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-6">
            
            {/* Pillar 1: Agilidade */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#0B1E3D] flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-0.5">
                  Agilidade
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  Entregamos soluções com rapidez e qualidade.
                </p>
              </div>
            </div>

            {/* Pillar 2: Segurança */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#0B1E3D] flex items-center justify-center shrink-0">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-0.5">
                  Segurança
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  Protegemos os seus dados e o seu negócio.
                </p>
              </div>
            </div>

            {/* Pillar 3: Parceria */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#0B1E3D] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-0.5">
                  Parceria
                </h3>
                <p className="text-xs text-slate-500 leading-snug">
                  O seu sucesso é o nosso compromisso.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
