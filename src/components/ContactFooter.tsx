import React from 'react';
import { portfolioData } from '../data';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="max-w-4xl mx-auto px-6 pb-12 scroll-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          
          {/* Contact Details Card */}
          <div className="md:col-span-2 bg-white rounded-[2rem] p-8 shadow-xl border border-slate-200">
            <h3 className="text-teal-dark font-bold text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span> Contact Info
            </h3>
            
            <div className="flex flex-col gap-6 text-sm">
              <a href={`mailto:${portfolioData.contact.email}`} className="flex items-center gap-3 text-slate-700 hover:text-teal-dark transition-colors">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-dark shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Email</div>
                  <span className="font-medium truncate max-w-[150px] sm:max-w-none block">{portfolioData.contact.email}</span>
                </div>
              </a>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-dark shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">Phone</div>
                  <span className="font-medium">{portfolioData.contact.phone}</span>
                </div>
              </div>
              <a href={`https://wa.me/${portfolioData.contact.whatsapp.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-slate-700 hover:text-teal-dark transition-colors">
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 mb-0.5">WhatsApp</div>
                  <span className="font-medium">{portfolioData.contact.whatsapp}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form Details */}
          <div className="md:col-span-3 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-200">
            <h3 className="text-teal-dark font-bold text-sm mb-6 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span> Send a Message
            </h3>
            <form className="flex flex-col gap-4 text-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-teal-dark/20 focus:border-teal-dark/50 focus:outline-none transition-all"
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-teal-dark/20 focus:border-teal-dark/50 focus:outline-none transition-all"
                />
              </div>
              <textarea 
                placeholder="Your Message..." 
                rows={4}
                className="w-full bg-slate-50 border border-slate-100 rounded-xl p-3 text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-teal-dark/20 focus:border-teal-dark/50 focus:outline-none transition-all resize-none"
              ></textarea>
              <button 
                className="w-full sm:w-auto self-end bg-teal-dark hover:bg-teal-darker text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2 text-xs uppercase tracking-wider"
              >
                <Send size={14} /> Send
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col sm:flex-row justify-between items-center px-8 py-6 max-w-4xl mx-auto border-t border-slate-200 mt-4 gap-4">
        <p className="text-[10px] text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.
        </p>
        <div className="flex gap-4 text-[10px] font-bold text-teal-dark uppercase tracking-wide">
          <span className="cursor-pointer hover:text-teal-600 transition-colors">Privacy</span>
          <span className="cursor-pointer hover:text-teal-600 transition-colors">Terms</span>
          <span className="cursor-pointer hover:text-teal-600 transition-colors">Credits</span>
        </div>
      </footer>
    </>
  );
}
