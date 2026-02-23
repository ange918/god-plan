"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/a-propos", label: "À Propos" },
    { href: "/services-formations", label: "Services & Formations" },
    { href: "/galerie", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-14 h-14 overflow-hidden rounded-xl border-2 border-[#0F2C59] group-hover:scale-105 transition-transform bg-white flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="Logo CFPA GOD'S PLAN"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <span className="text-xl font-black text-[#0F2C59] tracking-tighter leading-none hidden sm:block">
                GOD'S<br/>PLAN
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-700 hover:text-[#0F2C59] font-bold transition-colors text-sm uppercase tracking-wider">
                {link.label}
              </Link>
            ))}
            <Link 
              href="/inscriptions" 
              className="bg-[#F4B400] text-[#0F2C59] px-6 py-2.5 rounded-full font-black hover:bg-[#0F2C59] hover:text-white transition-all shadow-md active:scale-95 text-sm uppercase tracking-wider"
            >
              S'inscrire
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#0F2C59] hover:bg-[#F5F5F5] focus:outline-none transition-colors"
            >
              <svg className="h-8 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-base font-black text-gray-700 hover:text-[#0F2C59] hover:bg-gray-50 rounded-2xl transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/inscriptions"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#F4B400] text-[#0F2C59] px-4 py-5 rounded-2xl font-black mt-6 text-lg uppercase tracking-widest shadow-lg active:scale-95 transition-all"
            >
              S'inscrire
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
