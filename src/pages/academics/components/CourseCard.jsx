import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CourseCard = ({ course }) => {
  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'text-success bg-success/10';
      case 'Intermediate':
        return 'text-warning bg-warning/10';
      case 'Advanced':
        return 'text-error bg-error/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6 hover:shadow-brand transition-all duration-300 hover-lift">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h4 className="font-semibold text-text-primary">{course?.name}</h4>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                course?.difficulty
              )}`}
            >
              {course?.difficulty}
            </span>
          </div>
          <p className="text-sm text-text-secondary mb-3">{course?.code}</p>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Clock" size={16} color="var(--color-text-secondary)" />
          <span className="text-sm text-text-secondary">
            {course?.duration}
          </span>
        </div>
      </div>
      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
        {course?.description}
      </p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Icon
              name="BookOpen"
              size={16}
              color="var(--color-text-secondary)"
            />
            <span className="text-sm text-text-secondary">
              {course?.credits} Credits
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <Icon name="Users" size={16} color="var(--color-text-secondary)" />
            <span className="text-sm text-text-secondary">
              {course?.enrolled} Students
            </span>
          </div>
        </div>
      </div>
      {course?.prerequisites && course?.prerequisites?.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-text-secondary mb-1">Prerequisites:</p>
          <div className="flex flex-wrap gap-1">
            {course?.prerequisites?.map((prereq, index) => (
              <span key={index} className="px-2 py-1 bg-muted text-xs rounded">
                {prereq}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" className="flex-1">
          Course Details
        </Button>
        <Button variant="ghost" size="sm" iconName="Heart" className="px-3" />
      </div>
    </div>
  );
};

export default CourseCard;
