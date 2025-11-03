import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactHero = () => {
  return (
    <section className="relative bg-gradient-primary text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Icon name="MessageCircle" size={16} color="white" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold font-accent leading-tight">
              Connect with Our
              <span className="block text-accent">School Community</span>
            </h1>

            <p className="text-lg text-white/90 leading-relaxed max-w-xl">
              We're here to support your educational journey. Whether you're a
              current family, prospective student, or community member, we
              welcome your questions and look forward to connecting with you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                Schedule a Visit
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Call Us Now
              </Button>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Icon name="Clock" size={24} color="white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p className="text-white/80 text-sm">
                Monday - Friday
                <br />
                7:30 AM - 4:00 PM
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Icon name="MapPin" size={24} color="white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-white/80 text-sm">
                123 Education Blvd
                <br />
                Learning City, LC 12345
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center mb-4">
                <Icon name="Phone" size={24} color="white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-white/80 text-sm">
                Main: (555) 123-4567
                <br />
                Emergency: (555) 123-9999
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-warning rounded-lg flex items-center justify-center mb-4">
                <Icon name="Mail" size={24} color="white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-white/80 text-sm">
                info@educonnecthigh.edu
                <br />
                admissions@educonnecthigh.edu
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
