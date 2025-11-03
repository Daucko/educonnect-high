import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AnnouncementBanner = ({ announcements = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible || announcements?.length === 0) return null;

  const currentAnnouncement = announcements?.[currentIndex];

  const nextAnnouncement = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements?.length);
  };

  const prevAnnouncement = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + announcements?.length) % announcements?.length
    );
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'medium':
        return 'bg-amber-50 border-amber-200 text-amber-800';
      case 'low':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return 'AlertTriangle';
      case 'medium':
        return 'Info';
      case 'low':
        return 'Bell';
      default:
        return 'Bell';
    }
  };

  return (
    <div
      className={`relative border rounded-xl p-4 ${getPriorityColor(
        currentAnnouncement?.priority
      )}`}
    >
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <Icon
            name={getPriorityIcon(currentAnnouncement?.priority)}
            size={20}
            className="mt-0.5"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-semibold text-sm">
              {currentAnnouncement?.title}
            </h3>
            <span className="px-2 py-1 bg-white/50 rounded text-xs font-medium">
              {currentAnnouncement?.priority?.toUpperCase()}
            </span>
          </div>

          <p className="text-sm mb-2 line-clamp-2">
            {currentAnnouncement?.message}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs">
              <span>By {currentAnnouncement?.author}</span>
              <span>
                {new Date(currentAnnouncement.date)?.toLocaleDateString()}
              </span>
            </div>

            {announcements?.length > 1 && (
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevAnnouncement}
                  iconName="ChevronLeft"
                  className="p-1 h-6 w-6"
                />
                <span className="text-xs font-medium">
                  {currentIndex + 1} / {announcements?.length}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextAnnouncement}
                  iconName="ChevronRight"
                  className="p-1 h-6 w-6"
                />
              </div>
            )}
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          iconName="X"
          className="p-1 h-6 w-6 opacity-60 hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default AnnouncementBanner;
