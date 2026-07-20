import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa";
import { RiGithubFill, RiInstagramLine, RiLinkedinBoxFill, RiWhatsappFill, Ri24HoursLine } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0c] text-gray-400 border-t border-zinc-800/80 pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <div className="text-white font-bold text-2xl tracking-tight flex items-center gap-2">
              <span className="text-purple-500">&lt;</span>
              A
              <span className="text-purple-500">/&gt;</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Let's build something amazing together. Reach out for projects, collaborations, or just to say hi.
            </p>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li><a href="#home" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Direct Contact</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-purple-500 shrink-0" size={16} />
                <a href="mailto:ak0052803@gmail.com" className="hover:text-white transition-colors truncate">
                  ak0052803@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-purple-500 shrink-0" size={16} />
                <a href="tel:+918091308651" className="hover:text-white transition-colors">
                  80913-08651
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-purple-500 shrink-0" size={16} />
                <span className="text-gray-500">Chamba, Himachal Pradesh</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Quick Catchup */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Availability</h4>
            <div className="flex items-center gap-3 text-sm text-gray-500 bg-zinc-900/50 border border-zinc-800 rounded-xl p-3">
              <Ri24HoursLine className="text-emerald-500 animate-pulse shrink-0" size={22} />
              <div>
                <p className="text-white font-medium">Open to opportunities</p>
                <p className="text-xs">Freelance & Full-time</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Socials & Copyright Divider */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Social Media Row */}
          <div className="flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-white hover:border-purple-500 transition-all" aria-label="GitHub">
              <RiGithubFill size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-purple-400 hover:border-purple-500 transition-all" aria-label="Instagram">
              <RiInstagramLine size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-blue-400 hover:border-purple-500 transition-all" aria-label="LinkedIn">
              <RiLinkedinBoxFill size={20} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-gray-400 hover:text-emerald-400 hover:border-purple-500 transition-all" aria-label="WhatsApp">
              <RiWhatsappFill size={20} />
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-xs text-gray-600 text-center sm:text-right">
            &copy; {currentYear} ak0052803. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
