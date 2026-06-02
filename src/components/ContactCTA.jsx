import React from 'react';

const ContactCTA = () => {
  return (
    <section className="py-24 bg-orange-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 bg-orange-700 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Pronto para elevar o patamar da sua produção industrial?
        </h2>
        <p className="text-orange-100 text-lg md:text-xl mb-12 font-medium">
          Nossa equipe técnica está pronta para analisar seu projeto e oferecer a melhor solução custo-benefício do mercado.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-white text-orange-600 px-10 py-5 rounded-md font-black text-lg hover:bg-slate-900 hover:text-white transition-all shadow-2xl">
            Solicitar Orçamento Agora
          </button>
          <button className="bg-orange-700/30 text-white border border-white/30 px-10 py-5 rounded-md font-bold text-lg hover:bg-orange-700 transition-all">
            Falar com Especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
