import React from 'react';

export default function Resume() {
  return (
    <section className="max-w-4xl mx-auto px-10 py-24 min-h-[60vh] text-center">
      <h2 className="text-4xl font-bold mb-8">My <span className="text-cyan-400">Resume</span></h2>
      <div className="bg-[#121d2f] p-12 rounded-xl border border-white/5 mb-8">
        <h3 className="text-2xl font-bold mb-4">Frontend Developer</h3>
        <p className="text-gray-400 mb-6">Passionate developer with expertise in React, Tailwind CSS, and modern web architectures.</p>
        {/* You can add more resume details here later! */}
      </div>
      <a 
        href="/my-resume.pdf" 
        download 
        className="inline-block bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-10 rounded-full transition-colors"
      >
        Download PDF Version
      </a>
    </section>
  );
}