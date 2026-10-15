import { X, CheckCircle2, Clock, Target, ArrowRight, Layers } from 'lucide-react';
import { ServiceItem } from '../data/siteData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestProposal: (serviceTitle: string) => void;
}

export function ServiceModal({ service, onClose, onRequestProposal }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#07152B] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase block mb-2">
            DETALHES DO SERVIÇO
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed max-w-lg">
            {service.shortDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Visão Geral
            </h4>
            <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              O Que Está Incluído (Entregáveis)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0066FF] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>Tecnologias Utilizadas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.techStack.map((tech, i) => (
                  <span key={i} className="text-xs bg-white text-slate-700 font-medium px-2.5 py-1 rounded-md border border-blue-100">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Prazo Médio de Implementação</span>
                </div>
                <div className="text-sm font-bold text-slate-800">
                  {service.timeline}
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-500 flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Metodologia ágil com sprints semanais</span>
              </div>
            </div>
          </div>

          {/* Ideal for */}
          <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100/70 text-xs text-emerald-950">
            <span className="font-bold">Ideal para: </span>
            {service.idealFor}
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
          <button
            onClick={() => {
              onRequestProposal(service.title);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-bold px-6 py-3 rounded-lg shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Pedir Proposta para {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
