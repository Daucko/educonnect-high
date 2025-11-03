import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TestimonialsSection = () => {
  const [activeCategory, setActiveCategory] = useState('parents');

  const testimonialCategories = {
    parents: {
      title: 'Parent Testimonials',
      subtitle: 'Hear from families who chose EduConnect High',
      testimonials: [
        {
          id: 1,
          name: 'Sarah Johnson',
          role: 'Parent of Emma (Class of 2024)',
          image: 'https://images.unsplash.com/photo-1734456611474-13245d164868',
          imageAlt:
            'Professional woman with shoulder-length brown hair smiling warmly in business attire',
          content: `The communication between teachers and parents at EduConnect High is exceptional. I always know how Emma is progressing, and the teachers genuinely care about each student's success. The college preparation program helped Emma get into her dream university with a full scholarship.`,
          rating: 5,
          highlight: 'Exceptional Communication',
        },
        {
          id: 2,
          name: 'Michael Rodriguez',
          role: 'Parent of Alex (Class of 2023)',
          image: 'https://images.unsplash.com/photo-1617711084511-5671fc295c50',
          imageAlt:
            'Hispanic man with short black hair and beard wearing navy blue shirt smiling confidently',
          content: `What impressed us most was how the school adapted during challenging times. The hybrid learning model was seamless, and Alex never missed a beat in his education. The teachers went above and beyond to ensure every student felt supported and engaged.`,
          rating: 5,
          highlight: 'Adaptability & Support',
        },
        {
          id: 3,
          name: 'Jennifer Chen',
          role: 'Parent of Lily (Current Junior)',
          image: 'https://images.unsplash.com/photo-1668049221564-862149a48e10',
          imageAlt:
            'Asian woman with long black hair wearing professional blazer with warm smile',
          content: `The diversity and inclusion at EduConnect High is remarkable. Lily has friends from all backgrounds and has developed such a global perspective. The international programs and cultural exchange opportunities have been life-changing for our family.`,
          rating: 5,
          highlight: 'Diversity & Global Perspective',
        },
      ],
    },
    students: {
      title: 'Student Voices',
      subtitle: 'Current students share their experiences',
      testimonials: [
        {
          id: 4,
          name: 'Marcus Thompson',
          role: 'Senior, Student Body President',
          image: 'https://images.unsplash.com/photo-1691535119089-be366342e07d',
          imageAlt:
            'African American teenage boy with short hair wearing school uniform and confident smile',
          content: `EduConnect High has given me so many opportunities to grow as a leader. From student government to the robotics team, I've been able to explore my passions while building skills for the future. The teachers here don't just teach - they mentor and inspire.`,
          rating: 5,
          highlight: 'Leadership Development',
        },
        {
          id: 5,
          name: 'Sophia Martinez',
          role: 'Junior, Honor Society Member',
          image: 'https://images.unsplash.com/photo-1482551041164-b04128ca8f02',
          imageAlt:
            'Latina teenage girl with curly hair wearing casual school attire with bright smile',
          content: `The academic support here is incredible. When I was struggling with calculus, my teacher stayed after school to help me understand the concepts. Now I'm considering majoring in engineering! The small class sizes mean teachers really know each student.`,
          rating: 5,
          highlight: 'Academic Excellence',
        },
        {
          id: 6,
          name: 'David Kim',
          role: 'Sophomore, Drama Club',
          image: 'https://images.unsplash.com/photo-1627793063826-0ee3a1430c1f',
          imageAlt:
            'Asian teenage boy with stylish hair wearing casual shirt with enthusiastic expression',
          content: `I was nervous about starting high school, but EduConnect made the transition so smooth. The buddy system paired me with an upperclassman who showed me around and helped me find my place. Now I'm performing in the school musical!`,
          rating: 5,
          highlight: 'Smooth Transition',
        },
      ],
    },
    alumni: {
      title: 'Alumni Success Stories',
      subtitle: 'Graduates making their mark on the world',
      testimonials: [
        {
          id: 7,
          name: 'Dr. Amanda Foster',
          role: 'Class of 2018, Medical Resident',
          image: 'https://images.unsplash.com/photo-1731350152147-fa357665a0ec',
          imageAlt:
            'Young professional woman in medical scrubs with stethoscope smiling confidently in hospital setting',
          content: `The science program at EduConnect High sparked my passion for medicine. The hands-on lab experiences and research opportunities gave me a huge advantage in college. I'm now a medical resident at Johns Hopkins, and I credit my high school foundation for my success.`,
          rating: 5,
          highlight: 'Medical Career Success',
        },
        {
          id: 8,
          name: 'James Wilson',
          role: 'Class of 2019, Software Engineer at Google',
          image: 'https://images.unsplash.com/photo-1674916973829-7147c6610bf0',
          imageAlt:
            'Young professional man with glasses wearing casual tech company attire in modern office',
          content: `The computer science and robotics programs at EduConnect were ahead of their time. I learned programming languages that most colleges don't even teach. The problem-solving skills and collaborative projects prepared me perfectly for the tech industry.`,
          rating: 5,
          highlight: 'Tech Industry Leader',
        },
        {
          id: 9,
          name: 'Isabella Rodriguez',
          role: 'Class of 2020, Environmental Lawyer',
          image: 'https://images.unsplash.com/photo-1628595556262-4cffd053a4bf',
          imageAlt:
            'Professional young woman in business suit standing confidently in law office with books in background',
          content: `The debate team and Model UN at EduConnect High taught me to think critically and speak confidently. These skills were invaluable in law school and now in my career as an environmental lawyer. The school's emphasis on global citizenship shaped my career path.`,
          rating: 5,
          highlight: 'Legal Career Excellence',
        },
      ],
    },
  };

  const categories = [
    { key: 'parents', label: 'Parents', icon: 'Heart' },
    { key: 'students', label: 'Students', icon: 'Users' },
    { key: 'alumni', label: 'Alumni', icon: 'Award' },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? '#F59E0B' : '#E5E7EB'}
        className={index < rating ? 'fill-current' : ''}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} />
            <span>Community Voices</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our
            <span className="text-gradient-primary"> Community Says</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear authentic stories from
            parents, students, and alumni about their EduConnect High experience
            and how it has transformed their lives.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-1 inline-flex">
            {categories?.map((category) => (
              <button
                key={category?.key}
                onClick={() => setActiveCategory(category?.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category?.key
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon name={category?.icon} size={18} />
                <span>{category?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Content */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {testimonialCategories?.[activeCategory]?.title}
            </h3>
            <p className="text-gray-600">
              {testimonialCategories?.[activeCategory]?.subtitle}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonialCategories?.[activeCategory]?.testimonials?.map(
              (testimonial) => (
                <div
                  key={testimonial?.id}
                  className="bg-white rounded-xl p-6 shadow-brand border border-gray-100 hover:shadow-brand-lg transition-all duration-300 hover-lift"
                >
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(testimonial?.rating)}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial?.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial?.image}
                        alt={testimonial?.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {testimonial?.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial?.role}
                      </div>
                    </div>
                  </div>

                  {/* Highlight Badge */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      <Icon name="Sparkles" size={12} />
                      <span>{testimonial?.highlight}</span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Become part of a community that celebrates achievement, supports
              growth, and prepares students for extraordinary futures. Your
              success story starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="UserPlus"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90"
              >
                Apply Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="hover:bg-primary hover:text-white hover:border-primary"
              >
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
