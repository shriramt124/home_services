'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Icon from '../components/ui/Icon';

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState('card');

  const cartItems = [
    { name: "Tap & Mixer Repair", price: 89.00, qty: 1 },
    { name: "Shower Installation", price: 124.00, qty: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = 19.24;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <Navbar />

      <div className="pt-20 pb-12 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Side - Payment Methods */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 shadow-sm">
            <h1 className="text-3xl font-bold mb-8">Payment</h1>

            <div className="mb-8">
              <h3 className="font-semibold mb-4">Select Payment Method</h3>
              
              <div className="space-y-3">
                {/* Credit/Debit Card */}
                <div 
                  onClick={() => setSelectedMethod('card')}
                  className={`border rounded-2xl p-5 cursor-pointer transition-all ${selectedMethod === 'card' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Icon name="credit_card" className="text-2xl" />
                      <div>
                        <p className="font-medium">Credit / Debit Card</p>
                        <p className="text-sm text-gray-500">Visa, Mastercard, RuPay</p>
                      </div>
                    </div>
                    <input type="radio" checked={selectedMethod === 'card'} readOnly className="w-5 h-5 accent-blue-600" />
                  </div>
                </div>

                {/* UPI */}
                <div 
                  onClick={() => setSelectedMethod('upi')}
                  className={`border rounded-2xl p-5 cursor-pointer transition-all ${selectedMethod === 'upi' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold">U</div>
                      <div>
                        <p className="font-medium">UPI</p>
                        <p className="text-sm text-gray-500">Google Pay, PhonePe, Paytm</p>
                      </div>
                    </div>
                    <input type="radio" checked={selectedMethod === 'upi'} readOnly className="w-5 h-5 accent-blue-600" />
                  </div>
                </div>

                {/* Cash on Service */}
                <div 
                  onClick={() => setSelectedMethod('cash')}
                  className={`border rounded-2xl p-5 cursor-pointer transition-all ${selectedMethod === 'cash' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Icon name="payments" className="text-2xl" />
                      <div>
                        <p className="font-medium">Cash on Service</p>
                        <p className="text-sm text-gray-500">Pay after service is completed</p>
                      </div>
                    </div>
                    <input type="radio" checked={selectedMethod === 'cash'} readOnly className="w-5 h-5 accent-blue-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card Details (shown only if card selected) */}
            {selectedMethod === 'card' && (
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Card Number</label>
                  <input type="text" className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Expiry Date</label>
                    <input type="text" className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">CVV</label>
                    <input type="text" className="w-full p-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-blue-500" placeholder="123" />
                  </div>
                </div>
              </div>
            )}

            <button className="w-full mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl text-lg transition-all active:scale-[0.98]">
              Pay Securely • ${total.toFixed(2)}
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">🔒 Your payment is secure and encrypted</p>
          </div>

          {/* Right Side - Your Selection (Sidebar) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 shadow-sm sticky top-24">
              <h3 className="font-semibold text-lg mb-5">Your Selection</h3>

              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                  </div>
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                </div>
              ))}

              {/* Combo Package */}
              <div className="mt-6 bg-blue-50 border border-blue-100 rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">📦</span>
                    <span className="font-medium">Combo Package</span>
                  </div>
                  <span className="text-green-600 text-sm font-medium">Save 15%</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Complete Bath Overhaul</p>
                <div className="flex justify-between text-sm mt-2">
                  <span className="line-through text-gray-400">$150.00</span>
                  <span className="font-medium">$127.50</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes & Fees</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => alert('Payment Successful! 🎉 (Demo)')}
                className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 rounded-2xl text-lg hover:brightness-105 transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}