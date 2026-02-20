import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface FormationDetailsProps {
  contenu: string[];
  options?: { label: string; price: string }[];
}

export default function FormationDetails({ contenu, options }: FormationDetailsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-[#0F2C59] mb-10 font-poppins flex items-center gap-4">
              <span className="w-2 h-8 bg-[#F4B400] rounded-full"></span>
              Contenu de la formation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contenu.map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-[#F5F5F5] p-6 rounded-2xl border border-gray-50 hover:border-[#F4B400] transition-colors group">
                  <CheckCircleIcon className="h-6 w-6 text-[#F4B400] shrink-0 mt-0.5" />
                  <p className="font-bold text-[#0F2C59] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {options && options.length > 0 && (
              <div className="bg-[#0F2C59] p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12"></div>
                <h3 className="text-2xl font-bold mb-8 font-poppins text-[#F4B400]">Options Supplémentaires</h3>
                <div className="space-y-6">
                  {options.map((opt, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="font-bold">{opt.label}</span>
                      <span className="text-[#F4B400] font-black">{opt.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-[#F4B400]/10 p-8 rounded-[2.5rem] border border-[#F4B400]/20">
              <h3 className="text-xl font-bold text-[#0F2C59] mb-4">Besoin de conseils ?</h3>
              <p className="text-gray-700 mb-6 font-medium leading-relaxed">Nos conseillers d'orientation sont disponibles pour vous guider dans votre choix de carrière.</p>
              <Link href="/contact" className="text-[#0F2C59] font-black border-b-2 border-[#0F2C59] hover:text-[#F4B400] hover:border-[#F4B400] transition-all">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
