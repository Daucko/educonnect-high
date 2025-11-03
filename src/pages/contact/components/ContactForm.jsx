import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    relationship: '',
    subject: '',
    message: '',
    preferredContact: '',
    urgency: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const relationshipOptions = [
    { value: 'current-parent', label: 'Current Parent/Guardian' },
    { value: 'prospective-parent', label: 'Prospective Parent/Guardian' },
    { value: 'current-student', label: 'Current Student' },
    { value: 'prospective-student', label: 'Prospective Student' },
    { value: 'alumni', label: 'Alumni' },
    { value: 'community-member', label: 'Community Member' },
    { value: 'media', label: 'Media/Press' },
    { value: 'vendor', label: 'Vendor/Partner' },
    { value: 'other', label: 'Other' },
  ];

  const subjectOptions = [
    { value: 'admissions', label: 'Admissions & Enrollment' },
    { value: 'academics', label: 'Academic Programs' },
    { value: 'student-life', label: 'Student Life & Activities' },
    { value: 'athletics', label: 'Athletics & Sports' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'counseling', label: 'Counseling Services' },
    { value: 'special-needs', label: 'Special Needs Support' },
    { value: 'technology', label: 'Technology Support' },
    { value: 'volunteer', label: 'Volunteer Opportunities' },
    { value: 'complaint', label: 'Concern or Complaint' },
    { value: 'compliment', label: 'Compliment or Praise' },
    { value: 'general', label: 'General Inquiry' },
  ];

  const contactPreferenceOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'text', label: 'Text Message' },
    { value: 'no-preference', label: 'No Preference' },
  ];

  const urgencyOptions = [
    { value: 'low', label: 'Low - Response within 3-5 business days' },
    { value: 'medium', label: 'Medium - Response within 1-2 business days' },
    { value: 'high', label: 'High - Response within 24 hours' },
    { value: 'urgent', label: 'Urgent - Response within 4 hours' },
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.firstName?.trim())
      newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim())
      newErrors.lastName = 'Last name is required';
    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData?.relationship)
      newErrors.relationship = 'Please select your relationship to the school';
    if (!formData?.subject) newErrors.subject = 'Please select a subject';
    if (!formData?.message?.trim()) newErrors.message = 'Message is required';
    if (formData?.message?.trim()?.length < 10)
      newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(
        'Thank you for your message! We will respond within the timeframe you selected.'
      );
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        relationship: '',
        subject: '',
        message: '',
        preferredContact: '',
        urgency: '',
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Icon name="MessageSquare" size={16} />
            <span className="text-sm font-medium">Contact Form</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you as soon as
            possible. For urgent matters, please call our main office directly.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-brand-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                value={formData?.firstName}
                onChange={(e) =>
                  handleInputChange('firstName', e?.target?.value)
                }
                error={errors?.firstName}
                required
              />
              <Input
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                value={formData?.lastName}
                onChange={(e) =>
                  handleInputChange('lastName', e?.target?.value)
                }
                error={errors?.lastName}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@example.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="(555) 123-4567"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                description="Optional - for phone contact preference"
              />
            </div>

            {/* Relationship and Subject */}
            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Your Relationship to School"
                placeholder="Select your relationship"
                options={relationshipOptions}
                value={formData?.relationship}
                onChange={(value) => handleInputChange('relationship', value)}
                error={errors?.relationship}
                required
              />
              <Select
                label="Subject"
                placeholder="Select a subject"
                options={subjectOptions}
                value={formData?.subject}
                onChange={(value) => handleInputChange('subject', value)}
                error={errors?.subject}
                required
                searchable
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">
                Message <span className="text-error">*</span>
              </label>
              <textarea
                rows={6}
                placeholder="Please provide details about your inquiry..."
                value={formData?.message}
                onChange={(e) => handleInputChange('message', e?.target?.value)}
                className={`w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors ${
                  errors?.message ? 'border-error' : 'border-border'
                }`}
              />
              {errors?.message && (
                <p className="mt-1 text-sm text-error">{errors?.message}</p>
              )}
              <p className="mt-1 text-sm text-text-secondary">
                Minimum 10 characters. Current: {formData?.message?.length}
              </p>
            </div>

            {/* Contact Preferences */}
            <div className="grid md:grid-cols-2 gap-6">
              <Select
                label="Preferred Contact Method"
                placeholder="How would you like us to respond?"
                options={contactPreferenceOptions}
                value={formData?.preferredContact}
                onChange={(value) =>
                  handleInputChange('preferredContact', value)
                }
                description="We'll use this method for our response"
              />
              <Select
                label="Response Urgency"
                placeholder="How quickly do you need a response?"
                options={urgencyOptions}
                value={formData?.urgency}
                onChange={(value) => handleInputChange('urgency', value)}
                description="Helps us prioritize your inquiry"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="text-sm text-text-secondary">
                  <Icon name="Shield" size={16} className="inline mr-1" />
                  Your information is secure and will only be used to respond to
                  your inquiry.
                </div>
                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  loading={isSubmitting}
                  iconName="Send"
                  iconPosition="right"
                  className="bg-gradient-primary"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
