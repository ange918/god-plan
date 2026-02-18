import Link from 'next/link';
import { CONTACT_INFO } from '@/constants';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#0F2C59]">
              GOD’S PLAN
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-[#0F2C59] font-medium">Accueil</Link>
            <Link href="#a-propos" className="text-gray-700 hover:text-[#0F2C59] font-medium">À Propos</Link>
            <Link href="#formations" className="text-gray-700 hover:text-[#0F2C59] font-medium">Formations</Link>
            <Link href="#contact" className="text-gray-700 hover:text-[#0F2C59] font-medium">Contact</Link>
            <Link 
              href="#inscription" 
              className="bg-[#F4B400] text-[#0F2C59] px-6 py-2 rounded-full font-bold hover:bg-[#e0a500] transition-colors"
            >
              S'inscrire
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
