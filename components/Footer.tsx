import { CONTACT_INFO } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">GOD’S PLAN</h3>
            <p className="text-gray-400 italic">"Nous construisons votre avenir maintenant !"</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-[#F4B400]">Liens Rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#a-propos" className="hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#formations" className="hover:text-white transition-colors">Formations</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase tracking-wider text-[#F4B400]">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.phone1}</li>
              <li>{CONTACT_INFO.email}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Centre Privé de Formation Professionnelle GOD’S PLAN. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
