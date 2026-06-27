import React from 'react';

export default function Services() {
  const services = [
    { title: "Frontend Develop", desc: "Greetings, fellow digital explorers! I am a passionate developer." },
    { title: "Backend Develop", desc: "Greetings, fellow digital explorers! I am a passionate developer." },
    { title: "UI/UX Design", desc: "Greetings, fellow digital explorers! I am a passionate developer." },
    { title: "Project Management", desc: "Greetings, fellow digital explorers! I am a passionate developer." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-10 py-24 flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl font-bold mb-4">My <span className="text-cyan-400">Services</span></h2>
        <p className="text-gray-400 leading-relaxed">
          Greetings, fellow digital explorers! I am Hamza, a passionate and innovative developer dedicated to crafting immersive digital experiences. Welcome to my online abode.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-8 rounded-full transition-colors mt-4">
          Read More
        </button>
      </div>
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((srv, idx) => (
          <div key={idx} className="bg-[#121d2f] p-8 rounded-xl border border-white/5 hover:border-cyan-400/50 transition-colors shadow-lg">
            <h4 className="text-xl font-semibold mb-3">{srv.title}</h4>
            <p className="text-sm text-gray-400">{srv.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}