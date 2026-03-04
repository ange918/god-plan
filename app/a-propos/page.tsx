import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTACT_INFO } from '@/constants';
import { 
  ClockIcon,
  LightBulbIcon, 
  UserGroupIcon, 
  CheckCircleIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const values = [
    { title: "Excellence", desc: "La recherche constante de la qualité dans tout ce que nous entreprenons pour garantir le meilleur niveau à nos apprenants.", icon: AcademicCapIcon },
    { title: "Discipline", desc: "Rigueur et professionnalisme sont les piliers de notre encadrement pour forger des caractères solides.", icon: ShieldCheckIcon },
    { title: "Créativité", desc: "Nous encourageons l'innovation et l'expression personnelle pour que chaque projet soit unique.", icon: LightBulbIcon },
    { title: "Responsabilité", desc: "Former des citoyens conscients de leur impact et prêts à contribuer positivement à la société.", icon: CheckCircleIcon },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20 bg-[#0F2C59] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins">À Propos de GOD’S PLAN</h1>
          <p className="text-xl text-[#F4B400] max-w-2xl mx-auto font-medium italic tracking-wide">"Transformer des potentiels en expertise opérationnelle."</p>
        </div>
      </div>

      {/* Historique & Description */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="relative">
               <div className="aspect-square bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl rotate-3 border-8 border-white group">
                 <img src="/centre-photo.jpg" alt="Centre" className="w-full h-full object-cover -rotate-3 scale-110 group-hover:scale-125 transition-transform duration-700" />
               </div>
               <div className="absolute -bottom-10 -right-10 bg-[#F4B400] p-10 rounded-3xl shadow-xl hidden md:block border-4 border-[#0F2C59]">
                 <p className="text-5xl font-black text-[#0F2C59]">8+</p>
                 <p className="text-[#0F2C59] font-bold uppercase tracking-widest text-sm">Filières Métiers</p>
               </div>
             </div>
             <div>
               <h2 className="text-3xl font-bold text-[#0F2C59] mb-8 font-poppins flex items-center gap-3">
                 <RocketLaunchIcon className="h-8 w-8 text-[#F4B400]" />
                 Notre Histoire & Mission
               </h2>
               <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                 <p>
                   Fondé en 2018 par des professionnels passionnés, le **Centre Privé de Formation Professionnelle GOD’S PLAN** a débuté avec une mission simple mais ambitieuse : offrir une alternative pratique à l'éducation classique pour lutter contre le sous-emploi au Bénin.
                 </p>
                 <p>
                   Situé au cœur d'Akpakpa St Martin, notre établissement a su évoluer en intégrant les technologies numériques de pointe tout en préservant l'excellence artisanale. Nous ne nous contentons pas d'enseigner des outils ; nous formons des esprits critiques capables de s'adapter aux mutations constantes de l'industrie.
                 </p>
                 <p>
                   Aujourd'hui, nous sommes fiers d'être l'un des rares centres à proposer un cursus hybride complet, avec un taux d'insertion professionnelle dépassant les 85%. Notre engagement est de transformer chaque apprenant en un acteur majeur du développement économique, prêt à relever les défis de demain avec assurance et compétence.
                 </p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Valeurs */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border-t-8 border-[#0F2C59] hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-[#0F2C59]/10 text-[#0F2C59] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2C59] mb-6">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed font-medium italic">Démocratiser l'accès aux compétences techniques de haut niveau pour favoriser l'autonomisation financière des jeunes.</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border-t-8 border-[#F4B400] hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-[#F4B400]/10 text-[#F4B400] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <LightBulbIcon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2C59] mb-6">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed font-medium italic">Devenir le leader national de la formation pratique hybride, alliant numérique et artisanat d'excellence au Bénin.</p>
            </div>
            <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border-t-8 border-[#0F2C59] hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-[#0F2C59]/10 text-[#0F2C59] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2C59] mb-6">Notre Impact</h3>
              <p className="text-gray-600 leading-relaxed font-medium italic">Accompagner chaque année plus de 200 apprenants vers une insertion professionnelle réussie ou l'auto-emploi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl font-black text-[#0F2C59] mb-4 font-poppins uppercase tracking-tight">Notre Équipe</h2>
          <div className="w-24 h-2 bg-[#F4B400] mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { 
              name: "Monsieur Nicodème ATTAKOUN", 
              role: "Directeur Général du Centre de formation professionnelle God's Plan",
              img: "/team-director.jpg"
            },
            { 
              name: "Mlle Hilary GANHOUNOUTO", 
              role: "Secrétaire assistante de direction",
              img: "/team-secretary.jpg"
            },
            { 
              name: "Monsieur ZODJIHOUE Genev Emmanuel", 
              role: "Responsable académique et chargé de communication",
              img: "/team-academic.jpg"
            }
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] mb-6 overflow-hidden rounded-2xl bg-gray-100 grayscale hover:grayscale-0 transition-all duration-500 shadow-lg">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-black text-[#0F2C59] mb-1 font-poppins">{member.name}</h3>
              <p className="text-gray-500 font-bold text-sm uppercase tracking-wider">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h2 className="text-4xl font-bold text-[#0F2C59] mb-4 font-poppins">Nos Valeurs Fondamentales</h2>
          <div className="w-24 h-1 bg-[#F4B400] mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-10 bg-[#F5F5F5] rounded-3xl border border-gray-100 hover:border-[#F4B400] transition-all group">
              <div className="w-16 h-16 bg-[#0F2C59] text-[#F4B400] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                <v.icon className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F2C59] mb-4 font-poppins">{v.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
