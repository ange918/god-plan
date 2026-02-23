"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Formations from '@/components/Formations';
import Features from '@/components/Features';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ServicesFormationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#0F2C59] relative overflow-hidden text-center text-white">
        <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#F4B400] font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Nos Expertises
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black mb-6 font-poppins"
          >
            Services & Formations
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto font-medium"
          >
            Découvrez nos prestations de services professionnels et nos programmes de formation certifiants.
          </motion.p>
        </div>
      </section>

      {/* Services Section (Features) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0F2C59] mb-4 uppercase tracking-tight">Nos Services Professionnels</h2>
            <div className="w-24 h-2 bg-[#F4B400] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Au-delà de la formation, nous mettons notre expertise à votre disposition pour vos projets de communication et de production.
            </p>
          </motion.div>
          <Features />
        </div>
      </section>

      {/* Formations Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#0F2C59] mb-4 uppercase tracking-tight">Nos Programmes de Formation</h2>
            <div className="w-24 h-2 bg-[#F4B400] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              Des cursus 90% pratiques pour maîtriser les métiers d'avenir et garantir votre insertion professionnelle.
            </p>
          </motion.div>
          <Formations />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0F2C59] text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tight">Besoin d'un service sur mesure ou d'une inscription ?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/inscriptions" className="bg-[#F4B400] text-[#0F2C59] px-12 py-5 rounded-full font-black text-xl hover:bg-white transition-all shadow-xl uppercase tracking-widest">
              S'inscrire
            </a>
            <a href="/contact" className="border-2 border-white px-12 py-5 rounded-full font-black text-xl hover:bg-white hover:text-[#0F2C59] transition-all uppercase tracking-widest">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
