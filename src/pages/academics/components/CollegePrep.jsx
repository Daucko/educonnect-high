import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CollegePrep = () => {
  const [activeTab, setActiveTab] = useState('sat-act');

  const prepResources = {
    'sat-act': {
      title: 'SAT/ACT Preparation',
      icon: 'FileText',
      resources: [
        {
          name: 'SAT Practice Tests',
          description: 'Full-length practice exams with detailed explanations',
          type: 'Practice Test',
          difficulty: 'All Levels',
          duration: '3-4 hours',
          icon: 'Clock',
        },
        {
          name: 'ACT Math Bootcamp',
          description: 'Intensive math review covering all ACT math topics',
          type: 'Course',
          difficulty: 'Intermediate',
          duration: '6 weeks',
          icon: 'Calculator',
        },
        {
          name: 'Reading Comprehension Strategies',
          description: 'Proven techniques for tackling reading passages',
          type: 'Workshop',
          difficulty: 'Beginner',
          duration: '2 hours',
          icon: 'BookOpen',
        },
        {
          name: 'Essay Writing Masterclass',
          description: 'Learn to write compelling essays for both SAT and ACT',
          type: 'Masterclass',
          difficulty: 'Advanced',
          duration: '4 weeks',
          icon: 'PenTool',
        },
      ],
    },
    'college-apps': {
      title: 'College Applications',
      icon: 'GraduationCap',
      resources: [
        {
          name: 'Common Application Guide',
          description: 'Step-by-step walkthrough of the Common App process',
          type: 'Guide',
          difficulty: 'Beginner',
          duration: '1 hour',
          icon: 'FileText',
        },
        {
          name: 'Personal Statement Workshop',
          description: 'Craft compelling personal statements that stand out',
          type: 'Workshop',
          difficulty: 'Intermediate',
          duration: '3 hours',
          icon: 'Edit',
        },
        {
          name: 'Scholarship Search Strategy',
          description: 'Find and apply for scholarships effectively',
          type: 'Strategy Session',
          difficulty: 'All Levels',
          duration: '2 hours',
          icon: 'Search',
        },
        {
          name: 'Interview Preparation',
          description: 'Practice college interviews with confidence',
          type: 'Practice Session',
          difficulty: 'Intermediate',
          duration: '1.5 hours',
          icon: 'MessageCircle',
        },
      ],
    },
    'career-guidance': {
      title: 'Career Guidance',
      icon: 'Briefcase',
      resources: [
        {
          name: 'Career Interest Assessment',
          description: 'Discover careers that match your interests and skills',
          type: 'Assessment',
          difficulty: 'All Levels',
          duration: '30 minutes',
          icon: 'Target',
        },
        {
          name: 'Industry Exploration Series',
          description: 'Learn about different career paths and industries',
          type: 'Webinar Series',
          difficulty: 'Beginner',
          duration: '8 weeks',
          icon: 'Telescope',
        },
        {
          name: 'Resume Building Workshop',
          description: 'Create professional resumes for college and jobs',
          type: 'Workshop',
          difficulty: 'Beginner',
          duration: '2 hours',
          icon: 'FileText',
        },
        {
          name: 'Networking Skills Training',
          description: 'Build professional relationships and connections',
          type: 'Training',
          difficulty: 'Intermediate',
          duration: '4 hours',
          icon: 'Users',
        },
      ],
    },
  };

  const tabs = [
    { id: 'sat-act', label: 'SAT/ACT Prep', icon: 'FileText' },
    { id: 'college-apps', label: 'Applications', icon: 'GraduationCap' },
    { id: 'career-guidance', label: 'Career Guidance', icon: 'Briefcase' },
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'text-success bg-success/10';
      case 'Intermediate':
        return 'text-warning bg-warning/10';
      case 'Advanced':
        return 'text-error bg-error/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-brand p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          College Preparation Resources
        </h3>
        <p className="text-text-secondary">
          Comprehensive resources to help students prepare for college
          admissions and future careers.
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => setActiveTab(tab?.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg font-medium transition-all duration-200 ${
              activeTab === tab?.id
                ? 'text-primary bg-primary/5 border-b-2 border-primary'
                : 'text-text-secondary hover:text-primary hover:bg-surface'
            }`}
          >
            <Icon name={tab?.icon} size={16} />
            <span>{tab?.label}</span>
          </button>
        ))}
      </div>
      {/* Active Tab Content */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon
              name={prepResources?.[activeTab]?.icon}
              size={24}
              color="var(--color-primary)"
            />
          </div>
          <div>
            <h4 className="text-xl font-bold text-text-primary">
              {prepResources?.[activeTab]?.title}
            </h4>
            <p className="text-text-secondary">
              Essential resources for your academic journey
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prepResources?.[activeTab]?.resources?.map((resource, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 hover:shadow-brand transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                    <Icon
                      name={resource?.icon}
                      size={20}
                      color="var(--color-primary)"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold text-text-primary">
                      {resource?.name}
                    </h5>
                    <p className="text-sm text-text-secondary">
                      {resource?.type}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                    resource?.difficulty
                  )}`}
                >
                  {resource?.difficulty}
                </span>
              </div>

              <p className="text-text-secondary text-sm mb-4">
                {resource?.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Icon
                    name="Clock"
                    size={16}
                    color="var(--color-text-secondary)"
                  />
                  <span className="text-sm text-text-secondary">
                    {resource?.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Learn More
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  iconName="Play"
                  iconPosition="left"
                >
                  Start
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 p-6 bg-gradient-primary rounded-lg text-white text-center">
          <h4 className="text-xl font-bold mb-2">
            Ready to Start Your College Journey?
          </h4>
          <p className="mb-4 opacity-90">
            Schedule a meeting with our college counselors to create your
            personalized preparation plan.
          </p>
          <Button variant="secondary" iconName="Calendar" iconPosition="left">
            Schedule Counseling Session
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CollegePrep;
