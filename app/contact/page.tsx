import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_INFO } from '@/constants';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2C59] mb-4 font-poppins">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Nous sommes à votre écoute pour vous orienter dans votre choix de formation.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-[#0F2C59] text-[#F4B400] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  📍
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F2C59] mb-2 font-poppins">Adresse</h3>
                  <p className="text-xl text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-[#0F2C59] text-[#F4B400] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  📞
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F2C59] mb-2 font-poppins">Téléphones</h3>
                  <p className="text-xl text-gray-600">{CONTACT_INFO.phone1}</p>
                  <p className="text-xl text-gray-600">{CONTACT_INFO.phone2}</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-[#0F2C59] text-[#F4B400] rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  ✉️
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F2C59] mb-2 font-poppins">Email</h3>
                  <p className="text-xl text-gray-600 break-all">{CONTACT_INFO.email}</p>
                </div>
              </div>
              
              <div className="p-8 bg-[#F4B400]/10 rounded-3xl border border-[#F4B400]/20">
                <h4 className="font-bold text-[#0F2C59] mb-4 text-xl">Horaires d'ouverture</h4>
                <p className="text-lg text-gray-700">Lundi - Vendredi : 08h00 - 18h30</p>
                <p className="text-lg text-gray-700">Samedi : 09h00 - 14h00</p>
              </div>
            </div>

            <div className="bg-gray-100 h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.312345678901!2d2.445678!3d6.356789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1023555555555555%3A0x5555555555555555!2sAkpakpa%20St%20Martin%2C%20Cotonou!5e0!3m2!1sfr!2sbj!4v1710000000000!5m2!1sfr!2sbj" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:grayscale-0 grayscale transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
