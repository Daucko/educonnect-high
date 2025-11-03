import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SportsSection = () => {
  const [selectedSeason, setSelectedSeason] = useState('fall');

  const seasons = [
    { id: 'fall', name: 'Fall Sports', icon: 'Leaf' },
    { id: 'winter', name: 'Winter Sports', icon: 'Snowflake' },
    { id: 'spring', name: 'Spring Sports', icon: 'Sun' },
  ];

  const sportsTeams = {
    fall: [
      {
        id: 1,
        name: 'Varsity Football',
        image: 'https://images.unsplash.com/photo-1720190369198-85ec4fed46d7',
        imageAlt:
          'High school football team in blue and white uniforms celebrating touchdown on field under stadium lights',
        record: '8-2',
        nextGame: 'Nov 8 vs. Central High',
        coach: 'Coach Williams',
        achievements: ['District Champions', 'Playoff Bound'],
        roster: 45,
      },
      {
        id: 2,
        name: 'Girls Soccer',
        image: 'https://images.unsplash.com/photo-1554730553-c392fa7722fc',
        imageAlt:
          'Female soccer players in action during competitive match on green field with goal in background',
        record: '12-3-1',
        nextGame: 'Nov 5 vs. Riverside',
        coach: 'Coach Martinez',
        achievements: ['Regional Finalists', 'League Champions'],
        roster: 22,
      },
      {
        id: 3,
        name: 'Cross Country',
        image: 'https://images.unsplash.com/photo-1728526361584-751c8f550540',
        imageAlt:
          'Cross country runners in team uniforms racing through wooded trail during autumn competition',
        record: 'Top 3 Finishes',
        nextGame: 'State Meet - Nov 12',
        coach: 'Coach Johnson',
        achievements: ['State Qualifiers', 'Individual Medalists'],
        roster: 28,
      },
    ],

    winter: [
      {
        id: 4,
        name: 'Boys Basketball',
        image:
          'https://images.unsplash.com/flagged/photo-1577416336785-2d4e3ba4a494',
        imageAlt:
          'Basketball players in action during intense game with player shooting ball toward hoop in packed gymnasium',
        record: '15-5',
        nextGame: 'Dec 3 vs. North Valley',
        coach: 'Coach Davis',
        achievements: ['Conference Champions', 'Tournament Winners'],
        roster: 15,
      },
      {
        id: 5,
        name: 'Girls Basketball',
        image: 'https://images.unsplash.com/photo-1666303258427-d30683fa9359',
        imageAlt:
          'Female basketball player dribbling ball during competitive high school game in modern gymnasium',
        record: '18-3',
        nextGame: 'Dec 5 vs. East Side',
        coach: 'Coach Thompson',
        achievements: ['Undefeated League', 'State Contenders'],
        roster: 14,
      },
      {
        id: 6,
        name: 'Wrestling',
        image: 'https://images.unsplash.com/photo-1728514260355-47e09fa4cc80',
        imageAlt:
          'High school wrestlers competing on mat during tournament with referee and spectators watching',
        record: 'Multiple Medalists',
        nextGame: 'Dual Meet - Dec 8',
        coach: 'Coach Rodriguez',
        achievements: ['Individual State Qualifiers', 'Team Rankings'],
        roster: 20,
      },
    ],

    spring: [
      {
        id: 7,
        name: 'Baseball',
        image: 'https://images.unsplash.com/photo-1700775823104-faa848623f8a',
        imageAlt:
          'Baseball player in batting stance during game on well-maintained diamond field with dugout visible',
        record: '14-6',
        nextGame: 'Season Starts March',
        coach: 'Coach Anderson',
        achievements: ['League Champions', 'Playoff Appearances'],
        roster: 25,
      },
      {
        id: 8,
        name: 'Track & Field',
        image: 'https://images.unsplash.com/photo-1714857725604-95fe3c380528',
        imageAlt:
          'Track and field athletes competing in sprint race on red track with lane markings and finish line',
        record: 'Multiple Records',
        nextGame: 'Season Starts February',
        coach: 'Coach Wilson',
        achievements: ['School Records', 'State Qualifiers'],
        roster: 35,
      },
      {
        id: 9,
        name: 'Tennis',
        image: 'https://images.unsplash.com/photo-1711994209226-9da36b71952a',
        imageAlt:
          'Tennis player in action serving ball on outdoor court with net and baseline clearly visible',
        record: 'League Leaders',
        nextGame: 'Season Starts March',
        coach: 'Coach Lee',
        achievements: ['Individual Champions', 'Team Success'],
        roster: 16,
      },
    ],
  };

  const currentTeams = sportsTeams?.[selectedSeason];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Championship{' '}
            <span className="text-gradient-primary">Athletics</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Eagles soar high in competition! With 15 varsity sports and
            numerous championship titles, EduConnect High is where athletic
            excellence meets academic achievement.
          </p>
        </div>

        {/* Season Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-brand">
            <div className="flex space-x-2">
              {seasons?.map((season) => (
                <button
                  key={season?.id}
                  onClick={() => setSelectedSeason(season?.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedSeason === season?.id
                      ? 'bg-primary text-white shadow-md'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon name={season?.icon} size={16} />
                  <span>{season?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sports Teams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentTeams?.map((team) => (
            <div
              key={team?.id}
              className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Team Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={team?.image}
                  alt={team?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="text-sm font-bold text-primary">
                    {team?.record}
                  </div>
                </div>
              </div>

              {/* Team Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {team?.name}
                </h3>

                {/* Team Stats */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Icon name="Calendar" size={14} />
                    <span>{team?.nextGame}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Icon name="User" size={14} />
                    <span>{team?.coach}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Icon name="Users" size={14} />
                    <span>{team?.roster} players</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Achievements:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {team?.achievements?.map((achievement, index) => (
                      <span
                        key={index}
                        className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Calendar"
                    iconPosition="left"
                    className="flex-1 hover:bg-primary hover:text-white hover:border-primary"
                  >
                    Schedule
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Users"
                    iconPosition="left"
                    className="flex-1 hover:bg-secondary hover:text-white hover:border-secondary"
                  >
                    Roster
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Athletic Highlights */}
        <div className="bg-white rounded-2xl shadow-brand p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Athletic Excellence Program
              </h3>
              <p className="text-gray-600 mb-6">
                Our comprehensive athletic program develops not just skilled
                athletes, but well-rounded individuals. With state-of-the-art
                facilities and experienced coaching staff, we prepare our Eagles
                for success on and off the field.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-gray-600">Varsity Sports</div>
                </div>
                <div className="text-center p-4 bg-secondary/5 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">8</div>
                  <div className="text-sm text-gray-600">Championships</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent">95%</div>
                  <div className="text-sm text-gray-600">College Bound</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3.2</div>
                  <div className="text-sm text-gray-600">Avg GPA</div>
                </div>
              </div>

              <Button
                variant="default"
                iconName="Trophy"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90"
              >
                Join Our Teams
              </Button>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1558967400-83a3b34c35d0"
                alt="Athletic students celebrating victory on track field with medals and trophies under bright stadium lights"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsSection;
