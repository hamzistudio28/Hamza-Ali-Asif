import React from 'react';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-10 py-24 min-h-[60vh]">
      <h2 className="text-4xl font-bold mb-4 text-center">Contact <span className="text-cyan-400">Me</span></h2>
      <p className="text-gray-400 text-center mb-10">Have a project in mind? Let's build something awesome together.</p>
      
      <form className="flex flex-col gap-6 bg-[#121d2f] p-8 rounded-xl border border-white/5">
        <input type="text" placeholder="Your Name" className="bg-[#0b1320] border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-cyan-500 text-white" />
        <input type="email" placeholder="Your Email" className="bg-[#0b1320] border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-cyan-500 text-white" />
        <textarea rows="5" placeholder="Your Message" className="bg-[#0b1320] border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-cyan-500 text-white"></textarea>
        <button type="button" className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors mt-2">
          Send Message
        </button>
      </form>
    </section>
  );
}