import React, { useState } from 'react';
import { portfolioData } from '../data';
import { X, ExternalLink, Github } from 'lucide-react';

export function Showcase() {
  const [activeModal, setActiveModal] = useState<{ type: 'project' | 'cert', data: any } | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="max-w-4xl mx-auto px-6 pb-12 flex flex-col gap-6">
      
      {/* Projects Section */}
      <section id="projects" className="scroll-mt-32 relative">
        <div className="bg-teal-darker rounded-[2.5rem] p-8 sm:p-10 shadow-2xl flex-1 flex flex-col relative z-20">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-white font-bold text-lg tracking-tight">Featured Projects</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project) => (
              <div key={project.id} className="group relative bg-teal-dark rounded-2xl overflow-hidden shadow-lg border border-white/5 hover:scale-[1.02] transition-transform flex flex-col">
                <div className="w-full aspect-video bg-teal-900 border-b border-white/10 relative">
                  <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h4 className="text-white text-sm font-bold truncate mb-1">{project.name}</h4>
                  <p className="text-teal-300/60 text-[10px] mb-4 truncate">{project.tech}</p>
                  <button 
                    onClick={() => setActiveModal({ type: 'project', data: project })}
                    className="mt-auto w-full py-2 bg-white/10 text-white rounded-xl text-xs font-bold hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="scroll-mt-32">
        <div className="bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-xl border border-slate-200 flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-teal-dark font-bold text-lg tracking-tight">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certificates.map((cert) => (
              <div key={cert.id} className="group relative bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:scale-[1.02] transition-all flex flex-col">
                <div className="w-full aspect-[4/3] bg-white border-b border-slate-200 relative">
                  <img src={cert.image} alt={cert.name} className="absolute inset-0 w-full h-full object-contain p-4" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h4 className="text-slate-800 text-sm font-bold truncate mb-1">{cert.name}</h4>
                  <p className="text-teal-600 text-[10px] mb-4 font-semibold">{cert.date}</p>
                  <button 
                    onClick={() => setActiveModal({ type: 'cert', data: cert })}
                    className="mt-auto w-full py-2 bg-white border border-slate-200 text-teal-dark rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer shadow-sm"
                  >
                    View Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <div className="fixed inset-0 bg-teal-darker/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] w-full max-w-2xl max-h-[90vh] overflow-y-auto no-scrollbar shadow-2xl relative p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-teal-dark">{activeModal.data.name}</h2>
              <button 
                onClick={closeModal}
                className="text-slate-400 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className={`rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm relative w-full ${activeModal.type === 'cert' ? 'aspect-[4/3] bg-white' : 'aspect-video'}`}>
                <img 
                  src={activeModal.data.image} 
                  alt={activeModal.data.name} 
                  className={`absolute inset-0 w-full h-full ${activeModal.type === 'cert' ? 'object-contain p-4' : 'object-cover'}`}
                />
              </div>
              
              <div className="space-y-5">
                {activeModal.type === 'project' ? (
                  <>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Tech Stack</label>
                      <p className="text-sm font-semibold text-teal-dark">{activeModal.data.tech}</p>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Description</label>
                      <p className="text-slate-700 text-sm leading-relaxed">{activeModal.data.description}</p>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Challenges</label>
                      <p className="text-slate-700 text-sm leading-relaxed">{activeModal.data.challenges}</p>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Future</label>
                      <p className="text-slate-700 text-sm leading-relaxed">{activeModal.data.futurePlans}</p>
                    </div>
                    <div className="flex gap-3 pt-2">
                       <a href={activeModal.data.liveLink} className="flex-1 bg-teal-dark text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center shadow-lg hover:bg-teal-darker transition-colors">
                        Live Project
                      </a>
                      <a href={activeModal.data.githubLink} className="flex-1 bg-slate-100 text-teal-dark border border-slate-200 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center hover:bg-slate-200 transition-colors">
                        Repo Source
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                     <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Institution</label>
                      <p className="text-sm font-semibold text-teal-dark">{activeModal.data.tech}</p>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Date Awarded</label>
                      <p className="text-slate-700 text-sm font-medium">{activeModal.data.date}</p>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Description</label>
                      <p className="text-slate-700 text-sm leading-relaxed">{activeModal.data.description}</p>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Key Takeaway</label>
                      <p className="text-slate-700 text-sm leading-relaxed">{activeModal.data.learned}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
