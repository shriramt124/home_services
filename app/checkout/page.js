'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/Icon';

export default function Checkout() {
  const [selectedDate, setSelectedDate] = useState(25);
  const [selectedTime, setSelectedTime] = useState('Afternoon');

  const dates = [24, 25, 26, 27, 28, 29];
  const days = ['TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />

      <div className="pt-20 pb-12 max-w-5xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

              <div className="flex gap-4">
                <div className="w-20 h-20 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    src="/image.png" 
                    alt="Service" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Premium Tap & Mixer Repair</h3>
                  <p className="text-sm text-gray-500">1x • Approx. 45 mins</p>
                  <p className="font-bold mt-1">$89.00</p>
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm text-gray-600 block mb-2">
                  Note for the professional (optional)
                </label>
                <textarea 
                  className="w-full h-24 p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 text-sm"
                  placeholder="E.g., The main shutoff valve is under the sink..."
                />
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="font-medium">$89.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxes & Fees</span>
                  <span className="font-medium">$12.50</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>$101.50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Schedule Service */}
          <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Icon name="calendar_today" /> Schedule Service
              </h2>
              <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                ⚡ ASAP Priority
              </span>
            </div>

            {/* Date Selection */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-3">Select Date</p>
              <div className="grid grid-cols-6 gap-2">
                {dates.map((date, index) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`py-3 rounded-xl text-center transition-all ${
                      selectedDate === date 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <div className="text-xs opacity-75">{days[index]}</div>
                    <div className="font-bold">{date}</div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-2">October 2023</p>
            </div>

            {/* Time Slots */}
            <div>
              <p className="text-sm text-gray-500 mb-3">Arrival Time Window</p>
              <div className="grid grid-cols-2 gap-3">
                {['Morning', 'Mid-day', 'Afternoon', 'Evening'].map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      selectedTime === slot 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className={`font-medium ${selectedTime === slot ? 'text-blue-700' : ''}`}>
                      {slot}
                    </div>
                    <div className="text-xs text-gray-500">
                      {slot === 'Morning' && '8:00 AM - 11:00 AM'}
                      {slot === 'Mid-day' && '11:00 AM - 2:00 PM'}
                      {slot === 'Afternoon' && '2:00 PM - 5:00 PM'}
                      {slot === 'Evening' && '5:00 PM - 8:00 PM'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button 
              className="w-full mt-10 bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-4 rounded-2xl text-lg shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
            >
              Continue to Payment →
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              🔒 Secure payment on next step
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}