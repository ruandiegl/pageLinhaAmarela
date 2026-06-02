import React from 'react';

const Trust = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-xl font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">Certificações e Clientes</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Logo Placeholders */}
            <div className="text-2xl font-black text-slate-800">ISO 9001</div>
            <div className="text-2xl font-black text-slate-800">PETROBRAS</div>
            <div className="text-2xl font-black text-slate-800">VALE</div>
            <div className="text-2xl font-black text-slate-800">GERDAU</div>
            <div className="text-2xl font-black text-slate-800">USIMINAS</div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 italic relative">
            <span className="text-6xl text-orange-200 absolute top-4 left-4 font-serif">"</span>
            <p className="text-slate-600 text-lg relative z-10">
              A Vulcano tem sido um parceiro estratégico fundamental em nossa cadeia de suprimentos. A qualidade técnica e o cumprimento de prazos são diferenciais que raramente encontramos no mercado.
            </p>
            <div className="mt-8 flex items-center">
              <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
              <div>
                <p className="font-bold text-slate-900">Eng. Ricardo Santos</p>
                <p className="text-sm text-slate-500">Diretor de Operações, Indústria XYZ</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 italic relative">
            <span className="text-6xl text-orange-200 absolute top-4 left-4 font-serif">"</span>
            <p className="text-slate-600 text-lg relative z-10">
              Soluções inovadoras e um atendimento extremamente profissional. O suporte técnico da Vulcano durante a implementação do projeto foi impecável.
            </p>
            <div className="mt-8 flex items-center">
              <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
              <div>
                <p className="font-bold text-slate-900">Dra. Amanda Costa</p>
                <p className="text-sm text-slate-500">Gerente de Inovação, Metalúrgica ABC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
