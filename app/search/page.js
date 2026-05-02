import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/Icon';
import CategoryCard from '../components/ui/CategoryCard';
import SectionHeader from '../components/ui/SectionHeader';

export default function SearchPage() {
  const categories = [
    { src: '/search_images/cat_cleaning.png', alt: 'Cleaning', label: 'Cleaning' },
    { src: '/search_images/cat_repairs.png', alt: 'Repairs', label: 'Repairs' },
    { src: '/search_images/cat_salon.png', alt: 'Salon', label: 'Salon' },
    { src: '/search_images/cat_appliances.png', alt: 'Appliances', label: 'Appliances' },
  ];

  const trendingServices = [
    {
      title: "Signature Hydrafacial",
      rating: "4.9",
      description: "Deep cleansing and hydration for a radiant glow.",
      price: "$120",
      image: "/search_images/trend_hydrafacial.png"
    },
    {
      title: "Intense Deep Cleaning",
      rating: "4.8",
      description: "Comprehensive top-to-bottom home sanitization.",
      price: "$189",
      image: "/search_images/trend_cleaning.png"
    },
    {
      title: "Laser Hair Removal",
      rating: "4.9",
      description: "Painless, long-lasting results with advanced tech.",
      price: "$89",
      image: "/search_images/trend_laser.png"
    }
  ];

  return (
    <div className="pt-16 md:pt-20 bg-[#f5f5f7] min-h-screen font-sans">
      <Navbar />

      <main className="max-w-[1000px] mx-auto px-4 md:px-8 py-6 md:py-16">
        
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-3 tracking-tight">Explore All Services</h1>
          <p className="text-gray-500 text-xs md:text-base max-w-lg mx-auto">
            Discover premium, vetted professionals for your home and personal care needs.
          </p>

          {/* Search Bar */}
          <div className="mt-4 md:mt-8 relative max-w-2xl mx-auto flex items-center shadow-sm rounded-xl bg-white overflow-hidden p-1 border border-gray-100">
            <div className="flex-shrink-0 pl-3 md:pl-4 pr-1 md:pr-2">
              <Icon name="search" className="text-gray-400 text-base md:text-xl" />
            </div>
            <input
              type="text"
              placeholder="Search for 'AC Repair' or 'Massage'"
              className="w-full py-2 md:py-3.5 px-2 focus:outline-none text-gray-700 text-xs md:text-base bg-transparent"
            />
            <button className="flex-shrink-0 p-1.5 md:p-2 mr-1 rounded-lg hover:bg-gray-50 transition-colors">
              <Icon name="tune" className="text-gray-500 text-sm md:text-base" />
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-16">
          
          {/* Left Large Feature Card */}
          <div className="relative h-[200px] md:h-full md:min-h-[400px] rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
            <Image
              src="/search_images/cat_spa.png"
              alt="Spa & Wellness"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-10">
              <h3 className="text-white text-lg md:text-2xl font-bold mb-0.5 md:mb-1 tracking-tight">Spa & Wellness</h3>
              <p className="text-gray-300 text-[10px] md:text-sm">Relaxation delivered to your door.</p>
            </div>
          </div>

          {/* Right 2x2 Grid — using CategoryCard */}
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {categories.map((cat) => (
              <CategoryCard key={cat.label} src={cat.src} alt={cat.alt} label={cat.label} />
            ))}
          </div>
        </div>

        {/* Trending This Week */}
        <div className="mb-6 md:mb-10">
          <SectionHeader title="Trending This Week" linkLabel="VIEW ALL" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {trendingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                <div className="relative h-32 md:h-44 w-full">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-3 md:p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-1.5 md:mb-2 gap-2">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">{service.title}</h3>
                    <div className="flex items-center gap-1 bg-gray-50 px-1.5 md:px-2 py-0.5 md:py-1 rounded text-[10px] md:text-xs font-semibold shrink-0">
                      <Icon name="star" className="text-orange-400 text-[8px] md:text-[10px]" />
                      {service.rating}
                    </div>
                  </div>
                  <p className="text-gray-500 text-[10px] md:text-sm mb-3 md:mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="font-bold text-gray-900 text-base md:text-lg">{service.price}</span>
                    <button className="bg-[#4640c4] hover:bg-[#3833a0] text-white px-4 py-1.5 md:px-5 md:py-2 rounded-lg text-[10px] md:text-xs font-semibold transition-colors duration-200 shadow-sm active:scale-95">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
