'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/Icon';
import ServiceResultCard from '../components/ui/ServiceResultCard';
import ServiceDetailModal from '../components/ui/ServiceDetailModal';
import TrustBanner from '../components/ui/TrustBanner';
import SectionHeader from '../components/ui/SectionHeader';

export default function SearchResultsPage() {
  const services = [
    {
      title: "Tap & Mixer Repair",
      rating: "4.8",
      reviews: "2.5k reviews",
      time: "~45 mins",
      price: "₹149",
      image: "/search_results/res_tap.png",
      description: "Comprehensive repair service for all types of bathroom and kitchen taps. Our vetted professionals ensure quick resolution with standard parts to restore optimal functionality.",
      included: [
        "Fixing continuous leaks and drips",
        "Replacing worn out washers and O-rings",
        "Checking and adjusting water pressure",
      ]
    },
    {
      title: "Leakage Repair",
      rating: "4.7",
      reviews: "1.2k reviews",
      time: "~1 hour",
      price: "₹249",
      image: "/search_results/res_leakage.png",
      description: "Expert pipe and joint leakage repair to prevent water damage. Our professionals diagnose the source quickly and apply long-lasting fixes.",
      included: [
        "Identifying hidden pipe leakages",
        "Sealing joints with waterproof materials",
        "Post-repair pressure testing",
      ]
    },
    {
      title: "Drain Cleaning",
      rating: "4.9",
      reviews: "3.1k reviews",
      time: "~30 mins",
      price: "₹199",
      image: "/search_results/res_drain.png",
      description: "Professional drain unblocking and cleaning for bathrooms and kitchens. Removes grease, debris, and organic buildup for smooth drainage.",
      included: [
        "Mechanically clearing blocked drains",
        "Cleaning drain traps and pipes",
        "Deodorizing after cleaning",
      ]
    }
  ];

  const combos = [
    {
      title: "Bathroom + Kitchen Check",
      desc: "Complete inspection of all taps, pipes, and drains in bathroom and kitchen with minor fixes.",
      oldPrice: "₹600",
      newPrice: "₹599"
    },
    {
      title: "Deep Drain Cleaning Duo",
      desc: "Advanced mechanical drain cleaning for both main bathroom and kitchen sink.",
      oldPrice: "₹500",
      newPrice: "₹399"
    },
    {
      title: "Tap Repair Bundle",
      desc: "Repair or replacement service for up to 3 leaking taps across your home.",
      oldPrice: "₹447",
      newPrice: "₹299"
    }
  ];

  const whyBookItems = [
    { icon: 'verified_user', title: 'Verified Professionals', desc: 'Every professional goes through strict background checks.' },
    { icon: 'shield', title: '100% Insurance Cover', desc: 'Your property is protected with up to ₹10,000 against damage.' },
  ];

  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="pt-16 md:pt-20 bg-[#f8f9fa] min-h-screen font-sans">
      <Navbar />

      {/* Secondary Search & Filter Bar */}
      <div className="bg-white border-b border-gray-100 py-2 md:py-3 shadow-sm sticky top-[56px] md:top-[72px] z-40">
        <div className="max-w-[1200px] mx-auto px-3 md:px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <div className="flex flex-1 items-center bg-gray-50 rounded-lg border border-gray-200 overflow-hidden text-sm md:text-base">
              <div className="flex-1 flex items-center px-2 md:px-3 py-1.5 md:py-2 border-r border-gray-200">
                <Icon name="search" className="text-gray-400 text-base md:text-lg mr-1.5 md:mr-2" />
                <input type="text" defaultValue="Plumber" className="bg-transparent w-full focus:outline-none text-gray-800 font-medium" />
              </div>
              <div className="flex-1 flex items-center px-2 md:px-3 py-1.5 md:py-2">
                <Icon name="location_on" className="text-gray-400 text-base md:text-lg mr-1.5 md:mr-2" />
                <input type="text" defaultValue="Indore" className="bg-transparent w-full focus:outline-none text-gray-800 font-medium" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
              {[
                { icon: 'sort', label: 'Price: Low to High' },
                { icon: 'star', label: 'Top Rated' },
                { icon: 'warning', label: 'Emergency Service' },
              ].map((chip) => (
                <button key={chip.label} className="flex items-center gap-1 bg-white border border-gray-200 rounded-full px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-semibold text-gray-600 hover:bg-gray-50 whitespace-nowrap">
                  <Icon name={chip.icon} className="text-xs md:text-sm" /> {chip.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-3 md:px-8 py-4 md:py-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 md:mb-6 gap-1">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight">Plumbers in Indore</h1>
          <span className="text-gray-500 text-xs md:text-sm font-medium whitespace-nowrap">24 Results</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          
          {/* Left Column: Listings */}
          <div className="flex-1 space-y-3 md:space-y-4">
            {services.map((service, idx) => (
              <ServiceResultCard
                key={idx}
                {...service}
                onClick={() => setSelectedService(service)}
              />
            ))}

            <div className="flex justify-center pt-2 md:pt-4">
              <button className="bg-white border border-gray-200 text-gray-700 px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold hover:bg-gray-50 transition-colors">
                Load More
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="w-full lg:w-[380px] space-y-4 md:space-y-6">
            
            <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-[120px] md:h-[160px] w-full">
                <Image src="/search_results/res_map.png" alt="Map" fill className="object-cover" />
                <div className="absolute bottom-2 left-2 md:bottom-3 md:left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] md:text-xs px-2 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1">
                  <Icon name="location_on" className="text-xs md:text-sm" /> Indore, Madhya Pradesh
                </div>
              </div>
              <a href="#" className="block p-3 md:p-4 text-center text-xs md:text-sm font-semibold text-primary hover:underline border-t border-gray-50">
                View all on map <Icon name="chevron_right" className="inline text-[10px] md:text-sm mb-0.5" />
              </a>
            </div>

            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-5">Why Book with Us</h3>
              <div className="space-y-3 md:space-y-5">
                {whyBookItems.map((item) => (
                  <div key={item.title} className="flex gap-3 md:gap-4">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 text-[#5952e4] flex items-center justify-center shrink-0">
                      <Icon name={item.icon} className="text-sm md:text-base" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-xs md:text-sm mb-0.5 md:mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Combo Packages */}
        <div className="mt-8 mb-8 md:mt-16 md:mb-16">
          <SectionHeader title="Combo Packages" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {combos.map((combo, idx) => (
              <div key={idx} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 leading-tight">{combo.title}</h3>
                <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-6 flex-1">{combo.desc}</p>
                <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-50 mt-auto">
                  <div className="flex items-baseline gap-1.5 md:gap-2">
                    <span className="text-gray-400 text-xs md:text-sm line-through decoration-gray-300">{combo.oldPrice}</span>
                    <span className="text-lg md:text-xl font-bold text-gray-900">{combo.newPrice}</span>
                  </div>
                  <button className="bg-[#5952e4] hover:bg-[#4640c4] text-white px-4 md:px-6 py-1.5 md:py-2 rounded md:rounded-lg text-xs md:text-sm font-semibold transition-colors duration-200">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Banners */}
        <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
          <TrustBanner
            bg="bg-[#edf2fe]"
            badgeColor="text-[#5952e4]"
            badgeIcon="verified"
            badge="Trust & Safety"
            title="The Elite Service Guarantee"
            description="If you're not satisfied with the service, we'll re-do it for free or give you a full refund."
            buttonLabel="Read our policy"
            buttonStyle="primary"
          />
          <TrustBanner
            bg="bg-white"
            badgeColor="text-green-600"
            badgeIcon="star"
            badge="Curated Pros"
            title="Only the best professionals"
            description="Every pro on our platform is highly vetted, background-checked, and continuously monitored for quality."
            buttonLabel="Meet our pros"
            buttonStyle="secondary"
          />
        </div>

      </main>

      <Footer />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onBook={() => console.log('Booking:', selectedService?.title)}
        service={selectedService}
      />
    </div>
  );
}
