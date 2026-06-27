import React from 'react';

export default function Stats() {
  return (
    <section className="bg-[#0f1929] py-12 mt-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-10 flex flex-wrap justify-between text-center gap-8">
        <div>
          <h3 className="text-4xl font-bold text-white">1+</h3>
          <p className="text-gray-400 text-sm mt-2">Years Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white">15+</h3>
          <p className="text-gray-400 text-sm mt-2">Project Complete</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white">100%</h3>
          <p className="text-gray-400 text-sm mt-2">Clients Satisfaction</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white">10+</h3>
          <p className="text-gray-400 text-sm mt-2">Technologies Mastered</p>
        </div>
      </div>
    </section>
  );
}