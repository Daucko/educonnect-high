import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VirtualTour = () => {
  const [activeLocation, setActiveLocation] = useState(0);

  const tourLocations = [
    {
      id: 1,
      name: 'Main Campus Entrance',
      description:
        'Welcome to EduConnect High! Our modern campus features state-of-the-art facilities designed to inspire learning and creativity.',
      image: 'https://images.unsplash.com/photo-1662401894089-7ce4e0f3d361',
      imageAlt:
        'Modern high school campus entrance with glass facade, landscaped gardens, and students walking on pathways',
      highlights: [
        'Welcoming reception area',
        'Student information center',
        'Beautiful landscaped grounds',
        'Accessible entrance design',
      ],
    },
    {
      id: 2,
      name: 'Science Laboratories',
      description:
        'Cutting-edge science labs equipped with the latest technology for hands-on learning in biology, chemistry, and physics.',
      image: 'https://images.unsplash.com/photo-1624957866395-ef59c756e4d9',
      imageAlt:
        'Modern science laboratory with students conducting experiments, equipped with microscopes, lab benches, and safety equipment',
      highlights: [
        'Advanced laboratory equipment',
        'Safety-first design',
        'Collaborative workspaces',
        'Digital microscopy stations',
      ],
    },
    {
      id: 3,
      name: 'Library & Learning Commons',
      description:
        'A 21st-century learning hub with extensive digital resources, quiet study areas, and collaborative spaces for group projects.',
      image: 'https://images.unsplash.com/photo-1654103200475-aa8e6fe36d6c',
      imageAlt:
        'Modern school library with students studying at tables, floor-to-ceiling bookshelves, and natural lighting from large windows',
      highlights: [
        '50,000+ books and resources',
        'Digital learning stations',
        'Quiet study pods',
        'Maker space area',
      ],
    },
    {
      id: 4,
      name: 'Athletic Facilities',
      description:
        'World-class sports facilities including gymnasium, fitness center, and outdoor fields supporting our comprehensive athletics program.',
      image: 'https://images.unsplash.com/photo-1721339040696-fb6dc0fe58f2',
      imageAlt:
        'Indoor gymnasium with basketball court, students playing sports, modern lighting, and bleacher seating',
      highlights: [
        'Full-size gymnasium',
        'Fitness and weight room',
        'Outdoor sports fields',
        'Swimming pool complex',
      ],
    },
    {
      id: 5,
      name: 'Arts & Performance Center',
      description:
        'Creative spaces including art studios, music rooms, and a 500-seat auditorium for performances and presentations.',
      image: 'https://images.unsplash.com/photo-1692710882955-9a9fffd167df',
      imageAlt:
        'School auditorium with red velvet seats, professional stage lighting, and students rehearsing on stage',
      highlights: [
        'Professional theater space',
        'Music practice rooms',
        'Art and design studios',
        'Recording studio',
      ],
    },
    {
      id: 6,
      name: 'Student Commons',
      description:
        'The heart of student life featuring dining areas, lounge spaces, and areas for clubs and social activities.',
      image: 'https://images.unsplash.com/photo-1671622229879-74befdbe2705',
      imageAlt:
        'Bright student cafeteria with modern furniture, students eating and socializing, large windows, and colorful decor',
      highlights: [
        'Spacious dining hall',
        'Student lounge areas',
        'Club meeting rooms',
        'Outdoor patio seating',
      ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Camera" size={16} />
            <span>Virtual Campus Tour</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Our
            <span className="text-gradient-primary"> Beautiful Campus</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual journey through our state-of-the-art facilities and
            discover the spaces where learning comes alive. Experience what
            makes EduConnect High special.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location List */}
          <div className="lg:col-span-1 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Tour Locations
            </h3>

            {tourLocations?.map((location, index) => (
              <button
                key={location?.id}
                onClick={() => setActiveLocation(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeLocation === index
                    ? 'bg-white shadow-brand border-2 border-primary'
                    : 'bg-white/50 hover:bg-white hover:shadow-sm border-2 border-transparent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeLocation === index
                        ? 'bg-gradient-primary text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <span className="text-sm font-bold">{location?.id}</span>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">
                      {location?.name}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {location?.description}
                    </p>
                  </div>

                  {activeLocation === index && (
                    <Icon
                      name="ChevronRight"
                      size={20}
                      color="var(--color-primary)"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Main Tour Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-brand-lg overflow-hidden">
              {/* Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image
                  src={tourLocations?.[activeLocation]?.image}
                  alt={tourLocations?.[activeLocation]?.imageAlt}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200">
                    <Icon
                      name="Maximize"
                      size={20}
                      color="var(--color-gray-700)"
                    />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200">
                    <Icon
                      name="RotateCcw"
                      size={20}
                      color="var(--color-gray-700)"
                    />
                  </button>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-sm font-medium text-gray-900">
                      {activeLocation + 1} of {tourLocations?.length}
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={() =>
                        setActiveLocation(Math.max(0, activeLocation - 1))
                      }
                      disabled={activeLocation === 0}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Icon
                        name="ChevronLeft"
                        size={20}
                        color="var(--color-gray-700)"
                      />
                    </button>
                    <button
                      onClick={() =>
                        setActiveLocation(
                          Math.min(
                            tourLocations?.length - 1,
                            activeLocation + 1
                          )
                        )
                      }
                      disabled={activeLocation === tourLocations?.length - 1}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Icon
                        name="ChevronRight"
                        size={20}
                        color="var(--color-gray-700)"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {tourLocations?.[activeLocation]?.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {tourLocations?.[activeLocation]?.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tourLocations?.[activeLocation]?.highlights?.map(
                      (highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <Icon
                            name="Check"
                            size={14}
                            color="var(--color-success)"
                          />
                          <span className="text-sm text-gray-600">
                            {highlight}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    iconName="Calendar"
                    iconPosition="left"
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    Schedule In-Person Visit
                  </Button>

                  <Button
                    variant="outline"
                    iconName="Download"
                    iconPosition="left"
                    className="hover:bg-primary hover:text-white hover:border-primary"
                  >
                    Download Campus Map
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 360° Tour CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-brand">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Compass" size={32} color="white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Experience Our Full 360° Virtual Tour
              </h3>

              <p className="text-gray-600 mb-6">
                Get the complete immersive experience with our interactive 360°
                campus tour. Walk through every corner of our facilities from
                the comfort of your home.
              </p>

              <Button
                variant="default"
                size="lg"
                iconName="Play"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90 shadow-brand"
              >
                Launch 360° Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
