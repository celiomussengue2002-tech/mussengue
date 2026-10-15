import { Code, LayoutGrid, Cloud, Shield, CloudLightning, ArrowRight } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/siteData';

interface ServicesProps {
  onSelectService: (serviceId: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code className="w-5 h-5 text-white" strokeWidth={2.5} />;
      case 'layout-grid':
        return <LayoutGrid className="w-5 h-5 text-white" strokeWidth={2.5} />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-white" strokeWidth={2.5} />;
      case 'shield-check':
        return <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />;
      case 'cloud-rain':
      default:
        return <CloudLightning className="w-5 h-5 text-white" strokeWidth={2.5} />;
    }
  };

  return (
    <section id="servicos" className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Left title, Right paragraph */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-[#0070F3] font-bold text-xs tracking-[0.16em] uppercase block mb-2.5">
              OS NOSSOS SERVIÇOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.15]">
              Soluções completas para <br className="hidden sm:inline" />
              a sua presença digital.
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
              Do desenvolvimento de websites à gestão de infraestrutura, oferecemos soluções de tecnologia flexíveis e seguras, adaptadas às necessidades do seu negócio.
            </p>
          </div>
        </div>

        {/* 5 Service Cards in a Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-200 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Icon Box: Deep Navy/Blue Rounded Box matching mockup */}
                <div className="w-11 h-11 rounded-xl bg-[#0B1E3D] group-hover:bg-[#0070F3] flex items-center justify-center mb-5 transition-colors">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-base font-bold text-[#0F172A] mb-2 leading-snug group-hover:text-[#0070F3] transition-colors">
                  {service.title}
                </h3>

                {/* Service Short Description */}
                <p className="text-slate-500 text-xs leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Link: "Saiba mais →" */}
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0070F3] group-hover:text-[#005fd1]">
                  <span>Saiba mais</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
