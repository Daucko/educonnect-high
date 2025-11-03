import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FacultyCard = ({ faculty }) => {
  return (
    <div className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden hover-lift">
      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={faculty?.avatar}
                alt={faculty?.avatarAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {faculty?.isHeadOfDepartment && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Crown" size={12} color="white" />
              </div>
            )}
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-text-primary mb-1">
              {faculty?.name}
            </h4>
            <p className="text-sm text-primary font-medium mb-1">
              {faculty?.title}
            </p>
            <p className="text-sm text-text-secondary">{faculty?.department}</p>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2">
            <Icon
              name="GraduationCap"
              size={16}
              color="var(--color-text-secondary)"
            />
            <span className="text-sm text-text-secondary">
              {faculty?.education}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <Icon
              name="Calendar"
              size={16}
              color="var(--color-text-secondary)"
            />
            <span className="text-sm text-text-secondary">
              {faculty?.experience} years experience
            </span>
          </div>

          {faculty?.specializations && faculty?.specializations?.length > 0 && (
            <div>
              <p className="text-xs text-text-secondary mb-2">
                Specializations:
              </p>
              <div className="flex flex-wrap gap-1">
                {faculty?.specializations?.slice(0, 3)?.map((spec, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                  >
                    {spec}
                  </span>
                ))}
                {faculty?.specializations?.length > 3 && (
                  <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded">
                    +{faculty?.specializations?.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {faculty?.achievements && faculty?.achievements?.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Award" size={16} color="var(--color-accent)" />
              <span className="text-sm font-medium text-text-primary">
                Recent Achievement
              </span>
            </div>
            <p className="text-sm text-text-secondary">
              {faculty?.achievements?.[0]}
            </p>
          </div>
        )}

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Profile
          </Button>
          <Button variant="ghost" size="sm" iconName="Mail" className="px-3" />
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
