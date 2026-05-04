'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Icon from '../components/ui/Icon';
import BottomTabBar from '../components/ui/BottomTabBar';
import TrackingDrawer from '../components/ui/TrackingDrawer';
import Link from 'next/link';
import Image from 'next/image';

export default function Dashboard() {
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const upcoming = [
    { title: "Deep Home Cleaning", date: "Friday, Oct 12 • 10:00 AM", icon: "cleaning_services" },
    { title: "AC Servicing", date: "Mon, Oct 15 • 3:30 PM", icon: "ac_unit" },
  ];

  const recentHistory = [
    { 
      title: "Bathroom Deep Cleaning", 
      date: "Sept 28, 2024", 
      status: "Completed",
      amount: "₹850",
      icon: "bathtub"
    },
    { 
      title: "Appliance Repair (Oven)", 
      date: "Sept 15, 2024", 
      status: "Completed",
      amount: "₹1,200",
      icon: "kitchen"
    },
    { 
      title: "Sofa Cleaning", 
      date: "Aug 30, 2024", 
      status: "Completed",
      amount: "₹600",
      icon: "chair"
    },
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Navbar />

      <div className="flex pt-16 md:pt-20">

        {/* ─── Sidebar (Desktop only) ─── */}
        <aside className="hidden md:flex w-[260px] bg-white/70 backdrop-blur-xl border-r border-gray-100/80 min-h-[calc(100vh-5rem)] flex-col fixed">
          
          {/* User Profile Card */}
          <div className="p-6 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 bg-gradient-to-br from-[#5952e4] to-[#7c6bf0] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#5952e4]/20">
                AJ
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-[15px]">Alex Johnson</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  <p className="text-[11px] text-gray-500">Premium Member</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 space-y-0.5">
            <Link href="/user-dashboard" className="group flex items-center gap-3 px-4 py-3 rounded-xl relative text-[#5952e4] bg-[#f0eeff] font-medium text-[14px]">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#5952e4] rounded-r-full"></div>
              <Icon name="home" className="text-lg" /> Dashboard
            </Link>
            <Link href="#" className="group flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors text-[14px]">
              <Icon name="account_balance_wallet" className="text-lg" /> Payments
            </Link>
            <Link href="#" className="group flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-colors text-[14px]">
              <Icon name="settings" className="text-lg" /> Settings
            </Link>
          </nav>

          {/* Bottom Links */}
          <div className="p-6 pt-4 border-t border-gray-100/80 space-y-3">
            <a href="#" className="flex items-center gap-2.5 text-[13px] text-gray-400 hover:text-gray-600 transition-colors">
              <Icon name="help_outline" className="text-base" /> Support
            </a>
            <a href="#" className="flex items-center gap-2.5 text-[13px] text-gray-400 hover:text-red-500 transition-colors">
              <Icon name="logout" className="text-base" /> Logout
            </a>
          </div>
        </aside>

        {/* ─── Main Content ─── */}
        <main className="flex-1 md:ml-[260px] px-3 min-[360px]:px-5 md:px-10 py-4 min-[360px]:py-6 md:py-8 max-w-4xl pb-20 md:pb-8">
          
          {/* Greeting */}
          <div className="mb-6 min-[360px]:mb-8">
            <h1 className="text-xl min-[360px]:text-2xl md:text-[28px] font-bold text-gray-900 tracking-tight">
              Good morning, Alex
            </h1>
            <p className="text-xs min-[360px]:text-sm text-gray-400 mt-1 font-normal">
              Here's what's happening with your services
            </p>
          </div>

          {/* ─── Next Scheduled — Hero Card ─── */}
          <div className="bg-gradient-to-br from-[#5952e4] to-[#7c6bf0] rounded-2xl min-[360px]:rounded-3xl p-4 min-[360px]:p-5 md:p-6 mb-6 min-[360px]:mb-8 shadow-lg shadow-[#5952e4]/15 text-white relative overflow-hidden">
            
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col min-[360px]:flex-row items-start min-[360px]:items-center justify-between gap-3 min-[360px]:gap-0 mb-4 min-[360px]:mb-5">
                <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] min-[360px]:text-xs font-medium px-3 py-1 rounded-full">
                  Next Scheduled
                </span>
                <button 
                  onClick={() => setIsTrackingOpen(true)}
                  className="w-full min-[360px]:w-auto bg-white text-[#5952e4] px-4 min-[360px]:px-5 py-2 min-[360px]:py-2.5 rounded-xl text-[11px] min-[360px]:text-sm font-semibold hover:bg-white/90 transition-all active:scale-[0.97] text-center"
                >
                  Track Professional
                </button>
              </div>

              <div className="flex items-start gap-2.5 min-[360px]:gap-4">
                <div className="w-8 h-8 min-[360px]:w-12 min-[360px]:h-12 bg-white/15 backdrop-blur-sm rounded-lg min-[360px]:rounded-2xl flex items-center justify-center shrink-0">
                  <Icon name="build" className="text-lg min-[360px]:text-2xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[13px] min-[360px]:text-lg md:text-xl font-semibold">Plumbing Repair</h3>
                  <p className="text-white/70 text-[10px] min-[360px]:text-sm mt-0.5">Tomorrow, 2:00 PM – 4:00 PM</p>
                  <div className="hidden min-[360px]:flex items-center gap-3 mt-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/30 shrink-0">
                      <Image src="https://i.pravatar.cc/100?img=11" alt="David M." fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">David M.</p>
                      <p className="text-white/60 text-xs">⭐ 4.8 · 120 reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Quick Actions (Mobile only) ─── */}
          <div className="flex gap-2 min-[360px]:gap-3 mb-6 min-[360px]:mb-8 overflow-x-auto no-scrollbar md:hidden -mx-4 px-4 min-[360px]:-mx-5 min-[360px]:px-5">
            {[
              { icon: 'add_circle', label: 'Book New' },
              { icon: 'history', label: 'History' },
              { icon: 'chat_bubble_outline', label: 'Support' },
              { icon: 'card_giftcard', label: 'Offers' },
            ].map((action, i) => (
              <button key={i} className="flex flex-col items-center gap-1.5 min-[360px]:gap-2 bg-white rounded-xl min-[360px]:rounded-2xl p-3 min-[360px]:p-4 shadow-sm min-w-[70px] min-[360px]:min-w-[80px] shrink-0 hover:shadow-md active:scale-95 transition-all border border-gray-50">
                <Icon name={action.icon} className="text-lg min-[360px]:text-xl text-[#5952e4]" />
                <span className="text-[9px] min-[360px]:text-[10px] font-medium text-gray-600 whitespace-nowrap">{action.label}</span>
              </button>
            ))}
          </div>

          {/* ─── Upcoming Services ─── */}
          <div className="mb-6 min-[360px]:mb-8">
            <h2 className="text-base min-[360px]:text-lg md:text-xl font-semibold text-gray-900 mb-3 min-[360px]:mb-4">Upcoming</h2>
            <div className="space-y-2.5 min-[360px]:space-y-3">
              {upcoming.map((service, i) => (
                <div key={i} className="bg-white rounded-xl min-[360px]:rounded-2xl p-3 min-[360px]:p-4 md:p-5 flex items-center justify-between gap-3 shadow-sm hover:shadow-md transition-shadow duration-200 group">
                  <div className="flex items-center gap-3 min-[360px]:gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 min-[360px]:w-11 min-[360px]:h-11 bg-[#f0eeff] rounded-xl flex items-center justify-center shrink-0">
                      <Icon name={service.icon} className="text-lg min-[360px]:text-xl text-[#5952e4]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm min-[360px]:text-[15px] text-gray-900 truncate">{service.title}</p>
                      <p className="text-[11px] min-[360px]:text-xs text-gray-400 mt-0.5">{service.date}</p>
                    </div>
                  </div>
                  <button className="text-[#5952e4] text-[11px] min-[360px]:text-xs font-semibold hover:underline shrink-0 opacity-70 group-hover:opacity-100 transition-opacity">
                    Message
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Recent History ─── */}
          <div>
            <div className="flex items-center justify-between mb-3 min-[360px]:mb-4">
              <h2 className="text-base min-[360px]:text-lg md:text-xl font-semibold text-gray-900">Recent History</h2>
              <Link href="#" className="text-[#5952e4] text-[11px] min-[360px]:text-xs font-semibold hover:underline">
                View All
              </Link>
            </div>

            <div className="space-y-2.5 min-[360px]:space-y-3">
              {recentHistory.map((item, i) => (
                <div key={i} className="bg-white rounded-xl min-[360px]:rounded-2xl p-3 min-[360px]:p-4 md:p-5 flex items-center justify-between gap-2 shadow-sm">
                  <div className="flex items-center gap-3 min-[360px]:gap-4 flex-1 min-w-0">
                    <div className="w-10 h-10 min-[360px]:w-11 min-[360px]:h-11 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon name={item.icon} className="text-lg min-[360px]:text-xl text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm min-[360px]:text-[15px] text-gray-900 truncate">{item.title}</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] min-[360px]:text-[11px] text-gray-400">{item.date}</span>
                        <span className="text-[10px] min-[360px]:text-[11px] text-emerald-500 font-medium">· {item.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-bold text-sm min-[360px]:text-base text-gray-900">{item.amount}</p>
                    <button className="text-[#5952e4] text-[10px] min-[360px]:text-[11px] font-semibold mt-0.5 hover:underline">
                      Rebook
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>

      {/* ─── Bottom Tab Bar (Mobile only) ─── */}
      <BottomTabBar />

      {/* ─── Tracking Drawer ─── */}
      <TrackingDrawer
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
      />
    </div>
  );
}