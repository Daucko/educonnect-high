import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NewsletterArchive = ({ newsletters = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const years = [
    ...new Set(
      newsletters.map((newsletter) => new Date(newsletter.date).getFullYear())
    ),
  ]?.sort((a, b) => b - a);

  const filteredNewsletters = newsletters?.filter((newsletter) => {
    const matchesSearch =
      newsletter?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      newsletter?.description
        ?.toLowerCase()
        ?.includes(searchTerm?.toLowerCase());
    const matchesYear =
      selectedYear === 'all' ||
      new Date(newsletter.date)?.getFullYear()?.toString() === selectedYear;
    return matchesSearch && matchesYear;
  });

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })?.format(new Date(date));
  };

  return (
    <div className="bg-white rounded-xl shadow-brand p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-text-primary">
          Newsletter Archive
        </h3>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Icon
              name="Search"
              size={16}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
            />
            <input
              type="text"
              placeholder="Search newsletters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e?.target?.value)}
              className="pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
          </div>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e?.target?.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="all">All Years</option>
            {years?.map((year) => (
              <option key={year} value={year?.toString()}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {filteredNewsletters?.length > 0 ? (
          filteredNewsletters?.map((newsletter) => (
            <article
              key={newsletter?.id}
              className="group border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                      {newsletter?.title}
                    </h4>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {newsletter?.edition}
                    </span>
                  </div>

                  <p className="text-text-secondary text-sm mb-3 line-clamp-2">
                    {newsletter?.description}
                  </p>

                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Calendar" size={12} />
                      <span>{formatDate(newsletter?.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="FileText" size={12} />
                      <span>{newsletter?.pages} pages</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Download" size={12} />
                      <span>{newsletter?.downloads} downloads</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Eye"
                    iconPosition="left"
                  >
                    Preview
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                  >
                    Download
                  </Button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-8">
            <Icon
              name="FileText"
              size={48}
              className="mx-auto text-text-secondary mb-4"
            />
            <h4 className="font-semibold text-text-primary mb-2">
              No newsletters found
            </h4>
            <p className="text-text-secondary">
              Try adjusting your search criteria
            </p>
          </div>
        )}
      </div>
      {filteredNewsletters?.length > 0 && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <p className="text-sm text-text-secondary">
              Showing {filteredNewsletters?.length} of {newsletters?.length}{' '}
              newsletters
            </p>
            <Button
              variant="outline"
              size="sm"
              iconName="Mail"
              iconPosition="left"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsletterArchive;
