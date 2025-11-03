import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: 'Where Excellence Meets Innovation',
      subtitle: "Empowering Tomorrow's Leaders Today",
      description:
        'Join our vibrant community of learners, innovators, and future changemakers at EduConnect High School.',
      image: 'https://images.unsplash.com/photo-1592303637753-ce1e6b8a0ffb',
      imageAlt:
        'Diverse group of high school students collaborating on laptops in modern classroom with natural lighting',
      cta: 'Explore Academics',
      ctaLink: '/academics',
      badge: 'Academic Excellence',
    },
    {
      id: 2,
      title: 'Discover Your Passion',
      subtitle: '100+ Clubs & Activities',
      description:
        'From robotics to theater, sports to debate - find your community and unleash your potential in our dynamic student life programs.',
      image: 'https://images.unsplash.com/photo-1586167031389-1bbf99238604',
      imageAlt:
        'Students in science lab conducting chemistry experiment with colorful reactions and safety equipment',
      cta: 'Join Student Life',
      ctaLink: '/student-life',
      badge: 'Student Activities',
    },
    {
      id: 3,
      title: 'Your Future Starts Here',
      subtitle: '98% College Acceptance Rate',
      description:
        'Our comprehensive college prep program and dedicated counselors ensure every student is ready for their next chapter.',
      image: 'https://images.unsplash.com/photo-1665567031505-49c536110178',
      imageAlt:
        'Graduation ceremony with students in caps and gowns celebrating achievement outdoors on sunny day',
      cta: 'Apply Now',
      ctaLink: '/admissions',
      badge: 'College Success',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides?.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides?.length) % heroSlides?.length
    );
  };

  const currentHero = heroSlides?.[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={currentHero?.image}
          alt={currentHero?.imageAlt}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
              <Icon name="Award" size={16} color="white" />
              <span className="text-sm font-medium">{currentHero?.badge}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {currentHero?.title}
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-white/90">
                {currentHero?.subtitle}
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              {currentHero?.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to={currentHero?.ctaLink}>
                <Button
                  variant="default"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  {currentHero?.cta}
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Schedule Tour
                </Button>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">1,200+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-white/80">College Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-white/80">Programs</div>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="hidden lg:block space-y-6">
            {/* Achievement Cards */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Trophy" size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Latest Achievement
                  </h3>
                  <p className="text-sm text-white/80">
                    State Science Fair Winners
                  </p>
                </div>
              </div>
              <p className="text-white/90 text-sm">
                Our robotics team secured 1st place at the State Science Fair
                with their innovative water purification system.
              </p>
            </div>

            {/* Upcoming Event */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Calendar" size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Next Event</h3>
                  <p className="text-sm text-white/80">November 15, 2024</p>
                </div>
              </div>
              <p className="text-white/90 text-sm">
                Open House & College Fair - Meet our faculty and explore college
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {heroSlides?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-200"
        aria-label="Previous slide"
      >
        <Icon name="ChevronLeft" size={24} color="white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-200"
        aria-label="Next slide"
      >
        <Icon name="ChevronRight" size={24} color="white" />
      </button>
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 right-4 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
