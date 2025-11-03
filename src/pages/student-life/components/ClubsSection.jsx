import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ClubsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Clubs', icon: 'Grid3X3' },
    { id: 'academic', name: 'Academic', icon: 'BookOpen' },
    { id: 'arts', name: 'Arts & Culture', icon: 'Palette' },
    { id: 'service', name: 'Community Service', icon: 'Heart' },
    { id: 'stem', name: 'STEM', icon: 'Cpu' },
    { id: 'sports', name: 'Sports & Recreation', icon: 'Trophy' },
  ];

  const clubs = [
    {
      id: 1,
      name: 'Debate Team',
      category: 'academic',
      description:
        'Sharpen your argumentative skills and compete at state level competitions.',
      image: 'https://images.unsplash.com/photo-1681567012715-4990694c5aa9',
      imageAlt:
        'Students in formal attire engaged in heated debate at podium in school auditorium',
      members: 24,
      meetingTime: 'Tuesdays 3:30 PM',
      achievements: ['State Champions 2024', 'Regional Winners'],
      advisor: 'Ms. Johnson',
      isNew: false,
    },
    {
      id: 2,
      name: 'Drama Club',
      category: 'arts',
      description:
        'Express yourself through theater, from Shakespeare to modern productions.',
      image: 'https://images.unsplash.com/photo-1687369683218-71ee3b33f64d',
      imageAlt:
        'Theater students in colorful costumes rehearsing on stage under bright spotlights',
      members: 32,
      meetingTime: 'Mon & Wed 4:00 PM',
      achievements: ['Best High School Production 2024'],
      advisor: 'Mr. Davis',
      isNew: false,
    },
    {
      id: 3,
      name: 'Robotics Team',
      category: 'stem',
      description:
        'Build, program, and compete with cutting-edge robotics technology.',
      image: 'https://images.unsplash.com/photo-1731149791398-404c444ed5c9',
      imageAlt:
        'Students working on complex robot with circuit boards and mechanical parts in technology lab',
      members: 18,
      meetingTime: 'Thursdays 3:45 PM',
      achievements: ['Regional Qualifiers', 'Innovation Award'],
      advisor: 'Dr. Martinez',
      isNew: true,
    },
    {
      id: 4,
      name: 'Environmental Club',
      category: 'service',
      description:
        'Make a difference in our community through environmental action and awareness.',
      image: 'https://images.unsplash.com/photo-1659430752005-6ea1ba732745',
      imageAlt:
        'Students planting trees and cleaning up park area wearing matching green volunteer t-shirts',
      members: 28,
      meetingTime: 'Fridays 3:30 PM',
      achievements: ['Community Impact Award', '500 Trees Planted'],
      advisor: 'Ms. Green',
      isNew: false,
    },
    {
      id: 5,
      name: 'Photography Club',
      category: 'arts',
      description:
        'Capture moments and develop your artistic vision through digital and film photography.',
      image: 'https://images.unsplash.com/photo-1495295482929-5403d732f147',
      imageAlt:
        'Student photographer with professional camera taking pictures in art studio with natural lighting',
      members: 22,
      meetingTime: 'Wednesdays 3:30 PM',
      achievements: ['Student Art Show Featured', 'Local Gallery Exhibition'],
      advisor: 'Ms. Chen',
      isNew: false,
    },
    {
      id: 6,
      name: 'Model UN',
      category: 'academic',
      description:
        'Engage in diplomatic simulations and develop global awareness and leadership skills.',
      image: 'https://images.unsplash.com/photo-1724690683864-b33a5eaeda79',
      imageAlt:
        'Students in business attire participating in Model UN conference with country nameplates and formal debate setup',
      members: 26,
      meetingTime: 'Tuesdays 4:00 PM',
      achievements: ['Outstanding Delegation Award', 'Best Position Paper'],
      advisor: 'Mr. Thompson',
      isNew: false,
    },
  ];

  const filteredClubs =
    selectedCategory === 'all'
      ? clubs
      : clubs?.filter((club) => club?.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Discover Your <span className="text-gradient-primary">Passion</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With over 50 active clubs and organizations, there's something for
            everyone. Join a community of like-minded students and pursue your
            interests.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category?.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Clubs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClubs?.map((club) => (
            <div
              key={club?.id}
              className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Club Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={club?.image}
                  alt={club?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {club?.isNew && (
                  <div className="absolute top-3 right-3 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                    New!
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center space-x-2 text-sm">
                    <Icon name="Users" size={14} color="var(--color-primary)" />
                    <span className="font-medium text-gray-900">
                      {club?.members} members
                    </span>
                  </div>
                </div>
              </div>

              {/* Club Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {club?.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {club?.description}
                  </p>
                </div>

                {/* Meeting Info */}
                <div className="flex items-center space-x-2 mb-4 text-sm text-gray-600">
                  <Icon name="Clock" size={14} />
                  <span>{club?.meetingTime}</span>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Recent Achievements:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {club?.achievements
                      ?.slice(0, 2)
                      ?.map((achievement, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                        >
                          {achievement}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Advisor */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Advisor:</span>{' '}
                    {club?.advisor}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  fullWidth
                  iconName="UserPlus"
                  iconPosition="left"
                  className="hover:bg-primary hover:text-white hover:border-primary"
                >
                  Join Club
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            className="bg-gradient-primary hover:opacity-90"
          >
            View All Clubs & Organizations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;
