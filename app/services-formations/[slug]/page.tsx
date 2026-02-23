"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formations } from '@/data/formations';
import { notFound } from 'next/navigation';
import { ClockIcon, CurrencyDollarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import React from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function FormationDetailPage({ params }: { params: { slug: string } }) {
  const unwrappedParams = React.use(params as any) as { slug: string };
  const formation = formations.find(f => f.slug === unwrappedParams.slug);

  if (!formation) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Dynamic Hero with Background Image */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-center text-white">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000"
          style={{ backgroundImage: `url('${formation.image}')` }}
        >
          <div className="absolute inset-0 bg-[#0F2C59]/85 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 bg-[#F4B400] text-[#0F2C59] font-black rounded-full text-[10px] uppercase tracking-widest mb-6"
          >
            {formation.category}
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black mb-8 font-poppins leading-tight uppercase tracking-tighter"
          >
            {formation.title}
          </motion.h1>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              <ClockIcon className="h-4 w-4 text-[#F4B400]" />
              <span className="font-bold text-xs">{formation.duree}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              <CurrencyDollarIcon className="h-4 w-4 text-[#F4B400]" />
              <span className="font-bold text-xs">{formation.cout}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contenu */}
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl font-black text-[#0F2C59] mb-8 font-poppins border-b-4 border-[#F4B400] inline-block pb-1 uppercase tracking-tight">Programme</h2>
              <div className="grid grid-cols-1 gap-3">
                {formation.contenu.map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-[#F5F5F5] rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group">
                    <div className="w-6 h-6 bg-[#0F2C59] text-[#F4B400] rounded-md flex items-center justify-center shrink-0 font-bold text-sm group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-bold text-base">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Débouchés */}
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-2xl font-black text-[#0F2C59] mb-8 font-poppins border-b-4 border-[#F4B400] inline-block pb-1 uppercase tracking-tight">Débouchés</h2>
              <div className="bg-[#0F2C59] p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4B400]/10 rounded-full -mr-16 -mt-16"></div>
                <div className="space-y-4 relative z-10">
                  {formation.debouches.map((job, index) => (
                    <div key={index} className="flex items-center gap-3 text-white">
                      <CheckCircleIcon className="h-5 w-5 text-[#F4B400] shrink-0" />
                      <span className="text-lg font-bold italic">{job}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inscription CTA card */}
              <div className="mt-10 p-6 bg-[#F4B400] rounded-[2rem] shadow-xl text-center border-4 border-[#0F2C59]">
                <h3 className="text-xl font-black text-[#0F2C59] mb-4 uppercase">Inscrivez-vous</h3>
                <a 
                  href="/inscriptions" 
                  className="inline-block bg-[#0F2C59] text-white px-8 py-3 rounded-full font-black text-sm hover:bg-white hover:text-[#0F2C59] transition-all shadow-lg active:scale-95 uppercase tracking-widest"
                >
                  Réserver ma place
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
