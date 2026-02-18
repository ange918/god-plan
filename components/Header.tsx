import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#0F2C59] tracking-tight">
              GOD’S PLAN
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-[#0F2C59] font-semibold transition-colors">Accueil</Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-[#0F2C59] font-semibold transition-colors">À Propos</Link>
            <Link href="/formations" className="text-gray-700 hover:text-[#0F2C59] font-semibold transition-colors">Formations</Link>
            <Link href="/services" className="text-gray-700 hover:text-[#0F2C59] font-semibold transition-colors">Services</Link>
            <Link href="/galerie" className="text-gray-700 hover:text-[#0F2C59] font-semibold transition-colors">Galerie</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#0F2C59] font-semibold transition-colors">Contact</Link>
            <Link 
              href="/inscriptions" 
              className="bg-[#F4B400] text-[#0F2C59] px-6 py-2.5 rounded-xl font-bold hover:bg-[#e0a500] transition-all shadow-md active:scale-95"
            >
              S'inscrire
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
