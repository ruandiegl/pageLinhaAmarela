import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Trust from './components/sections/Trust';
import ContactCTA from './components/sections/ContactCTA';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Gallery />
      <Trust />
      <ContactCTA />
    </Layout>
  );
}

export default App;
