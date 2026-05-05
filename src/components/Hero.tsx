import React from 'react';
import { portfolioData } from '../data';
import { Github, Linkedin, Code, Facebook, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-28 pb-12 px-6">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-8">
        <div className="bg-teal-dark rounded-[2rem] w-full p-8 md:p-12 text-white shadow-xl flex flex-col items-center text-center relative overflow-hidden border border-white/5">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="w-32 h-32 rounded-3xl overflow-hidden border-4 border-teal-darker shadow-2xl mb-6 relative z-10">
            <img 
              src={portfolioData.photo} 
              alt={portfolioData.name} 
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">
            {portfolioData.name}
          </h1>
          <p className="text-teal-300 font-medium text-sm md:text-base mb-6">
            {portfolioData.designation}
          </p>
          <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-8 max-w-2xl px-4 text-justify [text-align-last:center]">
            {portfolioData.summary}
          </p>

          <a 
            href={portfolioData.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-teal-dark px-8 py-3 rounded-2xl font-bold text-sm shadow-lg hover:bg-teal-50 transition-all flex items-center gap-2 mb-8"
          >
            <Download size={18} />
            Download Resume
          </a>
          
          <div className="flex gap-4">
            <a href={portfolioData.socials.github} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Github size={20} /></a>
            <a href={portfolioData.socials.linkedin} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Linkedin size={20} /></a>
            <a href={portfolioData.socials.leetcode} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Code size={20} /></a>
            <a href={portfolioData.socials.facebook} className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
