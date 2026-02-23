import { CONTACT_INFO } from '@/constants';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2C59]/90 via-[#0F2C59]/70 to-[#0F2C59]/90 md:bg-gradient-to-r md:from-[#0F2C59]/95 md:via-[#0F2C59]/80 md:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-3/4">
          <div className="inline-block px-6 py-2 mb-8 bg-[#F4B400] text-[#0F2C59] font-black rounded-full text-sm uppercase tracking-[0.2em] shadow-xl animate-bounce">
             Admissions 2026 Ouvertes
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] mb-8 font-poppins tracking-tight">
            <span className="block mb-2">Centre Privé de Formation</span>
            <span className="block text-[#F4B400]">Professionnelle GOD'S PLAN</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-medium leading-relaxed italic border-l-4 border-[#F4B400] pl-6 bg-[#0F2C59]/20 backdrop-blur-sm p-4 rounded-r-2xl">
            "Nous construisons votre avenir maintenant !" Le pôle d'excellence pour maîtriser les métiers d'avenir au Bénin.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="/inscriptions" 
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-black rounded-full text-[#0F2C59] bg-[#F4B400] hover:bg-white transition-all shadow-[0_20px_50px_rgba(244,180,0,0.3)] hover:-translate-y-1 active:scale-95 uppercase tracking-widest"
            >
              S’inscrire
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/40 backdrop-blur-md text-lg font-black rounded-full text-white hover:bg-white hover:text-[#0F2C59] transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-widest"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-[#F4B400] to-transparent"></div>
      </div>
    </section>
  );
}
