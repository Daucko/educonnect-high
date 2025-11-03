import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AccreditationCard = ({ accreditation }) => {
  return (
    <div className="bg-white rounded-lg border border-border p-6 hover:shadow-brand transition-all duration-300 text-center">
      <div className="mb-4">
        <div className="w-16 h-16 mx-auto mb-3 rounded-lg overflow-hidden bg-surface flex items-center justify-center">
          <Image
            src={accreditation?.logo}
            alt={accreditation?.logoAlt}
            className="w-12 h-12 object-contain"
          />
        </div>
        <h4 className="font-semibold text-text-primary mb-1">
          {accreditation?.name}
        </h4>
        <p className="text-sm text-text-secondary">{accreditation?.type}</p>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex items-center justify-center space-x-2">
          <Icon name="Calendar" size={16} color="var(--color-text-secondary)" />
          <span className="text-sm text-text-secondary">
            Valid until {accreditation?.validUntil}
          </span>
        </div>

        {accreditation?.rating && (
          <div className="flex items-center justify-center space-x-2">
            <Icon name="Star" size={16} color="var(--color-accent)" />
            <span className="text-sm font-medium text-accent">
              {accreditation?.rating}
            </span>
          </div>
        )}
      </div>
      <p className="text-xs text-text-secondary mb-4">
        {accreditation?.description}
      </p>
      <div className="flex items-center justify-center space-x-1">
        <Icon name="Shield" size={16} color="var(--color-success)" />
        <span className="text-sm font-medium text-success">Verified</span>
      </div>
    </div>
  );
};

export default AccreditationCard;
