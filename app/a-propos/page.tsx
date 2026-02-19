import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_INFO } from '@/constants';
import Link from 'next/link';

export default function AboutPage() {
  const values = [
    { title: "Excellence", desc: "La recherche constante de la qualité dans tout ce que nous entreprenons pour garantir le meilleur niveau à nos apprenants." },
    { title: "Discipline", desc: "Rigueur et professionnalisme sont les piliers de notre encadrement pour forger des caractères solides." },
    { title: "Créativité", desc: "Nous encourageons l'innovation et l'expression personnelle pour que chaque projet soit unique." },
    { title: "Responsabilité", desc: "Former des citoyens conscients de leur impact et prêts à contribuer positivement à la société." },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 bg-[#0F2C59] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb28f74b671?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">À Propos de GOD’S PLAN</h1>
          <p className="text-xl text-[#F4B400] max-w-2xl mx-auto font-medium italic">"Une vision, un centre, votre avenir."</p>
        </div>
      </div>

      {/* Historique & Description */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="relative">
               <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 border-8 border-white">
                 <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070" alt="Centre" className="w-full h-full object-cover -rotate-3 scale-110" />
               </div>
               <div className="absolute -bottom-10 -right-10 bg-[#F4B400] p-8 rounded-3xl shadow-xl hidden md:block">
                 <p className="text-4xl font-bold text-[#0F2C59]">8+</p>
                 <p className="text-[#0F2C59] font-bold">Filières d'excellence</p>
               </div>
             </div>
             <div>
               <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins">Notre Histoire</h2>
               <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                 <p>
                   Fondé en 2018, le **Centre Privé de Formation Professionnelle GOD’S PLAN** a débuté avec une mission simple : offrir une alternative pratique à l'éducation classique pour lutter contre le sous-emploi au Bénin.
                 </p>
                 <p>
                   Situé au cœur d'Akpakpa St Martin, notre établissement a su évoluer en intégrant les technologies numériques de pointe tout en préservant l'excellence artisanale. Aujourd'hui, nous sommes fiers d'être l'un des rares centres à proposer un cursus complet allant du design graphique à la restauration, avec un taux d'insertion professionnelle dépassant les 85%.
                 </p>
                 <p>
                   Notre centre n'est pas seulement un lieu d'apprentissage, c'est un incubateur de talents où chaque apprenant bénéficie d'un suivi personnalisé par des mentors qui sont eux-mêmes des acteurs majeurs de leur industrie.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Valeurs */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-[#0F2C59]">
              <h3 className="text-2xl font-bold text-[#0F2C59] mb-6">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed">Démocratiser l'accès aux compétences techniques de haut niveau pour favoriser l'autonomisation financière des jeunes.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-[#F4B400]">
              <h3 className="text-2xl font-bold text-[#0F2C59] mb-6">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed">Devenir le leader national de la formation pratique hybride, alliant numérique et artisanat d'excellence.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border-t-4 border-[#0F2C59]">
              <h3 className="text-2xl font-bold text-[#0F2C59] mb-6">Nos Valeurs</h3>
              <p className="text-gray-600 leading-relaxed">Excellence, Discipline, Créativité et Responsabilité sont au cœur de chaque module enseigné.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir God’s Plan */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F2C59] mb-4 font-poppins">Pourquoi choisir GOD'S PLAN ?</h2>
          <div className="w-24 h-1 bg-[#F4B400] mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
           {[
             { t: "Encadrement sur mesure", d: "Des classes à effectif réduit pour un suivi individualisé de chaque apprenant." },
             { t: "Réseau de partenaires", d: "Accès privilégié à des stages dans les meilleures entreprises de la place." },
             { t: "Certification de valeur", d: "Un diplôme qui certifie de réelles capacités opérationnelles immédiates." },
             { t: "Environnement créatif", d: "Un espace stimulant équipé pour l'innovation constante." }
           ].map((item, i) => (
             <div key={i} className="flex gap-5 items-start">
               <span className="text-3xl">✅</span>
               <div>
                 <h4 className="font-bold text-[#0F2C59] text-xl mb-2">{item.t}</h4>
                 <p className="text-gray-600 leading-relaxed">{item.d}</p>
               </div>
             </div>
           ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 bg-[#0F2C59] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-poppins">Ils nous ont fait confiance</h2>
          <p className="text-[#F4B400]">Ce que disent nos anciens apprenants</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { n: "Jean D.", r: "Graphiste Freelance", t: "Grâce à God's Plan, j'ai pu lancer mon agence dès la fin de ma formation. La pratique fait vraiment la différence." },
             { n: "Marie L.", r: "Responsable Cuisine", t: "Un encadrement exceptionnel. Les chefs sont passionnés et nous poussent à l'excellence chaque jour." },
             { n: "Koffi A.", r: "Technicien Informatique", t: "J'ai trouvé un emploi deux semaines après mon stage. La formation est parfaitement alignée sur le marché." }
           ].map((item, i) => (
             <div key={i} className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10 relative">
               <div className="text-4xl text-[#F4B400] mb-6">“</div>
               <p className="text-gray-300 italic mb-8 leading-relaxed">"{item.t}"</p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-[#F4B400]/20 rounded-full flex items-center justify-center font-bold text-[#F4B400]">
                   {item.n[0]}
                 </div>
                 <div>
                   <h4 className="font-bold">{item.n}</h4>
                   <p className="text-sm text-[#F4B400]">{item.r}</p>
                 </div>
               </div>
             </div>
           ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
