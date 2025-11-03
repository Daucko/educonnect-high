import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocationMap = () => {
  const [activeTab, setActiveTab] = useState('map');

  const campusLocations = [
    {
      id: 1,
      name: 'Main Campus',
      address: '123 Education Boulevard, Learning City, LC 12345',
      description:
        'Primary academic buildings, administration, library, and student services',
      coordinates: '40.7128,-74.0060',
      facilities: [
        'Main Office',
        'Library',
        'Cafeteria',
        'Auditorium',
        'Science Labs',
      ],
    },
    {
      id: 2,
      name: 'Athletic Complex',
      address: '456 Sports Drive, Learning City, LC 12345',
      description:
        'Gymnasium, sports fields, fitness center, and athletic offices',
      coordinates: '40.7589,-73.9851',
      facilities: [
        'Gymnasium',
        'Football Field',
        'Track & Field',
        'Tennis Courts',
        'Fitness Center',
      ],
    },
    {
      id: 3,
      name: 'Arts Center',
      address: '789 Creative Avenue, Learning City, LC 12345',
      description: 'Music rooms, art studios, theater, and performance spaces',
      coordinates: '40.7831,-73.9712',
      facilities: [
        'Theater',
        'Music Rooms',
        'Art Studios',
        'Dance Studio',
        'Recording Studio',
      ],
    },
  ];

  const transportationInfo = [
    {
      type: 'Public Transit',
      icon: 'Bus',
      details: [
        'Metro Bus Lines: 15, 23, 42',
        'Subway: Green Line (Education Station)',
        'Student discounts available',
      ],
    },
    {
      type: 'School Buses',
      icon: 'Truck',
      details: [
        '15 bus routes covering the district',
        'GPS tracking available for parents',
        'Special needs transportation',
      ],
    },
    {
      type: 'Parking',
      icon: 'Car',
      details: [
        'Student parking: $50/semester',
        'Visitor parking: Free (2-hour limit)',
        'Staff parking: Designated areas',
      ],
    },
    {
      type: 'Bike & Walk',
      icon: 'Bike',
      details: [
        'Secure bike racks available',
        'Walking paths from nearby neighborhoods',
        'Bike safety program offered',
      ],
    },
  ];

  const visitingHours = [
    {
      day: 'Monday - Friday',
      hours: '7:30 AM - 4:00 PM',
      note: 'Regular school hours',
    },
    {
      day: 'Saturday',
      hours: '9:00 AM - 12:00 PM',
      note: 'By appointment only',
    },
    { day: 'Sunday', hours: 'Closed', note: 'Emergency contact available' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-brand-ocean/10 text-brand-ocean rounded-full px-4 py-2 mb-4">
            <Icon name="MapPin" size={16} />
            <span className="text-sm font-medium">Location & Directions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Visit Our Campus
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Located in the heart of Learning City, our campus is easily
            accessible by public transportation, car, or on foot. Plan your
            visit and explore our facilities.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-brand">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'map'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-primary'
              }`}
            >
              Campus Map
            </button>
            <button
              onClick={() => setActiveTab('directions')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'directions'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-primary'
              }`}
            >
              Directions & Transport
            </button>
            <button
              onClick={() => setActiveTab('visiting')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'visiting'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-text-secondary hover:text-primary'
              }`}
            >
              Visiting Info
            </button>
          </div>
        </div>

        {/* Map Tab */}
        {activeTab === 'map' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-brand overflow-hidden">
                <div className="h-96 relative">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title="EduConnect High School Location"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=40.7128,-74.0060&z=14&output=embed"
                    className="border-0"
                  ></iframe>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="MapPin"
                        size={16}
                        color="var(--color-primary)"
                      />
                      <span className="text-sm font-medium text-text-primary">
                        EduConnect High School
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-text-primary">
                        Main Campus
                      </h3>
                      <p className="text-sm text-text-secondary">
                        123 Education Boulevard, Learning City, LC 12345
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      Open in Maps
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Campus Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Campus Locations
              </h3>
              {campusLocations?.map((location) => (
                <div
                  key={location?.id}
                  className="bg-white rounded-lg p-4 shadow-brand hover:shadow-brand-lg transition-shadow duration-300"
                >
                  <h4 className="font-semibold text-text-primary mb-2">
                    {location?.name}
                  </h4>
                  <p className="text-sm text-text-secondary mb-2">
                    {location?.address}
                  </p>
                  <p className="text-sm text-text-secondary mb-3">
                    {location?.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-medium text-text-primary">
                      Key Facilities:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {location?.facilities?.map((facility, index) => (
                        <span
                          key={index}
                          className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                        >
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Directions Tab */}
        {activeTab === 'directions' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportationInfo?.map((transport, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon
                      name={transport?.icon}
                      size={24}
                      color="var(--color-primary)"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {transport?.type}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {transport?.details?.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start space-x-2"
                    >
                      <Icon
                        name="Check"
                        size={14}
                        color="var(--color-success)"
                        className="mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm text-text-secondary">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Visiting Info Tab */}
        {activeTab === 'visiting' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Visiting Hours */}
            <div className="bg-white rounded-xl p-6 shadow-brand">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Visiting Hours
              </h3>
              <div className="space-y-4">
                {visitingHours?.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-surface rounded-lg"
                  >
                    <div>
                      <p className="font-medium text-text-primary">
                        {schedule?.day}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {schedule?.note}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">
                        {schedule?.hours}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Icon
                    name="Info"
                    size={16}
                    color="var(--color-warning)"
                    className="mt-0.5"
                  />
                  <div>
                    <p className="text-sm font-medium text-warning mb-1">
                      Visitor Requirements
                    </p>
                    <p className="text-sm text-text-secondary">
                      All visitors must check in at the main office and present
                      valid ID. Appointments are recommended for meetings with
                      staff.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit Planning */}
            <div className="bg-white rounded-xl p-6 shadow-brand">
              <h3 className="text-xl font-semibold text-text-primary mb-6">
                Plan Your Visit
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">
                      Schedule Your Visit
                    </h4>
                    <p className="text-sm text-text-secondary mb-2">
                      Contact our admissions office to schedule a tour or
                      meeting.
                    </p>
                    <Button variant="outline" size="sm" iconName="Calendar">
                      Schedule Tour
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">
                      Prepare for Arrival
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Bring valid ID and arrive 10 minutes early. Park in
                      designated visitor spots.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary mb-1">
                      Check In
                    </h4>
                    <p className="text-sm text-text-secondary">
                      Visit the main office first to receive your visitor badge
                      and directions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-medium text-text-primary mb-3">
                  Quick Actions
                </h4>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Phone"
                    iconPosition="left"
                  >
                    Call Main Office
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Mail"
                    iconPosition="left"
                  >
                    Email Questions
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download Campus Map
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationMap;
