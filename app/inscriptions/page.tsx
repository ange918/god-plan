import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_INFO } from '@/constants';

export default function InscriptionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      <Header />
      <div className="pt-32 pb-20 bg-[#0F2C59] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">Inscriptions</h1>
          <p className="text-xl text-[#F4B400] font-medium italic">Rejoignez-nous et construisez votre avenir !</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-[#F5F5F5] p-10 rounded-3xl border border-gray-100">
              <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins">Dossier d'Inscription</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#F4B400] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#F4B400] text-[#0F2C59] rounded-full flex items-center justify-center text-sm">1</span>
                    Niveau requis
                  </h3>
                  <p className="text-lg text-gray-700 font-medium ml-10">CEP au minimum pour toutes les filières.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#F4B400] mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-[#F4B400] text-[#0F2C59] rounded-full flex items-center justify-center text-sm">2</span>
                    Pièces à fournir
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-10 font-medium">
                    <li>02 copies d'acte de naissance</li>
                    <li>02 photos d'identité</li>
                    <li>Photocopie du dernier diplôme</li>
                    <li>Frais d'inscription</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 p-8 bg-white rounded-2xl border-l-4 border-[#F4B400] shadow-sm">
                <p className="text-[#0F2C59] font-bold text-lg mb-4">Besoin d'aide ?</p>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
                >
                  Contacter via WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins">Formulaire en ligne</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                    <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F4B400] focus:border-transparent outline-none transition-all" placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Prénom</label>
                    <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F4B400] focus:border-transparent outline-none transition-all" placeholder="Votre prénom" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                  <input type="tel" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F4B400] focus:border-transparent outline-none transition-all" placeholder="Votre numéro de téléphone" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Formation choisie</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F4B400] focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                    <option>Sélectionnez une formation</option>
                    <option>Graphisme-Sérigraphie</option>
                    <option>Photographie & Design</option>
                    <option>Audiovisuel</option>
                    <option>Make-up & Onglerie</option>
                    <option>Informatique</option>
                    <option>Cuisine & Restauration</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optionnel)</label>
                  <textarea rows={4} className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#F4B400] focus:border-transparent outline-none transition-all" placeholder="Votre message..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-[#0F2C59] text-white font-bold rounded-xl text-xl hover:bg-[#F4B400] hover:text-[#0F2C59] transition-all shadow-xl">
                  Envoyer ma candidature
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
