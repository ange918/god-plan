import { BriefcaseIcon } from '@heroicons/react/24/outline';

interface FormationDebouchesProps {
  debouches: string[];
}

export default function FormationDebouches({ debouches }: FormationDebouchesProps) {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[#0F2C59] mb-6 font-poppins">
              Débouchés Professionnels
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              Notre formation est conçue pour répondre aux besoins réels du marché du travail. En tant que diplômé du CFPA GOD'S PLAN, vous possédez non seulement des compétences techniques de haut niveau, mais aussi une éthique de travail et une discipline qui font de vous un candidat de choix pour les recruteurs ou un entrepreneur solide.
            </p>
          </div>
          <div className="bg-[#0F2C59]/5 p-8 rounded-3xl border border-[#0F2C59]/10 italic text-[#0F2C59] font-medium">
            "Nous ne formons pas seulement des techniciens, nous forgeons des carrières et transformons des vies à travers l'excellence pratique."
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {debouches.map((job, i) => (
            <div key={i} className="bg-white px-10 py-6 rounded-3xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-[#F4B400]/10 rounded-2xl flex items-center justify-center text-[#F4B400] group-hover:bg-[#0F2C59] group-hover:text-white transition-colors">
                <BriefcaseIcon className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-[#0F2C59]">{job}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
