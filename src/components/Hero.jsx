import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-slate-900/60 z-10"></div>

      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 hover:scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000')" }}
      ></div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
          Liderança e Tecnologia em <br/>
          <span className="text-orange-500">Soluções Siderúrgicas</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
          Há 50 anos transformando a indústria com precisão, inovação e o compromisso de entregar excelência em cada projeto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-600/30">
            Nossos Produtos
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-slate-900 transition-all">
            Fale Conosco
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
