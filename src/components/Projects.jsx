// 1. FIXED: Imported useState here
import React, { useState } from 'react'; 

// Import your actual media here!
import Proj1 from '../assets/project1.png';
import Proj2 from '../assets/project2.png';
import Proj3 from '../assets/project3.png';
import Proj4 from '../assets/project4.mp4';

export default function Projects() {
  
  // 2. FIXED: Added the missing state variable right here!
  const [selectedProject, setSelectedProject] = useState(null);

  const myProjects = [
    {
      id: 1,
      title: "Corporate Business Service Provider",
      description: "A comprehensive corporate platform for a leading power and infrastructure solutions company.",
      detailedDescription: "The Shaqurri website is a comprehensive corporate platform representing a leading power and infrastructure solutions company based in Pakistan. It serves as both a digital company profile and a Business-to-Business (B2B) lead-generation tool, aimed at industrial and commercial clients.",
      image: Proj1,
      link: "https://shaqurri.com/", 
    },
    {
      id: 2,
      title: "PCB Designer Portfolio",
      description: "A specialized personal portfolio designed for a professional Printed Circuit Board (PCB) Designer.",
      detailedDescription: "The Shuja Chaudhary website is a specialized personal portfolio designed for a professional Printed Circuit Board (PCB) Designer. It serves as a digital resume and project showcase, highlighting his technical expertise in electronic engineering and hardware development.",
      image: Proj2, 
      link: "#", 
    },
    {
      id: 3,
      title: "Personal Developer Portfolio",
      description: "A modern, interactive personal portfolio serving as a digital resume and project showcase.",
      detailedDescription: "The website 'Hamza Ali Asif - Web Developer' is a modern, interactive personal portfolio. It serves as a digital resume and project showcase, designed to highlight Hamza's skills in web development, UI/UX design, and creating immersive web experiences.",
      image: Proj3, 
      link: "https://hamzistudio28.github.io/Hamza-Ali-Asif/",
    },
    {
      id: 4,
      title: "Ecommerce Store",
      description: "An advanced ecommerce platform featuring dynamic shopping cart management and secure checkout.",
      detailedDescription: "A full-stack e-commerce store with dynamic routing, product filtering, and a seamless shopping cart experience. Built to demonstrate scalable architecture and modern UI principles.",
      video: Proj4, 
      link: "#", 
    }
  ];

  return (
    <section className="bg-[#0f1929] py-24 border-y border-white/5 relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-10 text-center">
        
        <h2 className="text-4xl font-bold mb-4">My <span className="text-cyan-400">Latest</span> Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Greetings, fellow digital explorers! I am Hamza Ali Asif, a passionate and innovative developer dedicated to building seamless web applications.
        </p>


        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="bg-[#121d2f] rounded-xl overflow-hidden border border-white/5 hover:border-cyan-400/50 transition-colors group cursor-pointer text-left flex flex-col"
            >
              
              <div className="h-48 bg-gray-800 overflow-hidden relative">
                {project.video ? (
                  <video 
                    src={project.video} 
                    autoPlay loop muted playsInline 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                )}
              </div>
              
              <div className="p-6 flex-grow">
                <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>

            </div>
          ))}
        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-2 px-8 rounded-full transition-colors mt-12">
          See More
        </button>
      </div>

      {/* =========================================
          4. THE POP-UP MODAL UI
      ========================================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          
          {/* Blurred Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content Box */}
          <div className="relative bg-[#121d2f] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row transform transition-all duration-300">
            
            {/* Close 'X' Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-gray-800 hover:bg-cyan-500 hover:text-gray-900 text-white p-2 rounded-full z-10 transition-colors focus:outline-none"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Left Side: Image/Video */}
            <div className="w-full md:w-1/2 bg-gray-900">
              {selectedProject.video ? (
                <video 
                  src={selectedProject.video} 
                  autoPlay loop muted playsInline 
                  className="w-full h-full object-cover min-h-[250px] md:min-h-full"
                />
              ) : (
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover min-h-[250px] md:min-h-full"
                />
              )}
            </div>

            {/* Right Side: Information & Link */}
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-left">
              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {selectedProject.detailedDescription}
              </p>
              
              <div className="mt-auto">
                <a 
                  href={selectedProject.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transform hover:-translate-y-0.5"
                >
                  Visit Live Website
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}