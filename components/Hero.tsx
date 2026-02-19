import { CONTACT_INFO } from '@/constants';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59]/95 via-[#0F2C59]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-2/3">
          <div className="inline-block px-4 py-1.5 mb-6 bg-[#F4B400] text-[#0F2C59] font-bold rounded-full text-sm uppercase tracking-widest animate-bounce">
             Admissions Ouvertes 2026
          </div>
          <h1 className="text-4xl lg:text-7xl font-extrabold text-white leading-tight mb-6 font-poppins">
            Centre Privé de Formation Professionnelle <span className="text-[#F4B400]">GOD’S PLAN</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl font-medium leading-relaxed">
            "Nous construisons votre avenir maintenant !" Un centre d'excellence pour maîtriser les métiers d'avenir.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="/inscriptions" 
              className="inline-flex justify-center items-center px-10 py-5 border border-transparent text-lg font-bold rounded-2xl text-[#0F2C59] bg-[#F4B400] hover:bg-white transition-all shadow-2xl hover:-translate-y-1"
            >
              S’inscrire maintenant
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-10 py-5 border-2 border-white/30 backdrop-blur-sm text-lg font-bold rounded-2xl text-white hover:bg-white hover:text-[#0F2C59] transition-all"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
