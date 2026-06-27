import React from 'react';

export default function About() {
  const skills = [
    { skill: 'Figma', percentage: '90%' },
    { skill: 'HTML', percentage: '80%' },
    { skill: 'CSS', percentage: '75%' },
    { skill: 'Java Script', percentage: '85%' },
    { skill: 'User Interface', percentage: '95%' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-10 py-24 border-t border-white/5" id="about">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">More <span className="text-cyan-400">About</span> Me</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
         "Welcome! I am Hamza, a passionate developer turning complex problems into elegant, high-performance digital solutions."
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Education Timeline */}
        <div className="flex-1 space-y-8">
          <h3 className="text-2xl font-bold mb-6">My Education</h3>
          
          <div className="relative pl-6 border-l border-cyan-500/30">
            <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1"></div>
            <p className="text-sm text-cyan-400 font-semibold mb-1">2026 - Present</p>
            <h4 className="text-lg font-bold mb-2">BS-Computer Engineering</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              "Hello! I am Hamza Ali Asif, a web developer focused on building clean, responsive, and user-centric web applications."
            </p>
          </div>

          <div className="relative pl-6 border-l border-cyan-500/30">
            <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1"></div>
            <p className="text-sm text-cyan-400 font-semibold mb-1">2025 - 2025</p>
            <h4 className="text-lg font-bold mb-2">Web Development</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              "Hi there, I'm Hamza. I design and build modern web experiences that bridge the gap between aesthetics and performance."
            </p>
          </div>
        </div>

        {/* Skills Progress Bars */}
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-bold mb-6">My Skills</h3>
          {skills.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-white">{item.skill}</span>
                <span className="text-gray-400">{item.percentage}</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-1.5">
                <div className="bg-cyan-500 h-1.5 rounded-full" style={{ width: item.percentage }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}