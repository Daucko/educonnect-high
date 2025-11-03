import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import NewsCard from './components/NewsCard';
import EventCard from './components/EventCard';
import CalendarWidget from './components/CalendarWidget';
import AnnouncementBanner from './components/AnnouncementBanner';
import FilterTabs from './components/FilterTabs';
import SocialFeed from './components/SocialFeed';
import NewsletterArchive from './components/NewsletterArchive';

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedDate, setSelectedDate] = useState(null);

  // Mock data for announcements
  const announcements = [
    {
      id: 1,
      title: 'Winter Break Schedule Update',
      message:
        'Please note that winter break has been extended by one day. Classes will resume on January 9th instead of January 8th. All after-school activities will also resume on the same date.',
      priority: 'high',
      author: 'Principal Johnson',
      date: '2024-11-01T10:00:00Z',
    },
    {
      id: 2,
      title: 'New Library Hours',
      message:
        'Starting next week, the library will be open until 6 PM on weekdays to provide more study time for students. Weekend hours remain unchanged.',
      priority: 'medium',
      author: 'Ms. Rodriguez',
      date: '2024-10-30T14:30:00Z',
    },
  ];

  // Mock data for news articles
  const newsArticles = [
    {
      id: 1,
      title: 'EduConnect High Students Win State Science Fair',
      excerpt:
        "Our robotics team took first place in the state competition with their innovative water purification system, earning a $5,000 scholarship for the school's STEM program.",
      content: `Our talented robotics team has made history by winning first place at the State Science Fair with their groundbreaking water purification system.\n\nThe project, led by seniors Maria Garcia and James Chen, addresses clean water access in rural communities through an affordable, solar-powered filtration device.`,
      author: 'Dr. Sarah Mitchell',
      date: '2024-11-01T09:00:00Z',
      image: 'https://images.unsplash.com/photo-1624957866395-ef59c756e4d9',
      imageAlt:
        'Students in lab coats working with scientific equipment and robotic components in modern laboratory',
      category: { name: 'Academics', color: 'bg-blue-100 text-blue-800' },
      featured: true,
    },
    {
      id: 2,
      title: 'Fall Drama Production: Romeo and Juliet Opens Tonight',
      excerpt:
        "The drama department presents Shakespeare's timeless classic with a modern twist. Tickets are still available for weekend performances.",
      content: `The EduConnect High Drama Department is proud to present their fall production of Romeo and Juliet, featuring innovative staging and contemporary interpretations.\n\nDirected by Ms. Thompson, this production showcases the incredible talent of our student actors and technical crew.`,
      author: 'Ms. Jennifer Thompson',
      date: '2024-10-31T16:00:00Z',
      image: 'https://images.unsplash.com/photo-1719299170610-064655665c19',
      imageAlt:
        'Theater stage with dramatic lighting showing students in period costumes rehearsing Shakespeare play',
      category: { name: 'Arts', color: 'bg-purple-100 text-purple-800' },
    },
    {
      id: 3,
      title: 'New Mental Health Resources Available',
      excerpt:
        'The counseling department has expanded services to include peer support groups and mindfulness workshops for student wellbeing.',
      content: `We're excited to announce expanded mental health resources for our students, including new peer support groups and weekly mindfulness workshops.\n\nThese programs are designed to support student wellbeing and create a more inclusive, supportive school environment.`,
      author: 'Mr. David Park',
      date: '2024-10-30T11:00:00Z',
      image: 'https://images.unsplash.com/photo-1700241956176-82ec52cb2872',
      imageAlt:
        'Diverse group of teenagers sitting in circle during counseling session in bright, welcoming room',
      category: { name: 'Wellness', color: 'bg-green-100 text-green-800' },
    },
    {
      id: 4,
      title: 'Basketball Team Advances to Regional Championships',
      excerpt:
        'The Eagles defeated Central High 78-65 in a thrilling playoff game, securing their spot in the regional tournament next week.',
      content: `The EduConnect High Eagles basketball team delivered an outstanding performance against Central High, winning 78-65 in the district playoffs.\n\nSenior captain Marcus Johnson led the team with 24 points, while sophomore Sarah Williams contributed 18 points and 12 rebounds.`,
      author: 'Coach Mike Rodriguez',
      date: '2024-10-29T20:00:00Z',
      image: 'https://images.unsplash.com/photo-1584196749098-8c9f18966a43',
      imageAlt:
        'High school basketball players in blue uniforms celebrating victory on indoor court with crowd cheering',
      category: { name: 'Sports', color: 'bg-orange-100 text-orange-800' },
    },
  ];

  // Mock data for events
  const events = [
    {
      id: 1,
      title: 'Parent-Teacher Conferences',
      description:
        "Schedule individual meetings with your child's teachers to discuss academic progress and goals for the semester.",
      date: '2024-11-15',
      time: '15:00',
      location: 'Main Building Classrooms',
      organizer: 'Academic Office',
      capacity: 200,
      attendees: 145,
      status: 'upcoming',
      category: { name: 'Academic', color: 'bg-blue-100 text-blue-800' },
      image: 'https://images.unsplash.com/photo-1640341937552-9af32ff77449',
      imageAlt:
        'Teachers and parents having discussion around conference table in bright classroom setting',
    },
    {
      id: 2,
      title: 'Winter Concert',
      description:
        'Join us for an evening of beautiful music performed by our choir, band, and orchestra students.',
      date: '2024-12-10',
      time: '19:00',
      location: 'Performing Arts Center',
      organizer: 'Music Department',
      capacity: 500,
      attendees: 320,
      status: 'upcoming',
      category: { name: 'Arts', color: 'bg-purple-100 text-purple-800' },
      image: 'https://images.unsplash.com/photo-1716934069576-bf070d27512d',
      imageAlt:
        'High school students in formal attire performing with musical instruments on stage with dramatic lighting',
    },
    {
      id: 3,
      title: 'College Fair',
      description:
        'Meet representatives from over 50 colleges and universities to explore your post-graduation options.',
      date: '2024-11-08',
      time: '10:00',
      location: 'Gymnasium',
      organizer: 'Guidance Department',
      capacity: 300,
      attendees: 280,
      status: 'upcoming',
      category: { name: 'College Prep', color: 'bg-green-100 text-green-800' },
      image: 'https://images.unsplash.com/photo-1683028222087-8c948e6d9496',
      imageAlt:
        'College fair with students talking to university representatives at information booths in large gymnasium',
    },
    {
      id: 4,
      title: 'Homecoming Dance',
      description:
        'Celebrate school spirit with dancing, music, and fun activities. Semi-formal attire required.',
      date: '2024-10-25',
      time: '19:00',
      location: 'School Cafeteria',
      organizer: 'Student Council',
      capacity: 400,
      attendees: 385,
      status: 'completed',
      category: { name: 'Social', color: 'bg-pink-100 text-pink-800' },
      image: 'https://images.unsplash.com/photo-1681567012715-4990694c5aa9',
      imageAlt:
        'High school students in semi-formal attire dancing in decorated cafeteria with colorful lights and balloons',
    },
  ];

  // Mock data for social media posts
  const socialPosts = [
    {
      id: 1,
      author: 'EduConnect High',
      platform: 'Twitter',
      content:
        "Congratulations to our Science Fair winners! 🏆 Maria Garcia and James Chen's water purification project will represent our school at nationals. We're so proud of their innovation and dedication! #STEMExcellence #ProudEagles",
      date: '2024-11-01T10:30:00Z',
      likes: 156,
      comments: 23,
      shares: 45,
      avatar: 'https://images.unsplash.com/photo-1538155421123-6a79813f5deb',
      avatarAlt:
        'Professional headshot of middle-aged man with glasses and friendly smile in business attire',
      image: 'https://images.unsplash.com/photo-1676905505142-c6bb852c40cf',
      imageAlt:
        'Two students holding trophy and certificate at science fair with robotic water purification device display',
    },
    {
      id: 2,
      author: 'EduConnect Athletics',
      platform: 'Instagram',
      content:
        'GAME DAY! 🏀 Our Eagles take on Central High tonight at 7 PM. Come out and support our team as they fight for a spot in regionals! Wear blue and gold! #EaglesBasketball #GameDay #SchoolSpirit',
      date: '2024-10-29T14:00:00Z',
      likes: 234,
      comments: 67,
      shares: 89,
      avatar: 'https://images.unsplash.com/photo-1726111896948-e096a5f43295',
      avatarAlt:
        'Athletic coach in team polo shirt with whistle around neck smiling confidently',
    },
    {
      id: 3,
      author: 'EduConnect Drama Club',
      platform: 'Facebook',
      content:
        "Opening night of Romeo and Juliet was absolutely magical! ✨ Thank you to everyone who came out to support our talented cast and crew. We have shows remaining this weekend - don't miss out on this incredible production!",
      date: '2024-10-31T22:00:00Z',
      likes: 89,
      comments: 34,
      shares: 12,
      avatar: 'https://images.unsplash.com/photo-1692441914023-e7b29d324483',
      avatarAlt:
        'Theater teacher with curly hair and artistic scarf smiling warmly in drama classroom',
    },
  ];

  // Mock data for newsletters
  const newsletters = [
    {
      id: 1,
      title: 'November Newsletter - Academic Excellence',
      description:
        'Highlights from our recent academic achievements, upcoming events, and important announcements for families.',
      date: '2024-11-01',
      edition: 'Vol. 15, Issue 3',
      pages: 8,
      downloads: 342,
    },
    {
      id: 2,
      title: 'October Newsletter - Fall Activities',
      description:
        'Recap of homecoming festivities, sports updates, and preparation for winter programs.',
      date: '2024-10-01',
      edition: 'Vol. 15, Issue 2',
      pages: 6,
      downloads: 298,
    },
    {
      id: 3,
      title: 'September Newsletter - New School Year',
      description:
        'Welcome back message, new staff introductions, and overview of exciting programs for the year ahead.',
      date: '2024-09-01',
      edition: 'Vol. 15, Issue 1',
      pages: 10,
      downloads: 456,
    },
  ];

  // Categories for filtering
  const newsCategories = [
    {
      id: 'all',
      name: 'All News',
      icon: 'Newspaper',
      count: newsArticles?.length,
      color: 'bg-primary text-white',
    },
    {
      id: 'academics',
      name: 'Academics',
      icon: 'BookOpen',
      count: 1,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: 'Trophy',
      count: 1,
      color: 'bg-orange-100 text-orange-800',
    },
    {
      id: 'arts',
      name: 'Arts',
      icon: 'Palette',
      count: 1,
      color: 'bg-purple-100 text-purple-800',
    },
    {
      id: 'wellness',
      name: 'Wellness',
      icon: 'Heart',
      count: 1,
      color: 'bg-green-100 text-green-800',
    },
  ];

  const eventCategories = [
    {
      id: 'all',
      name: 'All Events',
      icon: 'Calendar',
      count: events?.length,
      color: 'bg-primary text-white',
    },
    {
      id: 'academic',
      name: 'Academic',
      icon: 'BookOpen',
      count: 2,
      color: 'bg-blue-100 text-blue-800',
    },
    {
      id: 'arts',
      name: 'Arts',
      icon: 'Palette',
      count: 1,
      color: 'bg-purple-100 text-purple-800',
    },
    {
      id: 'social',
      name: 'Social',
      icon: 'Users',
      count: 1,
      color: 'bg-pink-100 text-pink-800',
    },
  ];

  // Filter functions
  const getFilteredNews = () => {
    if (activeCategory === 'all') return newsArticles;
    return newsArticles?.filter(
      (article) => article?.category?.name?.toLowerCase() === activeCategory
    );
  };

  const getFilteredEvents = () => {
    if (activeCategory === 'all') return events;
    return events?.filter(
      (event) => event?.category?.name?.toLowerCase() === activeCategory
    );
  };

  const getFeaturedArticle = () => {
    return (
      newsArticles?.find((article) => article?.featured) || newsArticles?.[0]
    );
  };

  const getUpcomingEvents = () => {
    return events?.filter((event) => event?.status === 'upcoming')?.slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              News & Events
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Stay connected with the latest happenings at EduConnect High. From
              academic achievements to upcoming events, discover what makes our
              school community special.
            </p>
          </div>
        </div>
      </section>
      {/* Announcements Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <AnnouncementBanner announcements={announcements} />
      </section>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
              activeTab === 'news'
                ? 'text-primary border-primary'
                : 'text-text-secondary border-transparent hover:text-primary hover:border-primary/30'
            }`}
          >
            <Icon name="Newspaper" size={20} />
            <span>Latest News</span>
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
              activeTab === 'events'
                ? 'text-primary border-primary'
                : 'text-text-secondary border-transparent hover:text-primary hover:border-primary/30'
            }`}
          >
            <Icon name="Calendar" size={20} />
            <span>Events</span>
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
              activeTab === 'social'
                ? 'text-primary border-primary'
                : 'text-text-secondary border-transparent hover:text-primary hover:border-primary/30'
            }`}
          >
            <Icon name="Share2" size={20} />
            <span>Social Feed</span>
          </button>
          <button
            onClick={() => setActiveTab('newsletter')}
            className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-200 border-b-2 ${
              activeTab === 'newsletter'
                ? 'text-primary border-primary'
                : 'text-text-secondary border-transparent hover:text-primary hover:border-primary/30'
            }`}
          >
            <Icon name="Mail" size={20} />
            <span>Newsletter</span>
          </button>
        </div>

        {/* News Tab Content */}
        {activeTab === 'news' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {/* Category Filters */}
              <div className="mb-8">
                <FilterTabs
                  categories={newsCategories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </div>

              {/* Featured Article */}
              {activeCategory === 'all' && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Featured Story
                  </h2>
                  <NewsCard article={getFeaturedArticle()} variant="featured" />
                </div>
              )}

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getFilteredNews()
                  ?.filter(
                    (article) => activeCategory === 'all' || !article?.featured
                  )
                  ?.map((article) => (
                    <NewsCard key={article?.id} article={article} />
                  ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <CalendarWidget events={events} onDateSelect={setSelectedDate} />

              <div className="bg-white rounded-xl shadow-brand p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Upcoming Events
                </h3>
                <div className="space-y-3">
                  {getUpcomingEvents()?.map((event) => (
                    <EventCard
                      key={event?.id}
                      event={event}
                      variant="calendar"
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  fullWidth
                  className="mt-4"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  View All Events
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Events Tab Content */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              {/* Category Filters */}
              <div className="mb-8">
                <FilterTabs
                  categories={eventCategories}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                />
              </div>

              {/* Events Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getFilteredEvents()?.map((event) => (
                  <EventCard key={event?.id} event={event} />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <CalendarWidget events={events} onDateSelect={setSelectedDate} />

              <div className="bg-white rounded-xl shadow-brand p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button
                    variant="default"
                    fullWidth
                    iconName="Plus"
                    iconPosition="left"
                  >
                    Submit Event
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                  >
                    Export Calendar
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Bell"
                    iconPosition="left"
                  >
                    Event Notifications
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Social Feed Tab Content */}
        {activeTab === 'social' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-text-primary">
                  Social Media Feed
                </h2>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="RefreshCw"
                    iconPosition="left"
                  >
                    Refresh
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="left"
                  >
                    Follow Us
                  </Button>
                </div>
              </div>
              <SocialFeed posts={socialPosts} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-brand p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface transition-colors"
                  >
                    <Icon name="Twitter" size={20} className="text-blue-500" />
                    <div>
                      <p className="font-medium">@EduConnectHigh</p>
                      <p className="text-sm text-text-secondary">
                        2.3K followers
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface transition-colors"
                  >
                    <Icon name="Facebook" size={20} className="text-blue-600" />
                    <div>
                      <p className="font-medium">EduConnect High School</p>
                      <p className="text-sm text-text-secondary">5.1K likes</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-surface transition-colors"
                  >
                    <Icon
                      name="Instagram"
                      size={20}
                      className="text-pink-500"
                    />
                    <div>
                      <p className="font-medium">@educonnecthigh</p>
                      <p className="text-sm text-text-secondary">
                        1.8K followers
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <CalendarWidget events={events} onDateSelect={setSelectedDate} />
            </div>
          </div>
        )}

        {/* Newsletter Tab Content */}
        {activeTab === 'newsletter' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <NewsletterArchive newsletters={newsletters} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-brand p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Newsletter Subscription
                </h3>
                <p className="text-text-secondary mb-4">
                  Stay informed with our monthly newsletter featuring school
                  updates, achievements, and upcoming events.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />

                  <Button
                    variant="default"
                    fullWidth
                    iconName="Mail"
                    iconPosition="left"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-text-secondary mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-brand p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Newsletter Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">
                      Total Subscribers
                    </span>
                    <span className="font-semibold">2,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Open Rate</span>
                    <span className="font-semibold">78%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">
                      Issues Published
                    </span>
                    <span className="font-semibold">45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient-primary font-accent">
                    EduConnect
                  </h3>
                  <p className="text-sm text-text-secondary">High School</p>
                </div>
              </div>
              <p className="text-text-secondary mb-4">
                Stay connected with the latest news and events from EduConnect
                High School. We're committed to keeping our community informed
                and engaged.
              </p>
              <div className="flex space-x-4">
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-text-secondary hover:text-primary cursor-pointer transition-colors"
                />
                <Icon
                  name="Facebook"
                  size={20}
                  className="text-text-secondary hover:text-primary cursor-pointer transition-colors"
                />
                <Icon
                  name="Instagram"
                  size={20}
                  className="text-text-secondary hover:text-primary cursor-pointer transition-colors"
                />
                <Icon
                  name="Linkedin"
                  size={20}
                  className="text-text-secondary hover:text-primary cursor-pointer transition-colors"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-text-primary mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a
                    href="/homepage"
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/academics"
                    className="hover:text-primary transition-colors"
                  >
                    Academics
                  </a>
                </li>
                <li>
                  <a
                    href="/student-life"
                    className="hover:text-primary transition-colors"
                  >
                    Student Life
                  </a>
                </li>
                <li>
                  <a
                    href="/admissions"
                    className="hover:text-primary transition-colors"
                  >
                    Admissions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-text-primary mb-4">
                Contact Info
              </h4>
              <ul className="space-y-2 text-text-secondary">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@educonnecthigh.edu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>123 Education St, Learning City</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-text-secondary">
            <p>
              &copy; {new Date()?.getFullYear()} EduConnect High School. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewsEventsPage;
