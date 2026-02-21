"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Formations from '@/components/Formations';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { CONTACT_INFO, SERVICES } from '@/constants';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  LightBulbIcon, 
  UserGroupIcon, 
  RocketLaunchIcon, 
  AcademicCapIcon,
  ArrowRightIcon,
  MapPinIcon,
  PhoneIcon,
  BriefcaseIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      
      {/* Home About Section */}
      <section className="py-24 bg-[#F5F5F5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <span className="text-[#F4B400] font-black uppercase tracking-[0.3em] text-sm mb-4 block">Découvrez Notre Centre</span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0F2C59] mb-8 font-poppins leading-tight">
                L'Excellence au Service de <br className="hidden md:block" />
                <span className="text-[#F4B400]">Votre Avenir Professionnel</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                <p>
                  Le CFPA GOD'S PLAN est bien plus qu'un simple centre de formation. C'est un véritable tremplin vers l'emploi. Nous avons conçu nos programmes pour répondre aux exigences réelles des entreprises modernes au Bénin.
                </p>
                <p>
                  Notre approche pédagogique unique, basée à 90% sur la pratique, garantit que chaque apprenant sort de nos ateliers avec une maîtrise opérationnelle immédiate.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <Link href="/a-propos" className="bg-[#0F2C59] text-white px-8 py-4 rounded-full font-black hover:bg-[#F4B400] hover:text-[#0F2C59] transition-all shadow-lg active:scale-95 uppercase text-sm tracking-widest">
                  Notre Histoire
                </Link>
                <Link href="/galerie" className="border-2 border-[#0F2C59] text-[#0F2C59] px-8 py-4 rounded-full font-black hover:bg-[#0F2C59] hover:text-white transition-all active:scale-95 uppercase text-sm tracking-widest">
                  Voir la galerie
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                <img 
                  src="/home-about.jpg" 
                  alt="Étudiants GOD'S PLAN" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#F4B400] p-8 rounded-[2rem] shadow-xl text-[#0F2C59] border-4 border-[#0F2C59]">
                <p className="text-4xl font-black leading-none">100%</p>
                <p className="font-bold uppercase tracking-widest text-xs mt-1">Pratique Immédiate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              {...fadeInUp}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F4B400]/10 rounded-full blur-3xl"></div>
              <h2 className="text-4xl font-bold text-[#0F2C59] mb-8 font-poppins relative flex items-center gap-3">
                <LightBulbIcon className="h-10 w-10 text-[#F4B400]" />
                Notre Vision
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 italic border-l-4 border-[#F4B400] pl-6 font-medium">
                "Devenir le pôle d'excellence de référence au Bénin pour la formation aux métiers numériques et artisanaux, où chaque talent est transformé en expertise."
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Nous croyons que l'autonomisation passe par la maîtrise de compétences concrètes. Notre centre s'engage à réduire le fossé entre la formation théorique et les exigences réelles du marché du travail.
              </p>
              
              <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins flex items-center gap-3">
                <UserGroupIcon className="h-8 w-8 text-[#F4B400]" />
                Pourquoi nous choisir ?
              </h2>
              <div className="space-y-6">
                {[
                  { t: "90% de Pratique", d: "Nos cours sont basés sur des ateliers concrets et des projets réels.", icon: RocketLaunchIcon },
                  { t: "Matériel Moderne", d: "Accès à des outils et logiciels de dernière génération.", icon: AcademicCapIcon },
                  { t: "Insertion Garantie", d: "Stage en entreprise intégré à chaque cursus de longue durée.", icon: BriefcaseIcon },
                  { t: "Diplôme Qualifiant", d: "Une certification reconnue pour booster votre employabilité.", icon: CheckCircleIcon }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-5 rounded-2xl hover:bg-[#F5F5F5] transition-colors border border-transparent hover:border-gray-100 group"
                  >
                    <div className="w-12 h-12 bg-[#0F2C59] text-[#F4B400] rounded-xl flex items-center justify-center shrink-0 font-bold group-hover:scale-110 transition-transform">
                       <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2C59] text-lg">{item.t}</h4>
                      <p className="text-gray-600">{item.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              {...fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
                  <img src="/vision-1.jpg" alt="Formation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
                   <img src="/vision-2.jpg" alt="Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
                   <img src="/vision-3.jpg" alt="Tech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white group">
                   <img src="/vision-4.jpg" alt="Team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div {...fadeInUp}>
        <Formations />
      </motion.div>
      
      <motion.div {...fadeInUp}>
        <Features />
      </motion.div>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F2C59] relative overflow-hidden text-center text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4B400]/10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F4B400]/10 rounded-full -ml-32 -mb-32 animate-pulse"></div>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 relative z-10"
        >
          <h2 className="text-3xl lg:text-5xl font-black mb-8 font-poppins uppercase tracking-tight">Prêt à construire votre avenir ?</h2>
          <Link href="/inscriptions" className="inline-block bg-[#F4B400] text-[#0F2C59] px-16 py-6 rounded-full font-black text-2xl hover:bg-white transition-all shadow-2xl hover:scale-110 active:scale-95 uppercase tracking-widest">
            Je m'inscris maintenant
          </Link>
        </motion.div>
      </section>

      {/* Contact Section Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2C59] mb-4 font-poppins">Contactez-nous</h2>
              <p className="text-gray-600 mb-10 text-lg">Nous sommes à votre écoute pour toute question ou demande d'inscription.</p>
              <div className="space-y-8">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center text-[#0F2C59] shrink-0 group-hover:bg-[#F4B400] transition-colors">
                    <MapPinIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Adresse</h4>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center text-[#0F2C59] shrink-0 group-hover:bg-[#F4B400] transition-colors">
                    <PhoneIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Téléphones</h4>
                    <p className="text-gray-600">{CONTACT_INFO.phone1}</p>
                    <p className="text-gray-600">{CONTACT_INFO.phone2}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.312345678901!2d2.445678!3d6.356789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023555555555555%3A0x5555555555555555!2sAkpakpa%20St%20Martin%2C%20Cotonou!5e0!3m2!1sfr!2sbj!4v1710000000000!5m2!1sfr!2sbj" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
