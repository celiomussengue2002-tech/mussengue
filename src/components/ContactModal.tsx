import { useState } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export function ContactModal({ isOpen, onClose, prefilledService }: ContactModalProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(
    prefilledService ? [prefilledService] : ['Desenvolvimento Web']
  );
  const [budgetRange, setBudgetRange] = useState('50.000 MT - 150.000 MT');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const availableServices = [
    'Desenvolvimento Web',
    'Sistemas Empresariais',
    'Infraestrutura Digital',
    'Suporte e Manutenção',
    'Soluções em Cloud',
    'Aplicação Mobile',
  ];

  const budgetOptions = [
    'Até 50.000 MT',
    '50.000 MT - 150.000 MT',
    '150.000 MT - 300.000 MT',
    'Acima de 300.000 MT',
    'Ainda a Definir',
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleSendToWhatsApp = () => {
    const text = `Olá Biru Technology Solutions! Gostaria de solicitar um orçamento:\n\n*Nome:* ${name}\n*Empresa:* ${company || 'N/A'}\n*Email:* ${email}\n*Telefone:* ${phone}\n*Serviços:* ${selectedServices.join(', ')}\n*Orçamento estimado:* ${budgetRange}\n*Detalhes:* ${message || 'Solicito contacto para diagnóstico.'}`;
    window.open(`https://wa.me/258841234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#07152B] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase block mb-1">
            VAMOS CONVERSAR
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
            Iniciar o Seu Projeto
          </h3>
          <p className="text-slate-300 text-sm max-w-lg font-normal">
            Preencha os detalhes abaixo para receber uma proposta técnica detalhada com diagnóstico gratuito da equipa Biru.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 flex-1">
          {submitted ? (
            /* Success State */
            <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900">
                Proposta Solicitada com Sucesso!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Obrigado, <strong className="text-slate-900">{name}</strong>. A equipa de engenharia e consultoria da Biru irá analisar as suas necessidades e responder em menos de 24 horas úteis.
              </p>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-700">
                <div><span className="font-bold text-slate-900">Serviços solicitados:</span> {selectedServices.join(', ')}</div>
                <div><span className="font-bold text-slate-900">Orçamento indicado:</span> {budgetRange}</div>
                <div><span className="font-bold text-slate-900">Contacto de retorno:</span> {email} {phone ? `| ${phone}` : ''}</div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enviar também por WhatsApp</span>
                </button>
                <button
                  onClick={resetForm}
                  className="w-full sm:w-auto px-5 py-3 rounded-lg text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Submeter novo pedido
                </button>
              </div>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. Services selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  1. Quais serviços são do seu interesse?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {availableServices.map((srv) => {
                    const isSelected = selectedServices.includes(srv);
                    return (
                      <button
                        type="button"
                        key={srv}
                        onClick={() => toggleService(srv)}
                        className={`text-xs p-2.5 rounded-xl border text-left font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-50 border-[#0066FF] text-[#0066FF] shadow-sm'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {srv}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Budget Range */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  2. Estimativa de orçamento planeado
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setBudgetRange(opt)}
                      className={`text-xs p-2.5 rounded-xl border text-center font-medium transition-all cursor-pointer ${
                        budgetRange === opt
                          ? 'bg-[#0066FF] border-[#0066FF] text-white font-bold shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Contact Details */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                  3. Os seus dados para contacto
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="O seu nome completo *"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email profissional *"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Telefone / WhatsApp (ex: +258 84 ...)"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Nome da empresa / organização"
                      className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="mt-3.5">
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte-nos um pouco sobre o projeto, objetivo ou prazos..."
                    className="w-full text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              {/* Direct Contacts Info Callout */}
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-3">
                <div className="flex items-center gap-1.5 text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>Maputo, Moçambique</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Phone className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>+258 84 123 4567</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-700">
                  <Mail className="w-3.5 h-3.5 text-[#0066FF]" />
                  <span>hello@biru.co.mz</span>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm px-7 py-3 rounded-xl shadow-lg shadow-blue-600/25 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>A enviar pedido...</span>
                  ) : (
                    <>
                      <span>Enviar Pedido de Proposta</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
