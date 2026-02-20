import { CheckCircleIcon, AcademicCapIcon, BoltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FormationDetailsProps {
  contenu: string[];
  options?: { label: string; price: string }[];
}

export default function FormationDetails({ contenu, options }: FormationDetailsProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins flex items-center gap-4">
                <span className="w-2 h-8 bg-[#F4B400] rounded-full"></span>
                Compétences visées
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                À l'issue de cette formation, vous aurez acquis une expertise concrète validée par des projets pratiques. Notre approche pédagogique repose sur le "learning by doing" (apprendre en faisant), garantissant que chaque concept théorique est immédiatement appliqué en atelier.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contenu.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-[#F5F5F5] p-6 rounded-2xl border border-gray-50 hover:border-[#F4B400] transition-colors group">
                    <CheckCircleIcon className="h-6 w-6 text-[#F4B400] shrink-0 mt-0.5" />
                    <p className="font-bold text-[#0F2C59] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0F2C59] p-10 rounded-[2.5rem] text-white overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700"></div>
              <h2 className="text-2xl font-bold mb-6 font-poppins text-[#F4B400] flex items-center gap-3">
                <RocketLaunchIcon className="h-8 w-8" />
                Notre Méthodologie
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div className="space-y-2">
                  <p className="font-bold text-lg">90% Pratique</p>
                  <p className="text-white/70">L'essentiel de votre temps est passé en atelier sur du matériel professionnel.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-lg">Projet Réel</p>
                  <p className="text-white/70">Vous travaillez sur de vraies commandes clients pour vous confronter au marché.</p>
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-lg">Mentorat</p>
                  <p className="text-white/70">Des experts en activité vous guident et partagent leurs secrets de métier.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {options && options.length > 0 && (
              <div className="bg-white p-8 rounded-[2.5rem] text-[#0F2C59] shadow-2xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4B400]/10 rounded-full -mr-12 -mt-12"></div>
                <h3 className="text-2xl font-bold mb-8 font-poppins flex items-center gap-2">
                   <BoltIcon className="h-6 w-6 text-[#F4B400]" />
                   Options
                </h3>
                <div className="space-y-6">
                  {options.map((opt, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4">
                      <span className="font-bold text-gray-700">{opt.label}</span>
                      <span className="text-[#0F2C59] font-black bg-[#F4B400]/10 px-3 py-1 rounded-lg">{opt.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-[#F4B400]/10 p-8 rounded-[2.5rem] border border-[#F4B400]/20">
              <h3 className="text-xl font-bold text-[#0F2C59] mb-4 flex items-center gap-2">
                <AcademicCapIcon className="h-6 w-6" />
                Orientation
              </h3>
              <p className="text-gray-700 mb-6 font-medium leading-relaxed">Besoin de plus d'informations sur les prérequis ou les modalités de paiement ?</p>
              <Link href="/contact" className="text-[#0F2C59] font-black border-b-2 border-[#0F2C59] hover:text-[#F4B400] hover:border-[#F4B400] transition-all inline-block">
                Contacter un conseiller
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
