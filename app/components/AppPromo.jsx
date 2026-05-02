import React from 'react';
import Button from './ui/Button';
import Icon from './ui/Icon';

export default function AppPromo() {
  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-20">
      <div className="bg-[#fcf8ff] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center border border-gray-100">
        {/* Left Content */}
        <div className="flex-1 p-6 md:p-20 text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
            Book faster with the app
          </h2>
          <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 max-w-sm mx-auto md:mx-0">
            Manage bookings, track your professional in real-time, and get exclusive app-only offers.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-4">
            <Button variant="dark" size="sm" className="md:px-6 md:py-2.5 px-3 py-2">
              <Icon name="apple" className="text-lg md:text-xl" />
              <div className="text-left leading-tight">
                 <div className="text-[8px] md:text-[10px] text-gray-300 font-normal">Download on the</div>
                 <div className="text-xs md:text-sm">App Store</div>
              </div>
            </Button>
            <Button variant="dark" size="sm" className="md:px-6 md:py-2.5 px-3 py-2">
              <Icon name="play_arrow" className="text-lg md:text-xl" />
              <div className="text-left leading-tight">
                 <div className="text-[8px] md:text-[10px] text-gray-300 font-normal">GET IT ON</div>
                 <div className="text-xs md:text-sm">Google Play</div>
              </div>
            </Button>
          </div>
        </div>

        {/* Right Content (Phone Mockup) */}
        <div className="flex-1 w-full flex justify-center md:justify-end items-end pt-4 md:pt-20 pr-0 md:pr-20">
           <div className="w-[200px] md:w-[280px] h-[260px] md:h-[360px] bg-white rounded-t-3xl border-x-[6px] md:border-x-8 border-t-[6px] md:border-t-8 border-gray-800 shadow-2xl relative overflow-hidden flex flex-col gap-3 md:gap-4 p-3 md:p-4">
              {/* Fake UI for Phone */}
              <div className="w-full h-20 md:h-32 bg-blue-50 rounded-xl"></div>
              <div className="w-full h-16 md:h-24 bg-gray-50 rounded-xl border border-gray-100"></div>
              <div className="w-full h-16 md:h-24 bg-gray-50 rounded-xl border border-gray-100"></div>
           </div>
        </div>
      </div>
    </section>
  );
}
