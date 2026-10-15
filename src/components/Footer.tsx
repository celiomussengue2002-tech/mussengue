import { Logo } from './Logo';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenBlog: () => void;
  onOpenContact: () => void;
  onOpenTerms: (type: 'terms' | 'privacy') => void;
}

export function Footer({ onOpenBlog, onOpenContact, onOpenTerms }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -75;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#071732] text-white pt-16 pb-12 border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between pb-10 border-b border-slate-800/80 gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('inicio');
              }}
              className="inline-block cursor-pointer mb-2"
            >
              <Logo variant="light" size="md" />
            </a>
            <p className="text-slate-400 text-xs font-normal">
              Tecnologia que impulsiona o seu negócio.
            </p>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300">
            <button onClick={() => scrollTo('inicio')} className="hover:text-white transition-colors cursor-pointer">
              Início
            </button>
            <button onClick={() => scrollTo('servicos')} className="hover:text-white transition-colors cursor-pointer">
              Serviços
            </button>
            <button onClick={() => scrollTo('sobre-nos')} className="hover:text-white transition-colors cursor-pointer">
              Sobre Nós
            </button>
            <button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors cursor-pointer">
              Portfólio
            </button>
            <button onClick={() => scrollTo('depoimentos')} className="hover:text-white transition-colors cursor-pointer">
              Depoimentos
            </button>
            <button onClick={onOpenBlog} className="hover:text-white transition-colors cursor-pointer">
              Blog
            </button>
            <button onClick={() => scrollTo('contactos')} className="hover:text-white transition-colors cursor-pointer">
              Contactos
            </button>
          </nav>

          {/* Right Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#071732] hover:bg-[#0070F3] hover:text-white flex items-center justify-center transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 fill-current" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#071732] hover:bg-[#0070F3] hover:text-white flex items-center justify-center transition-all shadow-sm"
              aria-label="Twitter / X"
            >
              <Twitter className="w-3.5 h-3.5 fill-current" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white text-[#071732] hover:bg-[#0070F3] hover:text-white flex items-center justify-center transition-all shadow-sm"
              aria-label="YouTube"
            >
              <Youtube className="w-3.5 h-3.5 fill-current" />
            </a>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>© 2025 Biru. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenTerms('terms')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Termos de uso
            </button>
            <span>|</span>
            <button
              onClick={() => onOpenTerms('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Política de privacidade
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
