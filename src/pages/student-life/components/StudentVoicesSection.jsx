import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const StudentVoicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stories', icon: 'MessageSquare' },
    { id: 'academic', name: 'Academic', icon: 'BookOpen' },
    { id: 'sports', name: 'Sports', icon: 'Trophy' },
    { id: 'arts', name: 'Arts', icon: 'Palette' },
    { id: 'leadership', name: 'Leadership', icon: 'Users' },
  ];

  const studentStories = [
    {
      id: 1,
      name: 'Sarah Chen',
      grade: 'Senior',
      category: 'academic',
      title: 'From Struggling Student to Science Fair Champion',
      excerpt:
        'How the mentorship program and dedicated teachers helped me discover my passion for biochemistry and win the state science fair.',
      image: 'https://images.unsplash.com/photo-1617565980755-d57f254b0ba7',
      imageAlt:
        'Asian female student in lab coat smiling while working with scientific equipment in chemistry laboratory',
      readTime: '3 min read',
      likes: 127,
      date: '2024-10-28',
      achievement: 'State Science Fair Winner',
      quote:
        "EduConnect High didn't just teach me science - it taught me to believe in myself.",
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      grade: 'Junior',
      category: 'sports',
      title: 'Balancing Football and Honor Roll',
      excerpt:
        'My journey as team captain while maintaining a 4.0 GPA and the support system that made it possible.',
      image: 'https://images.unsplash.com/photo-1732911856338-b55b2fdf0f6d',
      imageAlt:
        'African American male student athlete in football uniform holding helmet with confident smile on field',
      readTime: '4 min read',
      likes: 89,
      date: '2024-10-25',
      achievement: 'Team Captain & Honor Roll',
      quote:
        'The coaches here care about your grades as much as your game performance.',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      grade: 'Sophomore',
      category: 'arts',
      title: 'Finding My Voice Through Drama Club',
      excerpt:
        'How joining the drama club helped me overcome shyness and discover my passion for theater and public speaking.',
      image: 'https://images.unsplash.com/photo-1699855909020-637709315fee',
      imageAlt:
        'Hispanic female student in theatrical costume performing on stage with dramatic lighting and backdrop',
      readTime: '2 min read',
      likes: 156,
      date: '2024-10-22',
      achievement: 'Lead Role in School Play',
      quote:
        'Drama club gave me confidence I never knew I had. Now I can speak in front of anyone!',
    },
    {
      id: 4,
      name: 'Alex Thompson',
      grade: 'Senior',
      category: 'leadership',
      title: 'Student Government: Making Real Change',
      excerpt:
        "How we successfully advocated for mental health resources and created the peer support program that's helping hundreds of students.",
      image: 'https://images.unsplash.com/photo-1633775218380-30c7ab85a5c5',
      imageAlt:
        'Caucasian male student in business casual attire speaking at podium during student government meeting',
      readTime: '5 min read',
      likes: 203,
      date: '2024-10-20',
      achievement: 'Student Body President',
      quote:
        "At EduConnect High, student voices aren't just heard - they create real change.",
    },
    {
      id: 5,
      name: 'Priya Patel',
      grade: 'Junior',
      category: 'academic',
      title: 'Coding My Way to College Scholarships',
      excerpt:
        'Starting with zero programming knowledge to winning multiple coding competitions and earning scholarship offers.',
      image: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee',
      imageAlt:
        'Indian female student working on laptop with code on screen in modern computer lab with focused expression',
      readTime: '4 min read',
      likes: 174,
      date: '2024-10-18',
      achievement: 'Coding Competition Winner',
      quote:
        "The computer science program here opened doors I didn't even know existed.",
    },
    {
      id: 6,
      name: 'Jordan Williams',
      grade: 'Senior',
      category: 'arts',
      title: 'From Doodles to Gallery Exhibitions',
      excerpt:
        'My artistic journey from sketching in notebooks to having my work displayed in local galleries and winning art scholarships.',
      image: 'https://images.unsplash.com/photo-1538360513396-462acd4c9732',
      imageAlt:
        'Mixed race student artist working on detailed painting in bright art studio surrounded by colorful artwork',
      readTime: '3 min read',
      likes: 142,
      date: '2024-10-15',
      achievement: 'Art Scholarship Recipient',
      quote:
        'The art teachers here saw potential in me before I saw it in myself.',
    },
  ];

  const filteredStories =
    selectedCategory === 'all'
      ? studentStories
      : studentStories?.filter((story) => story?.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Student <span className="text-gradient-primary">Voices</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from real students. Discover how EduConnect High is
            shaping futures, building confidence, and creating opportunities for
            success in every area of life.
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
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredStories?.map((story) => (
            <article
              key={story?.id}
              className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Student Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={story?.image}
                  alt={story?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm font-medium text-primary">
                    {story?.grade}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                  {story?.achievement}
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6">
                {/* Author Info */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">
                    {story?.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Icon name="Clock" size={14} />
                    <span>{story?.readTime}</span>
                  </div>
                </div>

                {/* Story Title */}
                <h4 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {story?.title}
                </h4>

                {/* Story Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story?.excerpt}
                </p>

                {/* Quote */}
                <blockquote className="bg-primary/5 border-l-4 border-primary p-3 mb-4">
                  <p className="text-sm italic text-gray-700">
                    "{story?.quote}"
                  </p>
                </blockquote>

                {/* Story Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} />
                      <span>{story?.likes}</span>
                    </div>
                    <span>{formatDate(story?.date)}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <Button
                  variant="outline"
                  fullWidth
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="hover:bg-primary hover:text-white hover:border-primary"
                >
                  Read Full Story
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Share Your Story CTA */}
        <div className="bg-white rounded-2xl shadow-brand p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Share Your Story
              </h3>
              <p className="text-gray-600 mb-6">
                Have an inspiring story to tell? Whether it's about overcoming
                challenges, achieving goals, or making a difference, we want to
                hear from you. Your story could inspire the next generation of
                Eagles.
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Edit" size={16} color="var(--color-primary)" />
                  </div>
                  <span className="text-gray-700">
                    Write about your achievements and challenges
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon
                      name="Camera"
                      size={16}
                      color="var(--color-secondary)"
                    />
                  </div>
                  <span className="text-gray-700">
                    Include photos from your journey
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={16} color="var(--color-accent)" />
                  </div>
                  <span className="text-gray-700">
                    Inspire other students with your experience
                  </span>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                iconName="PenTool"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90"
              >
                Submit Your Story
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1622675103136-e4b90c9a33d6"
                alt="Diverse group of students collaborating and writing together in bright modern classroom setting"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Student Blog CTA */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            iconName="ExternalLink"
            iconPosition="right"
            className="hover:bg-primary hover:text-white hover:border-primary"
          >
            Visit Student Blog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudentVoicesSection;
