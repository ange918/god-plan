"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_INFO } from '@/constants';
import { 
  ChevronDownIcon, 
  QuestionMarkCircleIcon, 
  ChatBubbleBottomCenterTextIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Quels sont les horaires des cours ?",
    answer: "Nous proposons deux sessions : Matinée (08h00 - 12h00) et Après-midi (14h30 - 18h30), du lundi au vendredi. Certains cours intensifs peuvent avoir lieu le samedi."
  },
  {
    question: "Puis-je payer en plusieurs tranches ?",
    answer: "Oui, nous offrons des facilités de paiement. Un acompte à l'inscription est requis, suivi de mensualités adaptées à votre budget."
  },
  {
    question: "Le diplôme est-il reconnu ?",
    answer: "Absolument. Nos certificats de fin de formation attestent de vos compétences professionnelles et sont largement reconnus par les employeurs du secteur privé au Bénin."
  },
  {
    question: "Proposez-vous des stages ?",
    answer: "Oui, le stage en entreprise est une composante obligatoire de nos cursus de longue durée (6 mois et plus). Nous accompagnons nos apprenants dans leur recherche de stage."
  }
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 bg-[#0F2C59] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-poppins">Contactez-nous</h1>
          <p className="text-xl text-[#F4B400] max-w-2xl mx-auto font-medium">Nous sommes là pour répondre à toutes vos questions.</p>
        </div>
      </div>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <h2 className="text-3xl font-bold text-[#0F2C59] font-poppins mb-8">Nos Coordonnées</h2>
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-[#0F2C59] text-[#F4B400] rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                  <MapPinIcon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F2C59] mb-2 font-poppins">Adresse</h3>
                  <p className="text-xl text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-[#0F2C59] text-[#F4B400] rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-transform">
                  <PhoneIcon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F2C59] mb-2 font-poppins">Téléphones</h3>
                  <p className="text-xl text-gray-600">{CONTACT_INFO.phone1}</p>
                  <p className="text-xl text-gray-600">{CONTACT_INFO.phone2}</p>
                </div>
              </div>
              
              <div className="p-10 bg-[#F5F5F5] rounded-[2.5rem] border border-gray-100 shadow-inner">
                <h4 className="font-bold text-[#0F2C59] mb-6 text-2xl font-poppins flex items-center gap-3">
                   <ChatBubbleBottomCenterTextIcon className="h-7 w-7 text-[#F4B400]" />
                   Heures de Bureau
                </h4>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Lundi - Vendredi</span>
                    <span className="font-bold text-[#0F2C59]">08h00 - 18h30</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-500">Samedi</span>
                    <span className="font-bold text-[#0F2C59]">09h00 - 14h00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-50 overflow-hidden">
               <div className="p-10 bg-[#F4B400] text-[#0F2C59]">
                  <h3 className="text-2xl font-bold font-poppins">Envoyez-nous un message</h3>
                  <p className="font-medium opacity-80 mt-2">Réponse garantie sous 24h.</p>
               </div>
               <form className="p-10 space-y-6">
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Nom complet</label>
                   <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#F4B400] outline-none transition-all" placeholder="Jean Dupont" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Email / Téléphone</label>
                   <input type="text" className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#F4B400] outline-none transition-all" placeholder="email@exemple.com" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Message</label>
                   <textarea rows={4} className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#F4B400] outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                 </div>
                 <button className="w-full py-5 bg-[#0F2C59] text-white font-bold rounded-2xl text-xl hover:bg-[#F4B400] hover:text-[#0F2C59] transition-all shadow-xl">
                   Envoyer le message
                 </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F2C59] mb-4 font-poppins flex items-center justify-center gap-3">
              <QuestionMarkCircleIcon className="h-10 w-10 text-[#F4B400]" />
              Foire Aux Questions
            </h2>
            <p className="text-lg text-gray-600 font-medium">Tout ce que vous devez savoir avant de nous rejoindre.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-bold text-[#0F2C59]">{faq.question}</span>
                  <ChevronDownIcon className={`h-6 w-6 text-[#F4B400] transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-8 pb-6 text-gray-600 text-lg leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
