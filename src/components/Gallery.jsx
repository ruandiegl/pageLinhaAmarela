import React from 'react';
import SectionTitle from './SectionTitle';
import ScrollReveal from './ScrollReveal';

const Gallery = () => {
  const images = [
    { url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800', title: 'Estruturas Metálicas' },
    { url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800', title: 'Processamento de Aço' },
    { url: 'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?auto=format&fit=crop&q=80&w=800', title: 'Caldeiraria Pesada' },
    { url: 'https://images.unsplash.com/photo-1534312527009-56c7016453e6?auto=format&fit=crop&q=80&w=800', title: 'Montagem Industrial' },
    { url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', title: 'Controle de Qualidade' },
    { url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800', title: 'Tecnologia Vulcan' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Projetos e Produção"
          title="Excelência em cada detalhe"
          description="Conheça nossos processos produtivos e a robustez de nossas entregas para os maiores players do mercado."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} distance={20}>
              <div className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer">
                <img
                  src={img.url}
                  alt={img.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{img.title}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
