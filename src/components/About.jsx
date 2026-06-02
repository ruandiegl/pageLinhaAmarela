import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8} distance={50} className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000"
                alt="Industrial Production"
                className="rounded-lg shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-100 rounded-lg -z-0 hidden md:block"></div>
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-orange-600 text-white p-8 rounded-lg shadow-xl z-20 hidden md:block">
                <p className="text-4xl font-black mb-1">50</p>
                <p className="text-sm font-bold uppercase tracking-widest">Anos de <br/>Experiência</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="order-1 lg:order-2">
            <ScrollReveal direction="right" delay={0.2}>
              <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">Sobre a Vulcano</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Uma história de solidez e inovação constante na indústria.
              </h3>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.4}>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Desde 1974, a Metalúrgica Vulcano Ltda vem se destacando por projetos especiais de engenharia e produtos patenteados que atendem às mais complexas necessidades da indústria siderúrgica e metalúrgica no Brasil e exterior.
              </p>
            </ScrollReveal>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Missão Integradora</h4>
                  <p className="text-slate-500">Promover soluções inovadoras que garantam o sucesso e a eficiência de nossos parceiros industriais.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Visão de Referência</h4>
                  <p className="text-slate-500">Ser a referência nacional em produção de soluções industriais, reconhecida pela excelência tecnológica.</p>
                </div>
              </div>
            </div>
            <button className="mt-10 flex items-center text-slate-900 font-bold hover:text-orange-600 transition-colors">
              Conheça nossa trajetória completa
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
