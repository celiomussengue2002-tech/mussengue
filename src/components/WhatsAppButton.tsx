import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    const text = 'Olá Biru! Gostaria de falar sobre soluções de tecnologia para a minha empresa.';
    window.open(`https://wa.me/258841234567?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 select-none">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-2xl shadow-xl border border-slate-200 text-xs font-medium text-slate-800 animate-in fade-in slide-in-from-right-4 duration-300">
          <span>Precisa de ajuda imediata? Fale no WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-slate-700 ml-1 p-0.5 rounded cursor-pointer"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <button
        onClick={handleClick}
        className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-ping pointer-events-none" />
        <MessageSquare className="w-6 h-6 fill-white" />
      </button>
    </div>
  );
}
