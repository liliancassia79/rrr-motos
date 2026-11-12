import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8 hover:border-orange-500 transition-all duration-300 relative">
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-16 h-16 text-orange-500" />
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
        ))}
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed relative z-10">"{testimonial.text}"</p>

      <div className="border-t border-gray-800 pt-4">
        <h4 className="text-white mb-1">{testimonial.name}</h4>
        <p className="text-sm text-gray-400">{testimonial.bike}</p>
        <p className="text-xs text-gray-500 mt-2">{testimonial.date}</p>
      </div>
    </div>
  );
}
