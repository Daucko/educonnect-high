import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const EventsSection = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: 'Homecoming Dance',
      date: '2024-11-15',
      time: '7:00 PM - 11:00 PM',
      location: 'Main Gymnasium',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1729073709289-c643d2ab7685',
      imageAlt:
        'Elegant high school dance with students in formal attire dancing under colorful lights and decorations',
      description:
        "Join us for an unforgettable night of dancing, music, and memories. Theme: 'Enchanted Garden'",
      ticketPrice: '$25',
      spotsLeft: 45,
      isPopular: true,
    },
    {
      id: 2,
      title: 'Science Fair Exhibition',
      date: '2024-11-08',
      time: '6:00 PM - 9:00 PM',
      location: 'Science Wing',
      category: 'academic',
      image: 'https://images.unsplash.com/photo-1731067356461-9eb417cce8dd',
      imageAlt:
        'Students presenting science projects with colorful display boards and experiments in school auditorium',
      description:
        'Showcase of innovative student research projects and experiments across all science disciplines.',
      ticketPrice: 'Free',
      spotsLeft: null,
      isPopular: false,
    },
    {
      id: 3,
      title: 'Fall Drama Production: Romeo & Juliet',
      date: '2024-11-22',
      time: '7:30 PM',
      location: 'School Auditorium',
      category: 'arts',
      image: 'https://images.unsplash.com/photo-1726635968046-6afa951e9220',
      imageAlt:
        'High school theater students in period costumes performing Shakespeare on stage with dramatic lighting',
      description:
        "Our talented drama students present Shakespeare's timeless classic with a modern twist.",
      ticketPrice: '$10',
      spotsLeft: 120,
      isPopular: true,
    },
    {
      id: 4,
      title: 'College Fair',
      date: '2024-11-12',
      time: '10:00 AM - 2:00 PM',
      location: 'Main Cafeteria',
      category: 'academic',
      image: 'https://images.unsplash.com/photo-1731310531067-7dfd3c61dea9',
      imageAlt:
        'College representatives at information booths speaking with interested high school students and parents',
      description:
        'Meet representatives from over 50 colleges and universities. Learn about programs, scholarships, and admissions.',
      ticketPrice: 'Free',
      spotsLeft: null,
      isPopular: false,
    },
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Spirit Week 2024',
      date: '2024-10-21',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1725374253106-bb92dff50b6f',
      imageAlt:
        'Students in colorful themed costumes and face paint celebrating during spirit week activities in gymnasium',
      highlights: ['Pajama Day', 'Decades Day', 'Color Wars', 'Pep Rally'],
      attendance: 850,
    },
    {
      id: 6,
      title: 'Robotics Competition',
      date: '2024-10-14',
      category: 'stem',
      image: 'https://images.unsplash.com/photo-1580613904454-091d7e60c051',
      imageAlt:
        'Students operating complex robots during competitive tournament with judges and spectators watching',
      highlights: [
        'Regional Champions',
        'Innovation Award',
        'Team Spirit Award',
      ],
      attendance: 200,
    },
    {
      id: 7,
      title: 'Art Gallery Opening',
      date: '2024-10-07',
      category: 'arts',
      image: 'https://images.unsplash.com/photo-1611406259415-2c98f3f3c6d9',
      imageAlt:
        'Art gallery with student paintings and sculptures displayed on white walls with proper lighting',
      highlights: ['Student Artwork', 'Community Showcase', 'Awards Ceremony'],
      attendance: 300,
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      social: 'bg-purple-100 text-purple-700',
      academic: 'bg-blue-100 text-blue-700',
      arts: 'bg-pink-100 text-pink-700',
      stem: 'bg-green-100 text-green-700',
      sports: 'bg-orange-100 text-orange-700',
    };
    return colors?.[category] || 'bg-gray-100 text-gray-700';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            School <span className="text-gradient-primary">Events</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From academic competitions to social gatherings, our calendar is
            packed with opportunities to learn, grow, and create lasting
            memories with your fellow Eagles.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-xl p-2">
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedTab('upcoming')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedTab === 'upcoming'
                    ? 'bg-white text-primary shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setSelectedTab('past')}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedTab === 'past'
                    ? 'bg-white text-primary shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        {selectedTab === 'upcoming' && (
          <div className="space-y-8">
            {upcomingEvents?.map((event) => (
              <div
                key={event?.id}
                className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden"
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Event Image */}
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <Image
                      src={event?.image}
                      alt={event?.imageAlt}
                      className="w-full h-full object-cover"
                    />

                    {event?.isPopular && (
                      <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular Event
                      </div>
                    )}
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                        event?.category
                      )}`}
                    >
                      {event?.category?.charAt(0)?.toUpperCase() +
                        event?.category?.slice(1)}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {event?.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {event?.description}
                        </p>
                      </div>
                    </div>

                    {/* Event Info Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Icon
                          name="Calendar"
                          size={16}
                          color="var(--color-primary)"
                        />
                        <span>{formatDate(event?.date)}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Icon
                          name="Clock"
                          size={16}
                          color="var(--color-primary)"
                        />
                        <span>{event?.time}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Icon
                          name="MapPin"
                          size={16}
                          color="var(--color-primary)"
                        />
                        <span>{event?.location}</span>
                      </div>

                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Icon
                          name="DollarSign"
                          size={16}
                          color="var(--color-primary)"
                        />
                        <span>{event?.ticketPrice}</span>
                      </div>
                    </div>

                    {/* Availability & Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      {event?.spotsLeft && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4 sm:mb-0">
                          <Icon
                            name="Users"
                            size={16}
                            color="var(--color-accent)"
                          />
                          <span>{event?.spotsLeft} spots remaining</span>
                        </div>
                      )}

                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          iconName="Info"
                          iconPosition="left"
                        >
                          Learn More
                        </Button>

                        <Button
                          variant="default"
                          size="sm"
                          iconName="Calendar"
                          iconPosition="left"
                          className="bg-gradient-primary hover:opacity-90"
                        >
                          Register Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Past Events */}
        {selectedTab === 'past' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents?.map((event) => (
              <div
                key={event?.id}
                className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event?.image}
                    alt={event?.imageAlt}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(
                      event?.category
                    )}`}
                  >
                    {event?.category?.charAt(0)?.toUpperCase() +
                      event?.category?.slice(1)}
                  </div>
                </div>

                {/* Event Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event?.title}
                  </h3>

                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <Icon name="Calendar" size={14} />
                    <span>{formatDate(event?.date)}</span>
                  </div>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-900 mb-2">
                      Highlights:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {event?.highlights
                        ?.slice(0, 3)
                        ?.map((highlight, index) => (
                          <span
                            key={index}
                            className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Attendance */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Icon name="Users" size={14} />
                      <span>{event?.attendance} attended</span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Eye"
                      iconPosition="left"
                    >
                      View Photos
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Calendar CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Never Miss an Event
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Stay up-to-date with all school events, activities, and important
              dates. Subscribe to our calendar and get notifications for events
              you're interested in.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="Calendar"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90"
              >
                View Full Calendar
              </Button>

              <Button
                variant="outline"
                iconName="Bell"
                iconPosition="left"
                className="hover:bg-primary hover:text-white hover:border-primary"
              >
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
