import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import DepartmentCard from './components/DepartmentCard';
import CourseCard from './components/CourseCard';
import FacultyCard from './components/FacultyCard';
import AchievementCard from './components/AchievementCard';
import AccreditationCard from './components/AccreditationCard';
import CurriculumMap from './components/CurriculumMap';
import CollegePrep from './components/CollegePrep';

const Academics = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedGradeLevel, setSelectedGradeLevel] = useState('all');
  const [activeSection, setActiveSection] = useState('overview');

  // Mock data for departments
  const departments = [
    {
      id: 1,
      name: 'Mathematics',
      icon: 'Calculator',
      courses: 12,
      faculty: 8,
      achievements: 15,
      image: 'https://images.unsplash.com/photo-1704297897660-43636cdaf3ac',
      imageAlt:
        'Students working on mathematical equations on a whiteboard in a bright classroom',
      description:
        'Our Mathematics department offers comprehensive programs from Algebra to Advanced Calculus, preparing students for STEM careers and higher education.',
    },
    {
      id: 2,
      name: 'Science',
      icon: 'Microscope',
      courses: 15,
      faculty: 10,
      achievements: 22,
      image: 'https://images.unsplash.com/photo-1624957866395-ef59c756e4d9',
      imageAlt:
        'Students conducting chemistry experiments in a modern laboratory with safety equipment',
      description:
        'Explore the wonders of Physics, Chemistry, and Biology through hands-on experiments and cutting-edge research opportunities.',
    },
    {
      id: 3,
      name: 'English Language Arts',
      icon: 'BookOpen',
      courses: 10,
      faculty: 7,
      achievements: 18,
      image: 'https://images.unsplash.com/photo-1673974559269-b4146f81b5f5',
      imageAlt:
        'Students engaged in literature discussion in a cozy library setting with books in background',
      description:
        'Develop critical thinking, communication skills, and literary appreciation through diverse reading and writing experiences.',
    },
    {
      id: 4,
      name: 'Social Studies',
      icon: 'Globe',
      courses: 8,
      faculty: 6,
      achievements: 12,
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754',
      imageAlt:
        'Teacher pointing to world map while students take notes in a geography classroom',
      description:
        'Understanding history, geography, and civics to prepare informed and engaged global citizens.',
    },
    {
      id: 5,
      name: 'Arts & Music',
      icon: 'Palette',
      courses: 14,
      faculty: 9,
      achievements: 25,
      image: 'https://images.unsplash.com/photo-1688897345012-624ff5775307',
      imageAlt:
        'Art students painting on canvases in a bright studio with natural lighting and art supplies',
      description:
        'Express creativity through visual arts, music, theater, and digital media programs that inspire artistic excellence.',
    },
    {
      id: 6,
      name: 'Physical Education',
      icon: 'Activity',
      courses: 6,
      faculty: 5,
      achievements: 20,
      image: 'https://images.unsplash.com/photo-1663835584562-b4c72c52b125',
      imageAlt:
        'Students playing basketball in a modern gymnasium with professional court markings',
      description:
        'Promoting physical fitness, teamwork, and healthy lifestyle choices through diverse athletic programs.',
    },
  ];

  // Mock data for courses
  const courses = [
    {
      id: 1,
      name: 'Advanced Placement Calculus AB',
      code: 'MATH-401',
      department: 'mathematics',
      gradeLevel: '12',
      difficulty: 'Advanced',
      duration: 'Full Year',
      credits: 4,
      enrolled: 28,
      description:
        'College-level calculus course covering limits, derivatives, and integrals with real-world applications.',
      prerequisites: ['Pre-Calculus', 'Algebra II'],
    },
    {
      id: 2,
      name: 'AP Chemistry',
      code: 'SCI-301',
      department: 'science',
      gradeLevel: '11',
      difficulty: 'Advanced',
      duration: 'Full Year',
      credits: 4,
      enrolled: 24,
      description:
        'Comprehensive study of chemical principles, laboratory techniques, and molecular behavior.',
      prerequisites: ['Chemistry I', 'Algebra II'],
    },
    {
      id: 3,
      name: 'English Literature & Composition',
      code: 'ENG-201',
      department: 'english',
      gradeLevel: '10',
      difficulty: 'Intermediate',
      duration: 'Full Year',
      credits: 4,
      enrolled: 32,
      description:
        'Analysis of classic and contemporary literature with emphasis on critical writing skills.',
      prerequisites: ['English 9'],
    },
    {
      id: 4,
      name: 'World History',
      code: 'SS-101',
      department: 'social-studies',
      gradeLevel: '9',
      difficulty: 'Beginner',
      duration: 'Full Year',
      credits: 3,
      enrolled: 35,
      description:
        'Comprehensive survey of world civilizations from ancient times to the modern era.',
      prerequisites: [],
    },
    {
      id: 5,
      name: 'Digital Art & Design',
      code: 'ART-205',
      department: 'arts',
      gradeLevel: '10',
      difficulty: 'Intermediate',
      duration: 'Semester',
      credits: 2,
      enrolled: 22,
      description:
        'Explore digital creativity using industry-standard software and design principles.',
      prerequisites: ['Art Foundations'],
    },
    {
      id: 6,
      name: 'Advanced Physical Conditioning',
      code: 'PE-301',
      department: 'physical-education',
      gradeLevel: '11',
      difficulty: 'Intermediate',
      duration: 'Semester',
      credits: 1,
      enrolled: 30,
      description:
        'Intensive fitness program focusing on strength training and cardiovascular health.',
      prerequisites: ['PE Foundations'],
    },
  ];

  // Mock data for faculty
  const faculty = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      title: 'Department Head - Mathematics',
      department: 'Mathematics Department',
      avatar: 'https://images.unsplash.com/photo-1734456611474-13245d164868',
      avatarAlt:
        'Professional headshot of middle-aged woman with brown hair in navy blazer smiling at camera',
      education: 'Ph.D. Mathematics, Stanford University',
      experience: 15,
      isHeadOfDepartment: true,
      specializations: [
        'Calculus',
        'Statistics',
        'Mathematical Modeling',
        'STEM Education',
      ],
      achievements: [
        'National Mathematics Teacher Award 2023',
        'Published researcher in mathematical education',
      ],
    },
    {
      id: 2,
      name: 'Prof. James Rodriguez',
      title: 'Senior Science Teacher',
      department: 'Science Department',
      avatar: 'https://images.unsplash.com/photo-1729162128021-f37dca3ff30d',
      avatarAlt:
        'Professional headshot of Hispanic man with short black hair in white lab coat',
      education: 'M.S. Chemistry, MIT',
      experience: 12,
      isHeadOfDepartment: false,
      specializations: [
        'Organic Chemistry',
        'Laboratory Safety',
        'Research Methods',
      ],
      achievements: [
        'Excellence in Science Teaching Award 2022',
        'Student Research Mentor of the Year',
      ],
    },
    {
      id: 3,
      name: 'Ms. Emily Chen',
      title: 'English Department Chair',
      department: 'English Language Arts',
      avatar: 'https://images.unsplash.com/photo-1668049221564-862149a48e10',
      avatarAlt:
        'Professional headshot of Asian woman with long black hair in burgundy sweater',
      education: 'M.A. English Literature, Harvard University',
      experience: 10,
      isHeadOfDepartment: true,
      specializations: [
        'Contemporary Literature',
        'Creative Writing',
        'AP English',
      ],
      achievements: [
        'Regional Writing Competition Judge',
        'Published poet and educator',
      ],
    },
    {
      id: 4,
      name: 'Mr. David Thompson',
      title: 'History & Social Studies Teacher',
      department: 'Social Studies Department',
      avatar: 'https://images.unsplash.com/photo-1649868511555-41e190973af7',
      avatarAlt:
        'Professional headshot of Caucasian man with beard wearing glasses and blue shirt',
      education: 'M.A. History, Yale University',
      experience: 8,
      isHeadOfDepartment: false,
      specializations: [
        'American History',
        'World Civilizations',
        'Civic Education',
      ],
      achievements: [
        'History Bowl Coach - State Champions 2023',
        'Curriculum Development Specialist',
      ],
    },
  ];

  // Mock data for achievements
  const achievements = [
    {
      id: 1,
      studentName: 'Alex Johnson',
      studentPhoto:
        'https://images.unsplash.com/flagged/photo-1556845694-824a68654417',
      studentPhotoAlt:
        'Smiling teenage boy with short brown hair wearing blue school uniform',
      title: 'National Merit Scholarship Finalist',
      description:
        'Achieved top 1% score on PSAT/NMSQT, qualifying for National Merit Scholarship consideration.',
      category: 'Academic Excellence',
      type: 'scholarship',
      level: 'National',
      value: '$2,500',
      date: 'October 2024',
    },
    {
      id: 2,
      studentName: 'Maria Garcia',
      studentPhoto:
        'https://images.unsplash.com/photo-1575090973814-063b180ffef9',
      studentPhotoAlt:
        'Smiling teenage girl with long dark hair wearing red school sweater',
      title: 'State Science Fair Winner',
      description:
        'First place in Environmental Science category for research on renewable energy solutions.',
      category: 'Science Competition',
      type: 'competition',
      level: 'State',
      date: 'September 2024',
    },
    {
      id: 3,
      studentName: 'Kevin Park',
      studentPhoto:
        'https://images.unsplash.com/photo-1629783509294-8717c8129358',
      studentPhotoAlt:
        'Asian teenage boy with glasses wearing green polo shirt smiling confidently',
      title: 'MIT Early Admission',
      description:
        'Accepted to Massachusetts Institute of Technology for Computer Science program.',
      category: 'College Acceptance',
      type: 'college',
      level: 'Ivy League',
      date: 'November 2024',
    },
    {
      id: 4,
      studentName: 'Sophie Williams',
      studentPhoto:
        'https://images.unsplash.com/photo-1621355735849-1760110b27b6',
      studentPhotoAlt:
        'Blonde teenage girl with blue eyes wearing purple school cardigan',
      title: 'Regional Math Olympiad Gold',
      description:
        'Gold medal winner in Regional Mathematics Olympiad competition.',
      category: 'Mathematics',
      type: 'competition',
      level: 'Regional',
      date: 'August 2024',
    },
  ];

  // Mock data for accreditations
  const accreditations = [
    {
      id: 1,
      name: 'AdvancED Accreditation',
      type: 'Educational Excellence',
      logo: 'https://via.placeholder.com/64x64/1E3A8A/FFFFFF?text=AED',
      logoAlt:
        'AdvancED accreditation logo with blue background and white letters',
      validUntil: '2027',
      rating: 'Exemplary',
      description:
        'Recognized for meeting the highest standards of educational quality and continuous improvement.',
    },
    {
      id: 2,
      name: 'College Board Certification',
      type: 'AP Program Authorization',
      logo: 'https://via.placeholder.com/64x64/0F766E/FFFFFF?text=CB',
      logoAlt:
        'College Board certification logo with teal background and white letters',
      validUntil: '2026',
      rating: 'Authorized',
      description:
        'Certified to offer Advanced Placement courses and examinations.',
    },
    {
      id: 3,
      name: 'State Education Department',
      type: 'Academic Standards',
      logo: 'https://via.placeholder.com/64x64/F59E0B/FFFFFF?text=SED',
      logoAlt:
        'State Education Department logo with amber background and white letters',
      validUntil: '2025',
      rating: 'Exceeds Standards',
      description:
        'Meets and exceeds all state educational standards and requirements.',
    },
    {
      id: 4,
      name: 'National Honor Society',
      type: 'Character Recognition',
      logo: 'https://via.placeholder.com/64x64/A23B72/FFFFFF?text=NHS',
      logoAlt:
        'National Honor Society logo with purple background and white letters',
      validUntil: 'Ongoing',
      rating: 'Charter School',
      description:
        'Authorized to establish chapters recognizing outstanding student achievement.',
    },
  ];

  // Filter options
  const departmentOptions = [
    { value: 'all', label: 'All Departments' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'science', label: 'Science' },
    { value: 'english', label: 'English Language Arts' },
    { value: 'social-studies', label: 'Social Studies' },
    { value: 'arts', label: 'Arts & Music' },
    { value: 'physical-education', label: 'Physical Education' },
  ];

  const gradeLevelOptions = [
    { value: 'all', label: 'All Grade Levels' },
    { value: '9', label: 'Grade 9' },
    { value: '10', label: 'Grade 10' },
    { value: '11', label: 'Grade 11' },
    { value: '12', label: 'Grade 12' },
  ];

  // Filter courses based on selected filters
  const filteredCourses = courses?.filter((course) => {
    const departmentMatch =
      selectedDepartment === 'all' || course?.department === selectedDepartment;
    const gradeMatch =
      selectedGradeLevel === 'all' || course?.gradeLevel === selectedGradeLevel;
    return departmentMatch && gradeMatch;
  });

  // Navigation sections
  const navigationSections = [
    { id: 'overview', label: 'Overview', icon: 'Home' },
    { id: 'departments', label: 'Departments', icon: 'Building' },
    { id: 'courses', label: 'Course Catalog', icon: 'BookOpen' },
    { id: 'faculty', label: 'Faculty', icon: 'Users' },
    { id: 'curriculum', label: 'Curriculum Map', icon: 'Map' },
    { id: 'college-prep', label: 'College Prep', icon: 'GraduationCap' },
    { id: 'achievements', label: 'Achievements', icon: 'Award' },
    { id: 'accreditation', label: 'Accreditation', icon: 'Shield' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <Header />
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Academic Excellence Center
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Discover our comprehensive educational programs designed to
              prepare students for college success and lifelong learning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Campus Tour
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Download Curriculum Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">65+</div>
              <div className="text-text-secondary">Courses Offered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">45</div>
              <div className="text-text-secondary">Expert Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-text-secondary">College Acceptance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-text-secondary">AP Courses</div>
            </div>
          </div>
        </div>
      </section>
      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 pb-2">
            {navigationSections?.map((section) => (
              <button
                key={section?.id}
                onClick={() => setActiveSection(section?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                  activeSection === section?.id
                    ? 'text-primary bg-primary/10 shadow-sm'
                    : 'text-text-secondary hover:text-primary hover:bg-surface'
                }`}
              >
                <Icon name={section?.icon} size={16} />
                <span>{section?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Preparing Tomorrow's Leaders Today
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Our comprehensive academic program combines rigorous
                  coursework with innovative teaching methods to ensure every
                  student reaches their full potential and is prepared for
                  success in college and beyond.
                </p>
              </div>

              {/* Featured Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-brand">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={32} color="var(--color-primary)" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Award-Winning Programs
                  </h3>
                  <p className="text-text-secondary">
                    Nationally recognized academic programs with state and
                    regional awards for excellence in education.
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-brand">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name="Users"
                      size={32}
                      color="var(--color-secondary)"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    Expert Faculty
                  </h3>
                  <p className="text-text-secondary">
                    Highly qualified teachers with advanced degrees and years of
                    experience in their respective fields.
                  </p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-brand">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name="TrendingUp"
                      size={32}
                      color="var(--color-accent)"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    College Success
                  </h3>
                  <p className="text-text-secondary">
                    98% college acceptance rate with graduates attending top
                    universities nationwide.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Departments Section */}
          {activeSection === 'departments' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Academic Departments
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Explore our diverse academic departments, each offering
                  specialized programs designed to foster deep learning and
                  critical thinking.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {departments?.map((department) => (
                  <DepartmentCard
                    key={department?.id}
                    department={department}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Course Catalog Section */}
          {activeSection === 'courses' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Course Catalog
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Browse our comprehensive course offerings with interactive
                  previews and detailed information.
                </p>
              </div>

              {/* Filters */}
              <div className="bg-white rounded-xl shadow-brand p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Select
                    label="Filter by Department"
                    options={departmentOptions}
                    value={selectedDepartment}
                    onChange={setSelectedDepartment}
                  />

                  <Select
                    label="Filter by Grade Level"
                    options={gradeLevelOptions}
                    value={selectedGradeLevel}
                    onChange={setSelectedGradeLevel}
                  />
                </div>
              </div>

              {/* Course Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses?.map((course) => (
                  <CourseCard key={course?.id} course={course} />
                ))}
              </div>

              {filteredCourses?.length === 0 && (
                <div className="text-center py-12">
                  <Icon
                    name="Search"
                    size={48}
                    color="var(--color-text-secondary)"
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    No courses found
                  </h3>
                  <p className="text-text-secondary">
                    Try adjusting your filters to see more results.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Faculty Section */}
          {activeSection === 'faculty' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Meet Our Faculty
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Our dedicated educators bring expertise, passion, and
                  innovation to every classroom experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {faculty?.map((member) => (
                  <FacultyCard key={member?.id} faculty={member} />
                ))}
              </div>

              {/* Faculty Stats */}
              <div className="bg-white rounded-xl shadow-brand p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
                  Faculty Excellence
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      100%
                    </div>
                    <div className="text-text-secondary">
                      Certified Teachers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      85%
                    </div>
                    <div className="text-text-secondary">Advanced Degrees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      12
                    </div>
                    <div className="text-text-secondary">
                      Avg. Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      25+
                    </div>
                    <div className="text-text-secondary">Teaching Awards</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Curriculum Map Section */}
          {activeSection === 'curriculum' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Curriculum Progression
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Explore our four-year academic journey with detailed
                  curriculum maps and learning standards.
                </p>
              </div>

              <CurriculumMap />
            </div>
          )}

          {/* College Prep Section */}
          {activeSection === 'college-prep' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  College Preparation
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Comprehensive resources and guidance to ensure students are
                  ready for college success.
                </p>
              </div>

              <CollegePrep />
            </div>
          )}

          {/* Achievements Section */}
          {activeSection === 'achievements' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Student Achievements
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Celebrating our students' outstanding academic accomplishments
                  and recognition.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements?.map((achievement) => (
                  <AchievementCard
                    key={achievement?.id}
                    achievement={achievement}
                  />
                ))}
              </div>

              {/* Achievement Stats */}
              <div className="bg-white rounded-xl shadow-brand p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
                  2024 Achievements
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success mb-2">
                      45
                    </div>
                    <div className="text-text-secondary">
                      Scholarships Awarded
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-2">
                      28
                    </div>
                    <div className="text-text-secondary">Competition Wins</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">
                      15
                    </div>
                    <div className="text-text-secondary">
                      National Recognition
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-2">
                      $2.3M
                    </div>
                    <div className="text-text-secondary">Scholarship Value</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Accreditation Section */}
          {activeSection === 'accreditation' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Accreditation & Recognition
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Our commitment to educational excellence is recognized by
                  leading accreditation bodies and organizations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {accreditations?.map((accreditation) => (
                  <AccreditationCard
                    key={accreditation?.id}
                    accreditation={accreditation}
                  />
                ))}
              </div>

              {/* Quality Assurance */}
              <div className="bg-white rounded-xl shadow-brand p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
                  Quality Assurance
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name="CheckCircle"
                        size={32}
                        color="var(--color-success)"
                      />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      Continuous Improvement
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Regular assessment and enhancement of our educational
                      programs and practices.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name="Users"
                        size={32}
                        color="var(--color-primary)"
                      />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      Stakeholder Engagement
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Active involvement of students, parents, and community in
                      our educational mission.
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name="Target"
                        size={32}
                        color="var(--color-accent)"
                      />
                    </div>
                    <h4 className="font-semibold text-text-primary mb-2">
                      Performance Standards
                    </h4>
                    <p className="text-text-secondary text-sm">
                      Meeting and exceeding state and national educational
                      performance benchmarks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      {/* Call to Action */}
      <section className="py-16 bg-gradient-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Join Our Academic Community?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover how EduConnect High can help your child achieve academic
            excellence and prepare for a successful future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule a Visit
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="FileText"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-secondary"
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" size={24} color="white" />
                </div>
                <div>
                  <div className="text-xl font-bold">EduConnect</div>
                  <div className="text-sm opacity-80">High School</div>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Preparing tomorrow's leaders through academic excellence and
                innovative education.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Course Catalog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Faculty Directory
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Academic Calendar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    College Counseling
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Parent Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Library Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Tutoring Center
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>academics@educonnect.edu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>123 Education Blvd</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
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

export default Academics;
