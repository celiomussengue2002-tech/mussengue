import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { assets } from '../data/siteData';

interface ContactSectionProps {
  onOpenContactModal: () => void;
}

export function ContactSection({ onOpenContactModal }: ContactSectionProps) {
  return (
    <section id="contactos" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Rounded Container */}
        <div className="bg-[#F0F5FA] rounded-3xl p-8 sm:p-10 lg:p-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Subtext & Button */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[#0070F3] font-bold text-xs tracking-[0.16em] uppercase block mb-2.5">
                VAMOS TRABALHAR JUNTOS
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-tight mb-3">
                Tem um projeto em mente?
              </h2>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 font-normal max-w-sm">
                Fale connosco e descubra como podemos ajudar o seu negócio a crescer com tecnologia.
              </p>

              <div>
                {/* Notice: in the mockup, this button is Dark Navy (bg-[#0B1E3D]) */}
                <button
                  onClick={onOpenContactModal}
                  className="inline-flex items-center gap-2 bg-[#0B1E3D] hover:bg-[#071732] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Contacte-nos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Center Column: Consultant Photo with Laptop */}
            <div className="lg:col-span-4 relative flex items-center justify-center">
              <div className="w-full rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={assets.contactWomanImage}
                  alt="Consultora Biru Technology Solutions"
                  className="w-full h-[240px] sm:h-[280px] object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column: Dark Navy Info Box matching mockup */}
            <div className="lg:col-span-3">
              <div className="bg-[#0B1E3D] rounded-2xl p-6 text-white flex flex-col justify-between space-y-5">
                
                {/* Email Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-600/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-300 mb-0.5">
                      Email
                    </div>
                    <a
                      href="mailto:hello@biru.co.mz"
                      className="text-xs font-semibold text-white hover:text-[#38BDF8] transition-colors break-all"
                    >
                      hello@biru.co.mz
                    </a>
                  </div>
                </div>

                {/* Telefone Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-600/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-300 mb-0.5">
                      Telefone
                    </div>
                    <a
                      href="tel:+258841234567"
                      className="text-xs font-semibold text-white hover:text-[#38BDF8] transition-colors"
                    >
                      +258 84 123 4567
                    </a>
                  </div>
                </div>

                {/* Localização Item */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-blue-600/40 flex items-center justify-center shrink-0 text-[#38BDF8]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white mb-0.5">
                      Maputo, Moçambique
                    </div>
                    <div className="text-[11px] text-slate-400 font-normal">
                      Atendimento presencial e remoto
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
