import React from 'react';
import Icon from './ui/Icon';

export default function DifferenceSection() {
  const points = [
    {
      icon: 'shield',
      title: '100% Secure & Trusted',
      description: 'Every booking is protected by our comprehensive insurance guarantee and secure payment system.',
    },
    {
      icon: 'military_tech',
      title: 'Vetted Professionals',
      description: 'We run rigorous background checks and continuous training for all our service partners.',
    },
    {
      icon: 'workspace_premium',
      title: 'Luxury Quality Standards',
      description: 'Experience boutique-level service quality in the comfort of your own home, every single time.',
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Urban Company Difference</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#fcf8ff] text-primary rounded-full flex items-center justify-center mb-6">
                <Icon name={point.icon} className="text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[280px]">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
