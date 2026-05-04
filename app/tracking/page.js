'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Icon from '../components/ui/Icon';
import Link from 'next/link';

export default function Tracking() {
  return (
    <div className="bg-[#f8f9fa] min-h-screen">
      <Navbar />

      <div className="flex pt-20">
        {/* Sidebar */}
        <div className="hidden md:block w-64 bg-white border-r border-gray-100 min-h-[calc(100vh-5rem)] p-6 fixed">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">AJ</div>
            <div>
              <p className="font-semibold">Alex Johnson</p>
              <p className="text-xs text-emerald-600">Premium Member</p>
            </div>
          </div>

          <nav className="space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl text-gray-700">
              <Icon name="dashboard" /> Dashboard
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-2xl font-medium">
              <Icon name="event" /> My Bookings
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl text-gray-700">
              <Icon name="payments" /> Payments
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl text-gray-700">
              <Icon name="card_membership" /> Plus Membership
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl text-gray-700">
              <Icon name="settings" /> Settings
            </Link>
          </nav>

          <div className="absolute bottom-8 left-6 right-6 space-y-6">
            <button className="w-full bg-blue-600 text-white py-3 rounded-2xl font-medium">
              + Book New Service
            </button>
            
            <div className="text-xs text-gray-400 space-y-2">
              <a href="#" className="block hover:text-gray-600">Support</a>
              <a href="#" className="block hover:text-gray-600">Logout</a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-64 p-6 md:p-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-1">Deep Home Cleaning</h1>
            <p className="text-gray-500">Today, 10:00 AM - 2:00 PM</p>

            {/* Status Banner */}
            <div className="mt-6 bg-emerald-100 text-emerald-700 px-5 py-2.5 rounded-2xl inline-flex items-center gap-2 font-medium">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              In Progress
            </div>

            <div className="grid lg:grid-cols-12 gap-8 mt-8">
              {/* Left - Main Info */}
              <div className="lg:col-span-7 space-y-8">
                {/* Professional Card */}
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-2xl overflow-hidden">
                      👨‍🔧
                    </div>
                    <div>
                      <p className="font-semibold text-lg">David M.</p>
                      <p className="text-sm text-gray-500">Senior Cleaning Specialist</p>
                      <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                        ★★★★☆ <span className="text-gray-500 text-xs">(142 jobs completed)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 bg-white border border-gray-300 py-3 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                      📞 Call
                    </button>
                    <button className="flex-1 bg-white border border-gray-300 py-3 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-gray-50">
                      💬 Message
                    </button>
                  </div>
                </div>

                {/* Safety Code */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-emerald-600">🛡️</span>
                    <span className="font-semibold text-emerald-700">SAFETY FIRST</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Share this code with David when he arrives to start the service.</p>
                  
                  <div className="bg-gray-900 text-white text-5xl font-mono tracking-widest text-center py-6 rounded-2xl">
                    4829
                  </div>
                </div>

                {/* Job Status Timeline */}
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                  <h3 className="font-semibold mb-5">Job Status</h3>
                  <div className="space-y-6 relative pl-8 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
                    {[
                      { status: "Booking Confirmed", time: "8:00 AM", done: true },
                      { status: "Professional Assigned", time: "8:15 AM", done: true },
                      { status: "On the way", time: "9:45 AM", done: true },
                      { status: "Service Started", time: "10:05 AM", done: false },
                    ].map((step, i) => (
                      <div key={i} className="relative flex items-start gap-4">
                        <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border-2 ${step.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-300'}`}>
                          {step.done ? '✓' : ''}
                        </div>
                        <div>
                          <p className={`font-medium ${step.done ? 'text-gray-900' : 'text-gray-400'}`}>{step.status}</p>
                          <p className="text-xs text-gray-500">{step.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Map & Details */}
              <div className="lg:col-span-5">
                <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-8">
                  <div className="bg-gray-200 h-64 rounded-2xl mb-6 flex items-center justify-center text-gray-500">
                    📍 Live Map (Tracking Professional)
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Estimated Arrival</span>
                      <span className="font-medium">10 - 15 mins</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Service Duration</span>
                      <span className="font-medium">4 hours</span>
                    </div>
                  </div>

                  <button className="w-full mt-8 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-2xl transition">
                    Cancel Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Footer for Tracking Page */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 UrbanHome Services Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-700">Privacy Policy</a>
              <a href="#" className="hover:text-gray-700">Terms of Service</a>
              <a href="#" className="hover:text-gray-700">Contact Us</a>
              <a href="#" className="hover:text-gray-700">Careers</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}