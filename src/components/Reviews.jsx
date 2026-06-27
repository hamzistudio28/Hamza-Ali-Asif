import React from 'react';

export default function Reviews() {
  const reviews = [
    { name: "Sarah Jenkins", role: "CEO", text: "An absolute pleasure to work with. Delivered our frontend perfectly on time!" },
    { name: "Mike Ross", role: "Designer", text: "His attention to UI details and animations is incredible. Highly recommended." }
  ];

  return (
    <section className="max-w-7xl mx-auto px-10 py-24 min-h-[60vh]">
      <h2 className="text-4xl font-bold mb-12 text-center">Client <span className="text-cyan-400">Reviews</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-[#121d2f] p-8 rounded-xl border border-white/5 shadow-lg">
            <p className="text-gray-400 italic mb-6">"{rev.text}"</p>
            <h4 className="text-xl font-bold text-white">{rev.name}</h4>
            <p className="text-cyan-400 text-sm">{rev.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}