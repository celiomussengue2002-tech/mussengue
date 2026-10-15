import { useState } from 'react';
import { X, ArrowRight, CheckCircle2, TrendingUp, Layers, Building } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/siteData';

interface ProjectModalProps {
  projectId: string | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestSimilarProject: (projectTitle: string) => void;
}

export function ProjectModal({
  projectId,
  isOpen,
  onClose,
  onRequestSimilarProject,
}: ProjectModalProps) {
  const [activeFilter, setActiveFilter] = useState<'todos' | 'web' | 'sistemas' | 'app'>('todos');
  const [selectedId, setSelectedId] = useState<string | null>(projectId);

  // Sync selectedId when modal opens with specific projectId
  if (!isOpen) return null;

  const currentProject = selectedId
    ? projectsData.find((p) => p.id === selectedId) || null
    : null;

  const filteredProjects = activeFilter === 'todos'
    ? projectsData
    : projectsData.filter((p) => p.categorySlug === activeFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#05142B] text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase block mb-1">
              PORTFÓLIO DE IMPACTO
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {currentProject ? currentProject.title : 'Galeria de Projetos Biru'}
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

        {/* View Mode: Single Project Case Study vs Project Gallery */}
        {currentProject ? (
          /* Case Study Detail View */
          <div className="flex-1 p-6 sm:p-8 space-y-7">
            {/* Project Navigation bar */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <button
                onClick={() => setSelectedId(null)}
                className="text-xs font-bold text-[#0066FF] hover:underline flex items-center gap-1 cursor-pointer"
              >
                ← Ver todos os projetos
              </button>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">Trocar projeto:</span>
                {projectsData.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedId(p.id)}
                    className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      p.id === currentProject.id
                        ? 'bg-[#0066FF] text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {p.title}
                  </button>
                ))}
              </div>
            </div>

            {/* High-res Hero Mockup */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900 max-h-80 sm:max-h-96">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-bold text-white flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{currentProject.client}</span>
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50/40 p-5 rounded-2xl border border-red-100/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-red-900 mb-2">
                  O Desafio do Cliente
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {currentProject.challenge}
                </p>
              </div>

              <div className="bg-blue-50/40 p-5 rounded-2xl border border-blue-100/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0055D4] mb-2">
                  A Solução Biru
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  {currentProject.solution}
                </p>
              </div>
            </div>

            {/* Results & Metrics */}
            <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Resultados e Impacto Medido</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentProject.results.map((res, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-emerald-200/60 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Tecnologias Utilizadas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentProject.techUsed.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Gallery View with Filter Tabs */
          <div className="flex-1 p-6 sm:p-8 space-y-6">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 pb-2 overflow-x-auto">
              {[
                { id: 'todos', label: 'Todos os Projetos' },
                { id: 'web', label: 'Websites Institucionais' },
                { id: 'sistemas', label: 'Sistemas Empresariais' },
                { id: 'app', label: 'Aplicações Web & Mobile' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#0066FF] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Grid of Projects */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {filteredProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative h-44 overflow-hidden bg-slate-900">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/80 px-2.5 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 flex flex-col justify-between flex-grow">
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-1 group-hover:text-[#0066FF] transition-colors">
                        {p.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                        {p.summary}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-[#0066FF] flex items-center gap-1 group-hover:underline">
                      <span>Ver estudo de caso</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
          <button
            onClick={() => {
              onRequestSimilarProject(currentProject?.title || 'Novo Projeto');
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0052cc] text-white text-sm font-bold px-6 py-3 rounded-lg shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>Quero um projeto com este padrão</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
