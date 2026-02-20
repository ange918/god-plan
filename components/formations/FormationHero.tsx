import Link from 'next/link';
import { ClockIcon, AcademicCapIcon, BanknotesIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface FormationHeroProps {
  title: string;
  niveau: string;
  duree: string;
  cout: string;
  image: string;
  whatsapp: string;
}

export default function FormationHero({ title, niveau, duree, cout, image, whatsapp }: FormationHeroProps) {
  return (
    <section className="relative pt-48 pb-32 bg-[#0F2C59] text-white overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 grayscale-[30%]"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2C59]/80 to-[#0F2C59] z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <h1 className="text-4xl md:text-7xl font-extrabold mb-8 font-poppins leading-tight tracking-tight animate-fade-in">
          {title}
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
            <AcademicCapIcon className="h-6 w-6 text-[#F4B400]" />
            <span className="font-bold">{niveau}</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
            <ClockIcon className="h-6 w-6 text-[#F4B400]" />
            <span className="font-bold">{duree}</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
            <BanknotesIcon className="h-6 w-6 text-[#F4B400]" />
            <span className="font-bold">{cout}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/inscriptions" 
            className="bg-[#F4B400] text-[#0F2C59] px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:scale-105 transition-all shadow-xl active:scale-95"
          >
            S'inscrire Maintenant
          </Link>
          <a 
            href={`https://wa.me/${whatsapp}?text=Je souhaite m'inscrire à la formation ${title}`}
            target="_blank"
            className="flex items-center justify-center gap-2 px-10 py-5 border-2 border-white/30 backdrop-blur-sm text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-xl"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
