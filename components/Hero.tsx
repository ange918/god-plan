import { CONTACT_INFO } from '@/constants';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-2/3">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#0F2C59] leading-tight mb-6">
            Centre Privé de Formation Professionnelle <span className="text-[#F4B400]">GOD’S PLAN</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl font-medium">
            Nous construisons votre avenir maintenant ! Un centre dédié au développement des compétences pratiques pour une insertion rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#inscription" 
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-[#0F2C59] hover:bg-[#0a1f3d] transition-all"
            >
              S’inscrire maintenant
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-[#F4B400] text-lg font-bold rounded-lg text-[#0F2C59] bg-white hover:bg-[#F4B400] transition-all"
            >
              Nous contacter (WhatsApp)
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F5F5F5] to-transparent -z-10 hidden lg:block" />
    </section>
  );
}
