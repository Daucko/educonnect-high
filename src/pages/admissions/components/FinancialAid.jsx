import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FinancialAid = () => {
  const [calculatorData, setCalculatorData] = useState({
    tuition: 25000,
    familyIncome: '',
    siblings: 0,
    extracurriculars: 0,
  });

  const [estimatedAid, setEstimatedAid] = useState(null);

  const scholarshipPrograms = [
    {
      id: 1,
      name: 'Academic Excellence Scholarship',
      amount: '$5,000 - $15,000',
      description:
        'Merit-based scholarship for students with outstanding academic performance and standardized test scores.',
      icon: 'Award',
      criteria: [
        'GPA of 3.7 or higher',
        'SAT score of 1300+ or ACT 28+',
        'Strong extracurricular involvement',
        'Leadership experience',
      ],
      renewable: true,
    },
    {
      id: 2,
      name: 'Community Leadership Grant',
      amount: '$3,000 - $8,000',
      description:
        'Recognizing students who have demonstrated exceptional leadership and community service commitment.',
      icon: 'Users',
      criteria: [
        '200+ hours of community service',
        'Leadership roles in school/community',
        'Strong recommendation letters',
        'Essay on community impact',
      ],
      renewable: true,
    },
    {
      id: 3,
      name: 'STEM Innovation Award',
      amount: '$4,000 - $10,000',
      description:
        'Supporting students pursuing science, technology, engineering, and mathematics with demonstrated innovation.',
      icon: 'Lightbulb',
      criteria: [
        'Strong performance in STEM subjects',
        'Participation in science fairs/competitions',
        'STEM-related projects or research',
        'Intent to pursue STEM career',
      ],
      renewable: true,
    },
    {
      id: 4,
      name: 'Arts & Creative Expression Scholarship',
      amount: '$2,500 - $7,500',
      description:
        'Celebrating students with exceptional talent and dedication in visual arts, music, theater, or creative writing.',
      icon: 'Palette',
      criteria: [
        'Portfolio or audition submission',
        'Participation in arts programs',
        'Recognition in arts competitions',
        'Commitment to arts education',
      ],
      renewable: true,
    },
    {
      id: 5,
      name: 'Need-Based Financial Aid',
      amount: 'Up to $20,000',
      description:
        "Income-based assistance to ensure that financial circumstances don't prevent access to quality education.",
      icon: 'Heart',
      criteria: [
        'Demonstrated financial need',
        'FAFSA completion required',
        'Family income documentation',
        'Academic good standing',
      ],
      renewable: true,
    },
  ];

  const calculateAid = () => {
    const income = parseInt(calculatorData?.familyIncome) || 0;
    const siblings = parseInt(calculatorData?.siblings) || 0;
    const extracurriculars = parseInt(calculatorData?.extracurriculars) || 0;

    let baseAid = 0;

    // Income-based calculation
    if (income < 50000) baseAid = 15000;
    else if (income < 75000) baseAid = 10000;
    else if (income < 100000) baseAid = 7000;
    else if (income < 150000) baseAid = 4000;
    else baseAid = 2000;

    // Adjustments
    const siblingAdjustment = siblings * 1000;
    const activityBonus = Math.min(extracurriculars * 500, 2000);

    const totalAid = Math.min(
      baseAid + siblingAdjustment + activityBonus,
      20000
    );

    setEstimatedAid({
      needBased: baseAid,
      siblingAdjustment,
      activityBonus,
      total: totalAid,
      netCost: calculatorData?.tuition - totalAid,
    });
  };

  const handleInputChange = (field, value) => {
    setCalculatorData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="DollarSign" size={16} />
            <span>Financial Aid & Scholarships</span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Making Education
            <span className="text-gradient-primary"> Accessible to All</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that financial circumstances should never be a barrier to
            excellent education. Explore our comprehensive financial aid
            programs and scholarship opportunities designed to support your
            family.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Financial Aid Calculator */}
          <div className="bg-white rounded-2xl p-8 shadow-brand-lg">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Financial Aid Calculator
              </h3>
              <p className="text-gray-600">
                Get an estimate of your potential financial aid package based on
                your family's circumstances.
              </p>
            </div>

            <div className="space-y-6">
              <Input
                label="Annual Family Income"
                type="number"
                placeholder="Enter annual income"
                value={calculatorData?.familyIncome}
                onChange={(e) =>
                  handleInputChange('familyIncome', e?.target?.value)
                }
                description="Gross household income before taxes"
              />

              <Input
                label="Number of Siblings in College"
                type="number"
                placeholder="0"
                value={calculatorData?.siblings}
                onChange={(e) =>
                  handleInputChange('siblings', e?.target?.value)
                }
                description="Siblings currently enrolled in college"
              />

              <Input
                label="Extracurricular Activities"
                type="number"
                placeholder="0"
                value={calculatorData?.extracurriculars}
                onChange={(e) =>
                  handleInputChange('extracurriculars', e?.target?.value)
                }
                description="Number of significant activities or leadership roles"
              />

              <Button
                variant="default"
                fullWidth
                onClick={calculateAid}
                iconName="Calculator"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90"
              >
                Calculate Estimated Aid
              </Button>

              {estimatedAid && (
                <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl animate-scale-in">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Your Estimated Financial Aid Package
                  </h4>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Need-Based Aid:</span>
                      <span className="font-semibold text-gray-900">
                        ${estimatedAid?.needBased?.toLocaleString()}
                      </span>
                    </div>

                    {estimatedAid?.siblingAdjustment > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">
                          Sibling Adjustment:
                        </span>
                        <span className="font-semibold text-success">
                          +${estimatedAid?.siblingAdjustment?.toLocaleString()}
                        </span>
                      </div>
                    )}

                    {estimatedAid?.activityBonus > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Activity Bonus:</span>
                        <span className="font-semibold text-success">
                          +${estimatedAid?.activityBonus?.toLocaleString()}
                        </span>
                      </div>
                    )}

                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between items-center text-lg">
                        <span className="font-semibold text-gray-900">
                          Total Estimated Aid:
                        </span>
                        <span className="font-bold text-primary">
                          ${estimatedAid?.total?.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-600">
                          Estimated Net Cost:
                        </span>
                        <span className="font-semibold text-gray-900">
                          ${estimatedAid?.netCost?.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-white/50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <Icon name="Info" size={14} className="inline mr-1" />
                      This is an estimate only. Actual aid may vary based on
                      complete financial review.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Key Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-brand">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Financial Aid Statistics
                  </h3>
                  <p className="text-gray-600">
                    Our commitment to accessibility
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-gray-600">
                    Students Receive Aid
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">$2.4M</div>
                  <div className="text-sm text-gray-600">Total Aid Awarded</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">$8,500</div>
                  <div className="text-sm text-gray-600">
                    Average Aid Package
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">
                    Need-Based Coverage
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-brand">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Important Deadlines
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon
                    name="Calendar"
                    size={20}
                    color="var(--color-primary)"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      FAFSA Priority Deadline
                    </div>
                    <div className="text-sm text-gray-600">March 1, 2025</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon name="Award" size={20} color="var(--color-primary)" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Scholarship Applications
                    </div>
                    <div className="text-sm text-gray-600">
                      February 15, 2025
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Icon
                    name="FileText"
                    size={20}
                    color="var(--color-primary)"
                  />
                  <div>
                    <div className="font-medium text-gray-900">
                      Document Submission
                    </div>
                    <div className="text-sm text-gray-600">April 1, 2025</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-brand">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Payment Options
              </h3>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="var(--color-success)" />
                  <span className="text-gray-700">
                    Monthly payment plans available
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="var(--color-success)" />
                  <span className="text-gray-700">
                    Sibling discounts for multiple students
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="var(--color-success)" />
                  <span className="text-gray-700">
                    Work-study opportunities available
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" size={16} color="var(--color-success)" />
                  <span className="text-gray-700">
                    Emergency financial assistance fund
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scholarship Programs */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Scholarship Opportunities
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer various merit-based and need-based scholarships to
              recognize achievement and support deserving students.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {scholarshipPrograms?.map((scholarship) => (
              <div
                key={scholarship?.id}
                className="bg-white rounded-xl p-6 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover-lift"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Icon name={scholarship?.icon} size={24} color="white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {scholarship?.name}
                    </h4>
                    <div className="text-lg font-bold text-primary">
                      {scholarship?.amount}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {scholarship?.description}
                </p>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-900 mb-2">
                    Eligibility Criteria:
                  </h5>
                  <ul className="space-y-1">
                    {scholarship?.criteria?.map((criterion, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 text-sm text-gray-600"
                      >
                        <Icon
                          name="Check"
                          size={12}
                          color="var(--color-success)"
                          className="mt-0.5 flex-shrink-0"
                        />
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {scholarship?.renewable && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon
                      name="RotateCcw"
                      size={14}
                      color="var(--color-success)"
                    />
                    <span className="text-sm text-success font-medium">
                      Renewable annually
                    </span>
                  </div>
                )}

                <Button
                  variant="outline"
                  fullWidth
                  iconName="ExternalLink"
                  iconPosition="right"
                  className="hover:bg-primary hover:text-white hover:border-primary"
                >
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-brand-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help with Financial Planning?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our financial aid counselors are here to help you navigate the
              process and find the best options for your family. Schedule a
              consultation to discuss your specific needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="bg-gradient-primary hover:opacity-90"
              >
                Schedule Consultation
              </Button>

              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="hover:bg-primary hover:text-white hover:border-primary"
              >
                Download Aid Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAid;
