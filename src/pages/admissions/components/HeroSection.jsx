import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-secondary rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Star" size={16} />
                <span>Now Accepting Applications for 2025-26</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Journey to
                <span className="text-gradient-primary block font-accent">
                  Excellence Starts Here
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Join a community where potential meets opportunity. Discover how
                EduConnect High transforms students into tomorrow's leaders
                through innovative education and unwavering support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90 shadow-brand-lg"
              >
                Take Virtual Tour
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="FileText"
                iconPosition="left"
                className="hover:bg-primary hover:text-white hover:border-primary"
              >
                Download Brochure
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-600">College Acceptance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$2.4M</div>
                <div className="text-sm text-gray-600">Scholarships Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15:1</div>
                <div className="text-sm text-gray-600">
                  Student-Teacher Ratio
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1665567031505-49c536110178"
                alt="Diverse group of high school students in graduation caps celebrating outdoors on campus with modern school building in background"
                className="w-full h-96 lg:h-[500px] object-cover"
              />

              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-brand">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Icon name="Users" size={24} color="white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      1,200+ Students
                    </div>
                    <div className="text-sm text-gray-600">
                      From 45+ Countries
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-brand animate-float">
              <Icon name="Award" size={32} color="white" />
            </div>

            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center shadow-brand animate-float"
              style={{ animationDelay: '1s' }}
            >
              <Icon name="BookOpen" size={24} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
