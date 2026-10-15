import { ArrowRight } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/siteData';

interface PortfolioProps {
  onSelectProject: (projectId: string) => void;
  onViewAllProjects: () => void;
}

export function Portfolio({ onSelectProject, onViewAllProjects }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-[#071732] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Left Column: Title & Button */}
          <div className="lg:col-span-4">
            <span className="text-[#38BDF8] font-bold text-xs tracking-[0.16em] uppercase block mb-2.5">
              PORTFÓLIO
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.03em] leading-[1.15] mb-4">
              Projetos que <br />
              geram impacto.
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8 font-normal max-w-xs">
              Conheça alguns dos nossos trabalhos e veja como ajudamos empresas a crescer com tecnologia.
            </p>

            <button
              onClick={onViewAllProjects}
              className="inline-flex items-center gap-2 border border-slate-600 hover:border-slate-400 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-lg bg-transparent hover:bg-white/5 transition-all cursor-pointer"
            >
              <span>Ver todos os projetos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column: 3 Project Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-5">
            {projectsData.map((project: ProjectItem) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-800/40 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-36 lg:h-44 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Card Text Content */}
                <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[11px] font-semibold text-[#0070F3] block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#0F172A] mb-3 leading-snug group-hover:text-[#0070F3] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0070F3]">
                      <span>Ver projeto</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
