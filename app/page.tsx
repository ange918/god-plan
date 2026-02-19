import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Formations from '@/components/Formations';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { CONTACT_INFO, SERVICES } from '@/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Vision & Why Us Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#F4B400]/10 rounded-full blur-3xl"></div>
              <h2 className="text-4xl font-bold text-[#0F2C59] mb-8 font-poppins relative">Notre Vision</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 italic border-l-4 border-[#F4B400] pl-6 font-medium">
                "Devenir le pôle d'excellence de référence au Bénin pour la formation aux métiers numériques et artisanaux, où chaque talent est transformé en expertise."
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Nous croyons que l'autonomisation passe par la maîtrise de compétences concrètes. Notre centre s'engage à réduire le fossé entre la formation théorique et les exigences réelles du marché du travail.
              </p>
              
              <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins">Pourquoi nous choisir ?</h2>
              <div className="space-y-6">
                {[
                  { t: "90% de Pratique", d: "Nos cours sont basés sur des ateliers concrets et des projets réels." },
                  { t: "Matériel Moderne", d: "Accès à des outils et logiciels de dernière génération." },
                  { t: "Insertion Garantie", d: "Stage en entreprise intégré à chaque cursus de longue durée." },
                  { t: "Diplôme Qualifiant", d: "Une certification reconnue pour booster votre employabilité." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl hover:bg-[#F5F5F5] transition-colors border border-transparent hover:border-gray-100">
                    <div className="w-12 h-12 bg-[#0F2C59] text-[#F4B400] rounded-xl flex items-center justify-center shrink-0 font-bold">
                       {i+1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F2C59] text-lg">{item.t}</h4>
                      <p className="text-gray-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000" alt="Formation" className="w-full h-full object-cover" />
                </div>
                <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                   <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000" alt="Design" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-80 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                   <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000" alt="Tech" className="w-full h-full object-cover" />
                </div>
                <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                   <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000" alt="Team" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Formations />
      
      <Features />

      <Footer />
    </main>
  );
}
