"use client";

import React from 'react';
import { Mail, MapPin, Phone, Github, Linkedin, Instagram, Download } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-lime-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-lime-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out to me through any of the following channels. I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        {/* Contact Information - Horizontal Layout */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-lime-400/30 transition-colors">
              <div className="w-16 h-16 bg-lime-400/20 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-lime-400" />
              </div>
              <h4 className="text-white font-medium mb-2">Email</h4>
              <a 
                href="mailto:rohitamalraj@gmail.com" 
                className="text-gray-400 hover:text-lime-400 transition-colors text-sm"
              >
                rohitamalraj@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-900/30 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-lime-400/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-lime-400" />
              </div>
              <h4 className="text-white font-medium mb-2">Location</h4>
              <p className="text-gray-400 text-sm">Chennai, Tamil Nadu, India</p>
            </div>

            {/* Response Time */}
            <div className="flex flex-col items-center text-center p-6 bg-gray-900/30 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-lime-400/20 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-lime-400" />
              </div>
              <h4 className="text-white font-medium mb-2">Response Time</h4>
              <p className="text-gray-400 text-sm">Usually within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
