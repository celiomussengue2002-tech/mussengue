import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { MetricsBanner } from './components/MetricsBanner';
import { ProcessSection } from './components/ProcessSection';
import { Testimonials } from './components/Testimonials';
import { Portfolio } from './components/Portfolio';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { BlogModal } from './components/BlogModal';
import { BudgetCalculatorModal } from './components/BudgetCalculatorModal';
import { TermsModal } from './components/TermsModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { servicesData, ServiceItem } from './data/siteData';

export default function App() {
  // Modal states
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);
  const [termsModalType, setTermsModalType] = useState<'terms' | 'privacy' | null>(null);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  // Handlers
  const handleSelectServiceById = (serviceId: string) => {
    const s = servicesData.find((item) => item.id === serviceId);
    if (s) {
      setSelectedService(s);
    }
  };

  const handleOpenContactWithService = (serviceName?: string) => {
    setPrefilledService(serviceName);
    setIsContactModalOpen(true);
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setIsProjectModalOpen(true);
  };

  const handleViewAllProjects = () => {
    setSelectedProjectId(null);
    setIsProjectModalOpen(true);
  };

  const handleProceedWithEstimate = (details: string) => {
    setPrefilledService(details);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar
        onOpenContact={() => handleOpenContactWithService()}
        onOpenBlog={() => setIsBlogModalOpen(true)}
        onSelectService={handleSelectServiceById}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onExploreServices={() => {
            const el = document.getElementById('servicos');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onTalkToTeam={() => handleOpenContactWithService()}
        />

        {/* 3. Services Section ("OS NOSSOS SERVIÇOS") */}
        <Services
          onSelectService={handleSelectServiceById}
        />

        {/* 4. About Us Section ("SOBRE NÓS") */}
        <AboutUs
          onLearnMore={() => {
            const el = document.getElementById('processo');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 5. Metrics Banner ("EM NÚMEROS") */}
        <MetricsBanner />

        {/* 6. Process Section ("COMO FUNCIONA") */}
        <ProcessSection />

        {/* 7. Testimonials Section ("DEPOIMENTOS") */}
        <Testimonials />

        {/* 8. Portfolio Section ("PORTFÓLIO") */}
        <Portfolio
          onSelectProject={handleSelectProject}
          onViewAllProjects={handleViewAllProjects}
        />

        {/* 9. Contact Section ("VAMOS TRABALHAR JUNTOS") */}
        <ContactSection
          onOpenContactModal={() => handleOpenContactWithService()}
        />
      </main>

      {/* 10. Footer Section */}
      <Footer
        onOpenBlog={() => setIsBlogModalOpen(true)}
        onOpenContact={() => handleOpenContactWithService()}
        onOpenTerms={(type) => setTermsModalType(type)}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Modals */}
      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestProposal={(title) => handleOpenContactWithService(title)}
      />

      {/* Project Case Study / Gallery Modal */}
      <ProjectModal
        projectId={selectedProjectId}
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        onRequestSimilarProject={(title) => handleOpenContactWithService(`Projeto semelhante a: ${title}`)}
      />

      {/* Contact & Proposal Modal ("Vamos Conversar") */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        prefilledService={prefilledService}
      />

      {/* Blog Articles Modal */}
      <BlogModal
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
        onOpenContact={() => handleOpenContactWithService('Artigo do Blog')}
      />

      {/* Budget Calculator Modal */}
      <BudgetCalculatorModal
        isOpen={isCalculatorModalOpen}
        onClose={() => setIsCalculatorModalOpen(false)}
        onProceedWithEstimate={handleProceedWithEstimate}
      />

      {/* Terms and Privacy Modal */}
      <TermsModal
        type={termsModalType}
        onClose={() => setTermsModalType(null)}
      />
    </div>
  );
}
