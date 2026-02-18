import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const values = [
    { title: "Excellence", desc: "La recherche constante de la qualité dans tout ce que nous entreprenons." },
    { title: "Discipline", desc: "La base de tout apprentissage et de toute réussite professionnelle." },
    { title: "Créativité", desc: "Encourager l'innovation et l'expression personnelle de chaque apprenant." },
    { title: "Responsabilité", desc: "Former des citoyens conscients de leur rôle dans la société." },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1A1A1A]">
      <Header />
      <div className="pt-32 pb-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0F2C59] mb-4 font-poppins">À Propos de Nous</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">Découvrez l'histoire et les valeurs qui animent le CFPA GOD’S PLAN.</p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="bg-gray-200 h-[500px] rounded-3xl flex items-center justify-center text-[#0F2C59]/20 font-bold uppercase tracking-widest italic text-2xl border-8 border-white shadow-2xl">
               [Photo Équipe]
             </div>
             <div>
               <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins">Notre Mission</h2>
               <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                 Le Centre Privé de Formation Professionnelle GOD’S PLAN est né de la volonté de répondre aux défis du chômage par une approche concrète et pragmatique.
               </p>
               <p className="text-lg text-gray-700 leading-relaxed font-medium">
                 Notre mission est d'équiper les jeunes et les adultes des compétences techniques indispensables pour s'insérer durablement dans le tissu économique, que ce soit par l'emploi salarié ou l'entrepreneuriat.
               </p>
             </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F2C59] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Nos Valeurs</h2>
          <div className="w-20 h-1 bg-[#F4B400] mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all">
              <h3 className="text-2xl font-bold text-[#F4B400] mb-4 font-poppins">{v.title}</h3>
              <p className="text-gray-300 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
