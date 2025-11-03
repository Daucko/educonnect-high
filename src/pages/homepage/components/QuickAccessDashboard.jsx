import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickAccessDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather] = useState({
    temperature: 72,
    condition: 'Sunny',
    icon: 'Sun',
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const quickLinks = [
    {
      title: 'Student Portal',
      description: 'Grades, assignments & schedules',
      icon: 'BookOpen',
      color: 'bg-primary',
      link: '/academics',
      badge: '3 new',
    },
    {
      title: 'Calendar',
      description: 'Events & important dates',
      icon: 'Calendar',
      color: 'bg-secondary',
      link: '/news-events',
      badge: 'Today',
    },
    {
      title: 'Lunch Menu',
      description: "Today's cafeteria offerings",
      icon: 'UtensilsCrossed',
      color: 'bg-accent',
      link: '#',
      badge: 'Pizza Day!',
    },
    {
      title: 'Transportation',
      description: 'Bus routes & schedules',
      icon: 'Bus',
      color: 'bg-brand-ocean',
      link: '/contact',
      badge: null,
    },
  ];

  const announcements = [
    {
      id: 1,
      title: 'Early Dismissal Tomorrow',
      content:
        'School will dismiss at 1:30 PM on November 2nd for teacher professional development.',
      time: '2 hours ago',
      priority: 'high',
      icon: 'AlertTriangle',
    },
    {
      id: 2,
      title: 'Winter Sports Tryouts',
      content:
        'Basketball and wrestling tryouts begin November 5th. Sign up in the athletics office.',
      time: '5 hours ago',
      priority: 'medium',
      icon: 'Trophy',
    },
    {
      id: 3,
      title: 'College Fair Next Week',
      content:
        'Representatives from 50+ colleges will be here November 8th from 6-8 PM.',
      time: '1 day ago',
      priority: 'medium',
      icon: 'GraduationCap',
    },
  ];

  const formatTime = (date) => {
    return date?.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Your School Hub
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Quick access to everything you need for a successful school day
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Quick Links & Weather */}
          <div className="lg:col-span-1 space-y-6">
            {/* Time & Weather Widget */}
            <div className="bg-white rounded-2xl p-6 shadow-brand border border-border">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Icon
                    name={weather?.icon}
                    size={32}
                    color="var(--color-accent)"
                  />
                  <div>
                    <div className="text-3xl font-bold text-text-primary">
                      {weather?.temperature}°F
                    </div>
                    <div className="text-sm text-text-secondary">
                      {weather?.condition}
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="text-2xl font-bold text-primary">
                    {formatTime(currentTime)}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {formatDate(currentTime)}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              {quickLinks?.map((link, index) => (
                <Link
                  key={index}
                  to={link?.link}
                  className="group bg-white rounded-xl p-4 shadow-brand border border-border hover:shadow-brand-lg transition-all duration-300 hover-lift"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-10 h-10 ${link?.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon name={link?.icon} size={20} color="white" />
                      </div>
                      {link?.badge && (
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                          {link?.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                        {link?.title}
                      </h3>
                      <p className="text-xs text-text-secondary mt-1">
                        {link?.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column - Announcements */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-brand border border-border">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-text-primary">
                    Daily Announcements
                  </h3>
                  <Button variant="ghost" size="sm" iconName="Bell">
                    Subscribe
                  </Button>
                </div>
              </div>

              <div className="divide-y divide-border">
                {announcements?.map((announcement) => (
                  <div
                    key={announcement?.id}
                    className="p-6 hover:bg-surface/50 transition-colors"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          announcement?.priority === 'high'
                            ? 'bg-error/10 text-error'
                            : 'bg-primary/10 text-primary'
                        }`}
                      >
                        <Icon name={announcement?.icon} size={20} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-text-primary">
                            {announcement?.title}
                          </h4>
                          <span className="text-sm text-text-secondary flex-shrink-0">
                            {announcement?.time}
                          </span>
                        </div>

                        <p className="text-text-secondary text-sm leading-relaxed">
                          {announcement?.content}
                        </p>

                        {announcement?.priority === 'high' && (
                          <div className="mt-3">
                            <span className="inline-flex items-center space-x-1 text-xs bg-error/10 text-error px-2 py-1 rounded-full">
                              <Icon name="AlertTriangle" size={12} />
                              <span>Important</span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 border-t border-border bg-surface/30">
                <Link to="/news-events">
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    View All Announcements
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessDashboard;
