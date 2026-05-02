'use client';
import React, { useState } from 'react';
import Button from './ui/Button';
import Icon from './ui/Icon';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-surface-primary fixed top-0 w-full z-50 border-b border-surface-variant transition-all duration-300">
      <div className="flex items-center justify-between px-8 py-4 max-w-[1200px] mx-auto">
        {/* Brand Logo */}
        <div className="text-xl font-bold tracking-tighter text-text-primary flex-shrink-0 cursor-pointer">
          Urban Company
        </div>

        {/* Search and Actions/Profile (Right) */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm" />
            <input
              className="pl-9 pr-4 py-2.5 bg-surface-secondary border-none rounded-full focus:bg-surface-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-text-primary placeholder-text-secondary w-[280px] transition-all duration-200 text-sm"
              placeholder="Search for services"
              type="text"
            />
          </div>

          {!isLoggedIn ? (
            /* Guest Actions */
            <div className="flex items-center gap-2 md:gap-4">
              <Button onClick={() => setIsLoggedIn(true)} variant="ghost" size="sm">
                Login
              </Button>
              <Button onClick={() => setIsLoggedIn(true)} variant="primary" size="md">
                Sign Up
              </Button>
            </div>
          ) : (
            /* User Profile Actions */
            <div className="flex items-center gap-6">
              <button className="p-2 rounded-full hover:bg-surface-variant transition-colors duration-200 text-text-secondary hover:text-text-primary relative active:scale-95 transition-transform">
                <Icon name="notifications" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-error rounded-full border border-white"></span>
              </button>

              {/* Profile Avatar */}
              <div 
                className="flex items-center gap-1 cursor-pointer group"
                onClick={() => setIsLoggedIn(false)}
                title="Click to logout for demo"
              >
                <button className="w-9 h-9 rounded-full overflow-hidden border border-surface-variant bg-surface-variant flex items-center justify-center focus:ring-2 focus:ring-primary focus:outline-none active:scale-95 transition-transform">
                  <Icon name="person" className="text-text-secondary text-lg" />
                </button>
                <Icon name="expand_more" className="text-text-secondary group-hover:text-text-primary transition-colors text-sm" />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
