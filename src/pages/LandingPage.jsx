import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, Shield, Lock, AlertTriangle, 
  CreditCard, ChevronRight, BookOpen, Search, 
  Target, BarChart3, ScanFace, Activity, Cpu, 
  MailWarning, Monitor, Ghost, ShieldCheck, Brain,
  ArrowRight
} from 'lucide-react';

const miniStats = [
  { icon: ScanFace, title: 'Highly specialized', desc: 'Focus on social engineering.', color: 'text-[#00E5FF]', bg: 'bg-[#00E5FF]/10', border: 'border-[#00E5FF]/30' },
  { icon: Activity, title: '24/7 Monitoring', desc: 'Continuous threat analysis.', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
  { icon: Target, title: 'Live Scenarios', desc: 'Real-world attack simulations.', color: 'text-[#00E5FF]', bg: 'bg-[#00E5FF]/10', border: 'border-[#00E5FF]/30' },
  { icon: Cpu, title: 'AI Driven', desc: 'Adaptive learning pathways.', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' },
];

const modules = [
  { icon: MailWarning, title: 'Phishing Email', desc: 'Analyze complex email structures to identify sophisticated spoofing and deceptive tactics.', link: '/inbox', theme: 'pink' },
  { icon: Monitor, title: 'Fake Websites', desc: 'Inspect URLs and page sources to differentiate legitimate portals from clones.', link: '/web', theme: 'cyan' },
  { icon: Ghost, title: 'Quiz Arena', desc: 'Test your reflexes against rapid-fire threat identification scenarios.', link: '/quiz', theme: 'purple' },
  { icon: ShieldCheck, title: 'Analytics', desc: 'Review your performance metrics and identify specific areas for improvement.', link: '/dashboard', theme: 'cyan' },
  { icon: Brain, title: 'Education', desc: 'Study the latest intelligence on emerging phishing vectors and social engineering.', link: '/education', theme: 'pink' },
];

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-full text-white bg-transparent">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-12 pt-24 pb-16 flex flex-col md:flex-row items-center justify-between z-10 gap-12">
        
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start text-left z-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/5 mb-6"
          >
            <Shield className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span className="text-[10px] font-bold tracking-widest text-[#00E5FF] uppercase">Cyber Security</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
          >
            Defend Yourself <br />
            Against Phishing <br />
            <span className="text-[#00E5FF]">Threats</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-md mb-8 text-sm md:text-base leading-relaxed"
          >
            Interactive cybersecurity awareness and phishing simulation platform. Train your instincts against advanced social engineering attacks.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <Link to="/education" className="px-6 py-3 bg-[#00E5FF] text-black font-semibold rounded hover:bg-white transition-colors duration-300 shadow-[0_0_15px_rgba(0,229,255,0.4)] flex items-center gap-2">
              Start Simulation <ChevronRight className="w-4 h-4" />
            </Link>
            <Link to="/dashboard" className="px-6 py-3 border border-white/20 text-white font-semibold rounded hover:bg-white/5 transition-colors duration-300 flex items-center gap-2">
              View Analytics
            </Link>
          </motion.div>

          {/* Mini Stats Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full"
          >
            {miniStats.map((stat, i) => (
              <div key={i} className="flex flex-col p-4 bg-[#0a1122]/90 border border-white/5 rounded-xl hover:border-white/20 transition-all duration-300 shadow-lg">
                <div className={`w-8 h-8 rounded-lg ${stat.bg} ${stat.border} border flex items-center justify-center mb-3 shadow-[0_0_10px_currentColor] ${stat.color}`}>
                  <stat.icon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{stat.title}</h4>
                <p className="text-xs text-gray-500 leading-tight">{stat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Graphic / 3D Composition */}
        <div className="flex-1 relative h-[500px] w-full flex items-center justify-center z-10 hidden md:flex">
          {/* Glowing pedestal / rings */}
          <div className="absolute bottom-10 w-64 h-16 bg-[#00E5FF] blur-[80px] opacity-20 rounded-[100%]"></div>
          <div className="absolute bottom-20 w-[400px] h-[100px] border border-[#00E5FF]/20 rounded-[100%] transform -rotate-12"></div>
          <div className="absolute bottom-24 w-[300px] h-[80px] border border-[#00E5FF]/40 rounded-[100%] transform -rotate-12"></div>

          {/* Central Shield Graphic */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-48 h-56 bg-gradient-to-b from-[#0a1738] to-[#040814] border border-[#00E5FF]/40 rounded-xl flex items-center justify-center shadow-[0_0_50px_rgba(0,229,255,0.2)] backdrop-blur-md"
          >
            <Lock className="w-20 h-20 text-[#00E5FF] drop-shadow-[0_0_15px_#00E5FF]" />
            {/* Subtle tech lines */}
            <div className="absolute inset-x-0 top-1/4 border-t border-[#00E5FF]/10"></div>
            <div className="absolute inset-x-0 bottom-1/4 border-t border-[#00E5FF]/10"></div>
          </motion.div>

          {/* Floating Warning */}
          <motion.div 
            animate={{ y: [10, -10, 10], x: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-20 right-10 z-30 p-4 bg-gradient-to-b from-red-900/40 to-black border border-red-500/30 rounded-lg backdrop-blur-md transform rotate-12 shadow-[0_0_20px_rgba(255,0,0,0.2)]"
          >
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </motion.div>

          {/* Floating Credit Card */}
          <motion.div 
            animate={{ y: [5, -5, 5], x: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-32 left-10 z-30 p-4 bg-gradient-to-b from-purple-900/40 to-black border border-purple-500/30 rounded-lg backdrop-blur-md transform -rotate-6 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            <CreditCard className="w-8 h-8 text-purple-400" />
          </motion.div>
        </div>
      </section>

      {/* 2. EXPLORE MODULES SECTION */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-12 py-16 relative z-10">
        <div className="mb-12 text-left">
          <h2 className="text-3xl font-bold mb-2">Explore Our Learning Modules</h2>
          <p className="text-gray-400 text-sm">Interactive labs designed to harden your defenses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {modules.map((mod, i) => {
            const isPink = mod.theme === 'pink';
            const isCyan = mod.theme === 'cyan';
            const isPurple = mod.theme === 'purple';
            
            const shadowColor = isPink ? 'rgba(236,72,153,0.3)' : isCyan ? 'rgba(0,229,255,0.3)' : 'rgba(168,85,247,0.3)';
            const topGlowColor = isPink ? 'via-pink-500' : isCyan ? 'via-[#00E5FF]' : 'via-purple-500';
            const iconBgClass = isPink ? 'bg-pink-500/10 border-pink-500/40 text-pink-400' : isCyan ? 'bg-[#00E5FF]/10 border-[#00E5FF]/40 text-[#00E5FF]' : 'bg-purple-500/10 border-purple-500/40 text-purple-400';
            
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col p-6 bg-[#060b18] border border-white/5 rounded-2xl hover:border-white/10 transition-all h-full"
                style={{ boxShadow: `0 4px 30px rgba(0,0,0,0.5)` }}
              >
                {/* Glowing top edge line like in the image */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent ${topGlowColor} to-transparent rounded-t-2xl opacity-60`}></div>
                
                {/* Center glowing background behind the icon */}
                <div 
                  className="absolute top-12 left-1/2 -translate-x-1/2 w-24 h-24 blur-[40px] rounded-full z-0 opacity-40 transition-opacity group-hover:opacity-60"
                  style={{ backgroundColor: isPink ? '#ec4899' : isCyan ? '#00E5FF' : '#a855f7' }}
                ></div>
                
                <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg ${iconBgClass}`}>
                  <mod.icon className="w-6 h-6 drop-shadow-[0_0_8px_currentColor]" />
                </div>
                
                <h3 className="relative z-10 text-lg font-bold mb-3">{mod.title}</h3>
                <p className="relative z-10 text-xs text-gray-400 mb-8 leading-relaxed flex-grow">{mod.desc}</p>
                
                <Link to={mod.link} className={`relative z-10 text-xs font-semibold flex items-center gap-2 group-hover:gap-3 transition-all ${isPink ? 'text-pink-400' : isCyan ? 'text-[#00E5FF]' : 'text-purple-400'}`}>
                  Start Simulation <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-10 flex justify-center">
          <Link to="/education" className="px-6 py-2 border border-white/10 rounded text-sm font-semibold hover:bg-white/5 transition-colors">
            View all modules
          </Link>
        </div>
      </section>



      {/* 4. BOTTOM CTA */}
      <section className="w-full max-w-7xl mx-auto px-4 md:px-12 py-16 relative z-10 mb-8">
        <div className="bg-[#0a1122] border border-white/5 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#00E5FF]/10 to-transparent"></div>
          
          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#00E5FF]/10 flex items-center justify-center border border-[#00E5FF]/30">
              <Shield className="w-8 h-8 text-[#00E5FF]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Ready to strengthen your cyber security?</h3>
              <p className="text-gray-400 text-sm">Join thousands of users defending against modern threats.</p>
            </div>
          </div>
          
          <div className="relative z-10">
            <Link to="/education" className="px-8 py-4 bg-gradient-to-r from-[#00E5FF] to-[#0088FF] text-white font-semibold rounded hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 whitespace-nowrap">
              Initialize Protocol
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
