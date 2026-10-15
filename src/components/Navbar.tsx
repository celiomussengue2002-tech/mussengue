import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { ArrowRight, ChevronDown, Menu, X, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenBlog: () => void;
  onSelectService: (serviceId: string) => void;
}

export function Navbar({ onOpenContact, onOpenBlog, onSelectService }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['inicio', 'servicos', 'sobre-nos', 'portfolio', 'depoimentos', 'contactos'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-slate-100 py-3'
          : 'bg-white py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
            className="flex items-center cursor-pointer select-none"
          >
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Início */}
            <button
              onClick={() => scrollToSection('inicio')}
              className={`relative text-[14px] font-medium transition-colors py-1 cursor-pointer ${
                activeSection === 'inicio' ? 'text-[#0F172A] font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Início
              {activeSection === 'inicio' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0070F3] rounded-full" />
              )}
            </button>

            {/* Serviços with dropdown */}
            <div className="relative group">
              <button
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  scrollToSection('servicos');
                }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`relative flex items-center gap-1 text-[14px] font-medium transition-colors py-1 cursor-pointer ${
                  activeSection === 'servicos' ? 'text-[#0F172A] font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Serviços</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform" />
                {activeSection === 'servicos' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0070F3] rounded-full" />
                )}
              </button>

              {/* Dropdown menu */}
              <div
                onMouseLeave={() => setServicesDropdownOpen(false)}
                className={`absolute top-full -left-2 w-64 pt-2 transition-all duration-200 ${
                  servicesDropdownOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-1.5 space-y-0.5">
                  {[
                    { id: 'desenvolvimento-web', title: 'Desenvolvimento Web' },
                    { id: 'sistemas-empresariais', title: 'Sistemas Empresariais' },
                    { id: 'infraestrutura-digital', title: 'Infraestrutura Digital' },
                    { id: 'suporte-e-manutencao', title: 'Suporte e Manutenção' },
                    { id: 'solucoes-em-cloud', title: 'Soluções em Cloud' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        onSelectService(s.id);
                        setServicesDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#0070F3] hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sobre Nós */}
            <button
              onClick={() => scrollToSection('sobre-nos')}
              className={`relative text-[14px] font-medium transition-colors py-1 cursor-pointer ${
                activeSection === 'sobre-nos' ? 'text-[#0F172A] font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sobre Nós
              {activeSection === 'sobre-nos' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0070F3] rounded-full" />
              )}
            </button>

            {/* Portfólio */}
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`relative text-[14px] font-medium transition-colors py-1 cursor-pointer ${
                activeSection === 'portfolio' ? 'text-[#0F172A] font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Portfólio
              {activeSection === 'portfolio' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0070F3] rounded-full" />
              )}
            </button>

            {/* Depoimentos */}
            <button
              onClick={() => scrollToSection('depoimentos')}
              className={`relative text-[14px] font-medium transition-colors py-1 cursor-pointer ${
                activeSection === 'depoimentos' ? 'text-[#0F172A] font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Depoimentos
              {activeSection === 'depoimentos' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0070F3] rounded-full" />
              )}
            </button>

            {/* Blog */}
            <button
              onClick={onOpenBlog}
              className="text-[14px] font-medium text-slate-600 hover:text-slate-900 py-1 transition-colors cursor-pointer"
            >
              Blog
            </button>

            {/* Contactos */}
            <button
              onClick={() => scrollToSection('contactos')}
              className={`relative text-[14px] font-medium transition-colors py-1 cursor-pointer ${
                activeSection === 'contactos' ? 'text-[#0F172A] font-semibold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Contactos
              {activeSection === 'contactos' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0070F3] rounded-full" />
              )}
            </button>
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-[#0070F3] hover:bg-[#005fd1] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>Vamos Conversar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenContact}
              className="bg-[#0070F3] text-white text-xs font-semibold px-3 py-1.5 rounded-md"
            >
              Conversar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => scrollToSection('inicio')}
            className="block w-full text-left py-1.5 text-sm font-semibold text-slate-800"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="block w-full text-left py-1.5 text-sm font-medium text-slate-700"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('sobre-nos')}
            className="block w-full text-left py-1.5 text-sm font-medium text-slate-700"
          >
            Sobre Nós
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="block w-full text-left py-1.5 text-sm font-medium text-slate-700"
          >
            Portfólio
          </button>
          <button
            onClick={() => scrollToSection('depoimentos')}
            className="block w-full text-left py-1.5 text-sm font-medium text-slate-700"
          >
            Depoimentos
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBlog();
            }}
            className="block w-full text-left py-1.5 text-sm font-medium text-slate-700"
          >
            Blog
          </button>
          <button
            onClick={() => scrollToSection('contactos')}
            className="block w-full text-left py-1.5 text-sm font-medium text-slate-700"
          >
            Contactos
          </button>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0070F3] text-white py-2.5 rounded-lg text-xs font-semibold"
            >
              <span>Vamos Conversar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
