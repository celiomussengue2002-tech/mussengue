import { X, ShieldCheck } from 'lucide-react';

interface TermsModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export function TermsModal({ type, onClose }: TermsModalProps) {
  if (!type) return null;

  const isTerms = type === 'terms';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 bg-[#07152B] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#38BDF8]" />
            <h3 className="text-xl font-bold text-white">
              {isTerms ? 'Termos de Uso' : 'Política de Privacidade & Proteção de Dados'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-sm text-slate-700 leading-relaxed flex-1">
          {isTerms ? (
            <>
              <p className="font-semibold text-slate-900">
                1. Objeto e Serviços Biru
              </p>
              <p>
                A Biru Technology Solutions, sediada em Maputo, Moçambique, presta serviços especializados em consultoria de tecnologia da informação, desenvolvimento de software personalizado, infraestrutura digital e gestão em cloud.
              </p>
              <p className="font-semibold text-slate-900">
                2. Direitos de Propriedade Intelectual
              </p>
              <p>
                Todo o código-fonte, arquitetura e ativos desenvolvidos sob contrato passam a ser de titularidade do cliente mediante a liquidação integral dos valores acordados em proposta comercial e contrato de prestação de serviços.
              </p>
              <p className="font-semibold text-slate-900">
                3. Níveis de Serviço (SLA) & Garantia
              </p>
              <p>
                Todos os websites e sistemas desenvolvidos contam com período de garantia técnica de 90 dias após homologação, com suporte corretivo prioritário sem custos adicionais.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-900">
                1. Compromisso de Confidencialidade
              </p>
              <p>
                A Biru respeita a privacidade e o sigilo de todas as informações comerciais, estratégicas e operacionais compartilhadas pelos nossos clientes durante diagnósticos e execuções contratuais.
              </p>
              <p className="font-semibold text-slate-900">
                2. Tratamento e Proteção de Dados
              </p>
              <p>
                Os dados recolhidos através de formulários de contacto (nome, email, telefone e empresa) são utilizados estritamente para envio de orçamentos, comunicação direta e suporte técnico, não sendo comercializados ou transferidos a terceiros.
              </p>
              <p className="font-semibold text-slate-900">
                3. Segurança da Informação
              </p>
              <p>
                Utilizamos encriptação TLS/SSL em todas as comunicações, alojamento em servidores certificados e padrões de segurança de alto nível para proteger qualquer base de dados corporativa.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#0066FF] text-white text-xs font-bold hover:bg-[#0052cc] transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
