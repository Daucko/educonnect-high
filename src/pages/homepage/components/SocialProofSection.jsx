import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialProofSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Parent of Junior Student',
      image: 'https://images.unsplash.com/photo-1668049221564-862149a48e10',
      imageAlt:
        'Professional Asian woman with shoulder-length black hair in business attire smiling warmly',
      content: `EduConnect High has exceeded our expectations in every way. The teachers genuinely care about each student's success, and the college preparation program helped my daughter get into her dream university. The communication between school and parents is outstanding.`,
      rating: 5,
      highlight: 'Outstanding communication and college prep',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      role: 'Alumni, Class of 2022',
      image: 'https://images.unsplash.com/photo-1593614838830-ee66a8c8753b',
      imageAlt:
        'Young Hispanic man with short dark hair in casual blue shirt smiling confidently outdoors',
      content: `The skills I learned at EduConnect High prepared me perfectly for college and beyond. The STEM program is world-class, and the teachers pushed me to achieve more than I thought possible. Now I'm studying engineering at MIT thanks to their support.`,
      rating: 5,
      highlight: 'World-class STEM program preparation',
    },
    {
      id: 3,
      name: 'Dr. Jennifer Walsh',
      role: 'Community Partner',
      image: 'https://images.unsplash.com/photo-1701232664370-39a8f24838cc',
      imageAlt:
        'Professional woman with blonde hair in white medical coat smiling in clinical setting',
      content: `As a local physician, I've worked with EduConnect High on health education programs. Their commitment to community engagement and student development is remarkable. These students are well-prepared, respectful, and genuinely excited about learning.`,
      rating: 5,
      highlight: 'Exceptional community engagement',
    },
    {
      id: 4,
      name: 'Robert Thompson',
      role: 'Parent of Graduate',
      image: 'https://images.unsplash.com/photo-1714974528889-d51109fb6ae9',
      imageAlt:
        'Middle-aged Caucasian man with graying hair in navy suit jacket smiling professionally',
      content: `Both of my children graduated from EduConnect High, and I couldn't be more pleased with their education. The school's focus on character development alongside academics created well-rounded individuals ready for life's challenges.`,
      rating: 5,
      highlight: 'Character development and academics',
    },
  ];

  const partnerships = [
    {
      name: 'Stanford University',
      logo: 'https://images.unsplash.com/photo-1616262274928-849a4de86134',
      logoAlt:
        'Stanford University campus building with red tile roof and palm trees',
      type: 'College Partnership',
      description: 'Early admission program',
    },
    {
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1677989017899-20b93ec2c0cc',
      logoAlt:
        'Modern Microsoft office building with glass facade and company signage',
      type: 'Technology Partner',
      description: 'STEM education support',
    },
    {
      name: 'City Hospital',
      logo: 'https://images.unsplash.com/photo-1700119251928-4b15e2bb1c69',
      logoAlt:
        'Modern hospital building exterior with medical center signage and emergency entrance',
      type: 'Healthcare Partner',
      description: 'Medical internship program',
    },
    {
      name: 'Local Arts Council',
      logo: 'https://images.unsplash.com/photo-1611406259415-2c98f3f3c6d9',
      logoAlt:
        'Art gallery interior with colorful paintings displayed on white walls under professional lighting',
      type: 'Arts Partner',
      description: 'Creative arts programs',
    },
  ];

  const accreditations = [
    {
      name: 'State Board of Education',
      badge: 'Fully Accredited',
      icon: 'Award',
      color: 'bg-primary',
    },
    {
      name: 'National Honor Society',
      badge: 'Charter School',
      icon: 'Medal',
      color: 'bg-accent',
    },
    {
      name: 'College Board',
      badge: 'AP Certified',
      icon: 'GraduationCap',
      color: 'bg-secondary',
    },
    {
      name: 'Safety Excellence',
      badge: '5-Star Rating',
      icon: 'Shield',
      color: 'bg-success',
    },
  ];

  const alumniSuccess = [
    {
      name: 'Emma Johnson',
      achievement: 'Harvard Medical School',
      year: 'Class of 2020',
      image: 'https://images.unsplash.com/photo-1486579945538-10aa2e61e1f6',
      imageAlt:
        'Young woman in medical scrubs with stethoscope smiling in hospital corridor',
    },
    {
      name: 'David Park',
      achievement: 'Google Software Engineer',
      year: 'Class of 2019',
      image: 'https://images.unsplash.com/photo-1695416155441-3508234cdab2',
      imageAlt:
        'Young Asian man in casual tech company attire working at computer with multiple monitors',
    },
    {
      name: 'Maria Santos',
      achievement: 'NASA Aerospace Engineer',
      year: 'Class of 2021',
      image: 'https://images.unsplash.com/photo-1726261655527-96573a2782f0',
      imageAlt:
        'Hispanic woman in NASA uniform standing in front of space shuttle model',
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials?.length) % testimonials?.length
    );
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-16 bg-gradient-to-br from-surface via-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Heart" size={16} />
            <span>Trusted by Our Community</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Hear from parents, students, alumni, and community partners about
            their EduConnect High experience
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-brand-lg border border-border p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full -ml-12 -mb-12"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        color="var(--color-accent)"
                        className="fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-text-primary leading-relaxed mb-6 italic">
                    "{currentTestimonial?.content}"
                  </blockquote>

                  <div className="mb-4">
                    <div className="font-bold text-text-primary text-lg">
                      {currentTestimonial?.name}
                    </div>
                    <div className="text-text-secondary">
                      {currentTestimonial?.role}
                    </div>
                  </div>

                  <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    <Icon name="Quote" size={14} />
                    <span>{currentTestimonial?.highlight}</span>
                  </div>
                </div>

                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-brand">
                    <Image
                      src={currentTestimonial?.image}
                      alt={currentTestimonial?.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <div className="flex space-x-2">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'bg-primary scale-125'
                          : 'bg-border hover:bg-primary/50'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                    aria-label="Previous testimonial"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                    aria-label="Next testimonial"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alumni Success Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Alumni Success Stories
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {alumniSuccess?.map((alumni, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-brand border border-border text-center hover:shadow-brand-lg transition-all duration-300 hover-lift"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={alumni?.image}
                    alt={alumni?.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-bold text-text-primary mb-1">
                  {alumni?.name}
                </h4>
                <p className="text-primary font-medium mb-2">
                  {alumni?.achievement}
                </p>
                <p className="text-text-secondary text-sm">{alumni?.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditations & Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Accreditations & Recognition
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {accreditations?.map((accred, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-brand transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 ${accred?.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                >
                  <Icon name={accred?.icon} size={24} color="white" />
                </div>
                <h4 className="font-semibold text-text-primary text-sm mb-1">
                  {accred?.name}
                </h4>
                <p className="text-text-secondary text-xs">{accred?.badge}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Partnerships */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">
            Community Partnerships
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerships?.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-brand transition-all duration-300 text-center"
              >
                <div className="w-16 h-12 mx-auto mb-4 rounded-lg overflow-hidden bg-surface flex items-center justify-center">
                  <Image
                    src={partner?.logo}
                    alt={partner?.logoAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="font-semibold text-text-primary text-sm mb-1">
                  {partner?.name}
                </h4>
                <p className="text-primary text-xs font-medium mb-1">
                  {partner?.type}
                </p>
                <p className="text-text-secondary text-xs">
                  {partner?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-secondary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Join Our Success Story</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Become part of a community that celebrates achievement, fosters
            growth, and prepares students for lifelong success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button
                variant="default"
                size="lg"
                iconName="UserPlus"
                iconPosition="left"
                className="bg-white text-secondary hover:bg-white/90"
              >
                Start Your Application
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-secondary"
              >
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
