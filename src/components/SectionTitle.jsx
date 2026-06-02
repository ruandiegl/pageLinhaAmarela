import React from 'react';

const SectionTitle = ({ subtitle, title, description, light = false }) => {
  return (
    <div className="text-center mb-16">
      {subtitle && (
        <h2 className="text-orange-600 font-bold tracking-widest uppercase text-sm mb-4">
          {subtitle}
        </h2>
      )}
      <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h3>
      {description && (
        <p className={`max-w-2xl mx-auto ${light ? 'text-slate-300' : 'text-slate-500'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
