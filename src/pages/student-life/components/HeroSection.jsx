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
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-secondary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Sparkles" size={16} />
                <span>Where Memories Are Made</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Experience the
                <span className="text-gradient-primary block">
                  Vibrant Life
                </span>
                at EduConnect High
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Discover a world of opportunities beyond the classroom. From
                championship sports teams to award-winning clubs, from student
                leadership to creative arts - your high school journey starts
                here.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-600">Active Clubs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15</div>
                <div className="text-sm text-gray-600">Sports Teams</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">200+</div>
                <div className="text-sm text-gray-600">Events Yearly</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Users"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90"
              >
                Join a Club Today
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="hover:bg-primary hover:text-white hover:border-primary"
              >
                View Events Calendar
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1705636050721-ab8e697c3158"
                alt="Diverse group of high school students laughing and studying together in modern library with natural lighting"
                className="w-full h-96 lg:h-[500px] object-cover"
              />

              {/* Floating Achievement Card */}
              <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-4 max-w-48">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Trophy" size={20} color="white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      State Champions
                    </div>
                    <div className="text-xs text-gray-600">
                      Debate Team 2024
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Event Card */}
              <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-52">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Calendar" size={20} color="white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Homecoming Dance
                    </div>
                    <div className="text-xs text-gray-600">
                      Nov 15 • 7:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
