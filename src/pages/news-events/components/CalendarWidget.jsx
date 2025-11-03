import React, { useState } from 'react';

import Button from '../../../components/ui/Button';

const CalendarWidget = ({ events = [], onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const currentMonth = currentDate?.getMonth();
  const currentYear = currentDate?.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const firstDayWeekday = firstDayOfMonth?.getDay();
  const daysInMonth = lastDayOfMonth?.getDate();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const navigateMonth = (direction) => {
    setCurrentDate(new Date(currentYear, currentMonth + direction, 1));
  };

  const getEventsForDate = (date) => {
    const dateString = `${currentYear}-${String(currentMonth + 1)?.padStart(
      2,
      '0'
    )}-${String(date)?.padStart(2, '0')}`;
    return events?.filter((event) => event?.date?.startsWith(dateString));
  };

  const handleDateClick = (date) => {
    const clickedDate = new Date(currentYear, currentMonth, date);
    setSelectedDate(clickedDate);
    if (onDateSelect) {
      onDateSelect(clickedDate);
    }
  };

  const isToday = (date) => {
    return (
      today?.getDate() === date &&
      today?.getMonth() === currentMonth &&
      today?.getFullYear() === currentYear
    );
  };

  const isSelected = (date) => {
    return (
      selectedDate &&
      selectedDate?.getDate() === date &&
      selectedDate?.getMonth() === currentMonth &&
      selectedDate?.getFullYear() === currentYear
    );
  };

  const renderCalendarDays = () => {
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayWeekday; i++) {
      days?.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Days of the month
    for (let date = 1; date <= daysInMonth; date++) {
      const dayEvents = getEventsForDate(date);
      const hasEvents = dayEvents?.length > 0;

      days?.push(
        <button
          key={date}
          onClick={() => handleDateClick(date)}
          className={`
            h-10 w-full flex flex-col items-center justify-center text-sm font-medium rounded-lg transition-all duration-200
            ${
              isToday(date)
                ? 'bg-primary text-white shadow-sm'
                : isSelected(date)
                ? 'bg-primary/10 text-primary border border-primary'
                : hasEvents
                ? 'bg-accent/10 text-accent hover:bg-accent/20'
                : 'hover:bg-surface text-text-primary'
            }
          `}
        >
          <span>{date}</span>
          {hasEvents && (
            <div className="flex space-x-1 mt-1">
              {dayEvents?.slice(0, 3)?.map((_, index) => (
                <div
                  key={index}
                  className={`w-1 h-1 rounded-full ${
                    isToday(date) ? 'bg-white' : 'bg-accent'
                  }`}
                ></div>
              ))}
            </div>
          )}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-xl shadow-brand p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-text-primary">
          {monthNames?.[currentMonth]} {currentYear}
        </h3>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateMonth(-1)}
            iconName="ChevronLeft"
            className="p-2"
          />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigateMonth(1)}
            iconName="ChevronRight"
            className="p-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {weekDays?.map((day) => (
          <div key={day} className="h-8 flex items-center justify-center">
            <span className="text-xs font-medium text-text-secondary">
              {day}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
      {selectedDate && (
        <div className="mt-4 pt-4 border-t border-border">
          <h4 className="text-sm font-medium text-text-primary mb-2">
            Events on{' '}
            {selectedDate?.toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
            })}
          </h4>
          {getEventsForDate(selectedDate?.getDate())?.length > 0 ? (
            <div className="space-y-2">
              {getEventsForDate(selectedDate?.getDate())?.map(
                (event, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-2 bg-surface rounded-lg"
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${event?.category?.color
                        ?.replace('text-', 'bg-')
                        ?.replace('-800', '-500')}`}
                    ></div>
                    <span className="text-sm font-medium">{event?.title}</span>
                  </div>
                )
              )}
            </div>
          ) : (
            <p className="text-sm text-text-secondary">No events scheduled</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarWidget;
