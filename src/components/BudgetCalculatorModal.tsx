import { useState } from 'react';
import { X, Calculator, ArrowRight, Check } from 'lucide-react';

interface BudgetCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedWithEstimate: (details: string) => void;
}

export function BudgetCalculatorModal({
  isOpen,
  onClose,
  onProceedWithEstimate,
}: BudgetCalculatorModalProps) {
  const [projectType, setProjectType] = useState<'website' | 'sistema' | 'app' | 'cloud'>('website');
  const [timelineSpeed, setTimelineSpeed] = useState<'padrao' | 'urgente'>('padrao');
  const [features, setFeatures] = useState<string[]>(['seo', 'responsive']);

  if (!isOpen) return null;

  const basePrices = {
    website: { minMT: 35000, maxMT: 75000, minUSD: 550, maxUSD: 1200, time: '2 a 3 semanas' },
    sistema: { minMT: 95000, maxMT: 220000, minUSD: 1500, maxUSD: 3500, time: '4 a 7 semanas' },
    app: { minMT: 80000, maxMT: 180000, minUSD: 1250, maxUSD: 2800, time: '4 a 6 semanas' },
    cloud: { minMT: 45000, maxMT: 110000, minUSD: 700, maxUSD: 1700, time: '1 a 3 semanas' },
  };

  const featureAddons = [
    { id: 'seo', label: 'SEO Avançado & Google Indexação', priceMT: 8000 },
    { id: 'responsive', label: 'Design Adaptativo Mobile & Tablet', priceMT: 0 },
    { id: 'pagamentos', label: 'Integração de Pagamentos M-Pesa & Cartão', priceMT: 25000 },
    { id: 'multilingue', label: 'Suporte Multi-idioma (PT / EN)', priceMT: 12000 },
    { id: 'suporte', label: 'Plano de Manutenção e Backups (3 meses)', priceMT: 18000 },
  ];

  const toggleFeature = (id: string) => {
    if (id === 'responsive') return; // Mandatory
    if (features.includes(id)) {
      setFeatures(features.filter((f) => f !== id));
    } else {
      setFeatures([...features, id]);
    }
  };

  // Calculate totals
  const base = basePrices[projectType];
  const featureSumMT = features.reduce((acc, fId) => {
    const item = featureAddons.find((fa) => fa.id === fId);
    return acc + (item ? item.priceMT : 0);
  }, 0);

  const speedMultiplier = timelineSpeed === 'urgente' ? 1.25 : 1.0;

  const totalMinMT = Math.round((base.minMT + featureSumMT) * speedMultiplier);
  const totalMaxMT = Math.round((base.maxMT + featureSumMT) * speedMultiplier);

  const totalMinUSD = Math.round(totalMinMT / 64);
  const totalMaxUSD = Math.round(totalMaxMT / 64);

  const handleProceed = () => {
    const summary = `Estimativa calculada: Projeto ${projectType.toUpperCase()} (${totalMinMT.toLocaleString()} MT - ${totalMaxMT.toLocaleString()} MT) com funcionalidades: ${features.join(', ')}`;
    onProceedWithEstimate(summary);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#07152B] text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-bold tracking-widest uppercase mb-1">
              <Calculator className="w-4 h-4" />
              <span>SIMULADOR DE INVESTIMENTO</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Calcular Estimativa de Projeto
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 flex-1">
          {/* Step 1: Tipo de Projeto */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              1. Selecione o tipo de solução
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'website', title: 'Website', desc: 'Institucional / Portal' },
                { id: 'sistema', title: 'Sistema ERP', desc: 'Gestão & Facturação' },
                { id: 'app', title: 'App Web / PWA', desc: 'Plataforma Interativa' },
                { id: 'cloud', title: 'Cloud & IT', desc: 'Servidores & Redes' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setProjectType(t.id as any)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    projectType === t.id
                      ? 'bg-blue-50 border-[#0066FF] text-[#0066FF] shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm">{t.title}</div>
                  <div className="text-[11px] text-slate-500">{t.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Funcionalidades Adicionais */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              2. Funcionalidades e Módulos Desejados
            </label>
            <div className="space-y-2">
              {featureAddons.map((feat) => {
                const isChecked = features.includes(feat.id);
                const isMandatory = feat.id === 'responsive';

                return (
                  <div
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer ${
                      isChecked
                        ? 'bg-blue-50/50 border-blue-200 text-slate-900'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center text-white ${
                          isChecked ? 'bg-[#0066FF]' : 'border border-slate-300'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{feat.label}</span>
                    </div>

                    <span className="text-xs font-bold text-slate-500">
                      {feat.priceMT === 0 ? 'Incluído' : `+ ${feat.priceMT.toLocaleString()} MT`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 3: Prazo */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
              3. Ritmo de Execução
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setTimelineSpeed('padrao')}
                className={`p-3 rounded-xl border text-left cursor-pointer ${
                  timelineSpeed === 'padrao'
                    ? 'bg-[#0066FF] border-[#0066FF] text-white font-bold'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="text-xs font-bold">Cronograma Padrão</div>
                <div className="text-[11px] opacity-80">{base.time}</div>
              </button>
              <button
                type="button"
                onClick={() => setTimelineSpeed('urgente')}
                className={`p-3 rounded-xl border text-left cursor-pointer ${
                  timelineSpeed === 'urgente'
                    ? 'bg-[#0066FF] border-[#0066FF] text-white font-bold'
                    : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <div className="text-xs font-bold">Entrega Acelerada (+25%)</div>
                <div className="text-[11px] opacity-80">Sprint prioritário</div>
              </button>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="p-5 bg-[#05142B] rounded-2xl text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block mb-0.5">
                Estimativa Aproximada de Investimento:
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8]">
                {totalMinMT.toLocaleString()} - {totalMaxMT.toLocaleString()} MT
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Aprox. ${totalMinUSD.toLocaleString()} - ${totalMaxUSD.toLocaleString()} USD • Prazo: {base.time}
              </div>
            </div>

            <button
              onClick={handleProceed}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer shrink-0"
            >
              <span>Solicitar Orçamento Formal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center italic">
            * Valores indicativos para dimensionamento orçamental. A proposta final é ajustada após levantamento detalhado de requisitos com a sua equipa.
          </p>
        </div>
      </div>
    </div>
  );
}
