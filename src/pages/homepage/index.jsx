import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import QuickAccessDashboard from './components/QuickAccessDashboard';
import AchievementHighlights from './components/AchievementHighlights';
import LiveSchoolPulse from './components/LiveSchoolPulse';
import PersonalizedDashboard from './components/PersonalizedDashboard';
import SocialProofSection from './components/SocialProofSection';

const Homepage = () => {
  useEffect(() => {
    // Set page title
    document.title =
      'EduConnect High School - Where Excellence Meets Innovation';

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="pt-16 lg:pt-18">
        {/* Hero Section */}
        <HeroSection />

        {/* Quick Access Dashboard */}
        <QuickAccessDashboard />

        {/* Achievement Highlights */}
        <AchievementHighlights />

        {/* Live School Pulse */}
        <LiveSchoolPulse />

        {/* Personalized Dashboard */}
        <PersonalizedDashboard />

        {/* Social Proof Section */}
        <SocialProofSection />
      </main>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">EduConnect High</h3>
                  <p className="text-white/80 text-sm">
                    Excellence in Education
                  </p>
                </div>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Empowering tomorrow's leaders through innovative education,
                community engagement, and academic excellence.
              </p>
              <div className="space-y-2 text-sm text-white/80">
                <div>📍 123 Education Drive, Learning City, LC 12345</div>
                <div>📞 (555) 123-4567</div>
                <div>✉️ info@educonnecthigh.edu</div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a
                    href="/academics"
                    className="hover:text-white transition-colors"
                  >
                    Academics
                  </a>
                </li>
                <li>
                  <a
                    href="/student-life"
                    className="hover:text-white transition-colors"
                  >
                    Student Life
                  </a>
                </li>
                <li>
                  <a
                    href="/admissions"
                    className="hover:text-white transition-colors"
                  >
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="/news-events"
                    className="hover:text-white transition-colors"
                  >
                    News & Events
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Parent Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Faculty Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Alumni Network
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Emergency Info
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © {new Date()?.getFullYear()} EduConnect High School. All rights
              reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
