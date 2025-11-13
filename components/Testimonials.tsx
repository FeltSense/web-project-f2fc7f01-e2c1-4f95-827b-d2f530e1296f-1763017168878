'use client';

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'CEO',
    company: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'TechBusiness transformed our entire operation. Their expertise in digital transformation helped us increase efficiency by 300% and reduce costs significantly.'
  },
  {
    name: 'Michael Chen',
    title: 'CTO',
    company: 'InnovateCorp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'The custom software solution they built for us was exactly what we needed. Professional, responsive, and delivered on time. Highly recommended!'
  },
  {
    name: 'Emily Rodriguez',
    title: 'Founder',
    company: 'StartupHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    quote: 'Working with TechBusiness was a game-changer. Their team understood our vision and delivered a mobile app that exceeded all our expectations.'
  },
  {
    name: 'David Thompson',
    title: 'Operations Director',
    company: 'Global Solutions',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'Their cloud migration strategy saved us thousands in infrastructure costs while improving our system performance. Outstanding work from start to finish.'
  },
  {
    name: 'Lisa Anderson',
    title: 'VP of Technology',
    company: 'Enterprise Co.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    quote: 'The cybersecurity solutions provided by TechBusiness gave us peace of mind. Their attention to detail and proactive approach is unmatched.'
  },
  {
    name: 'James Wilson',
    title: 'Managing Director',
    company: 'DataFlow Systems',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    quote: 'The analytics platform they developed revolutionized how we make business decisions. Data-driven insights at our fingertips. Absolutely brilliant!'
  }
];

export default function Testimonials() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-blue-500/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}