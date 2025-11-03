import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AchievementCard = ({ achievement }) => {
  const getAchievementIcon = (type) => {
    switch (type) {
      case 'academic':
        return 'BookOpen';
      case 'competition':
        return 'Trophy';
      case 'scholarship':
        return 'DollarSign';
      case 'college':
        return 'GraduationCap';
      case 'research':
        return 'Microscope';
      default:
        return 'Award';
    }
  };

  const getAchievementColor = (type) => {
    switch (type) {
      case 'academic':
        return 'text-primary bg-primary/10';
      case 'competition':
        return 'text-accent bg-accent/10';
      case 'scholarship':
        return 'text-success bg-success/10';
      case 'college':
        return 'text-secondary bg-secondary/10';
      case 'research':
        return 'text-brand-plum bg-brand-plum/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-border p-6 hover:shadow-brand transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={achievement?.studentPhoto}
              alt={achievement?.studentPhotoAlt}
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${getAchievementColor(
              achievement?.type
            )}`}
          >
            <Icon name={getAchievementIcon(achievement?.type)} size={12} />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-text-primary">
              {achievement?.studentName}
            </h4>
            <span className="text-xs text-text-secondary">
              {achievement?.date}
            </span>
          </div>

          <h5 className="font-medium text-primary mb-2">
            {achievement?.title}
          </h5>
          <p className="text-sm text-text-secondary mb-3">
            {achievement?.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getAchievementColor(
                  achievement?.type
                )}`}
              >
                {achievement?.category}
              </span>
              {achievement?.level && (
                <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded">
                  {achievement?.level}
                </span>
              )}
            </div>

            {achievement?.value && (
              <div className="text-right">
                <p className="text-sm font-semibold text-success">
                  {achievement?.value}
                </p>
                <p className="text-xs text-text-secondary">Value</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
