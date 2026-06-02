import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Trust from './components/Trust';
import ContactCTA from './components/ContactCTA';

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
