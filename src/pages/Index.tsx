import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Market from '@/components/sections/Market';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import Research from '@/components/sections/Research';
import CTA from '@/components/sections/CTA';
import SleepAssessment from '@/components/pages/SleepAssessment';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleSleepAssessmentClick = () => {
    setCurrentPage('sleep-assessment');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'sleep-assessment') {
    return <SleepAssessment onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header onSleepAssessmentClick={handleSleepAssessmentClick} />
      <main>
        <Hero />
        <Problem />
        <Market />
        <Solution />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
