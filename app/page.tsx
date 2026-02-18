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
      
      <Features />

      {/* Presentation Section */}
      <section id="a-propos" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-[#0F2C59] mb-6 font-poppins tracking-tight">À Propos de GOD’S PLAN</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le Centre Privé de Formation Professionnelle GOD’S PLAN est un établissement dédié au développement des compétences pratiques et professionnelles, visant l’insertion socio-professionnelle et l’autonomisation des apprenants.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['Encadrement qualifié', 'Formation pratique', 'Outils modernes', 'Métiers d’avenir'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="text-[#F4B400] font-bold text-xl">✓</span>
                    <span className="font-bold text-[#0F2C59]">{item}</span>
                  </div>
                ))}
              </div>
              <Link 
                href="/a-propos" 
                className="inline-flex items-center text-[#0F2C59] font-bold hover:text-[#F4B400] transition-colors group"
              >
                En savoir plus sur notre mission
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
            <div className="lg:w-1/2 bg-gray-200 h-96 rounded-3xl flex items-center justify-center text-[#0F2C59]/20 font-bold uppercase tracking-widest italic border-4 border-white shadow-xl overflow-hidden relative group">
               <div className="absolute inset-0 bg-[#0F2C59]/10 group-hover:bg-transparent transition-colors"></div>
               <span className="relative z-10 font-bold uppercase tracking-widest text-[#0F2C59]/40 text-xl">Photo du Centre</span>
            </div>
          </div>
        </div>
      </section>

      <Formations />

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0F2C59] mb-4 font-poppins">Nos Services Professionnels</h2>
            <div className="w-20 h-1 bg-[#F4B400] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.slice(0, 4).map((service, i) => (
              <div key={i} className="p-8 bg-[#F5F5F5] rounded-2xl border border-transparent hover:border-[#F4B400] transition-all group">
                <h3 className="text-xl font-bold text-[#0F2C59] mb-3 group-hover:text-[#F4B400] transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="bg-[#0F2C59] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#F4B400] hover:text-[#0F2C59] transition-all">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F2C59] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4B400]/10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F4B400]/10 rounded-full -ml-32 -mb-32 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 font-poppins">Inscrivez-vous dès aujourd’hui et construisez votre avenir avec nous.</h2>
          <Link href="/inscriptions" className="inline-block bg-[#F4B400] text-[#0F2C59] px-12 py-5 rounded-xl font-bold text-xl hover:bg-white hover:scale-105 transition-all shadow-lg">
            Je m’inscris
          </Link>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2C59] mb-4 font-poppins">Contactez-nous</h2>
              <p className="text-gray-600 mb-10 text-lg">Nous sommes à votre écoute pour toute question ou demande d'inscription.</p>
              <div className="space-y-8 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#0F2C59] shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Adresse</h4>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#0F2C59] shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Téléphones</h4>
                    <p className="text-gray-600">{CONTACT_INFO.phone1}</p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="text-[#0F2C59] font-bold border-b-2 border-[#F4B400] pb-1 hover:text-[#F4B400] transition-all">
                Voir toutes les coordonnées et plan d'accès
              </Link>
            </div>
            <div className="bg-gray-100 h-[400px] rounded-3xl flex items-center justify-center text-gray-400 border border-gray-200 shadow-inner overflow-hidden">
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
          </div>
        </div>
      </section>

      <Footer />

      {/* WhatsApp Float */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-100">
           Besoin d'aide ? Contactez-nous !
        </span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </main>
  );
}
