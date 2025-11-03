import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ApplicationProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'Submit Application',
      description:
        'Complete our online application form with student information, academic history, and personal statement.',
      icon: 'FileText',
      duration: '15-20 minutes',
      requirements: [
        'Student personal information',
        'Academic transcripts',
        'Personal statement (500 words)',
        'Emergency contact details',
      ],
    },
    {
      id: 2,
      title: 'Document Upload',
      description:
        'Upload required documents including transcripts, recommendations, and any additional materials.',
      icon: 'Upload',
      duration: '10-15 minutes',
      requirements: [
        'Official transcripts',
        '2 teacher recommendations',
        'Immunization records',
        'Birth certificate copy',
      ],
    },
    {
      id: 3,
      title: 'Assessment & Interview',
      description:
        'Participate in our assessment process and meet with our admissions team for a personal interview.',
      icon: 'Users',
      duration: '2-3 hours',
      requirements: [
        'Academic assessment test',
        'Student interview (30 min)',
        'Parent meeting (optional)',
        'Campus tour included',
      ],
    },
    {
      id: 4,
      title: 'Review & Decision',
      description:
        'Our admissions committee reviews your application and provides a decision within 2 weeks.',
      icon: 'CheckCircle',
      duration: '1-2 weeks',
      requirements: [
        'Application review',
        'Committee evaluation',
        'Decision notification',
        'Enrollment package sent',
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MapPin" size={16} />
            <span>Application Process</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple Steps to
            <span className="text-gradient-primary"> Join Our Community</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined admissions process is designed to be transparent and
            supportive, helping you every step of the way to becoming part of
            the EduConnect High family.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gray-200">
            <div
              className="h-full bg-gradient-primary transition-all duration-500"
              style={{ width: `${(activeStep / (steps?.length - 1)) * 100}%` }}
            ></div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps?.map((step, index) => (
              <div
                key={step?.id}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'transform -translate-y-2' : ''
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Card */}
                <div
                  className={`bg-white rounded-xl p-6 shadow-brand border-2 transition-all duration-300 ${
                    activeStep === index
                      ? 'border-primary shadow-brand-lg'
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        activeStep === index
                          ? 'bg-gradient-primary text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      <Icon name={step?.icon} size={24} />
                    </div>

                    <div
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        activeStep === index
                          ? 'bg-primary/10 text-primary'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      Step {step?.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step?.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step?.description}
                    </p>

                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Icon name="Clock" size={14} />
                      <span>{step?.duration}</span>
                    </div>
                  </div>

                  {/* Requirements (shown for active step) */}
                  {activeStep === index && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-scale-in">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">
                        Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {step?.requirements?.map((req, reqIndex) => (
                          <li
                            key={reqIndex}
                            className="flex items-center space-x-2 text-sm text-gray-600"
                          >
                            <Icon
                              name="Check"
                              size={12}
                              color="var(--color-success)"
                            />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Connection Line (Mobile) */}
                {index < steps?.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 mb-4">
                    <div className="w-0.5 h-8 bg-gray-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Start your application today and take the first step toward
              joining our vibrant learning community. Our admissions team is
              here to support you throughout the process.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
                className="bg-gradient-primary hover:opacity-90"
              >
                Start Application
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="hover:bg-primary hover:text-white hover:border-primary"
              >
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
