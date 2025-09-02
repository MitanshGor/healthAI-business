import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import VideoIntro from '../components/VideoIntro';
import ProblemSolution from '../components/ProblemSolution';
import CompetitiveAdvantage from '../components/CompetitiveAdvantage';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Market from '../components/Market';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <VideoIntro />
      <ProblemSolution />
      <CompetitiveAdvantage />
      <HowItWorks />
      <Features />
      <Market />
      <Contact />
      <Footer />
    </main>
  );
}
