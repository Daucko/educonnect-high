import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const LiveSchoolPulse = () => {
  const [activeTab, setActiveTab] = useState('events');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const tabs = [
    { id: 'events', name: 'Upcoming Events', icon: 'Calendar' },
    { id: 'sports', name: 'Sports Updates', icon: 'Trophy' },
    { id: 'news', name: 'School News', icon: 'Newspaper' },
    { id: 'lunch', name: 'Lunch Menu', icon: 'UtensilsCrossed' },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Open House & College Fair',
      date: 'November 15, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Main Gymnasium',
      description:
        'Meet faculty, explore programs, and connect with 50+ college representatives.',
      image: 'https://images.unsplash.com/photo-1731310531067-7dfd3c61dea9',
      imageAlt:
        'Students and parents talking with college representatives at information booths in gymnasium',
      category: 'Admissions',
      attendees: '200+ expected',
      isHighlight: true,
    },
    {
      id: 2,
      title: 'Winter Concert',
      date: 'December 8, 2024',
      time: '7:00 PM',
      location: 'Performing Arts Center',
      description:
        'Join our choir, band, and orchestra for a festive holiday performance.',
      image: 'https://images.unsplash.com/photo-1700335753356-7915f1555c5a',
      imageAlt:
        'High school orchestra performing on stage with students in formal attire under stage lights',
      category: 'Arts',
      attendees: '500+ seats',
      isHighlight: false,
    },
    {
      id: 3,
      title: 'Science Fair Exhibition',
      date: 'November 22, 2024',
      time: '9:00 AM - 3:00 PM',
      location: 'Science Wing',
      description:
        'Student research projects and innovative experiments on display.',
      image: 'https://images.unsplash.com/photo-1731067356461-9eb417cce8dd',
      imageAlt:
        'Students presenting science fair projects with display boards and experiments to judges',
      category: 'Academic',
      attendees: 'All welcome',
      isHighlight: false,
    },
  ];

  const sportsUpdates = [
    {
      id: 1,
      title: 'Varsity Basketball vs. Central High',
      date: 'November 5, 2024',
      time: '7:00 PM',
      location: 'Home Gymnasium',
      status: 'upcoming',
      score: null,
      image: 'https://images.unsplash.com/photo-1710806587787-0372461a18d1',
      imageAlt:
        'Basketball players in action during game with crowd cheering in background',
      sport: 'Basketball',
    },
    {
      id: 2,
      title: 'Cross Country State Championship',
      date: 'November 2, 2024',
      time: 'Completed',
      location: 'State Park',
      status: 'completed',
      score: '3rd Place Team Finish',
      image: 'https://images.unsplash.com/photo-1638148712355-9706e53593fb',
      imageAlt:
        'Cross country runners competing on trail with autumn leaves and spectators',
      sport: 'Cross Country',
    },
    {
      id: 3,
      title: 'Soccer Regional Finals',
      date: 'October 28, 2024',
      time: 'Completed',
      location: 'Regional Stadium',
      status: 'completed',
      score: 'Won 3-1 - State Bound!',
      image: 'https://images.unsplash.com/photo-1677852199915-a180bdf8965e',
      imageAlt:
        'Soccer team celebrating victory with trophy after winning regional championship game',
      sport: 'Soccer',
    },
  ];

  const schoolNews = [
    {
      id: 1,
      title: 'New STEM Lab Opens',
      excerpt:
        'State-of-the-art laboratory features 3D printers, robotics equipment, and collaborative workspaces for hands-on learning.',
      date: 'October 30, 2024',
      author: 'Dr. Sarah Mitchell',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1684403798137-e83ee69e8fe8',
      imageAlt:
        'Modern STEM laboratory with 3D printers, computers, and students working on robotics projects',
      readTime: '3 min read',
    },
    {
      id: 2,
      title: 'College Acceptance Rate Reaches 98%',
      excerpt:
        'Class of 2024 achieves record-breaking college acceptance rate with students attending top universities nationwide.',
      date: 'October 25, 2024',
      author: 'Principal Johnson',
      category: 'Academics',
      image: 'https://images.unsplash.com/photo-1733835085968-d586d44a31da',
      imageAlt:
        'Graduation ceremony with students in caps and gowns celebrating academic achievement',
      readTime: '5 min read',
    },
  ];

  const lunchMenu = [
    {
      day: 'Monday',
      date: 'November 4',
      main: 'Grilled Chicken Caesar Wrap',
      sides: ['Fresh Fruit Cup', 'Vegetable Chips', 'Garden Salad'],
      vegetarian: 'Quinoa Buddha Bowl',
      special: 'Pizza Monday Special',
    },
    {
      day: 'Tuesday',
      date: 'November 5',
      main: 'Beef Tacos with Cilantro Lime Rice',
      sides: ['Black Bean Salad', 'Corn Salsa', 'Fresh Guacamole'],
      vegetarian: 'Veggie Burrito Bowl',
      special: 'Taco Tuesday',
    },
    {
      day: 'Wednesday',
      date: 'November 6',
      main: 'Baked Salmon with Herb Rice',
      sides: ['Steamed Broccoli', 'Dinner Roll', 'Mixed Greens'],
      vegetarian: 'Caprese Pasta Salad',
      special: 'Wellness Wednesday',
    },
  ];

  const renderEvents = () => (
    <div className="space-y-6">
      {upcomingEvents?.map((event) => (
        <div
          key={event?.id}
          className={`bg-white rounded-xl p-6 border transition-all duration-300 hover:shadow-brand-lg ${
            event?.isHighlight
              ? 'border-primary shadow-brand'
              : 'border-border shadow-sm'
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-32 flex-shrink-0">
              <Image
                src={event?.image}
                alt={event?.imageAlt}
                className="w-full h-20 md:h-16 object-cover rounded-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3
                  className={`font-bold ${
                    event?.isHighlight ? 'text-primary' : 'text-text-primary'
                  }`}
                >
                  {event?.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event?.category === 'Admissions'
                      ? 'bg-primary/10 text-primary'
                      : event?.category === 'Arts'
                      ? 'bg-brand-plum/10 text-brand-plum'
                      : 'bg-secondary/10 text-secondary'
                  }`}
                >
                  {event?.category}
                </span>
              </div>

              <p className="text-text-secondary text-sm mb-3">
                {event?.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{event?.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{event?.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={14} />
                  <span>{event?.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={14} />
                  <span>{event?.attendees}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSports = () => (
    <div className="space-y-4">
      {sportsUpdates?.map((update) => (
        <div
          key={update?.id}
          className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-brand transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0">
              <Image
                src={update?.image}
                alt={update?.imageAlt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-text-primary">{update?.title}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    update?.status === 'upcoming'
                      ? 'bg-accent/10 text-accent'
                      : 'bg-success/10 text-success'
                  }`}
                >
                  {update?.sport}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm text-text-secondary mb-2">
                <div className="flex items-center space-x-1">
                  <Icon name="Calendar" size={14} />
                  <span>{update?.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="MapPin" size={14} />
                  <span>{update?.location}</span>
                </div>
              </div>

              {update?.score && (
                <div className="text-success font-medium text-sm">
                  {update?.score}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderNews = () => (
    <div className="space-y-6">
      {schoolNews?.map((article) => (
        <div
          key={article?.id}
          className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-brand transition-all duration-300"
        >
          <div className="flex gap-4">
            <div className="w-24 h-24 flex-shrink-0">
              <Image
                src={article?.image}
                alt={article?.imageAlt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-text-primary hover:text-primary cursor-pointer">
                  {article?.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    article?.category === 'Facilities'
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-primary/10 text-primary'
                  }`}
                >
                  {article?.category}
                </span>
              </div>

              <p className="text-text-secondary text-sm mb-3 leading-relaxed">
                {article?.excerpt}
              </p>

              <div className="flex items-center gap-4 text-xs text-text-secondary">
                <span>By {article?.author}</span>
                <span>{article?.date}</span>
                <span>{article?.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderLunch = () => (
    <div className="space-y-4">
      {lunchMenu?.map((menu, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 border border-border shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-text-primary">
              {menu?.day}, {menu?.date}
            </h3>
            {menu?.special && (
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                {menu?.special}
              </span>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-text-primary mb-2 flex items-center space-x-2">
                <Icon name="UtensilsCrossed" size={16} />
                <span>Main Course</span>
              </h4>
              <p className="text-text-secondary mb-3">{menu?.main}</p>

              <h4 className="font-medium text-text-primary mb-2">Sides</h4>
              <ul className="text-text-secondary text-sm space-y-1">
                {menu?.sides?.map((side, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-1 h-1 bg-text-secondary rounded-full"></div>
                    <span>{side}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-text-primary mb-2 flex items-center space-x-2">
                <Icon name="Leaf" size={16} />
                <span>Vegetarian Option</span>
              </h4>
              <p className="text-text-secondary">{menu?.vegetarian}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'events':
        return renderEvents();
      case 'sports':
        return renderSports();
      case 'news':
        return renderNews();
      case 'lunch':
        return renderLunch();
      default:
        return renderEvents();
    }
  };

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span>Live Updates</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            School Pulse
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Stay connected with real-time updates on events, sports, news, and
            daily happenings
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab?.id
                  ? 'bg-primary text-white shadow-brand'
                  : 'bg-white text-text-secondary hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.name}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mb-8">{renderContent()}</div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/news-events">
            <Button
              variant="outline"
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
            >
              View All Updates
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LiveSchoolPulse;
