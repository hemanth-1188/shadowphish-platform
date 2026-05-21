import React from 'react';
import { Shield } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { ThreeBackground } from './ThreeBackground';

const navItems = [
  { path: '/', label: 'HOME' },
  { path: '/education', label: 'EDUCATION' },
  { path: '/inbox', label: 'PHISHING EMAILS' },
  { path: '/web', label: 'FAKE WEBSITES' },
  { path: '/quiz', label: 'QUIZ ARENA' },
  { path: '/dashboard', label: 'DASHBOARD' },
];

export const CyberLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen text-white font-sans selection:bg-cyan-400 selection:text-black">
      <ThreeBackground />
      
      {/* Navbar exactly matching the image */}
      <header className="fixed top-0 w-full z-50 bg-[#040814]/80 backdrop-blur-md h-20 flex items-center px-4 md:px-12 border-b border-white/5">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2 flex-1">
          <Shield className="w-6 h-6 text-[#00E5FF]" />
          <span className="font-semibold text-lg tracking-wide text-white">ShadowPhish</span>
        </div>
        
        {/* Center: Nav Links */}
        <nav className="hidden lg:flex gap-8 items-center justify-center flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-xs tracking-wider font-semibold transition-colors duration-300 ${
                  isActive 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="flex-1 flex justify-end">
          <Link 
            to="/education"
            className="px-6 py-2.5 bg-gradient-to-r from-[#00E5FF] to-[#0088FF] text-white font-semibold text-sm rounded hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 shadow-md"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 pt-20 flex flex-col min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex-grow flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#03060f] border-t border-white/5 pt-16 pb-8 px-4 md:px-12 mt-auto z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-[#00E5FF]" />
              <span className="font-semibold text-lg">ShadowPhish</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Advanced interactive cybersecurity awareness and phishing simulation platform designed for the modern threat landscape.
            </p>
          </div>
          
          <div className="flex gap-16">
            <div>
              <h4 className="font-semibold text-white mb-4">Modules</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><Link to="/education" className="hover:text-[#00E5FF] transition-colors">Education</Link></li>
                <li><Link to="/inbox" className="hover:text-[#00E5FF] transition-colors">Phishing Emails</Link></li>
                <li><Link to="/web" className="hover:text-[#00E5FF] transition-colors">Fake Websites</Link></li>
                <li><Link to="/quiz" className="hover:text-[#00E5FF] transition-colors">Quiz Arena</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-[#00E5FF] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#00E5FF] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#00E5FF] transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center border-t border-white/5 pt-8 text-xs text-gray-600">
          © {new Date().getFullYear()} ShadowPhish Security. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
