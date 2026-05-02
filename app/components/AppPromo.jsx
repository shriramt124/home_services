import React from 'react';
import Button from './ui/Button';
import Icon from './ui/Icon';

export default function AppPromo() {
  return (
    <section className="max-w-[1200px] mx-auto px-8 py-20">
      <div className="bg-[#fcf8ff] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center border border-gray-100">
        {/* Left Content */}
        <div className="flex-1 p-12 md:p-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Book faster with the app
          </h2>
          <p className="text-gray-600 mb-8 max-w-sm">
            Manage bookings, track your professional in real-time, and get exclusive app-only offers.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="dark" size="md">
              <Icon name="apple" className="text-xl" />
              <div className="text-left leading-tight">
                 <div className="text-[10px] text-gray-300 font-normal">Download on the</div>
                 <div className="text-sm">App Store</div>
              </div>
            </Button>
            <Button variant="dark" size="md">
              <Icon name="play_arrow" className="text-xl" />
              <div className="text-left leading-tight">
                 <div className="text-[10px] text-gray-300 font-normal">GET IT ON</div>
                 <div className="text-sm">Google Play</div>
              </div>
            </Button>
          </div>
        </div>

        {/* Right Content (Phone Mockup) */}
        <div className="flex-1 w-full flex justify-end items-end pt-12 md:pt-20 pr-12 md:pr-20">
           <div className="w-[280px] h-[360px] bg-white rounded-t-3xl border-x-8 border-t-8 border-gray-800 shadow-2xl relative overflow-hidden flex flex-col gap-4 p-4">
              {/* Fake UI for Phone */}
              <div className="w-full h-32 bg-blue-50 rounded-xl"></div>
              <div className="w-full h-24 bg-gray-50 rounded-xl border border-gray-100"></div>
              <div className="w-full h-24 bg-gray-50 rounded-xl border border-gray-100"></div>
           </div>
        </div>
      </div>
    </section>
  );
}
