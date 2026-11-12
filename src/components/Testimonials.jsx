import React from 'react';
import { Star } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/testimonials';

export function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 text-sm tracking-wider uppercase">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl text-white mt-2 mb-4">
            O Que Dizem{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Nossos Clientes</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A satisfação dos nossos clientes é nossa maior conquista</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div>
              <div className="text-5xl text-black mb-2">4.9/5.0</div>
              <div className="flex gap-1 justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-black text-black" />
                ))}
              </div>
              <p className="text-black/80">Baseado em 287 avaliações</p>
            </div>
            <div className="hidden md:block w-px h-20 bg-black/20"></div>
            <div className="text-black">
              <p className="text-2xl mb-2">98% dos clientes</p>
              <p className="text-black/80">recomendam nossos serviços</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
