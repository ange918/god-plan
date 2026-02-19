import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FORMATIONS, CONTACT_INFO } from '@/constants';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  CheckCircleIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

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
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 grayscale-[50%]"
          style={{ backgroundImage: `url(${formation.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2C59]/80 to-[#0F2C59] z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <span className="inline-block px-4 py-1 bg-[#F4B400] text-[#0F2C59] font-bold rounded-full text-xs uppercase tracking-widest mb-6 shadow-lg">
            {formation.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 font-poppins leading-tight tracking-tight">
            {formation.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-lg font-bold">
             <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
               <ClockIcon className="h-6 w-6 text-[#F4B400]" /> {formation.duration}
             </div>
             <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
               <CurrencyDollarIcon className="h-6 w-6 text-[#F4B400]" /> {formation.cost}
             </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-100 border border-gray-50 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4B400]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins flex items-center gap-4">
                  <span className="w-2 h-8 bg-[#F4B400] rounded-full"></span>
                  Description
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  {formation.content}
                </p>
              </div>
              
              {/* Objectifs / Contenu */}
              <div className="bg-[#F5F5F5] p-8 md:p-12 rounded-[2.5rem] border border-gray-100">
                <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins flex items-center gap-4">
                  <span className="w-2 h-8 bg-[#0F2C59] rounded-full"></span>
                  Objectifs de la formation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Maîtrise complète des outils professionnels",
                    "Développement d'un portfolio de projets réels",
                    "Acquisition de techniques avancées du métier",
                    "Préparation intensive à l'insertion professionnelle",
                    "Accompagnement personnalisé par des experts",
                    "Immersion pratique en conditions réelles"
                  ].map((obj, i) => (
                    <div key={i} className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-gray-50 shadow-sm group hover:border-[#F4B400] transition-colors">
                      <CheckCircleIcon className="h-6 w-6 text-[#F4B400] shrink-0" />
                      <p className="font-bold text-[#0F2C59]">{obj}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Débouchés */}
              <div>
                <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins flex items-center gap-4">
                  <span className="w-2 h-8 bg-[#F4B400] rounded-full"></span>
                  Débouchés professionnels
                </h2>
                <div className="flex flex-wrap gap-4">
                  {formation.outcomes?.map((job, i) => (
                    <span key={i} className="flex items-center gap-2 px-8 py-4 bg-white text-[#0F2C59] font-extrabold rounded-2xl border-2 border-gray-100 shadow-sm hover:border-[#F4B400] hover:text-[#F4B400] transition-all cursor-default">
                      <BriefcaseIcon className="h-5 w-5" />
                      {job}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar / Info Box */}
            <aside className="lg:sticky lg:top-32 space-y-8">
              <div className="bg-[#0F2C59] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                 <h3 className="text-2xl font-bold mb-10 font-poppins text-[#F4B400]">Informations Clés</h3>
                 <div className="space-y-8">
                   <div className="flex items-start gap-5">
                     <AcademicCapIcon className="h-8 w-8 text-[#F4B400] bg-white/10 p-1 rounded-lg shrink-0" />
                     <div>
                       <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-1">Niveau Requis</p>
                       <p className="font-bold text-lg">{formation.level}</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-5">
                     <CheckCircleIcon className="h-8 w-8 text-[#F4B400] bg-white/10 p-1 rounded-lg shrink-0" />
                     <div>
                       <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-1">Type</p>
                       <p className="font-bold text-lg">Formation Certifiante</p>
                     </div>
                   </div>
                   <div className="flex items-start gap-5">
                     <MapPinIcon className="h-8 w-8 text-[#F4B400] bg-white/10 p-1 rounded-lg shrink-0" />
                     <div>
                       <p className="text-white/60 text-xs font-black uppercase tracking-widest mb-1">Lieu</p>
                       <p className="font-bold text-lg">CFPA GOD'S PLAN, Akpakpa</p>
                     </div>
                   </div>
                 </div>
                 
                 <div className="mt-12 pt-12 border-t border-white/10">
                    <Link 
                      href="/inscriptions" 
                      className="block w-full text-center py-5 bg-[#F4B400] text-[#0F2C59] font-black rounded-2xl text-xl hover:bg-white hover:scale-105 transition-all shadow-xl active:scale-95 mb-4"
                    >
                      S'inscrire Maintenant
                    </Link>
                    <a 
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Je souhaite en savoir plus sur la formation ${formation.title}`}
                      target="_blank"
                      className="flex items-center justify-center gap-2 w-full text-center py-4 border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
                    >
                      <ChatBubbleLeftRightIcon className="h-5 w-5" />
                      Nous écrire sur WhatsApp
                    </a>
                 </div>
              </div>
              
              <div className="bg-[#F5F5F5] p-8 rounded-[2.5rem] border border-gray-100 text-center">
                 <p className="text-[#0F2C59] font-bold mb-4 italic">Des questions ? Appelez-nous</p>
                 <p className="text-2xl font-black text-[#F4B400]">{CONTACT_INFO.phone1}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <div className="w-20 h-20 bg-[#F4B400] rounded-full flex items-center justify-center mx-auto mb-10 text-white shadow-xl">
             <ChatBubbleLeftRightIcon className="w-10 h-10" />
           </div>
           <p className="text-2xl md:text-3xl text-[#0F2C59] font-bold leading-relaxed italic mb-10">
             "La formation en {formation.title} m'a apporté bien plus que de la technique. J'ai appris la rigueur et le sens du détail qui me permettent aujourd'hui de vivre de ma passion."
           </p>
           <div className="flex items-center justify-center gap-6">
              <div className="w-20 h-20 bg-[#0F2C59] rounded-3xl flex items-center justify-center font-black text-white text-2xl shadow-lg rotate-3">
                 GP
              </div>
              <div className="text-left">
                <p className="font-black text-2xl text-[#0F2C59]">Lauréat 2025</p>
                <p className="text-[#F4B400] font-black tracking-[0.2em] text-sm uppercase">CFPA GOD'S PLAN</p>
              </div>
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-[#0F2C59] relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-12 font-poppins">Prêt à transformer votre carrière ?</h2>
            <Link href="/inscriptions" className="inline-block bg-[#F4B400] text-[#0F2C59] px-20 py-8 rounded-3xl font-black text-3xl hover:scale-110 transition-all shadow-[0_20px_50px_rgba(244,180,0,0.3)] hover:bg-white active:scale-95">
               REJOINDRE LA SESSION
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  );
}
