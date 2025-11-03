import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const PersonalizedDashboard = () => {
  const [userRole, setUserRole] = useState('student');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const userRoles = [
    { id: 'student', name: 'Student', icon: 'BookOpen' },
    { id: 'parent', name: 'Parent', icon: 'Users' },
    { id: 'faculty', name: 'Faculty', icon: 'GraduationCap' },
    { id: 'visitor', name: 'Visitor', icon: 'Eye' },
  ];

  const dashboardData = {
    student: {
      greeting: 'Welcome back, Alex!',
      subtitle: 'Ready for another great day of learning?',
      quickStats: [
        {
          label: 'Current GPA',
          value: '3.8',
          icon: 'TrendingUp',
          color: 'text-success',
        },
        {
          label: 'Assignments Due',
          value: '3',
          icon: 'FileText',
          color: 'text-accent',
        },
        {
          label: 'Upcoming Tests',
          value: '2',
          icon: 'BookOpen',
          color: 'text-primary',
        },
        {
          label: 'Club Meetings',
          value: '1',
          icon: 'Users',
          color: 'text-secondary',
        },
      ],
      quickActions: [
        {
          title: 'View Grades',
          description: 'Check latest scores',
          icon: 'BarChart3',
          link: '/academics',
          color: 'bg-primary',
        },
        {
          title: 'Assignments',
          description: 'Due this week',
          icon: 'FileText',
          link: '/academics',
          color: 'bg-accent',
        },
        {
          title: 'Schedule',
          description: "Today's classes",
          icon: 'Calendar',
          link: '/academics',
          color: 'bg-secondary',
        },
        {
          title: 'Clubs',
          description: 'My activities',
          icon: 'Users',
          link: '/student-life',
          color: 'bg-success',
        },
      ],
      recentActivity: [
        {
          type: 'grade',
          title: 'Chemistry Quiz',
          detail: 'A- (92%)',
          time: '2 hours ago',
          icon: 'Award',
        },
        {
          type: 'assignment',
          title: 'History Essay',
          detail: 'Submitted',
          time: 'Yesterday',
          icon: 'FileCheck',
        },
        {
          type: 'event',
          title: 'Drama Club',
          detail: 'Meeting today 3:30 PM',
          time: 'Today',
          icon: 'Theater',
        },
      ],
    },
    parent: {
      greeting: 'Hello, Mrs. Johnson!',
      subtitle: "Stay connected with Emma's progress",
      quickStats: [
        {
          label: "Emma's GPA",
          value: '3.9',
          icon: 'TrendingUp',
          color: 'text-success',
        },
        {
          label: 'Attendance',
          value: '98%',
          icon: 'Calendar',
          color: 'text-success',
        },
        {
          label: 'Upcoming Events',
          value: '4',
          icon: 'Bell',
          color: 'text-primary',
        },
        { label: 'Messages', value: '2', icon: 'Mail', color: 'text-accent' },
      ],
      quickActions: [
        {
          title: 'Progress Report',
          description: "View Emma's grades",
          icon: 'BarChart3',
          link: '/academics',
          color: 'bg-primary',
        },
        {
          title: 'Attendance',
          description: 'Check daily records',
          icon: 'Calendar',
          link: '/academics',
          color: 'bg-secondary',
        },
        {
          title: 'Messages',
          description: 'Teacher communications',
          icon: 'Mail',
          link: '/contact',
          color: 'bg-accent',
        },
        {
          title: 'Events',
          description: 'School calendar',
          icon: 'CalendarDays',
          link: '/news-events',
          color: 'bg-success',
        },
      ],
      recentActivity: [
        {
          type: 'grade',
          title: 'Math Test',
          detail: 'Emma scored A (95%)',
          time: '1 day ago',
          icon: 'Award',
        },
        {
          type: 'message',
          title: 'From Ms. Smith',
          detail: 'Great work on the project!',
          time: '2 days ago',
          icon: 'Mail',
        },
        {
          type: 'event',
          title: 'Parent Conference',
          detail: 'Scheduled for Nov 10',
          time: '3 days ago',
          icon: 'Users',
        },
      ],
    },
    faculty: {
      greeting: 'Good morning, Dr. Martinez!',
      subtitle: 'Your teaching dashboard',
      quickStats: [
        {
          label: 'Classes Today',
          value: '5',
          icon: 'BookOpen',
          color: 'text-primary',
        },
        {
          label: 'Students',
          value: '127',
          icon: 'Users',
          color: 'text-secondary',
        },
        {
          label: 'Assignments to Grade',
          value: '23',
          icon: 'FileText',
          color: 'text-accent',
        },
        { label: 'Messages', value: '8', icon: 'Mail', color: 'text-success' },
      ],
      quickActions: [
        {
          title: 'Gradebook',
          description: 'Update student grades',
          icon: 'BarChart3',
          link: '/academics',
          color: 'bg-primary',
        },
        {
          title: 'Lesson Plans',
          description: "Today's materials",
          icon: 'FileText',
          link: '/academics',
          color: 'bg-secondary',
        },
        {
          title: 'Messages',
          description: 'Parent communications',
          icon: 'Mail',
          link: '/contact',
          color: 'bg-accent',
        },
        {
          title: 'Resources',
          description: 'Teaching materials',
          icon: 'FolderOpen',
          link: '/academics',
          color: 'bg-success',
        },
      ],
      recentActivity: [
        {
          type: 'grade',
          title: 'Biology Quiz',
          detail: 'Graded 28 submissions',
          time: '1 hour ago',
          icon: 'CheckCircle',
        },
        {
          type: 'message',
          title: 'Parent Inquiry',
          detail: 'About homework policy',
          time: '3 hours ago',
          icon: 'Mail',
        },
        {
          type: 'event',
          title: 'Faculty Meeting',
          detail: 'Tomorrow 2:00 PM',
          time: 'Today',
          icon: 'Users',
        },
      ],
    },
    visitor: {
      greeting: 'Welcome to EduConnect High!',
      subtitle: 'Discover our vibrant school community',
      quickStats: [
        {
          label: 'Students Enrolled',
          value: '1,200+',
          icon: 'Users',
          color: 'text-primary',
        },
        {
          label: 'Faculty Members',
          value: '85',
          icon: 'GraduationCap',
          color: 'text-secondary',
        },
        {
          label: 'Programs Offered',
          value: '50+',
          icon: 'BookOpen',
          color: 'text-accent',
        },
        {
          label: 'College Acceptance',
          value: '98%',
          icon: 'Trophy',
          color: 'text-success',
        },
      ],
      quickActions: [
        {
          title: 'Virtual Tour',
          description: 'Explore our campus',
          icon: 'Eye',
          link: '/admissions',
          color: 'bg-primary',
        },
        {
          title: 'Programs',
          description: 'Academic offerings',
          icon: 'BookOpen',
          link: '/academics',
          color: 'bg-secondary',
        },
        {
          title: 'Apply Now',
          description: 'Start your journey',
          icon: 'UserPlus',
          link: '/admissions',
          color: 'bg-accent',
        },
        {
          title: 'Contact Us',
          description: 'Get in touch',
          icon: 'Phone',
          link: '/contact',
          color: 'bg-success',
        },
      ],
      recentActivity: [
        {
          type: 'news',
          title: 'Open House',
          detail: 'November 15, 6-8 PM',
          time: 'Upcoming',
          icon: 'Calendar',
        },
        {
          type: 'achievement',
          title: 'State Champions',
          detail: 'Soccer team wins regional',
          time: 'Last week',
          icon: 'Trophy',
        },
        {
          type: 'news',
          title: 'New STEM Lab',
          detail: 'Grand opening ceremony',
          time: '2 weeks ago',
          icon: 'Beaker',
        },
      ],
    },
  };

  const currentData = dashboardData?.[userRole];

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
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="User" size={16} />
            <span>Personalized Experience</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Your Dashboard
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Tailored information and quick access based on your role in our
            community
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {userRoles?.map((role) => (
            <button
              key={role?.id}
              onClick={() => setUserRole(role?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                userRole === role?.id
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-surface text-text-secondary hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              <Icon name={role?.icon} size={16} />
              <span>{role?.name}</span>
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Welcome & Quick Stats */}
          <div className="lg:col-span-1 space-y-6">
            {/* Welcome Card */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon
                    name={
                      userRoles?.find((r) => r?.id === userRole)?.icon || 'User'
                    }
                    size={24}
                    color="white"
                  />
                </div>
                <div className="text-right text-sm">
                  <div className="font-medium">{formatTime(currentTime)}</div>
                  <div className="text-white/80">{formatDate(currentTime)}</div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2">
                {currentData?.greeting}
              </h3>
              <p className="text-white/90 text-sm">{currentData?.subtitle}</p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {currentData?.quickStats?.map((stat, index) => (
                <div
                  key={index}
                  className="bg-surface rounded-xl p-4 border border-border"
                >
                  <div
                    className={`w-8 h-8 rounded-lg bg-current/10 flex items-center justify-center mb-3 ${stat?.color}`}
                  >
                    <Icon name={stat?.icon} size={16} className={stat?.color} />
                  </div>
                  <div className="text-xl font-bold text-text-primary mb-1">
                    {stat?.value}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {stat?.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Column - Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-brand border border-border p-6">
              <h3 className="text-xl font-bold text-text-primary mb-6">
                Quick Actions
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {currentData?.quickActions?.map((action, index) => (
                  <Link
                    key={index}
                    to={action?.link}
                    className="group p-4 rounded-xl border border-border hover:shadow-brand transition-all duration-300 hover-lift"
                  >
                    <div
                      className={`w-10 h-10 ${action?.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon name={action?.icon} size={20} color="white" />
                    </div>

                    <h4 className="font-semibold text-text-primary group-hover:text-primary transition-colors mb-1">
                      {action?.title}
                    </h4>
                    <p className="text-xs text-text-secondary">
                      {action?.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-brand border border-border">
              <div className="p-6 border-b border-border">
                <h3 className="text-xl font-bold text-text-primary">
                  Recent Activity
                </h3>
              </div>

              <div className="divide-y divide-border">
                {currentData?.recentActivity?.map((activity, index) => (
                  <div
                    key={index}
                    className="p-4 hover:bg-surface/50 transition-colors"
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          activity?.type === 'grade'
                            ? 'bg-success/10 text-success'
                            : activity?.type === 'assignment'
                            ? 'bg-accent/10 text-accent'
                            : activity?.type === 'message'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary/10 text-secondary'
                        }`}
                      >
                        <Icon name={activity?.icon} size={16} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-text-primary text-sm">
                          {activity?.title}
                        </h4>
                        <p className="text-text-secondary text-xs mt-1">
                          {activity?.detail}
                        </p>
                        <span className="text-text-secondary text-xs">
                          {activity?.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border">
                <Button
                  variant="ghost"
                  fullWidth
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  View All Activity
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center bg-surface rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Need Help Getting Started?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Our support team is here to help you make the most of your
            EduConnect High experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Get Support
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              iconName="HelpCircle"
              iconPosition="left"
            >
              View Help Center
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedDashboard;
