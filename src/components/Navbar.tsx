import React from 'react';

export function Navbar() {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <div className="bg-teal-dark/95 backdrop-blur-md rounded-full px-6 sm:px-8 py-3 shadow-2xl flex items-center gap-6 sm:gap-8 border border-white/10">
        <div className="font-extrabold text-sm tracking-widest text-white hidden sm:block uppercase">
          Portfolio.
        </div>
        <ul className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center">
          {links.map((link, i) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className={`text-xs font-medium uppercase tracking-widest transition-colors ${i === 0 ? 'text-white font-bold hover:text-teal-300' : 'text-white/70 hover:text-white'}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
