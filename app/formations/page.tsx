import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formations } from '@/data/formations';
import Link from 'next/link';
import { ClockIcon, AcademicCapIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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
            {formations.map((formation) => (
              <div key={formation.slug} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div 
                  className="h-56 bg-cover bg-center relative transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${formation.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-white uppercase tracking-widest bg-[#F4B400] px-3 py-1 rounded-full shadow-lg">
                      {formation.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col bg-white relative z-10">
                  <h3 className="text-2xl font-bold text-[#0F2C59] mb-4 font-poppins">{formation.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed font-medium">
                    {formation.contenu[0]}... et plus encore.
                  </p>
                  
                  <div className="mt-auto space-y-4 pt-6 border-t border-gray-50">
                    <div className="flex items-center text-sm text-gray-600 gap-2 font-bold">
                      <ClockIcon className="h-5 w-5 text-[#F4B400]" />
                      <span>Durée: {formation.duree}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 gap-2 font-bold">
                      <AcademicCapIcon className="h-5 w-5 text-[#F4B400]" />
                      <span>Niveau: {formation.niveau}</span>
                    </div>
                    <Link 
                      href={`/formations/${formation.slug}`} 
                      className="flex items-center justify-center gap-2 w-full text-center py-4 bg-[#0F2C59] text-white font-bold rounded-xl hover:bg-[#F4B400] hover:text-[#0F2C59] transition-all group-hover:shadow-xl"
                    >
                      Détails de la formation
                      <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
