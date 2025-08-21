import React from 'react';
import { CssBaseline } from '@mui/material';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroSecond from './components/HeroSecond';
import Footer from './components/Footer';
import OurServices from './components/OurServices';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <HeroSecond />
        <OurServices />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;