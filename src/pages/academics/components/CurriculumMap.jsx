import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CurriculumMap = () => {
  const [selectedGrade, setSelectedGrade] = useState('9');

  const curriculumData = {
    9: {
      title: 'Grade 9 - Foundation Year',
      description:
        'Building strong academic foundations across all core subjects',
      subjects: [
        {
          name: 'English Language Arts',
          courses: ['English 9', 'Creative Writing', 'Literature Analysis'],
          standards: [
            'Reading Comprehension',
            'Writing Skills',
            'Critical Thinking',
          ],
          icon: 'BookOpen',
        },
        {
          name: 'Mathematics',
          courses: ['Algebra I', 'Geometry Foundations', 'Problem Solving'],
          standards: [
            'Algebraic Thinking',
            'Geometric Reasoning',
            'Mathematical Practices',
          ],
          icon: 'Calculator',
        },
        {
          name: 'Science',
          courses: [
            'Physical Science',
            'Biology Foundations',
            'Scientific Method',
          ],
          standards: [
            'Scientific Inquiry',
            'Data Analysis',
            'Laboratory Skills',
          ],
          icon: 'Microscope',
        },
        {
          name: 'Social Studies',
          courses: ['World History', 'Geography', 'Civics Introduction'],
          standards: [
            'Historical Thinking',
            'Geographic Skills',
            'Civic Ideals',
          ],
          icon: 'Globe',
        },
      ],
    },
    10: {
      title: 'Grade 10 - Development Year',
      description: 'Expanding knowledge and developing specialized interests',
      subjects: [
        {
          name: 'English Language Arts',
          courses: ['English 10', 'World Literature', 'Research Methods'],
          standards: ['Advanced Reading', 'Research Skills', 'Communication'],
          icon: 'BookOpen',
        },
        {
          name: 'Mathematics',
          courses: ['Geometry', 'Algebra II', 'Statistics Introduction'],
          standards: ['Geometric Proofs', 'Advanced Algebra', 'Data Analysis'],
          icon: 'Calculator',
        },
        {
          name: 'Science',
          courses: ['Chemistry', 'Biology', 'Physics Introduction'],
          standards: ['Chemical Processes', 'Life Systems', 'Physical Laws'],
          icon: 'Microscope',
        },
        {
          name: 'Social Studies',
          courses: ['Modern History', 'Economics', 'Government'],
          standards: [
            'Historical Analysis',
            'Economic Thinking',
            'Political Systems',
          ],
          icon: 'Globe',
        },
      ],
    },
    11: {
      title: 'Grade 11 - Specialization Year',
      description: 'Advanced coursework with college preparation focus',
      subjects: [
        {
          name: 'English Language Arts',
          courses: [
            'AP English Language',
            'Advanced Composition',
            'Public Speaking',
          ],
          standards: [
            'College-Level Writing',
            'Rhetorical Analysis',
            'Presentation Skills',
          ],
          icon: 'BookOpen',
        },
        {
          name: 'Mathematics',
          courses: ['Pre-Calculus', 'AP Statistics', 'Trigonometry'],
          standards: [
            'Advanced Functions',
            'Statistical Analysis',
            'Mathematical Modeling',
          ],
          icon: 'Calculator',
        },
        {
          name: 'Science',
          courses: ['AP Chemistry', 'AP Biology', 'Physics'],
          standards: [
            'Advanced Chemistry',
            'Molecular Biology',
            'Mechanics & Waves',
          ],
          icon: 'Microscope',
        },
        {
          name: 'Social Studies',
          courses: ['AP US History', 'Psychology', 'Sociology'],
          standards: [
            'Historical Synthesis',
            'Behavioral Science',
            'Social Analysis',
          ],
          icon: 'Globe',
        },
      ],
    },
    12: {
      title: 'Grade 12 - Mastery Year',
      description: 'College-level coursework and career preparation',
      subjects: [
        {
          name: 'English Language Arts',
          courses: [
            'AP English Literature',
            'College Writing',
            'Media Studies',
          ],
          standards: [
            'Literary Analysis',
            'Academic Writing',
            'Media Literacy',
          ],
          icon: 'BookOpen',
        },
        {
          name: 'Mathematics',
          courses: ['AP Calculus', 'AP Statistics', 'Discrete Mathematics'],
          standards: [
            'Calculus Applications',
            'Advanced Statistics',
            'Mathematical Reasoning',
          ],
          icon: 'Calculator',
        },
        {
          name: 'Science',
          courses: ['AP Physics', 'Environmental Science', 'Research Methods'],
          standards: [
            'Advanced Physics',
            'Environmental Systems',
            'Scientific Research',
          ],
          icon: 'Microscope',
        },
        {
          name: 'Social Studies',
          courses: ['AP Government', 'International Relations', 'Philosophy'],
          standards: [
            'Political Analysis',
            'Global Perspectives',
            'Ethical Reasoning',
          ],
          icon: 'Globe',
        },
      ],
    },
  };

  const grades = ['9', '10', '11', '12'];

  return (
    <div className="bg-white rounded-xl shadow-brand p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Curriculum Progression Map
        </h3>
        <p className="text-text-secondary">
          Explore our comprehensive four-year academic journey designed to
          prepare students for college and career success.
        </p>
      </div>
      {/* Grade Selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        {grades?.map((grade) => (
          <Button
            key={grade}
            variant={selectedGrade === grade ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedGrade(grade)}
            className="min-w-[100px]"
          >
            Grade {grade}
          </Button>
        ))}
      </div>
      {/* Selected Grade Content */}
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h4 className="text-xl font-bold text-primary mb-2">
            {curriculumData?.[selectedGrade]?.title}
          </h4>
          <p className="text-text-secondary">
            {curriculumData?.[selectedGrade]?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {curriculumData?.[selectedGrade]?.subjects?.map((subject, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 hover:shadow-brand transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon
                    name={subject?.icon}
                    size={20}
                    color="var(--color-primary)"
                  />
                </div>
                <h5 className="font-semibold text-text-primary">
                  {subject?.name}
                </h5>
              </div>

              <div className="space-y-4">
                <div>
                  <h6 className="text-sm font-medium text-text-primary mb-2">
                    Available Courses:
                  </h6>
                  <div className="flex flex-wrap gap-1">
                    {subject?.courses?.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-2 py-1 bg-surface text-text-secondary text-xs rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h6 className="text-sm font-medium text-text-primary mb-2">
                    Learning Standards:
                  </h6>
                  <ul className="space-y-1">
                    {subject?.standards?.map((standard, standardIndex) => (
                      <li
                        key={standardIndex}
                        className="flex items-center space-x-2"
                      >
                        <Icon
                          name="CheckCircle"
                          size={12}
                          color="var(--color-success)"
                        />
                        <span className="text-xs text-text-secondary">
                          {standard}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progression Indicator */}
        <div className="mt-8 p-4 bg-surface rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-text-primary">
              Academic Progression
            </span>
            <span className="text-sm text-text-secondary">
              Grade {selectedGrade} of 12
            </span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${(parseInt(selectedGrade) - 8) * 25}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumMap;
