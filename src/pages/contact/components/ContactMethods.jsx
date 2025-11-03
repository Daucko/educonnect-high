import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      title: 'Main Office',
      description: 'General inquiries, enrollment, and administrative matters',
      icon: 'Building',
      color: 'primary',
      contacts: [
        { type: 'Phone', value: '(555) 123-4567', icon: 'Phone' },
        { type: 'Email', value: 'info@educonnecthigh.edu', icon: 'Mail' },
        { type: 'Fax', value: '(555) 123-4568', icon: 'FileText' },
      ],
      hours: 'Monday - Friday: 7:30 AM - 4:00 PM',
      location: 'Main Building, First Floor',
    },
    {
      id: 2,
      title: 'Admissions Office',
      description: 'New student enrollment, transfers, and school tours',
      icon: 'UserPlus',
      color: 'secondary',
      contacts: [
        { type: 'Phone', value: '(555) 123-4570', icon: 'Phone' },
        { type: 'Email', value: 'admissions@educonnecthigh.edu', icon: 'Mail' },
      ],
      hours:
        'Monday - Friday: 8:00 AM - 4:00 PM\nSaturday: 9:00 AM - 12:00 PM (by appointment)',
      location: 'Welcome Center',
    },
    {
      id: 3,
      title: 'Student Services',
      description: 'Counseling, academic support, and student wellness',
      icon: 'Heart',
      color: 'success',
      contacts: [
        { type: 'Phone', value: '(555) 123-4571', icon: 'Phone' },
        { type: 'Email', value: 'counseling@educonnecthigh.edu', icon: 'Mail' },
        { type: 'Crisis Line', value: '(555) 123-9999', icon: 'AlertTriangle' },
      ],
      hours:
        'Monday - Friday: 8:00 AM - 3:30 PM\nEmergency support available 24/7',
      location: 'Student Services Building',
    },
    {
      id: 4,
      title: 'Athletics Department',
      description: 'Sports programs, team information, and athletic events',
      icon: 'Trophy',
      color: 'warning',
      contacts: [
        { type: 'Phone', value: '(555) 123-4572', icon: 'Phone' },
        { type: 'Email', value: 'athletics@educonnecthigh.edu', icon: 'Mail' },
      ],
      hours: 'Monday - Friday: 3:00 PM - 6:00 PM\nGame days: Extended hours',
      location: 'Athletic Complex',
    },
    {
      id: 5,
      title: 'Transportation',
      description: 'Bus routes, schedules, and transportation services',
      icon: 'Bus',
      color: 'accent',
      contacts: [
        { type: 'Phone', value: '(555) 123-4573', icon: 'Phone' },
        {
          type: 'Email',
          value: 'transportation@educonnecthigh.edu',
          icon: 'Mail',
        },
      ],
      hours: 'Monday - Friday: 6:00 AM - 4:00 PM',
      location: 'Transportation Office',
    },
    {
      id: 6,
      title: 'Technology Support',
      description: 'IT help, device issues, and digital learning support',
      icon: 'Monitor',
      color: 'brand-ocean',
      contacts: [
        { type: 'Phone', value: '(555) 123-4574', icon: 'Phone' },
        { type: 'Email', value: 'tech@educonnecthigh.edu', icon: 'Mail' },
        { type: 'Help Desk', value: 'Online Portal', icon: 'Globe' },
      ],
      hours: 'Monday - Friday: 7:00 AM - 3:00 PM',
      location: 'IT Center',
    },
  ];

  const emergencyContacts = [
    {
      title: 'School Emergency Line',
      phone: '(555) 123-9999',
      description:
        'For immediate safety concerns or emergencies during school hours',
    },
    {
      title: 'After-Hours Emergency',
      phone: '(555) 123-8888',
      description: 'For urgent matters outside of normal school hours',
    },
    {
      title: 'Crisis Counseling',
      phone: '(555) 123-7777',
      description:
        '24/7 mental health crisis support for students and families',
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: 'bg-primary text-white',
      secondary: 'bg-secondary text-white',
      success: 'bg-success text-white',
      warning: 'bg-warning text-gray-800',
      accent: 'bg-accent text-gray-800',
      'brand-ocean': 'bg-brand-ocean text-white',
    };
    return colorMap?.[color] || 'bg-primary text-white';
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent rounded-full px-4 py-2 mb-4">
            <Icon name="Phone" size={16} />
            <span className="text-sm font-medium">Contact Methods</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Multiple Ways to Reach Us
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We offer various contact methods to ensure you can reach the right
            department quickly and efficiently. Choose the option that works
            best for your needs.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className="bg-surface rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300 border border-border"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(
                    method?.color
                  )}`}
                >
                  <Icon name={method?.icon} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {method?.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {method?.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {method?.contacts?.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon
                      name={contact?.icon}
                      size={16}
                      color="var(--color-text-secondary)"
                    />
                    <div>
                      <span className="text-sm font-medium text-text-primary">
                        {contact?.type}:
                      </span>
                      <span className="text-sm text-text-secondary ml-2">
                        {contact?.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex items-start space-x-2">
                  <Icon
                    name="Clock"
                    size={14}
                    color="var(--color-text-secondary)"
                    className="mt-0.5"
                  />
                  <div>
                    <p className="text-xs font-medium text-text-primary mb-1">
                      Hours:
                    </p>
                    <p className="text-xs text-text-secondary whitespace-pre-line">
                      {method?.hours}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon
                    name="MapPin"
                    size={14}
                    color="var(--color-text-secondary)"
                  />
                  <p className="text-xs text-text-secondary">
                    {method?.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contacts */}
        <div className="bg-error/5 border border-error/20 rounded-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-error/10 text-error rounded-full px-4 py-2 mb-4">
              <Icon name="AlertTriangle" size={16} />
              <span className="text-sm font-medium">Emergency Contacts</span>
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Emergency & Crisis Support
            </h3>
            <p className="text-text-secondary">
              For urgent matters requiring immediate attention, use these
              dedicated emergency lines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {emergencyContacts?.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-error/10"
              >
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {contact?.title}
                </h4>
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="Phone" size={16} color="var(--color-error)" />
                  <span className="text-lg font-bold text-error">
                    {contact?.phone}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-4">
                  {contact?.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                  className="w-full border-error text-error hover:bg-error hover:text-white"
                >
                  Call Now
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-warning/10 border border-warning/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon
                name="Info"
                size={20}
                color="var(--color-warning)"
                className="mt-0.5"
              />
              <div>
                <h4 className="font-semibold text-warning mb-1">
                  Important Note
                </h4>
                <p className="text-sm text-text-secondary">
                  For life-threatening emergencies, always call 911 first. These
                  school emergency numbers are for school-related urgent matters
                  and crisis support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
