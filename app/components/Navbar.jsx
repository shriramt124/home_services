'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from './ui/Button';
import Icon from './ui/Icon';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value.trim();
      if (query) {
        setIsMenuOpen(false);
        router.push(`/search-results?q=${encodeURIComponent(query)}`);
      }
    }
  };

  return (
    <>
      <nav className="bg-surface-primary fixed top-0 w-full z-50 border-b border-surface-variant transition-all duration-300">
        <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4 max-w-[1200px] mx-auto gap-2">
          {/* Brand Logo */}
          <div 
            onClick={() => router.push('/')}
            className="text-lg md:text-xl font-bold tracking-tighter text-text-primary flex-shrink-0 cursor-pointer"
          >
            Urban Company
          </div>

          {/* Actions (Right) */}
          <div className="flex items-center gap-2 md:gap-6">
            {/* Search Bar - Hidden on mobile, visible on large screens */}
            <div className="relative hidden lg:block">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm" />
              <input
                className="pl-9 pr-4 py-2.5 bg-surface-secondary border-none rounded-full focus:bg-surface-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-text-primary placeholder-text-secondary w-[280px] transition-all duration-200 text-sm"
                placeholder="Search for services"
                type="text"
                onKeyDown={handleSearch}
              />
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              {!isLoggedIn ? (
                <div className="flex items-center gap-2 md:gap-4">
                  <Button onClick={() => setIsLoggedIn(true)} variant="ghost" size="sm" className="px-2 md:px-4 text-xs md:text-sm">
                    Login
                  </Button>
                  <Button onClick={() => setIsLoggedIn(true)} variant="primary" size="sm" className="md:px-6 md:py-2.5 text-xs md:text-sm px-3 py-1.5">
                    Sign Up
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-4 md:gap-6">
                  <button className="p-1.5 md:p-2 rounded-full hover:bg-surface-variant transition-colors duration-200 text-text-secondary hover:text-text-primary relative active:scale-95 transition-transform">
                    <Icon name="notifications" />
                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border border-white"></span>
                  </button>
                  <div 
                    className="flex items-center gap-1 cursor-pointer group"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    <button className="w-9 h-9 rounded-full overflow-hidden border border-surface-variant bg-surface-variant flex items-center justify-center focus:ring-2 focus:ring-primary focus:outline-none active:scale-95 transition-transform">
                      <Icon name="person" className="text-text-secondary text-lg" />
                    </button>
                    <Icon name="expand_more" className="text-text-secondary group-hover:text-text-primary transition-colors text-sm" />
                  </div>
                </div>
              )}
            </div>

            {/* Hamburger Button - Visible only on small screens */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 rounded-full hover:bg-surface-variant transition-colors text-text-primary active:scale-90"
            >
              <Icon name="menu" className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-[60] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />
      
      {/* Sidebar - Does not take full screen (width: 280px) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-[280px] bg-white z-[70] shadow-2xl transition-transform duration-300 md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="font-bold text-gray-900">Menu</span>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 active:scale-90"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <div className="space-y-6">
            {/* Search in Menu for Mobile */}
            <div className="relative lg:hidden mb-6">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                className="w-full pl-9 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none text-sm"
                placeholder="Search services"
                type="text"
                onKeyDown={handleSearch}
              />
            </div>

            {/* Account Actions */}
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Account</p>
              {!isLoggedIn ? (
                <div className="grid grid-cols-1 gap-3">
                  <Button onClick={() => { setIsLoggedIn(true); setIsMenuOpen(false); }} variant="primary" size="md" className="w-full justify-center">
                    Sign Up / Login
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <button 
                    onClick={() => { setIsLoggedIn(false); setIsMenuOpen(false); }}
                    className="flex items-center gap-3 w-full text-left text-gray-700 hover:text-primary transition-colors py-2"
                  >
                    <Icon name="person" className="text-gray-400" />
                    <span className="text-sm font-medium">My Profile</span>
                  </button>
                  <button className="flex items-center gap-3 w-full text-left text-gray-700 hover:text-primary transition-colors py-2">
                    <Icon name="notifications" className="text-gray-400" />
                    <span className="text-sm font-medium">Notifications</span>
                  </button>
                  <button 
                    onClick={() => { setIsLoggedIn(false); setIsMenuOpen(false); }}
                    className="flex items-center gap-3 w-full text-left text-error hover:opacity-80 transition-opacity py-2 mt-4 border-t border-gray-50 pt-4"
                  >
                    <Icon name="logout" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="space-y-4 pt-6 border-t border-gray-50">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Quick Links</p>
              <div className="grid grid-cols-1 gap-4">
                <a href="#" className="text-sm text-gray-600 hover:text-primary font-medium py-1">About Us</a>
                <a href="#" className="text-sm text-gray-600 hover:text-primary font-medium py-1">UC Reviews</a>
                <a href="#" className="text-sm text-gray-600 hover:text-primary font-medium py-1">Help Center</a>
                <a href="#" className="text-sm text-gray-600 hover:text-primary font-medium py-1">Join as a Partner</a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 border-t border-gray-50 bg-gray-50">
           <button className="flex items-center gap-2 text-xs text-gray-500">
             <Icon name="language" className="text-sm" />
             India (English)
           </button>
        </div>
      </div>
    </>
  );
}
