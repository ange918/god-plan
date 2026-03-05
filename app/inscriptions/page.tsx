"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_INFO } from '@/constants';
import { formations } from '@/data/formations';

export default function InscriptionsPage() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    formation: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          nom: `${formData.nom} ${formData.prenom}`
        }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ nom: '', prenom: '', telephone: '', formation: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      <Header />
      <div className="pt-32 pb-20 bg-[#0F2C59] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-poppins uppercase tracking-tight">Inscriptions</h1>
          <p className="text-lg text-[#F4B400] font-bold italic">Construisez votre avenir avec nous !</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#F5F5F5] p-10 rounded-[2rem] border border-gray-100">
              <h2 className="text-2xl font-black text-[#0F2C59] mb-8 font-poppins uppercase tracking-tight">Dossier d'Inscription</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-black text-[#F4B400] mb-3 flex items-center gap-3 uppercase tracking-wider">
                    <span className="w-8 h-8 bg-[#F4B400] text-[#0F2C59] rounded-full flex items-center justify-center text-sm">1</span>
                    Niveau requis
                  </h3>
                  <p className="text-base text-gray-700 font-bold ml-11">CEP au minimum pour toutes les filières.</p>
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#F4B400] mb-3 flex items-center gap-3 uppercase tracking-wider">
                    <span className="w-8 h-8 bg-[#F4B400] text-[#0F2C59] rounded-full flex items-center justify-center text-sm">2</span>
                    Pièces à fournir
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-11 font-bold text-base">
                    <li>02 copies d'acte de naissance</li>
                    <li>02 photos d'identité</li>
                    <li>Photocopie du dernier diplôme</li>
                    <li>Frais d'inscription</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 p-8 bg-white rounded-2xl border-l-4 border-[#F4B400] shadow-sm">
                <p className="text-[#0F2C59] font-black text-base mb-4 uppercase tracking-wider">Besoin d'aide ?</p>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full font-black text-xs hover:scale-105 transition-all shadow-lg uppercase tracking-widest"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#0F2C59] mb-8 font-poppins uppercase tracking-tight">Formulaire en ligne</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black text-[#0F2C59] mb-2 uppercase tracking-widest">Nom</label>
                    <input 
                      required
                      type="text" 
                      value={formData.nom}
                      onChange={(e) => setFormData({...formData, nom: e.target.value})}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F4B400] outline-none text-sm font-bold" 
                      placeholder="Nom" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-[#0F2C59] mb-2 uppercase tracking-widest">Prénom</label>
                    <input 
                      required
                      type="text" 
                      value={formData.prenom}
                      onChange={(e) => setFormData({...formData, prenom: e.target.value})}
                      className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F4B400] outline-none text-sm font-bold" 
                      placeholder="Prénom" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-black text-[#0F2C59] mb-2 uppercase tracking-widest">Téléphone</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.telephone}
                    onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F4B400] outline-none text-sm font-bold" 
                    placeholder="Numéro de téléphone" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-[#0F2C59] mb-2 uppercase tracking-widest">Formation choisie</label>
                  <select 
                    required
                    value={formData.formation}
                    onChange={(e) => setFormData({...formData, formation: e.target.value})}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F4B400] outline-none text-sm font-bold cursor-pointer"
                  >
                    <option value="">Sélectionnez une formation</option>
                    {formations.map(f => (
                      <option key={f.slug} value={f.title}>{f.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-[#0F2C59] mb-2 uppercase tracking-widest">Message (Optionnel)</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F4B400] outline-none text-sm font-bold" 
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className="w-full py-4 bg-[#0F2C59] text-white font-black rounded-full text-xs hover:bg-[#F4B400] hover:text-[#0F2C59] transition-all shadow-xl uppercase tracking-widest disabled:opacity-50"
                >
                  {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma candidature'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 font-bold text-center text-sm">Votre demande a été envoyée avec succès !</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 font-bold text-center text-sm">Une erreur est survenue. Veuillez réessayer.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
