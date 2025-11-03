import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ApplicationProcess from './components/ApplicationProcess';
import VirtualTour from './components/VirtualTour';
import TestimonialsSection from './components/TestimonialsSection';
import FinancialAid from './components/FinancialAid';
import EventsSection from './components/EventsSection';

const AdmissionsPage = () => {
  return (
    <>
      <Helmet>
        <title>Admissions - EduConnect High School | Apply Today</title>
        <meta
          name="description"
          content="Join EduConnect High School - where potential meets opportunity. Explore our admissions process, virtual tours, financial aid options, and upcoming events. Apply today!"
        />
        <meta
          name="keywords"
          content="high school admissions, school application, virtual tour, financial aid, scholarships, EduConnect High"
        />
        <meta
          property="og:title"
          content="Admissions - EduConnect High School"
        />
        <meta
          property="og:description"
          content="Discover your path to excellence at EduConnect High. Learn about our admissions process and join our community of future leaders."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/admissions" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          <HeroSection />
          <ApplicationProcess />
          <VirtualTour />
          <TestimonialsSection />
          <FinancialAid />
          <EventsSection />
        </main>
      </div>
    </>
  );
};

export default AdmissionsPage;
