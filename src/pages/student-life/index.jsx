import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ClubsSection from './components/ClubsSection';
import SportsSection from './components/SportsSection';
import EventsSection from './components/EventsSection';
import StudentVoicesSection from './components/StudentVoicesSection';
import AchievementGallery from './components/AchievementGallery';

const StudentLife = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <HeroSection />
        <ClubsSection />
        <SportsSection />
        <EventsSection />
        <StudentVoicesSection />
        <AchievementGallery />
      </main>
    </div>
  );
};

export default StudentLife;
