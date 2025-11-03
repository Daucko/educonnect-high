import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Virtual Information Session',
      date: '2025-01-15',
      time: '7:00 PM - 8:30 PM',
      type: 'virtual',
      capacity: 100,
      registered: 67,
      description:
        "Join us for an interactive online session where you'll learn about our academic programs, student life, and admissions process. Perfect for families who want to get to know EduConnect High from the comfort of their home.",
      agenda: [
        'Welcome & School Overview (15 min)',
        'Academic Programs Presentation (20 min)',
        'Student Life & Activities (15 min)',
        'Admissions Process Walkthrough (20 min)',
        'Q&A Session (20 min)',
      ],
      presenter: 'Dr. Sarah Mitchell, Director of Admissions',
      benefits: [
        'Interactive Q&A with admissions team',
        'Digital resource packet included',
        'Recording available for 30 days',
        'Follow-up consultation available',
      ],
    },
    {
      id: 2,
      title: 'Campus Open House',
      date: '2025-01-22',
      time: '10:00 AM - 2:00 PM',
      type: 'in-person',
      capacity: 150,
      registered: 89,
      description:
        'Experience our campus firsthand with guided tours, classroom visits, and meetings with faculty and current students. This comprehensive event gives you the full EduConnect High experience.',
      agenda: [
        'Registration & Welcome Coffee (30 min)',
        'Campus Tours (45 min)',
        'Academic Department Visits (60 min)',
        'Student Panel Discussion (30 min)',
        'Lunch & Networking (45 min)',
        'Admissions Workshop (30 min)',
      ],
      presenter: 'Campus Tour Guides & Faculty',
      benefits: [
        'See all campus facilities',
        'Meet current students and teachers',
        'Sit in on actual classes',
        'Complimentary lunch provided',
      ],
    },
    {
      id: 3,
      title: 'Financial Aid Workshop',
      date: '2025-02-05',
      time: '6:30 PM - 8:00 PM',
      type: 'hybrid',
      capacity: 75,
      registered: 34,
      description:
        'Learn everything you need to know about financial aid, scholarships, and payment options. Our financial aid experts will guide you through the application process step by step.',
      agenda: [
        'Financial Aid Overview (20 min)',
        'FAFSA Completion Workshop (30 min)',
        'Scholarship Opportunities (20 min)',
        'Payment Plans & Options (10 min)',
        'Individual Consultations (20 min)',
      ],
      presenter: 'Maria Rodriguez, Financial Aid Director',
      benefits: [
        'FAFSA completion assistance',
        'Scholarship application tips',
        'One-on-one consultations',
        'Resource materials provided',
      ],
    },
    {
      id: 4,
      title: 'Student Shadow Day',
      date: '2025-02-12',
      time: '8:00 AM - 3:00 PM',
      type: 'in-person',
      capacity: 20,
      registered: 15,
      description:
        'Spend a full day experiencing life as an EduConnect High student. Shadow current students, attend classes, eat lunch in our cafeteria, and participate in after-school activities.',
      agenda: [
        'Morning Assembly (15 min)',
        'First Period Class Visit (50 min)',
        'Second Period Class Visit (50 min)',
        'Break & Student Interaction (15 min)',
        'Third Period Class Visit (50 min)',
        'Lunch with Students (45 min)',
        'Fourth Period Class Visit (50 min)',
        'After-School Activity (60 min)',
        'Debrief Session (15 min)',
      ],
      presenter: 'Student Ambassadors',
      benefits: [
        'Authentic student experience',
        'Attend real classes',
        'Meet potential classmates',
        'Experience school culture',
      ],
    },
    {
      id: 5,
      title: 'Parent Coffee & Conversation',
      date: '2025-02-19',
      time: '9:00 AM - 10:30 AM',
      type: 'in-person',
      capacity: 40,
      registered: 22,
      description:
        'An intimate gathering for parents to connect with current EduConnect High families, ask questions, and learn about the parent community and involvement opportunities.',
      agenda: [
        'Welcome & Introductions (15 min)',
        'Current Parent Panel (30 min)',
        'School Communication Overview (15 min)',
        'Parent Involvement Opportunities (15 min)',
        'Open Discussion & Networking (15 min)',
      ],
      presenter: 'Parent Advisory Committee',
      benefits: [
        'Connect with current families',
        'Learn about parent community',
        'Understand communication systems',
        'Discover volunteer opportunities',
      ],
    },
    {
      id: 6,
      title: 'Academic Excellence Showcase',
      date: '2025-03-05',
      time: '6:00 PM - 8:30 PM',
      type: 'in-person',
      capacity: 200,
      registered: 156,
      description:
        'Celebrate student achievements and see our academic programs in action. Features student presentations, project displays, and performances showcasing the breadth of our educational offerings.',
      agenda: [
        'Welcome Reception (30 min)',
        'Student Project Exhibitions (45 min)',
        'Academic Department Showcases (45 min)',
        'Student Performances (30 min)',
        'Awards Ceremony (20 min)',
        'Closing Reception (20 min)',
      ],
      presenter: 'Students & Faculty',
      benefits: [
        'See student work firsthand',
        'Experience academic excellence',
        'Meet department heads',
        'Enjoy student performances',
      ],
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'virtual':
        return 'Monitor';
      case 'in-person':
        return 'MapPin';
      case 'hybrid':
        return 'Wifi';
      default:
        return 'Calendar';
    }
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'virtual':
        return 'bg-blue-100 text-blue-700';
      case 'in-person':
        return 'bg-green-100 text-green-700';
      case 'hybrid':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getCapacityStatus = (registered, capacity) => {
    const percentage = (registered / capacity) * 100;
    if (percentage >= 90)
      return { status: 'Almost Full', color: 'text-red-600' };
    if (percentage >= 70)
      return { status: 'Filling Fast', color: 'text-amber-600' };
    return { status: 'Available', color: 'text-green-600' };
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Calendar" size={16} />
            <span>Upcoming Events</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Connect with
            <span className="text-gradient-primary"> Our Community</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for informative events designed to help you learn more about
            EduConnect High, meet our community, and experience what makes our
            school special.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {upcomingEvents?.map((event) => {
            const capacityInfo = getCapacityStatus(
              event?.registered,
              event?.capacity
            );

            return (
              <div
                key={event?.id}
                className="bg-white rounded-xl shadow-brand border border-gray-100 hover:shadow-brand-lg transition-all duration-300 overflow-hidden hover-lift"
              >
                {/* Event Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {event?.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Icon name="Calendar" size={14} />
                          <span>{formatDate(event?.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={14} />
                          <span>{event?.time}</span>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(
                        event?.type
                      )}`}
                    >
                      <div className="flex items-center space-x-1">
                        <Icon name={getEventTypeIcon(event?.type)} size={12} />
                        <span className="capitalize">{event?.type}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {event?.description}
                  </p>

                  {/* Capacity Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Users"
                        size={16}
                        color="var(--color-gray-500)"
                      />
                      <span className="text-sm text-gray-600">
                        {event?.registered} / {event?.capacity} registered
                      </span>
                    </div>
                    <span
                      className={`text-sm font-medium ${capacityInfo?.color}`}
                    >
                      {capacityInfo?.status}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          (event?.registered / event?.capacity) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
                {/* Event Details (Expandable) */}
                {selectedEvent === event?.id && (
                  <div className="p-6 bg-gray-50 animate-scale-in">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Agenda */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Event Agenda
                        </h4>
                        <ul className="space-y-2">
                          {event?.agenda?.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2 text-sm text-gray-600"
                            >
                              <Icon
                                name="Clock"
                                size={12}
                                className="mt-0.5 flex-shrink-0"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          What You'll Get
                        </h4>
                        <ul className="space-y-2">
                          {event?.benefits?.map((benefit, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2 text-sm text-gray-600"
                            >
                              <Icon
                                name="Check"
                                size={12}
                                color="var(--color-success)"
                                className="mt-0.5 flex-shrink-0"
                              />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Presenter Info */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-2">
                        <Icon
                          name="User"
                          size={16}
                          color="var(--color-primary)"
                        />
                        <span className="text-sm font-medium text-gray-900">
                          Presented by:
                        </span>
                        <span className="text-sm text-gray-600">
                          {event?.presenter}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                {/* Event Actions */}
                <div className="p-6 pt-0">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      variant="default"
                      iconName="UserPlus"
                      iconPosition="left"
                      className="bg-gradient-primary hover:opacity-90 flex-1"
                      disabled={event?.registered >= event?.capacity}
                    >
                      {event?.registered >= event?.capacity
                        ? 'Event Full'
                        : 'Register Now'}
                    </Button>

                    <Button
                      variant="outline"
                      iconName={
                        selectedEvent === event?.id
                          ? 'ChevronUp'
                          : 'ChevronDown'
                      }
                      iconPosition="right"
                      onClick={() =>
                        setSelectedEvent(
                          selectedEvent === event?.id ? null : event?.id
                        )
                      }
                      className="hover:bg-primary hover:text-white hover:border-primary"
                    >
                      {selectedEvent === event?.id ? 'Less Info' : 'More Info'}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Attend These Events?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We understand that schedules can be challenging. Contact our
              admissions team to arrange a private tour or consultation that
              works with your family's availability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90"
              >
                Schedule Private Tour
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                className="hover:bg-primary hover:text-white hover:border-primary"
              >
                Contact Admissions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
