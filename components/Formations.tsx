import { FORMATIONS } from '@/constants';
import Link from 'next/link';

export default function Formations() {
  return (
    <section id="formations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F2C59] mb-4 font-poppins">Nos Formations Phares</h2>
          <div className="w-24 h-1 bg-[#F4B400] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choisissez la filière qui correspond à vos ambitions et commencez votre transformation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FORMATIONS.slice(0, 6).map((formation) => (
            <div key={formation.id} className="bg-[#F5F5F5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="h-56 bg-gray-200 relative flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                [Image: {formation.title}]
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-[#F4B400] uppercase tracking-widest">{formation.category}</span>
                <h3 className="text-2xl font-bold text-[#0F2C59] mt-2 mb-4 font-poppins">{formation.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-8 gap-2">
                   <span className="text-xl">⏳</span> {formation.duration}
                </div>
                <Link 
                  href={`/formations/${formation.id}`}
                  className="block w-full text-center py-4 bg-white border-2 border-[#0F2C59] text-[#0F2C59] font-bold rounded-2xl hover:bg-[#0F2C59] hover:text-white transition-all shadow-md active:scale-95"
                >
                  Découvrir le programme
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/formations" className="inline-flex items-center gap-2 text-[#0F2C59] font-extrabold text-xl hover:text-[#F4B400] transition-colors group">
            Voir toutes nos formations
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
