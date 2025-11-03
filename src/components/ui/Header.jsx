import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Academics', path: '/academics', icon: 'BookOpen' },
    { name: 'Student Life', path: '/student-life', icon: 'Users' },
    { name: 'Admissions', path: '/admissions', icon: 'GraduationCap' },
    { name: 'News & Events', path: '/news-events', icon: 'Calendar' },
  ];

  const secondaryItems = [{ name: 'Contact', path: '/contact', icon: 'Phone' }];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <Link
      to="/homepage"
      className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
    >
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-brand">
          <Icon
            name="GraduationCap"
            size={24}
            color="white"
            strokeWidth={2.5}
          />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
          <Icon name="Sparkles" size={10} color="white" strokeWidth={3} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gradient-primary font-accent">
          EduConnect
        </span>
        <span className="text-sm font-medium text-text-secondary -mt-1">
          High School
        </span>
      </div>
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-brand border-b border-border'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-surface ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/5 shadow-sm'
                    : 'text-text-primary hover:text-primary'
                }`}
              >
                <Icon
                  name={item?.icon}
                  size={16}
                  color={
                    isActivePath(item?.path)
                      ? 'var(--color-primary)'
                      : 'currentColor'
                  }
                />
                <span>{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/contact"
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-surface ${
                isActivePath('/contact')
                  ? 'text-primary bg-primary/5'
                  : 'text-text-secondary hover:text-primary'
              }`}
            >
              <Icon name="Phone" size={16} />
              <span>Contact</span>
            </Link>

            <div className="w-px h-6 bg-border"></div>

            <Button
              variant="outline"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="hover:bg-primary hover:text-white hover:border-primary"
            >
              Schedule Tour
            </Button>

            <Button
              variant="default"
              size="sm"
              iconName="UserPlus"
              iconPosition="left"
              className="bg-gradient-primary hover:opacity-90"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMobileMenu}
              className="p-2"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'X' : 'Menu'}
                size={24}
                color="var(--color-text-primary)"
              />
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-brand-lg">
          <div className="px-4 py-3 space-y-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/5 shadow-sm'
                    : 'text-text-primary hover:bg-surface hover:text-primary'
                }`}
              >
                <Icon
                  name={item?.icon}
                  size={20}
                  color={
                    isActivePath(item?.path)
                      ? 'var(--color-primary)'
                      : 'currentColor'
                  }
                />
                <span>{item?.name}</span>
              </Link>
            ))}

            {secondaryItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'text-primary bg-primary/5 shadow-sm'
                    : 'text-text-primary hover:bg-surface hover:text-primary'
                }`}
              >
                <Icon
                  name={item?.icon}
                  size={20}
                  color={
                    isActivePath(item?.path)
                      ? 'var(--color-primary)'
                      : 'currentColor'
                  }
                />
                <span>{item?.name}</span>
              </Link>
            ))}

            <div className="pt-3 mt-3 border-t border-border space-y-2">
              <Button
                variant="outline"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                onClick={closeMobileMenu}
                className="justify-center"
              >
                Schedule Tour
              </Button>

              <Button
                variant="default"
                fullWidth
                iconName="UserPlus"
                iconPosition="left"
                onClick={closeMobileMenu}
                className="justify-center bg-gradient-primary"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
