import React from 'react';
import Icon from '../../../components/AppIcon';

const FilterTabs = ({
  categories = [],
  activeCategory,
  onCategoryChange,
  showCount = true,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`
            flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${
              activeCategory === category?.id
                ? `${category?.color} shadow-sm`
                : 'bg-surface text-text-secondary hover:bg-border hover:text-text-primary'
            }
          `}
        >
          {category?.icon && (
            <Icon
              name={category?.icon}
              size={16}
              className={
                activeCategory === category?.id
                  ? 'text-current'
                  : 'text-text-secondary'
              }
            />
          )}
          <span>{category?.name}</span>
          {showCount && category?.count !== undefined && (
            <span
              className={`
              px-2 py-0.5 rounded-full text-xs font-medium
              ${
                activeCategory === category?.id
                  ? 'bg-white/20 text-current'
                  : 'bg-text-secondary/10 text-text-secondary'
              }
            `}
            >
              {category?.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
