import { BriefcaseIcon } from '@heroicons/react/24/outline';

interface FormationDebouchesProps {
  debouches: string[];
}

export default function FormationDebouches({ debouches }: FormationDebouchesProps) {
  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#0F2C59] mb-12 font-poppins text-center">
          Débouchés Professionnels
        </h2>
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
