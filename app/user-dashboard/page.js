'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/Icon';
import Link from 'next/link';

export default function Dashboard() {
  const upcoming = [
    { title: "Deep Home Cleaning", date: "Friday, Oct 12 • 10:00 AM", icon: "cleaning_services" },
    { title: "AC Servicing", date: "Mon, Oct 15 • 3:30 PM", icon: "ac_unit" },
  ];

  const recentHistory = [
    { 
      title: "Bathroom Deep Cleaning", 
      date: "Sept 28, 2024 • Completed", 
      amount: "$85.00",
      icon: "bathtub"
    },
    { 
      title: "Appliance Repair (Oven)", 
      date: "Sept 15, 2024 • Completed", 
      amount: "$120.00",
      icon: "kitchen"
    },
    { 
      title: "Sofa Cleaning", 
      date: "Aug 30, 2024 • Completed", 
      amount: "$60.00",
      icon: "chair"
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />

      <div className="flex pt-20">
        {/* Sidebar */}
        <div className="hidden md:block w-64 bg-white border-r border-gray-100 min-h-[calc(100vh-5rem)] p-6 fixed">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">AJ</div>
            <div>
              <p className="font-semibold">Alex Johnson</p>
              <p className="text-xs text-gray-500">Premium Member</p>
            </div>
          </div>

          <nav className="space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-2xl font-medium">
              <Icon name="dashboard" /> Dashboard
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl text-gray-700">
              <Icon name="event" /> My Bookings
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl text-gray-700">
              <Icon name="payments" /> Payments
            </Link>
            <Link href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 rounded-2xl text-gray-700">
              <Icon name="settings" /> Settings
            </Link>
          </nav>

          <div className="absolute bottom-8 left-6 right-6">
            <div className="text-xs text-gray-400 space-y-2">
              <a href="#" className="block hover:text-gray-600">Support</a>
              <a href="#" className="block hover:text-gray-600">Logout</a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-64 p-6 md:p-8 max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Good morning, Alex 👋</h1>
            <p className="text-gray-500 mt-1">Here's what's happening with your services</p>
          </div>

          {/* Next Scheduled Service */}
          <div className="bg-white rounded-3xl p-6 mb-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">Next Scheduled Service</span>
              <button className="bg-blue-600 text-white px-5 py-2.5 rounded-2xl text-sm font-medium hover:bg-blue-700 transition">
                Track Professional
              </button>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl">🔧</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold">Plumbing Repair</h3>
                <p className="text-gray-600">Tomorrow, 2:00 PM - 4:00 PM</p>
                <div className="flex items-center gap-3 mt-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-medium text-sm">David M.</p>
                    <p className="text-xs text-gray-500">4.8 (120 reviews)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Upcoming</h2>
            <div className="space-y-4">
              {upcoming.map((service, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 flex items-center justify-between hover:shadow-md transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                      {service.icon === 'ac_unit' ? '❄️' : '🧹'}
                    </div>
                    <div>
                      <p className="font-medium">{service.title}</p>
                      <p className="text-sm text-gray-500">{service.date}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm font-medium hover:underline">Message</button>
                </div>
              ))}
            </div>
          </div>

          {/* Recent History */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Recent History</h2>
              <Link href="#" className="text-blue-600 text-sm font-medium">View All</Link>
            </div>

            <div className="space-y-4">
              {recentHistory.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-2xl">
                      🛠️
                    </div>
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{item.amount}</p>
                    <button className="text-blue-600 text-sm mt-1 hover:underline">Rebook</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}