import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FORMATIONS, CONTACT_INFO } from '@/constants';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function FormationDetailPage({ params }: { params: { id: string } }) {
  const formation = FORMATIONS.find(f => f.id === params.id);

  if (!formation) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-[#0F2C59] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1 bg-[#F4B400] text-[#0F2C59] font-bold rounded-full text-xs uppercase tracking-widest mb-6">
            Formation Professionnelle
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 font-poppins leading-tight">
            {formation.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-8 text-lg font-medium">
             <div className="flex items-center gap-2">
               <span className="text-[#F4B400] text-2xl">⏳</span> {formation.duration}
             </div>
             <div className="flex items-center gap-2">
               <span className="text-[#F4B400] text-2xl">💰</span> {formation.cost}
             </div>
          </div>
        </div>
      </section>

      {/* Description & Objectifs */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0F2C59] mb-6 font-poppins border-b-4 border-[#F4B400] inline-block pb-2">Description</h2>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  {formation.content}
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-[#0F2C59] mb-6 font-poppins border-b-4 border-[#F4B400] inline-block pb-2">Objectifs de la formation</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-700 font-medium">
                  {["Maîtriser les outils techniques fondamentaux", "Développer une autonomie professionnelle", "Réaliser des projets concrets de bout en bout", "Se préparer aux réalités du marché de l'emploi"].map((obj, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-[#F4B400]">✔</span> {obj}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#0F2C59] mb-6 font-poppins border-b-4 border-[#F4B400] inline-block pb-2">Débouchés professionnels</h2>
                <div className="flex flex-wrap gap-4">
                  {["Expert en " + formation.title, "Auto-entrepreneur", "Consultant technique", "Formateur spécialisé"].map((job, i) => (
                    <span key={i} className="px-6 py-3 bg-[#F5F5F5] text-[#0F2C59] font-bold rounded-2xl border border-gray-100 shadow-sm">
                      {job}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[#F5F5F5] p-8 rounded-3xl border border-gray-100 shadow-xl sticky top-32">
                 <h3 className="text-2xl font-bold text-[#0F2C59] mb-8 font-poppins">Fiche Technique</h3>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <span className="text-2xl">🎓</span>
                     <div>
                       <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Niveau Requis</p>
                       <p className="text-[#0F2C59] font-bold text-lg">{formation.level}</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <span className="text-2xl">⚡</span>
                     <div>
                       <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Type</p>
                       <p className="text-[#0F2C59] font-bold text-lg">Formation Pratique</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="mt-12 pt-12 border-t border-gray-200">
                    <Link 
                      href="/inscriptions" 
                      className="block w-full text-center py-5 bg-[#0F2C59] text-white font-bold rounded-2xl text-xl hover:bg-[#F4B400] hover:text-[#0F2C59] transition-all shadow-lg active:scale-95"
                    >
                      S'inscrire Maintenant
                    </Link>
                    <a 
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Je souhaite m'inscrire à la formation ${formation.title}`}
                      target="_blank"
                      className="block w-full text-center mt-4 py-4 border-2 border-[#0F2C59] text-[#0F2C59] font-bold rounded-2xl hover:bg-gray-50 transition-all"
                    >
                      Question sur WhatsApp
                    </a>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="text-6xl text-[#F4B400] mb-8 italic">“</div>
           <p className="text-2xl text-[#0F2C59] font-medium leading-relaxed italic mb-10">
             "La formation en {formation.title} a radicalement changé ma vision professionnelle. L'aspect pratique m'a permis d'être opérationnel dès le premier jour de stage."
           </p>
           <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-[#0F2C59] rounded-full flex items-center justify-center font-bold text-white text-xl">
                 A
              </div>
              <div className="text-left">
                <p className="font-bold text-xl text-[#0F2C59]">Ancien Apprenant</p>
                <p className="text-[#F4B400] font-medium tracking-widest text-sm uppercase">Promotion 2024</p>
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#0F2C59] text-center">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 font-poppins">N'attendez plus, votre futur commence ici !</h2>
            <Link href="/inscriptions" className="inline-block bg-[#F4B400] text-[#0F2C59] px-16 py-6 rounded-2xl font-bold text-2xl hover:scale-110 transition-all shadow-2xl">
               Réserver ma place
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
