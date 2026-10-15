import { useState } from 'react';
import { X, BookOpen, Clock, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/siteData';

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export function BlogModal({ isOpen, onClose, onOpenContact }: BlogModalProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 bg-[#07152B] text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[#38BDF8] text-xs font-bold tracking-widest uppercase block mb-1">
              BLOG & CONHECIMENTO
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {selectedPost ? selectedPost.title : 'Artigos & Insights de Tecnologia'}
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
        <div className="p-6 sm:p-8 flex-1">
          {selectedPost ? (
            /* Single Article View */
            <div className="space-y-6">
              <button
                onClick={() => setSelectedPost(null)}
                className="text-xs font-bold text-[#0066FF] hover:underline flex items-center gap-1 cursor-pointer"
              >
                ← Voltar a todos os artigos
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="bg-blue-50 text-[#0066FF] font-semibold px-2.5 py-1 rounded-md">
                  {selectedPost.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}
                </span>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="p-5 bg-blue-50/60 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Quer aplicar estas soluções na sua empresa?
                  </h4>
                  <p className="text-xs text-slate-600">
                    Fale com os nossos especialistas e transforme os seus processos hoje.
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="shrink-0 bg-[#0066FF] text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm hover:bg-[#0052cc] transition-colors cursor-pointer"
                >
                  Falar Connosco
                </button>
              </div>
            </div>
          ) : (
            /* Article Listing */
            <div className="space-y-5">
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Artigos práticos, guias e tendências de inovação tecnológica focados na realidade das empresas em Moçambique e no mercado global.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="group bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2">
                        <span className="font-bold text-[#0066FF] bg-blue-50 px-2 py-0.5 rounded">
                          {post.category}
                        </span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0066FF] transition-colors">
                        {post.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-2 text-xs font-bold text-[#0066FF] flex items-center gap-1 group-hover:underline">
                      <span>Ler artigo completo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-lg text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
