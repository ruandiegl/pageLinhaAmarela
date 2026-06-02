import React from 'react';

const StatItem = ({ number, label }) => (
  <div className="text-center px-4">
    <div className="text-4xl md:text-5xl font-black text-white mb-2">{number}</div>
    <div className="text-orange-400 font-bold uppercase tracking-widest text-xs md:text-sm">{label}</div>
  </div>
);

const Stats = () => {
  return (
    <section className="bg-slate-900 py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <StatItem number="50+" label="Anos de História" />
          <StatItem number="1200" label="Toneladas / Mês" />
          <StatItem number="500+" label="Projetos Entregues" />
          <StatItem number="100%" label="Qualidade Certificada" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
