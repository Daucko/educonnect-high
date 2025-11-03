import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const StaffDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const staffMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Principal',
      department: 'Administration',
      email: 's.johnson@educonnecthigh.edu',
      phone: '(555) 123-4501',
      office: 'Main Office 101',
      image: 'https://images.unsplash.com/photo-1734456611474-13245d164868',
      alt: 'Professional headshot of Dr. Sarah Johnson, middle-aged woman with brown hair in navy blazer smiling at camera',
      bio: 'Dr. Johnson has been leading EduConnect High for over 8 years, bringing innovative educational approaches and community engagement.',
      officeHours: 'Monday-Friday, 8:00 AM - 4:00 PM',
      specialties: [
        'Educational Leadership',
        'Curriculum Development',
        'Community Relations',
      ],
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Vice Principal',
      department: 'Administration',
      email: 'm.rodriguez@educonnecthigh.edu',
      phone: '(555) 123-4502',
      office: 'Main Office 102',
      image: 'https://images.unsplash.com/photo-1678282955795-200c1e18bc7d',
      alt: 'Professional headshot of Michael Rodriguez, Hispanic man with short black hair in dark suit and tie',
      bio: 'Mr. Rodriguez oversees student discipline, attendance, and supports the principal in daily operations.',
      officeHours: 'Monday-Friday, 7:30 AM - 4:30 PM',
      specialties: [
        'Student Affairs',
        'Discipline Management',
        'Parent Communication',
      ],
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      title: 'Mathematics Department Head',
      department: 'Mathematics',
      email: 'e.chen@educonnecthigh.edu',
      phone: '(555) 123-4503',
      office: 'Math Wing 201',
      image: 'https://images.unsplash.com/photo-1668049221564-862149a48e10',
      alt: 'Professional headshot of Dr. Emily Chen, Asian woman with long black hair wearing glasses and blue blouse',
      bio: 'Dr. Chen leads our award-winning mathematics program and coordinates STEM initiatives across the school.',
      officeHours: 'Tuesday & Thursday, 3:00 PM - 4:00 PM',
      specialties: [
        'Advanced Mathematics',
        'STEM Education',
        'Academic Competition',
      ],
    },
    {
      id: 4,
      name: 'James Thompson',
      title: 'English Department Head',
      department: 'English',
      email: 'j.thompson@educonnecthigh.edu',
      phone: '(555) 123-4504',
      office: 'English Wing 301',
      image: 'https://images.unsplash.com/photo-1630257202782-ae7fbd64bd02',
      alt: 'Professional headshot of James Thompson, middle-aged Caucasian man with beard wearing brown sweater',
      bio: 'Mr. Thompson has been inspiring students in literature and writing for over 15 years at EduConnect High.',
      officeHours: 'Monday, Wednesday, Friday, 2:30 PM - 3:30 PM',
      specialties: [
        'Creative Writing',
        'Literature Analysis',
        'Public Speaking',
      ],
    },
    {
      id: 5,
      name: 'Dr. Maria Santos',
      title: 'Science Department Head',
      department: 'Science',
      email: 'm.santos@educonnecthigh.edu',
      phone: '(555) 123-4505',
      office: 'Science Wing 401',
      image: 'https://images.unsplash.com/photo-1704455305620-21d29b7b63a0',
      alt: 'Professional headshot of Dr. Maria Santos, Latina woman with curly hair in white lab coat smiling',
      bio: "Dr. Santos leads our innovative science programs and manages the school's research partnerships with local universities.",
      officeHours: 'Tuesday & Thursday, 2:45 PM - 3:45 PM',
      specialties: [
        'Biology Research',
        'Environmental Science',
        'Laboratory Management',
      ],
    },
    {
      id: 6,
      name: 'Robert Kim',
      title: 'Athletic Director',
      department: 'Athletics',
      email: 'r.kim@educonnecthigh.edu',
      phone: '(555) 123-4506',
      office: 'Gymnasium Office',
      image: 'https://images.unsplash.com/photo-1735504647225-a86944f1ca6f',
      alt: 'Professional headshot of Robert Kim, Asian man in athletic polo shirt with whistle around neck',
      bio: 'Coach Kim oversees all athletic programs and has led our teams to multiple state championships.',
      officeHours: 'Monday-Friday, 3:30 PM - 5:00 PM',
      specialties: [
        'Athletic Program Management',
        'Team Coaching',
        'Sports Medicine',
      ],
    },
    {
      id: 7,
      name: 'Lisa Williams',
      title: 'School Counselor',
      department: 'Student Services',
      email: 'l.williams@educonnecthigh.edu',
      phone: '(555) 123-4507',
      office: 'Counseling Center 105',
      image: 'https://images.unsplash.com/photo-1713448721035-a206a09fa6bf',
      alt: 'Professional headshot of Lisa Williams, African American woman with natural hair wearing colorful cardigan',
      bio: 'Ms. Williams provides academic and personal counseling, college preparation, and crisis intervention support.',
      officeHours: 'Monday-Friday, 8:00 AM - 3:30 PM',
      specialties: [
        'College Counseling',
        'Mental Health Support',
        'Academic Planning',
      ],
    },
    {
      id: 8,
      name: 'David Park',
      title: 'Technology Coordinator',
      department: 'Technology',
      email: 'd.park@educonnecthigh.edu',
      phone: '(555) 123-4508',
      office: 'IT Center 110',
      image: 'https://images.unsplash.com/photo-1713870816826-08e4b536d1ed',
      alt: 'Professional headshot of David Park, young Asian man with glasses wearing casual button-down shirt',
      bio: 'Mr. Park manages all technology systems and leads digital literacy initiatives across the curriculum.',
      officeHours: 'Monday-Friday, 7:00 AM - 3:00 PM',
      specialties: [
        'Network Administration',
        'Educational Technology',
        'Digital Literacy',
      ],
    },
  ];

  const departmentOptions = [
    { value: '', label: 'All Departments' },
    { value: 'Administration', label: 'Administration' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'English', label: 'English' },
    { value: 'Science', label: 'Science' },
    { value: 'Athletics', label: 'Athletics' },
    { value: 'Student Services', label: 'Student Services' },
    { value: 'Technology', label: 'Technology' },
  ];

  const roleOptions = [
    { value: '', label: 'All Roles' },
    { value: 'Principal', label: 'Principal' },
    { value: 'Vice Principal', label: 'Vice Principal' },
    { value: 'Department Head', label: 'Department Head' },
    { value: 'Director', label: 'Director' },
    { value: 'Counselor', label: 'Counselor' },
    { value: 'Coordinator', label: 'Coordinator' },
  ];

  const filteredStaff = staffMembers?.filter((staff) => {
    const matchesSearch =
      staff?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      staff?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      staff?.department?.toLowerCase()?.includes(searchTerm?.toLowerCase());

    const matchesDepartment =
      !selectedDepartment || staff?.department === selectedDepartment;

    const matchesRole =
      !selectedRole ||
      staff?.title?.toLowerCase()?.includes(selectedRole?.toLowerCase());

    return matchesSearch && matchesDepartment && matchesRole;
  });

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary rounded-full px-4 py-2 mb-4">
            <Icon name="Users" size={16} />
            <span className="text-sm font-medium">Staff Directory</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Meet Our Dedicated Team
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our experienced faculty and staff are committed to providing
            exceptional education and support for every student. Get to know the
            people who make EduConnect High a special place to learn and grow.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-surface rounded-xl p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <Input
              type="search"
              placeholder="Search by name, title, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="md:col-span-1"
            />

            <Select
              placeholder="Filter by department"
              options={departmentOptions}
              value={selectedDepartment}
              onChange={setSelectedDepartment}
            />

            <Select
              placeholder="Filter by role"
              options={roleOptions}
              value={selectedRole}
              onChange={setSelectedRole}
            />
          </div>

          {(searchTerm || selectedDepartment || selectedRole) && (
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-text-secondary">
                Showing {filteredStaff?.length} of {staffMembers?.length} staff
                members
              </p>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('');
                  setSelectedRole('');
                }}
                iconName="X"
                iconPosition="left"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStaff?.map((staff) => (
            <div
              key={staff?.id}
              className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group"
            >
              {/* Photo */}
              <div className="relative overflow-hidden">
                <Image
                  src={staff?.image}
                  alt={staff?.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {staff?.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-1">
                    {staff?.title}
                  </p>
                  <p className="text-text-secondary text-sm">
                    {staff?.department}
                  </p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Mail" size={14} />
                    <span className="truncate">{staff?.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Phone" size={14} />
                    <span>{staff?.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="MapPin" size={14} />
                    <span>{staff?.office}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-text-secondary line-clamp-3">
                    {staff?.bio}
                  </p>
                </div>

                {staff?.officeHours && (
                  <div className="mb-4 p-3 bg-surface rounded-lg">
                    <div className="flex items-center space-x-2 mb-1">
                      <Icon
                        name="Clock"
                        size={14}
                        color="var(--color-primary)"
                      />
                      <span className="text-sm font-medium text-primary">
                        Office Hours
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary">
                      {staff?.officeHours}
                    </p>
                  </div>
                )}

                {staff?.specialties && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {staff?.specialties
                        ?.slice(0, 2)
                        ?.map((specialty, index) => (
                          <span
                            key={index}
                            className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      {staff?.specialties?.length > 2 && (
                        <span className="inline-block bg-text-secondary/10 text-text-secondary text-xs px-2 py-1 rounded-full">
                          +{staff?.specialties?.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Mail"
                    className="flex-1 text-xs"
                  >
                    Email
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Calendar"
                    className="flex-1 text-xs"
                  >
                    Schedule
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStaff?.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="Search"
              size={48}
              color="var(--color-text-secondary)"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              No staff members found
            </h3>
            <p className="text-text-secondary">
              Try adjusting your search terms or filters to find the staff
              member you're looking for.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default StaffDirectory;
