import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Trust from './components/Trust';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Trust />
      <ContactCTA />
    </Layout>
  );
}

export default App;
