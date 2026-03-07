"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const images = [
  { src: "/hero-bg.jpg", alt: "Façade du centre CFPA GOD'S PLAN", category: "Établissement" },
  { src: "/centre-photo.jpg", alt: "Vue d'ensemble du centre", category: "Établissement" },
  { src: "/home-about.jpg", alt: "Étudiants en formation pratique", category: "Formations" },
  { src: "/vision-1.jpg", alt: "Salle informatique moderne", category: "Installations" },
  { src: "/vision-2.jpg", alt: "Atelier de design graphique", category: "Formations" },
  { src: "/vision-3.jpg", alt: "Séance de travail pratique", category: "Formations" },
  { src: "/vision-4.jpg", alt: "Équipe pédagogique et étudiants", category: "Événements" },
  { src: "/gallery-1.jpg", alt: "Matériel de formation de pointe", category: "Installations" },
  { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070", alt: "Atelier de sérigraphie", category: "Ateliers" },
  { src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=2070", alt: "Studio photographie", category: "Ateliers" },
  { src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071", alt: "Espace Beauté et Make-up", category: "Ateliers" },
  { src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2070", alt: "Bureautique et Secrétariat", category: "Formations" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            Immersion
          </motion.span>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black mb-6 font-poppins uppercase"
          >
            Notre Galerie
          </motion.h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-medium">
            Découvrez en images la vie au centre, nos installations et les réalisations de nos apprenants.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-[2rem] border-4 border-white shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-[#F4B400] text-xs font-black uppercase tracking-widest mb-2">{image.category}</span>
                  <p className="text-white font-bold text-lg leading-tight">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Image agrandie"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#F5F5F5] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#0F2C59] mb-8 uppercase tracking-tight">Voulez-vous nous rejoindre ?</h2>
          <a 
            href="/inscriptions" 
            className="inline-block bg-[#0F2C59] text-white px-8 py-3 rounded-full font-black text-xs hover:bg-[#F4B400] hover:text-[#0F2C59] transition-all shadow-xl active:scale-95 uppercase tracking-widest"
          >
            S'inscrire maintenant
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
