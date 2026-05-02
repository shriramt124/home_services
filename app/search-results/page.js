import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';

export default function SearchResultsPage() {
  const services = [
    {
      title: "Tap & Mixer Repair",
      rating: "4.8",
      reviews: "2.5k reviews",
      time: "~45 mins",
      price: "₹149",
      image: "/search_results/res_tap.png"
    },
    {
      title: "Leakage Repair",
      rating: "4.7",
      reviews: "1.2k reviews",
      time: "~1 hour",
      price: "₹249",
      image: "/search_results/res_leakage.png"
    },
    {
      title: "Drain Cleaning",
      rating: "4.9",
      reviews: "3.1k reviews",
      time: "~30 mins",
      price: "₹199",
      image: "/search_results/res_drain.png"
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

  return (
    <div className="pt-16 md:pt-20 bg-[#f8f9fa] min-h-screen font-sans">
      <Navbar />

      {/* Secondary Search & Filter Bar */}
      <div className="bg-white border-b border-gray-100 py-2 md:py-3 shadow-sm sticky top-[56px] md:top-[72px] z-40">
        <div className="max-w-[1200px] mx-auto px-3 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            {/* Search Inputs */}
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

            {/* Filter Chips */}
            <div className="flex items-center gap-1.5 md:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
              <button className="flex items-center gap-1 bg-white border border-gray-200 rounded-full px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-semibold text-gray-600 hover:bg-gray-50 whitespace-nowrap">
                <Icon name="sort" className="text-xs md:text-sm" /> Price: Low to High
              </button>
              <button className="flex items-center gap-1 bg-white border border-gray-200 rounded-full px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-semibold text-gray-600 hover:bg-gray-50 whitespace-nowrap">
                <Icon name="star" className="text-xs md:text-sm" /> Top Rated
              </button>
              <button className="flex items-center gap-1 bg-white border border-gray-200 rounded-full px-2.5 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-semibold text-gray-600 hover:bg-gray-50 whitespace-nowrap">
                <Icon name="warning" className="text-xs md:text-sm" /> Emergency Service
              </button>
            </div>
          </div>

        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-3 md:px-8 py-4 md:py-12">
        
        {/* Main Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 md:mb-6 gap-1">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight">Plumbers in Indore</h1>
          <span className="text-gray-500 text-xs md:text-sm font-medium whitespace-nowrap">24 Results</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          
          {/* Left Column: Listings */}
          <div className="flex-1 space-y-3 md:space-y-4">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl md:rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">

                {/* Card Body — stacks vertically below 300px, side-by-side above */}
                <div className="flex flex-col min-[300px]:flex-row min-[300px]:gap-3 min-[300px]:p-3 md:gap-5 md:p-5">

                  {/* Image: full-width on tiny, thumbnail on 300px+ */}
                  <div className="relative w-full h-36 min-[300px]:w-[80px] min-[300px]:h-[80px] md:w-[140px] md:h-[120px] min-[300px]:rounded-lg md:rounded-xl overflow-hidden shrink-0">
                    <Image src={service.image} alt={service.title} fill className="object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col min-w-0 px-3 pt-2 pb-0 min-[300px]:px-0 min-[300px]:pt-0">
                    <h2 className="text-sm md:text-lg font-bold text-gray-900 leading-tight mb-1">{service.title}</h2>

                    <div className="flex items-center gap-1 md:gap-2 mb-1">
                      <div className="flex items-center gap-0.5 text-xs font-bold text-gray-800">
                        <Icon name="star" className="text-orange-400 text-xs" /> {service.rating}
                      </div>
                      <span className="text-gray-300 text-xs">•</span>
                      <span className="text-gray-500 text-xs">{service.reviews}</span>
                    </div>

                    {/* Time — hidden below 300px */}
                    <div className="hidden min-[300px]:flex items-center gap-1 text-gray-500 text-xs">
                      <Icon name="schedule" className="text-xs" /> Takes {service.time}
                    </div>
                  </div>

                  {/* Favorite — desktop only */}
                  <button className="text-gray-300 hover:text-red-500 transition-colors hidden md:block shrink-0 self-start">
                    <Icon name="favorite_border" />
                  </button>
                </div>

                {/* Bottom Row: Price + Book Now — always full width */}
                <div className="flex items-center justify-between px-3 py-2.5 min-[300px]:mx-3 min-[300px]:px-0 min-[300px]:py-2.5 min-[300px]:mt-0 md:mx-5 md:px-0 border-t border-gray-100">
                  <div>
                    <div className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Starting From</div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">{service.price}</div>
                  </div>
                  <button className="bg-[#5952e4] hover:bg-[#4640c4] active:scale-95 text-white px-5 py-2 md:px-6 md:py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shrink-0">
                    Book Now
                  </button>
                </div>

              </div>
            ))}

            <div className="flex justify-center pt-2 md:pt-4">
              <button className="bg-white border border-gray-200 text-gray-700 px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold hover:bg-gray-50 transition-colors">
                Load More
              </button>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="w-full lg:w-[380px] space-y-4 md:space-y-6">
            
            {/* Map Widget */}
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

            {/* Why Book with Us */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm">
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-5">Why Book with Us</h3>
              
              <div className="space-y-3 md:space-y-5">
                <div className="flex gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 text-[#5952e4] flex items-center justify-center shrink-0">
                    <Icon name="verified_user" className="text-sm md:text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs md:text-sm mb-0.5 md:mb-1">Verified Professionals</h4>
                    <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">Every professional goes through strict background checks.</p>
                  </div>
                </div>

                <div className="flex gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 text-[#5952e4] flex items-center justify-center shrink-0">
                    <Icon name="shield" className="text-sm md:text-base" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xs md:text-sm mb-0.5 md:mb-1">100% Insurance Cover</h4>
                    <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">Your property is protected with up to ₹10,000 against damage.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Combo Packages Section */}
        <div className="mt-8 mb-8 md:mt-16 md:mb-16">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Combo Packages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {combos.map((combo, idx) => (
              <div key={idx} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 leading-tight">{combo.title}</h3>
                <p className="text-gray-500 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-6 flex-1">
                  {combo.desc}
                </p>
                
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
          
          {/* Elite Service Guarantee */}
          <div className="bg-[#edf2fe] rounded-xl md:rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-1 text-[#5952e4] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2">
                <Icon name="verified" className="text-xs md:text-sm" /> Trust & Safety
              </div>
              <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">The Elite Service Guarantee</h2>
              <p className="text-gray-600 text-xs md:text-base leading-relaxed">
                If you're not satisfied with the service, we'll re-do it for free or give you a full refund.
              </p>
            </div>
            <button className="bg-[#5952e4] hover:bg-[#4640c4] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-colors shrink-0">
              Read our policy
            </button>
          </div>

          {/* Curated Pros */}
          <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 border border-gray-100 shadow-sm">
            <div className="max-w-2xl">
              <div className="flex items-center gap-1 text-green-600 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2">
                <Icon name="star" className="text-xs md:text-sm" /> Curated Pros
              </div>
              <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Only the best professionals</h2>
              <p className="text-gray-600 text-xs md:text-base leading-relaxed">
                Every pro on our platform is highly vetted, background-checked, and continuously monitored for quality.
              </p>
            </div>
            <button className="bg-gray-50 border border-gray-200 hover:bg-gray-100 text-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold transition-colors shrink-0">
              Meet our pros
            </button>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
