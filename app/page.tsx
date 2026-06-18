'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import MobileDrawer from '@/components/MobileDrawer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Quote from '@/components/Quote';
import Impact from '@/components/Impact';
import Foundation from '@/components/Foundation';
import Stats from '@/components/Stats';
import Insights from '@/components/Insights';
import Media from '@/components/Media';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Header onMenuOpen={() => setDrawerOpen(true)} />
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main>
        <Hero />
        <About />
        <Quote />
        <Impact />
        <Foundation />
        <Stats />
        <Insights />
        <Media />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
