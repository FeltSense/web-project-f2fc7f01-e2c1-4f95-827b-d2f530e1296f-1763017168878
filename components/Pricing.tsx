'use client';

import { Check } from 'lucide-react';

const features = [
  'Full source code access',
  'Commercial license included',
  'Responsive design',
  'Modern tech stack',
  'Free updates for 30 days',
  'Email support',
  'Documentation included',
  'Easy customization'
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our comprehensive technology solution package designed for businesses of all sizes.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">Professional Package</h3>
              <div className="flex items-baseline justify-center">
                <span className="text-6xl font-bold text-white">$29</span>
                <span className="text-xl text-blue-100 ml-2">one-time</span>
              </div>
              <p className="text-blue-100 mt-4">Everything you need to get started</p>
            </div>

            <div className="px-8 py-12">
              <ul className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Check className="text-green-600" size={16} />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Started Now
              </a>

              <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <Check className="text-green-600 mr-1" size={16} />
                  <span>Secure Payment</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-green-600 mr-1" size={16} />
                  <span>Instant Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            Need a custom enterprise solution?
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-600 font-semibold ml-2 hover:text-blue-700 transition-colors"
            >
              Contact us for a quote
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}