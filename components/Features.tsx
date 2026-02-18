export default function Features() {
  const features = [
    { title: "Formations pratiques", desc: "Apprentissage par l'action sur des projets réels." },
    { title: "Stage intégré", desc: "Immersion professionnelle garantie en fin de parcours." },
    { title: "Encadrement pro", desc: "Experts du métier pour vous accompagner." },
    { title: "Diplôme reconnu", desc: "Une certification qui ouvre les portes du marché." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 border border-gray-100 rounded-2xl bg-[#F5F5F5] hover:border-[#F4B400] transition-colors">
              <div className="w-12 h-12 bg-[#0F2C59] text-[#F4B400] rounded-lg flex items-center justify-center mb-6 font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-[#0F2C59] mb-3">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
