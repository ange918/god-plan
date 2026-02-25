import { formations } from '@/data/formations';
import Link from 'next/link';
import { ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

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
          {formations.slice(0, 6).map((formation) => (
            <div key={formation.slug} className="bg-[#F5F5F5] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div 
                className="h-56 bg-cover bg-center relative group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${formation.image})` }}
              >
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-[#F4B400] uppercase tracking-widest">{formation.category}</span>
                <h3 className="text-2xl font-bold text-[#0F2C59] mt-2 mb-4 font-poppins">{formation.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-8 gap-2">
                   <ClockIcon className="h-5 w-5 text-[#F4B400]" /> {formation.duree}
                </div>
                <Link 
                  href={`/services-formations/${formation.slug}`}
                  className="flex items-center justify-center gap-2 w-full text-center py-3 bg-white border-2 border-[#0F2C59] text-[#0F2C59] font-black rounded-full hover:bg-[#0F2C59] hover:text-white transition-all shadow-md active:scale-95 text-xs uppercase tracking-widest"
                >
                  Découvrir
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link href="/services-formations" className="inline-flex items-center gap-2 text-[#0F2C59] font-black text-lg hover:text-[#F4B400] transition-colors group uppercase tracking-widest">
            Toutes nos formations
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
