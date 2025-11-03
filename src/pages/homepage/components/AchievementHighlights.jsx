import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const AchievementHighlights = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Achievements', icon: 'Award' },
    { id: 'academic', name: 'Academic', icon: 'BookOpen' },
    { id: 'sports', name: 'Sports', icon: 'Trophy' },
    { id: 'arts', name: 'Arts', icon: 'Palette' },
    { id: 'community', name: 'Community', icon: 'Heart' },
  ];

  const achievements = [
    {
      id: 1,
      category: 'academic',
      title: 'State Science Fair Champions',
      description:
        'Our robotics team won 1st place with their innovative water purification system that can clean 100 gallons per hour.',
      image: 'https://images.unsplash.com/photo-1687150399361-8dd0d6e6804b',
      imageAlt:
        'Students in lab coats working with robotic water purification system in modern science laboratory',
      date: 'October 28, 2024',
      students: ['Sarah Chen', 'Marcus Johnson', 'Elena Rodriguez'],
      badge: '1st Place',
      badgeColor: 'bg-accent',
    },
    {
      id: 2,
      category: 'sports',
      title: 'Regional Soccer Championship',
      description:
        'Varsity soccer team secured the regional title with an undefeated season, advancing to state playoffs.',
      image: 'https://images.unsplash.com/photo-1535940777578-89180f0ca5c7',
      imageAlt:
        'Soccer team celebrating victory on field with trophy, players in blue uniforms jumping with joy',
      date: 'October 25, 2024',
      students: ['Team Captain: Alex Thompson'],
      badge: 'Champions',
      badgeColor: 'bg-success',
    },
    {
      id: 3,
      category: 'arts',
      title: 'National Art Competition Winner',
      description:
        "Junior Emma Watson's digital art piece 'Future Visions' earned national recognition and a $5,000 scholarship.",
      image: 'https://images.unsplash.com/photo-1715678077681-e4163401e7a3',
      imageAlt:
        'Young artist working on colorful digital artwork at computer with graphics tablet and stylus',
      date: 'October 20, 2024',
      students: ['Emma Watson'],
      badge: 'National Winner',
      badgeColor: 'bg-brand-plum',
    },
    {
      id: 4,
      category: 'community',
      title: 'Community Service Excellence',
      description:
        'Student volunteers completed 2,500+ hours of community service, supporting local food banks and literacy programs.',
      image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce',
      imageAlt:
        'Diverse group of students volunteering at food bank, sorting donations and helping community members',
      date: 'October 15, 2024',
      students: ['50+ Student Volunteers'],
      badge: '2,500+ Hours',
      badgeColor: 'bg-secondary',
    },
    {
      id: 5,
      category: 'academic',
      title: 'Debate Team State Qualifiers',
      description:
        'Debate team advanced to state championships after winning regional tournament with perfect record.',
      image: 'https://images.unsplash.com/photo-1681567012715-4990694c5aa9',
      imageAlt:
        'Students in formal attire participating in debate competition with podiums and judges in background',
      date: 'October 12, 2024',
      students: ['Debate Team'],
      badge: 'State Bound',
      badgeColor: 'bg-primary',
    },
    {
      id: 6,
      category: 'sports',
      title: 'Cross Country State Runners',
      description:
        'Three runners qualified for state meet with personal best times at regional championship.',
      image: 'https://images.unsplash.com/photo-1638148712355-9706e53593fb',
      imageAlt:
        'Cross country runners in action during race through wooded trail on sunny autumn day',
      date: 'October 8, 2024',
      students: ['Jake Miller', 'Sofia Patel', 'David Kim'],
      badge: 'State Qualifiers',
      badgeColor: 'bg-brand-ocean',
    },
  ];

  const filteredAchievements =
    activeCategory === 'all'
      ? achievements
      : achievements?.filter(
          (achievement) => achievement?.category === activeCategory
        );

  const stats = [
    {
      label: 'State Championships',
      value: '12',
      icon: 'Trophy',
      color: 'text-accent',
    },
    {
      label: 'National Awards',
      value: '8',
      icon: 'Award',
      color: 'text-primary',
    },
    {
      label: 'Scholarship Winners',
      value: '45',
      icon: 'GraduationCap',
      color: 'text-secondary',
    },
    {
      label: 'Community Hours',
      value: '2,500+',
      icon: 'Heart',
      color: 'text-success',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} />
            <span>Student Achievements</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Celebrating Excellence
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Our students consistently excel in academics, athletics, arts, and
            community service
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-surface rounded-xl border border-border"
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-current/10 flex items-center justify-center ${stat?.color}`}
              >
                <Icon name={stat?.icon} size={24} className={stat?.color} />
              </div>
              <div className="text-2xl font-bold text-text-primary mb-1">
                {stat?.value}
              </div>
              <div className="text-sm text-text-secondary">{stat?.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category?.id
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredAchievements?.map((achievement) => (
            <div
              key={achievement?.id}
              className="group bg-white rounded-2xl shadow-brand border border-border overflow-hidden hover:shadow-brand-lg transition-all duration-300 hover-lift"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={achievement?.image}
                  alt={achievement?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-4 left-4">
                  <span
                    className={`${achievement?.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {achievement?.badge}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-text-secondary">
                    {achievement?.date}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      achievement?.category === 'academic'
                        ? 'bg-primary/10 text-primary'
                        : achievement?.category === 'sports'
                        ? 'bg-success/10 text-success'
                        : achievement?.category === 'arts'
                        ? 'bg-brand-plum/10 text-brand-plum'
                        : 'bg-secondary/10 text-secondary'
                    }`}
                  >
                    <Icon
                      name={
                        categories?.find(
                          (cat) => cat?.id === achievement?.category
                        )?.icon || 'Award'
                      }
                      size={16}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {achievement?.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {achievement?.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Users"
                      size={14}
                      color="var(--color-text-secondary)"
                    />
                    <span className="text-sm text-text-secondary">
                      {achievement?.students?.join(', ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-primary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Join Our Success Story?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Discover how EduConnect High can help you achieve your academic and
            personal goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions">
              <Button
                variant="default"
                size="lg"
                iconName="UserPlus"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                Apply Now
              </Button>
            </Link>
            <Link to="/student-life">
              <Button
                variant="outline"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementHighlights;
