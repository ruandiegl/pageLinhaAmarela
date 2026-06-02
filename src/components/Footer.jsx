import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <span className="text-2xl font-bold tracking-tighter">
            VULCANO<span className="text-orange-500">SIDERURGIA</span>
          </span>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            Excelência em soluções siderúrgicas e industriais há 50 anos. Tecnologia, robustez e inovação para o mercado nacional e internacional.
          </p>
          <div className="mt-6 flex space-x-4">
            {/* Social Icons Placeholders */}
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">In</div>
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">Ig</div>
            <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">Fb</div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Sobre a Empresa</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nossos Produtos</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Projetos Realizados</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Certificações</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contato</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>Av. Presidente Kennedy, 3100 - Barra Mansa, RJ</li>
            <li>(24) 2106-9999</li>
            <li>comercial@e-vulcano.com.br</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-4">Receba atualizações sobre inovação industrial.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="bg-slate-800 border-none rounded-l-md px-4 py-2 w-full focus:ring-1 focus:ring-orange-500 text-sm"
            />
            <button className="bg-orange-600 px-4 py-2 rounded-r-md hover:bg-orange-700 transition-colors">→</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        © 2024 Metalúrgica Vulcano Ltda. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
