"use client";

import React, { useState } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Services from './components/services';
import HealthCheck from './components/healthCheck'; // New Section
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust this value based on header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Header smoothScroll={smoothScroll} />
      <main className="mt-20"> {/* Add margin top to prevent overlap with fixed header */}
        <Hero smoothScroll={smoothScroll} />
        <About />
        <HealthCheck />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
