import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DepartmentCard = ({ department }) => {
  return (
    <div className="bg-white rounded-xl shadow-brand hover:shadow-brand-lg transition-all duration-300 overflow-hidden group hover-lift">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={department?.image}
          alt={department?.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 right-4">
          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Icon
              name={department?.icon}
              size={24}
              color="var(--color-primary)"
            />
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">
            {department?.name}
          </h3>
          <p className="text-white/90 text-sm">
            {department?.courses} Courses Available
          </p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-text-secondary mb-4 line-clamp-3">
          {department?.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Icon
                name="Users"
                size={16}
                color="var(--color-text-secondary)"
              />
              <span className="text-sm text-text-secondary">
                {department?.faculty} Faculty
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Award" size={16} color="var(--color-accent)" />
              <span className="text-sm text-text-secondary">
                {department?.achievements} Awards
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            View Courses
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Explore
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
