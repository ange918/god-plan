import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SERVICES } from '@/constants';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2C59] mb-4 font-poppins">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Au-delà de la formation, nous mettons notre expertise au service de vos projets professionnels.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <div key={i} className="flex gap-8 p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-20 h-20 bg-[#0F2C59] text-[#F4B400] rounded-2xl flex items-center justify-center shrink-0 font-bold text-3xl group-hover:rotate-6 transition-transform">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0F2C59] mb-3 font-poppins">{service.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F2C59]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-10 font-poppins">Prêt à réaliser votre projet avec nous ?</h2>
          <a href="/contact" className="inline-block bg-[#F4B400] text-[#0F2C59] px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-2xl">
            Demander un devis
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
