import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import StaffDirectory from './components/StaffDirectory';
import ContactMethods from './components/ContactMethods';
import LocationMap from './components/LocationMap';
import VolunteerOpportunities from './components/VolunteerOpportunities';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - EduConnect High School</title>
        <meta
          name="description"
          content="Get in touch with EduConnect High School. Find contact information, staff directory, visit our campus, and discover volunteer opportunities in our school community."
        />
        <meta
          name="keywords"
          content="contact, EduConnect High, school contact, staff directory, campus visit, volunteer opportunities, school communication"
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16 lg:pt-18">
          <ContactHero />
          <ContactForm />
          <ContactMethods />
          <StaffDirectory />
          <LocationMap />
          <VolunteerOpportunities />
        </main>

        {/* Footer */}
        <footer className="bg-text-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
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
                  Empowering students to achieve their full potential through
                  innovative education, community engagement, and personalized
                  support.
                </p>
                <div className="space-y-2">
                  <p className="text-white/80 text-sm">
                    📍 123 Education Boulevard, Learning City, LC 12345
                  </p>
                  <p className="text-white/80 text-sm">📞 (555) 123-4567</p>
                  <p className="text-white/80 text-sm">
                    ✉️ info@educonnecthigh.edu
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-white/80 text-sm">
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
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-white transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Emergency Info
                    </a>
                  </li>
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
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/80 text-sm">
                © {new Date()?.getFullYear()} EduConnect High School. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;
