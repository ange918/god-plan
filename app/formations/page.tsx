import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FORMATIONS } from '@/constants';
import Link from 'next/link';

export default function FormationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2C59] mb-4 font-poppins">Nos Formations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Découvrez nos programmes d'excellence conçus pour votre réussite professionnelle.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {FORMATIONS.map((formation) => (
              <div key={formation.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-56 bg-[#0F2C59]/5 relative flex items-center justify-center text-[#0F2C59]/20 font-bold uppercase tracking-widest italic">
                  [Image: {formation.title}]
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-[#F4B400] uppercase tracking-widest bg-[#F4B400]/10 px-3 py-1 rounded-full">{formation.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F2C59] mb-4 font-poppins">{formation.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{formation.content}</p>
                  
                  <div className="mt-auto space-y-4 pt-6 border-t border-gray-50">
                    <div className="flex items-center text-sm text-gray-500 gap-2">
                      <span className="font-bold text-[#0F2C59]">Durée:</span> {formation.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 gap-2">
                      <span className="font-bold text-[#0F2C59]">Coût:</span> {formation.cost}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 gap-2">
                      <span className="font-bold text-[#0F2C59]">Niveau:</span> {formation.level}
                    </div>
                    <Link 
                      href="/inscriptions" 
                      className="block w-full text-center py-4 bg-[#0F2C59] text-white font-bold rounded-xl hover:bg-[#F4B400] hover:text-[#0F2C59] transition-all"
                    >
                      S'inscrire à cette formation
                    </Link>
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
