import React from 'react';
import { portfolioData } from '../data';

export function Sections() {
  return (
    <div className="max-w-4xl mx-auto px-6 pb-12 flex flex-col gap-6">
      {/* About Section */}
      <section id="about" className="scroll-mt-32">
        <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-200">
          <h3 className="text-teal-dark font-bold text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 bg-teal-500 rounded-full"></span> About Me
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed mb-6 text-justify [text-align-last:center]">
            {portfolioData.about.journey}
          </p>
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl">
            <h4 className="font-semibold text-teal-dark text-xs uppercase tracking-wider mb-4">When I'm not coding, I enjoy:</h4>
            <div className="flex flex-wrap gap-2">
              {portfolioData.about.hobbies.map((hobby, index) => (
                <span key={index} className="bg-teal-dark text-white px-3 py-1 rounded-full text-[10px] font-semibold">
                  {hobby}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Skills Section */}
        <section id="skills" className="scroll-mt-32">
          <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-200 h-full">
            <h3 className="text-teal-dark font-bold text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span> Core Skills
            </h3>
            <div className="flex flex-col gap-6">
              {portfolioData.skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-bold text-slate-500 mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-teal-dark text-white rounded-full text-[10px] font-semibold">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="scroll-mt-32">
          <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-slate-200 h-full">
            <h3 className="text-teal-dark font-bold text-sm mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span> Education
            </h3>
            <div className="relative pl-4 border-l-2 border-teal-100 space-y-6">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -left-[21px] top-1 w-2 h-2 rounded-full ${idx === 0 ? 'bg-teal-dark' : 'bg-teal-300'}`}></div>
                  <h4 className="text-sm font-bold text-slate-800">{edu.degree}</h4>
                  <p className="text-xs text-slate-500 mt-1">{edu.institution} &bull; {edu.year}</p>
                  <p className="text-[10px] text-slate-600 mt-2 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
