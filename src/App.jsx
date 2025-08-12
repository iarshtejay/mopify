import React from 'react';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroSecond from './components/HeroSecond';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <main>
        <Hero />
        <HeroSecond />
        <Features />
      </main>
      <Footer />
    </>
  );
}

export default App;