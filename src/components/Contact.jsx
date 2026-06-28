import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to handle feedback messages for the user
  const [status, setStatus] = useState('');

  // Handle typing inside inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevents the page from reloading

    // Simple validation check
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    setStatus('Sending...');

    // These variables match the tags inside your EmailJS Template
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };

    // 🛑 REPLACE THESE STRINGS WITH YOUR ACTUAL COPIED CREDENTIALS FROM EMAILJS:
    const SERVICE_ID = 'service_18qa0ww';
    const TEMPLATE_ID = 'template_tzvc5eb';
    const PUBLIC_KEY = 'aYcJsGs1zSn0Yw8eI';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully! 👍');
        // Clear the form fields after successful sending
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('Oops! Something went wrong. Please try again.');
      });
  };

  return (
    <section className="max-w-3xl mx-auto px-10 py-24 min-h-[60vh]">
      <h2 className="text-4xl font-bold mb-4 text-center">Contact <span className="text-cyan-400">Me</span></h2>
      <p className="text-gray-400 text-center mb-10">Have a project in mind? Let's build something awesome together.</p>
      
      <form onSubmit={sendEmail} className="flex flex-col gap-6 bg-[#121d2f] p-8 rounded-xl border border-white/5">
        
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name" 
          className="bg-[#0b1320] border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-cyan-500 text-white" 
        />
        
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email" 
          className="bg-[#0b1320] border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-cyan-500 text-white" 
        />
        
        <textarea 
          rows="5" 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message" 
          className="bg-[#0b1320] border border-gray-700 p-4 rounded-lg focus:outline-none focus:border-cyan-500 text-white"
        ></textarea>
        
        {/* Status indicator message */}
        {status && (
          <p className={`text-sm ${status.includes('successfully') ? 'text-green-400' : 'text-cyan-400'}`}>
            {status}
          </p>
        )}

        <button 
          type="submit" // Crucial: changed button type to submit
          className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors mt-2"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}