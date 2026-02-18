import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GaleriePage() {
  const images = Array(9).fill(0);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2C59] mb-4 font-poppins">Notre Galerie</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Vivez l'ambiance et les réalisations de nos apprenants au CFPA GOD’S PLAN.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((_, i) => (
              <div key={i} className="h-80 bg-gray-100 rounded-3xl flex items-center justify-center text-[#0F2C59]/20 font-bold uppercase tracking-widest italic border-4 border-white shadow-xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer group relative">
                <div className="absolute inset-0 bg-[#0F2C59]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-4xl">
                  🔍
                </div>
                Image {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
