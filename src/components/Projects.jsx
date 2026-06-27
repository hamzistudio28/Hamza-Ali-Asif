import React from 'react';

export default function Projects() {
  return (
    <section className="bg-[#0f1929] py-24 border-y border-white/5" id="portfolio">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <h2 className="text-4xl font-bold mb-4">My <span className="text-cyan-400">Latest</span> Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Greetings, fellow digital explorers! I am [Your Name], a passionate and innovative developer.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
          <button className="bg-cyan-500 text-gray-900 px-6 py-2 rounded-full font-bold">All</button>
          <button className="text-gray-400 hover:text-white px-6 py-2 rounded-full border border-gray-700 hover:border-gray-500 transition-colors">Web Development</button>
          <button className="text-gray-400 hover:text-white px-6 py-2 rounded-full border border-gray-700 hover:border-gray-500 transition-colors">Mobile App</button>
          <button className="text-gray-400 hover:text-white px-6 py-2 rounded-full border border-gray-700 hover:border-gray-500 transition-colors">Frontend</button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-[#121d2f] rounded-xl overflow-hidden border border-white/5 hover:border-cyan-400/50 transition-colors group cursor-pointer text-left">
              <div className="h-48 bg-gray-800 overflow-hidden">
                <img src={`https://via.placeholder.com/400x300/1e293b/06b6d4?text=Project+${item}`} alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                <p className="text-sm text-gray-400">Greetings, fellow digital explorer.</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-8 rounded-full transition-colors mt-12">
          See More
        </button>
      </div>
    </section>
  );
}