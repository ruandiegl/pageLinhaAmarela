import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-shrink-0 flex items-center">
          <span className={`text-2xl font-bold tracking-tighter ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}>
            VULCANO<span className="text-orange-600">SIDERURGIA</span>
          </span>
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            {['Home', 'Sobre', 'Produtos', 'Diferenciais'].map((item) => (
              <a
                key={item}
                href="#"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-orange-600' : 'text-white/90 hover:text-white'}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-orange-700 transition-all transform hover:scale-105">
              Solicitar Orçamento
            </button>
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}
            aria-label="Abrir Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-fade-in-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Sobre', 'Produtos', 'Diferenciais'].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-orange-600 hover:bg-slate-50"
              >
                {item}
              </a>
            ))}
            <button className="w-full text-left bg-orange-600 text-white px-3 py-3 rounded-md text-base font-bold mt-4">
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
