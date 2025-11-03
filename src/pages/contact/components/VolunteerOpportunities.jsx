import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const VolunteerOpportunities = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    availability: '',
    experience: '',
    backgroundCheck: false,
  });

  const volunteerCategories = [
    { value: '', label: 'All Categories' },
    { value: 'academic', label: 'Academic Support' },
    { value: 'events', label: 'Events & Activities' },
    { value: 'athletics', label: 'Athletics & Sports' },
    { value: 'arts', label: 'Arts & Culture' },
    { value: 'fundraising', label: 'Fundraising' },
    { value: 'maintenance', label: 'Campus Maintenance' },
    { value: 'mentoring', label: 'Student Mentoring' },
  ];

  const opportunities = [
    {
      id: 1,
      title: 'Classroom Assistant',
      category: 'academic',
      description:
        'Help teachers with classroom activities, grading, and student support during academic periods.',
      timeCommitment: '2-4 hours per week',
      requirements: [
        'Background check required',
        'High school diploma',
        'Patience with students',
      ],
      skills: ['Communication', 'Organization', 'Subject knowledge helpful'],
      coordinator: 'Ms. Sarah Johnson',
      email: 'volunteers@educonnecthigh.edu',
      urgency: 'high',
      spots: 8,
    },
    {
      id: 2,
      title: 'Event Planning Committee',
      category: 'events',
      description:
        'Organize and coordinate school events including dances, fundraisers, and community gatherings.',
      timeCommitment: '5-10 hours per month',
      requirements: [
        'Event planning experience preferred',
        'Creative mindset',
        'Team collaboration',
      ],
      skills: ['Project Management', 'Creativity', 'Communication'],
      coordinator: 'Mr. David Park',
      email: 'events@educonnecthigh.edu',
      urgency: 'medium',
      spots: 12,
    },
    {
      id: 3,
      title: 'Athletic Event Support',
      category: 'athletics',
      description:
        'Assist with game day operations, concessions, ticket sales, and crowd management.',
      timeCommitment: '3-5 hours per event',
      requirements: [
        'Flexible schedule',
        'Physical ability to stand/walk',
        'Friendly demeanor',
      ],
      skills: ['Customer Service', 'Cash Handling', 'Crowd Management'],
      coordinator: 'Coach Robert Kim',
      email: 'athletics@educonnecthigh.edu',
      urgency: 'high',
      spots: 15,
    },
    {
      id: 4,
      title: 'Library Volunteer',
      category: 'academic',
      description:
        'Help with book organization, student research assistance, and library program support.',
      timeCommitment: '2-3 hours per week',
      requirements: [
        'Love of reading',
        'Computer literacy',
        'Quiet work environment preference',
      ],
      skills: ['Organization', 'Research', 'Technology'],
      coordinator: 'Ms. Emily Chen',
      email: 'library@educonnecthigh.edu',
      urgency: 'low',
      spots: 6,
    },
    {
      id: 5,
      title: 'Arts Program Assistant',
      category: 'arts',
      description:
        'Support music, theater, and visual arts programs with setup, supervision, and instruction.',
      timeCommitment: '4-6 hours per week',
      requirements: [
        'Arts background preferred',
        'Creativity',
        'Patience with students',
      ],
      skills: ['Artistic Ability', 'Instruction', 'Setup/Cleanup'],
      coordinator: 'Ms. Lisa Williams',
      email: 'arts@educonnecthigh.edu',
      urgency: 'medium',
      spots: 10,
    },
    {
      id: 6,
      title: 'Fundraising Coordinator',
      category: 'fundraising',
      description:
        'Develop and execute fundraising campaigns to support school programs and activities.',
      timeCommitment: '6-8 hours per month',
      requirements: [
        'Sales/marketing experience',
        'Community connections',
        'Goal-oriented',
      ],
      skills: ['Sales', 'Marketing', 'Networking'],
      coordinator: 'Dr. Maria Santos',
      email: 'fundraising@educonnecthigh.edu',
      urgency: 'high',
      spots: 5,
    },
    {
      id: 7,
      title: 'Campus Beautification',
      category: 'maintenance',
      description:
        'Help maintain school grounds, gardens, and outdoor spaces for a welcoming environment.',
      timeCommitment: '3-4 hours per month',
      requirements: [
        'Physical ability for outdoor work',
        'Basic gardening knowledge',
        'Own transportation',
      ],
      skills: ['Gardening', 'Physical Labor', 'Attention to Detail'],
      coordinator: 'Mr. James Thompson',
      email: 'maintenance@educonnecthigh.edu',
      urgency: 'low',
      spots: 20,
    },
    {
      id: 8,
      title: 'Student Mentor',
      category: 'mentoring',
      description:
        'Provide one-on-one guidance and support to students needing academic or personal mentoring.',
      timeCommitment: '2 hours per week',
      requirements: [
        'Background check required',
        'College degree preferred',
        'Strong communication skills',
      ],
      skills: ['Mentoring', 'Active Listening', 'Problem Solving'],
      coordinator: 'Ms. Sarah Johnson',
      email: 'mentoring@educonnecthigh.edu',
      urgency: 'high',
      spots: 25,
    },
  ];

  const availabilityOptions = [
    {
      value: 'weekday-morning',
      label: 'Weekday Mornings (7:00 AM - 12:00 PM)',
    },
    {
      value: 'weekday-afternoon',
      label: 'Weekday Afternoons (12:00 PM - 4:00 PM)',
    },
    { value: 'weekday-evening', label: 'Weekday Evenings (4:00 PM - 8:00 PM)' },
    {
      value: 'weekend-morning',
      label: 'Weekend Mornings (8:00 AM - 12:00 PM)',
    },
    {
      value: 'weekend-afternoon',
      label: 'Weekend Afternoons (12:00 PM - 6:00 PM)',
    },
    { value: 'flexible', label: 'Flexible Schedule' },
  ];

  const filteredOpportunities = selectedCategory
    ? opportunities?.filter((opp) => opp?.category === selectedCategory)
    : opportunities;

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'text-error bg-error/10';
      case 'medium':
        return 'text-warning bg-warning/10';
      case 'low':
        return 'text-success bg-success/10';
      default:
        return 'text-text-secondary bg-surface';
    }
  };

  const getUrgencyText = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'Urgent Need';
      case 'medium':
        return 'Moderate Need';
      case 'low':
        return 'Ongoing Need';
      default:
        return 'Available';
    }
  };

  const handleInterestChange = (opportunityId, checked) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked
        ? [...prev?.interests, opportunityId]
        : prev?.interests?.filter((id) => id !== opportunityId),
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    alert(
      'Thank you for your interest in volunteering! We will contact you within 2-3 business days to discuss next steps and background check requirements.'
    );
    setShowSignupForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      interests: [],
      availability: '',
      experience: '',
      backgroundCheck: false,
    });
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success rounded-full px-4 py-2 mb-4">
            <Icon name="Heart" size={16} />
            <span className="text-sm font-medium">Volunteer Opportunities</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Join Our Volunteer Community
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Make a difference in students' lives by volunteering at EduConnect
            High. We offer various opportunities to match your skills,
            interests, and schedule.
          </p>
        </div>

        {/* Filter and Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
          <div className="flex items-center space-x-4">
            <Select
              placeholder="Filter by category"
              options={volunteerCategories}
              value={selectedCategory}
              onChange={setSelectedCategory}
              className="w-64"
            />
            <span className="text-sm text-text-secondary">
              {filteredOpportunities?.length} opportunities available
            </span>
          </div>

          <Button
            variant="default"
            iconName="UserPlus"
            iconPosition="left"
            onClick={() => setShowSignupForm(true)}
            className="bg-gradient-primary"
          >
            Volunteer Sign-Up
          </Button>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredOpportunities?.map((opportunity) => (
            <div
              key={opportunity?.id}
              className="bg-surface rounded-xl p-6 hover:shadow-brand-lg transition-all duration-300 border border-border"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-text-primary pr-2">
                  {opportunity?.title}
                </h3>
                <div className="flex flex-col items-end space-y-1">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${getUrgencyColor(
                      opportunity?.urgency
                    )}`}
                  >
                    {getUrgencyText(opportunity?.urgency)}
                  </span>
                  <span className="text-xs text-text-secondary">
                    {opportunity?.spots} spots
                  </span>
                </div>
              </div>

              <p className="text-sm text-text-secondary mb-4 line-clamp-3">
                {opportunity?.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} color="var(--color-primary)" />
                  <span className="text-sm text-text-primary font-medium">
                    Time Commitment:
                  </span>
                </div>
                <p className="text-sm text-text-secondary ml-6">
                  {opportunity?.timeCommitment}
                </p>

                <div className="flex items-center space-x-2">
                  <Icon
                    name="CheckCircle"
                    size={14}
                    color="var(--color-success)"
                  />
                  <span className="text-sm text-text-primary font-medium">
                    Requirements:
                  </span>
                </div>
                <ul className="text-sm text-text-secondary ml-6 space-y-1">
                  {opportunity?.requirements?.slice(0, 2)?.map((req, index) => (
                    <li key={index} className="flex items-start space-x-1">
                      <span className="text-success mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                  {opportunity?.requirements?.length > 2 && (
                    <li className="text-primary text-xs">
                      +{opportunity?.requirements?.length - 2} more requirements
                    </li>
                  )}
                </ul>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    name="User"
                    size={14}
                    color="var(--color-text-secondary)"
                  />
                  <span className="text-sm text-text-secondary">
                    Coordinator: {opportunity?.coordinator}
                  </span>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Mail"
                    className="flex-1 text-xs"
                  >
                    Contact
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Info"
                    className="flex-1 text-xs"
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Volunteer Sign-up Form Modal */}
        {showSignupForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-text-primary">
                    Volunteer Application
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSignupForm(false)}
                    iconName="X"
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData?.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e?.target?.value,
                      }))
                    }
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData?.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e?.target?.value,
                      }))
                    }
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData?.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e?.target?.value,
                      }))
                    }
                    required
                  />
                  <Select
                    label="Availability"
                    placeholder="Select your availability"
                    options={availabilityOptions}
                    value={formData?.availability}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, availability: value }))
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-3">
                    Volunteer Interests (Select all that apply)
                  </label>
                  <div className="grid md:grid-cols-2 gap-2">
                    {opportunities?.slice(0, 6)?.map((opportunity) => (
                      <Checkbox
                        key={opportunity?.id}
                        label={opportunity?.title}
                        checked={formData?.interests?.includes(opportunity?.id)}
                        onChange={(e) =>
                          handleInterestChange(
                            opportunity?.id,
                            e?.target?.checked
                          )
                        }
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    Relevant Experience (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about any relevant experience, skills, or why you want to volunteer..."
                    value={formData?.experience}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        experience: e?.target?.value,
                      }))
                    }
                    className="w-full px-4 py-3 border border-border rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </div>

                <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                  <Checkbox
                    label="I understand that a background check may be required for certain volunteer positions"
                    checked={formData?.backgroundCheck}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        backgroundCheck: e?.target?.checked,
                      }))
                    }
                    required
                  />
                  <p className="text-sm text-text-secondary mt-2 ml-6">
                    Background checks are required for positions involving
                    direct student contact or access to sensitive areas.
                  </p>
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowSignupForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="default"
                    iconName="Send"
                    iconPosition="right"
                    className="flex-1 bg-gradient-primary"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Additional Information */}
        <div className="bg-surface rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Why Volunteer with Us?
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Join a community of dedicated volunteers making a real impact on
              student success and school excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} color="var(--color-primary)" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                Make a Difference
              </h4>
              <p className="text-sm text-text-secondary">
                Directly impact student learning and development while building
                meaningful connections.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} color="var(--color-secondary)" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                Gain Experience
              </h4>
              <p className="text-sm text-text-secondary">
                Develop new skills, gain experience, and enhance your resume
                while giving back.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={32} color="var(--color-success)" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                Join Community
              </h4>
              <p className="text-sm text-text-secondary">
                Connect with like-minded individuals and become part of our
                school family.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerOpportunities;
