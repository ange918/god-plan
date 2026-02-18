import { FORMATIONS } from '@/constants';

export default function Formations() {
  return (
    <section id="formations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0F2C59] mb-4">Nos Formations Phares</h2>
          <div className="w-24 h-1 bg-[#F4B400] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FORMATIONS.map((formation) => (
            <div key={formation.id} className="bg-[#F5F5F5] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="h-48 bg-gray-200 relative flex items-center justify-center text-gray-400">
                [Image: {formation.title}]
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-[#F4B400] uppercase tracking-wider">{formation.category}</span>
                <h3 className="text-xl font-bold text-[#0F2C59] mt-2 mb-4">{formation.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
                  <span>Durée: {formation.duration}</span>
                  <span>Coût: {formation.cost}</span>
                </div>
                <button className="w-full py-3 bg-white border-2 border-[#0F2C59] text-[#0F2C59] font-bold rounded-lg hover:bg-[#0F2C59] hover:text-white transition-all">
                  Voir détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
