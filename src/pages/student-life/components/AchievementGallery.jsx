import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const AchievementGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Achievements', icon: 'Award' },
    { id: 'academic', name: 'Academic', icon: 'BookOpen' },
    { id: 'athletics', name: 'Athletics', icon: 'Trophy' },
    { id: 'arts', name: 'Arts & Culture', icon: 'Palette' },
    { id: 'community', name: 'Community Service', icon: 'Heart' },
  ];

  const achievements = [
    {
      id: 1,
      title: 'National Merit Scholars',
      category: 'academic',
      description:
        '15 students recognized as National Merit Semifinalists for outstanding PSAT performance',
      image: 'https://images.unsplash.com/photo-1524733203763-25173af185b8',
      imageAlt:
        'Students in graduation caps and gowns holding certificates at academic awards ceremony with proud families',
      date: '2024-10-15',
      students: [
        'Sarah Chen',
        'Michael Rodriguez',
        'Priya Patel',
        'Alex Thompson',
        '+11 more',
      ],
      award: 'National Recognition',
      isRecent: true,
    },
    {
      id: 2,
      title: 'State Football Champions',
      category: 'athletics',
      description:
        'Eagles football team wins state championship with undefeated season record',
      image: 'https://images.unsplash.com/photo-1728028646600-b37d075b1316',
      imageAlt:
        'Football team celebrating with state championship trophy on field surrounded by cheering fans and confetti',
      date: '2024-11-01',
      students: [
        'Marcus Johnson (Captain)',
        'David Wilson',
        'Jake Martinez',
        'Team of 45',
      ],
      award: 'State Champions',
      isRecent: true,
    },
    {
      id: 3,
      title: 'Regional Science Olympiad Winners',
      category: 'academic',
      description:
        'Science team places first in regional competition, advancing to state finals',
      image: 'https://images.unsplash.com/photo-1586167031389-1bbf99238604',
      imageAlt:
        'Students in lab coats holding gold medals and science competition trophies in laboratory setting',
      date: '2024-10-28',
      students: ['Emma Rodriguez', 'Jordan Kim', 'Lisa Wang', 'Science Team'],
      award: 'Regional Champions',
      isRecent: true,
    },
    {
      id: 4,
      title: 'All-State Orchestra Selection',
      category: 'arts',
      description:
        'Three students selected for prestigious All-State Orchestra program',
      image: 'https://images.unsplash.com/photo-1716934069576-bf070d27512d',
      imageAlt:
        'Students in formal concert attire performing with orchestra instruments on stage with professional lighting',
      date: '2024-10-20',
      students: [
        'Maya Patel (Violin)',
        'Carlos Rodriguez (Cello)',
        'Anna Chen (Flute)',
      ],
      award: 'All-State Selection',
      isRecent: false,
    },
    {
      id: 5,
      title: 'Community Service Award',
      category: 'community',
      description:
        'Environmental Club recognized for planting 500 trees and organizing community cleanups',
      image: 'https://images.unsplash.com/photo-1659430752005-6ea1ba732745',
      imageAlt:
        'Students in matching volunteer t-shirts planting trees and cleaning up community park with shovels and trash bags',
      date: '2024-10-12',
      students: [
        'Environmental Club',
        '28 Active Members',
        'Community Partners',
      ],
      award: 'City Recognition',
      isRecent: false,
    },
    {
      id: 6,
      title: 'Debate Team State Champions',
      category: 'academic',
      description:
        'Varsity debate team wins state championship for second consecutive year',
      image: 'https://images.unsplash.com/photo-1733850263579-a2c09da310bf',
      imageAlt:
        'Debate team members in formal business attire holding championship trophy and medals at state competition podium',
      date: '2024-09-30',
      students: [
        'Alex Thompson',
        'Sarah Chen',
        'Michael Rodriguez',
        'Debate Team',
      ],
      award: 'Back-to-Back Champions',
      isRecent: false,
    },
    {
      id: 7,
      title: 'Art Scholarship Recipients',
      category: 'arts',
      description:
        'Five seniors receive full art scholarships to prestigious universities',
      image: 'https://images.unsplash.com/photo-1710361929354-78a57be7db48',
      imageAlt:
        'Art students displaying their award-winning paintings and sculptures in school gallery with scholarship certificates',
      date: '2024-09-25',
      students: [
        'Jordan Williams',
        'Emma Martinez',
        'Lisa Chen',
        'Art Students',
      ],
      award: 'College Scholarships',
      isRecent: false,
    },
    {
      id: 8,
      title: 'Robotics World Championship',
      category: 'academic',
      description:
        'Robotics team advances to world championship after winning regional and state competitions',
      image: 'https://images.unsplash.com/photo-1550710770-d9a517f1f098',
      imageAlt:
        'Robotics team members operating advanced robot during world championship competition with international flags in background',
      date: '2024-09-15',
      students: [
        'Priya Patel',
        'Tech Team',
        'Engineering Students',
        '18 Members',
      ],
      award: 'World Qualifiers',
      isRecent: false,
    },
  ];

  const filteredAchievements =
    selectedCategory === 'all'
      ? achievements
      : achievements?.filter(
          (achievement) => achievement?.category === selectedCategory
        );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      academic: 'bg-blue-100 text-blue-700',
      athletics: 'bg-orange-100 text-orange-700',
      arts: 'bg-purple-100 text-purple-700',
      community: 'bg-green-100 text-green-700',
    };
    return colors?.[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Achievement <span className="text-gradient-primary">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating the outstanding accomplishments of our Eagles. From
            academic excellence to athletic victories, our students continue to
            soar to new heights.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={24} color="var(--color-primary)" />
            </div>
            <div className="text-2xl font-bold text-primary">150+</div>
            <div className="text-sm text-gray-600">Awards This Year</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Trophy" size={24} color="var(--color-secondary)" />
            </div>
            <div className="text-2xl font-bold text-secondary">25</div>
            <div className="text-sm text-gray-600">Championships</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon
                name="GraduationCap"
                size={24}
                color="var(--color-accent)"
              />
            </div>
            <div className="text-2xl font-bold text-accent">$2.5M</div>
            <div className="text-sm text-gray-600">Scholarships Earned</div>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-brand">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} color="rgb(34, 197, 94)" />
            </div>
            <div className="text-2xl font-bold text-green-600">500+</div>
            <div className="text-sm text-gray-600">Students Recognized</div>
          </div>
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
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAchievements?.map((achievement) => (
            <div
              key={achievement?.id}
              className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Achievement Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={achievement?.image}
                  alt={achievement?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {achievement?.isRecent && (
                  <div className="absolute top-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    Recent
                  </div>
                )}

                <div
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                    achievement?.category
                  )}`}
                >
                  {achievement?.category?.charAt(0)?.toUpperCase() +
                    achievement?.category?.slice(1)}
                </div>

                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="text-sm font-bold text-primary">
                    {achievement?.award}
                  </div>
                </div>
              </div>

              {/* Achievement Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {achievement?.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {achievement?.description}
                </p>

                {/* Date */}
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                  <Icon name="Calendar" size={14} />
                  <span>{formatDate(achievement?.date)}</span>
                </div>

                {/* Students Involved */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Students Recognized:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {achievement?.students
                      ?.slice(0, 3)
                      ?.map((student, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                        >
                          {student}
                        </span>
                      ))}
                    {achievement?.students?.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{achievement?.students?.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  variant="outline"
                  fullWidth
                  iconName="Eye"
                  iconPosition="left"
                  className="hover:bg-primary hover:text-white hover:border-primary"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition CTA */}
        <div className="bg-white rounded-2xl shadow-brand p-8 lg:p-12 mt-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Star" size={32} color="white" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Nominate a Student for Recognition
            </h3>

            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Know a student who deserves recognition for their achievements,
              leadership, or positive impact? Help us celebrate their success by
              submitting a nomination.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Award"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90"
              >
                Submit Nomination
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
                className="hover:bg-primary hover:text-white hover:border-primary"
              >
                View All Achievements
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementGallery;
