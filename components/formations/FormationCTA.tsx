import Link from 'next/link';

export default function FormationCTA() {
  return (
    <section className="py-24 bg-[#0F2C59] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-10 font-poppins leading-tight">
          Inscrivez-vous dès aujourd’hui et construisez <br className="hidden md:block" /> votre avenir maintenant !
        </h2>
        <Link 
          href="/inscriptions" 
          className="inline-block bg-[#F4B400] text-[#0F2C59] px-16 py-6 rounded-2xl font-black text-2xl hover:scale-110 transition-all shadow-2xl hover:bg-white active:scale-95"
        >
          S’inscrire maintenant
        </Link>
      </div>
    </section>
  );
}
