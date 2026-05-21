import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Lock, Unlock, AlertTriangle, ShieldCheck, ChevronRight, CornerDownRight } from 'lucide-react';
import { useStore } from '../store/useStore';

const websites = [
  {
    id: 1,
    url: 'http://www.secure-login-microsoft.com/auth',
    isSecure: false,
    title: 'Sign in to your account',
    content: 'Microsoft',
    isPhishing: true,
    redFlags: [
      { text: 'http://', reason: 'Missing HTTPS. Legitimate login pages always use secure connections.' },
      { text: 'secure-login-microsoft.com', reason: 'Fake domain. Real Microsoft logins use login.microsoftonline.com or microsoft.com.' }
    ]
  },
  {
    id: 2,
    url: 'https://github.com/login',
    isSecure: true,
    title: 'Sign in to GitHub',
    content: 'GitHub',
    isPhishing: false,
    redFlags: []
  },
  {
    id: 3,
    url: 'https://login.micros0ft-auth.com/login',
    isSecure: true,
    title: 'Microsoft Sign In',
    content: 'Microsoft',
    isPhishing: true,
    redFlags: [
      { text: 'micros0ft-auth.com', reason: 'Zero used instead of letter O (Homoglyph)' },
      { text: 'login.micros0ft', reason: 'Subdomain trick to look official' }
    ]
  },
  {
    id: 4,
    url: 'http://secure-update-apple.com/id',
    isSecure: false,
    title: 'Apple ID Verification',
    content: 'Apple',
    isPhishing: true,
    redFlags: [
      { text: 'http://', reason: 'No SSL certificate (HTTP instead of HTTPS)' },
      { text: 'secure-update-apple.com', reason: 'Fake domain not owned by Apple' }
    ]
  },
  {
    id: 5,
    url: 'https://www.linkedin.com.secure-login-portal.net/auth',
    isSecure: true,
    title: 'LinkedIn Login',
    content: 'LinkedIn',
    isPhishing: true,
    redFlags: [
      { text: 'secure-login-portal.net', reason: 'This is the actual domain, "www.linkedin.com" is just a subdomain' }
    ]
  },
  {
    id: 6,
    url: 'https://aws.amazon.com/console/',
    isSecure: true,
    title: 'AWS Management Console',
    content: 'AWS',
    isPhishing: false,
    redFlags: []
  },
  {
    id: 7,
    url: 'https://chaese.com/banking/login',
    isSecure: true,
    title: 'Chase Online Banking',
    content: 'Chase',
    isPhishing: true,
    redFlags: [
      { text: 'chaese.com', reason: 'Typosquatting (extra "e" in Chase)' }
    ]
  },
  {
    id: 8,
    url: 'https://192.168.1.104/admin-portal/login',
    isSecure: false,
    title: 'Corporate VPN Portal',
    content: 'VPN',
    isPhishing: true,
    redFlags: [
      { text: '192.168.1.104', reason: 'Using a raw IP address instead of a domain name' },
      { text: 'http://', reason: 'Unencrypted connection for a supposedly secure VPN' }
    ]
  },
  {
    id: 9,
    url: 'https://zoom-us.app-meeting.com/join?id=123456',
    isSecure: true,
    title: 'Launch Zoom Meeting',
    content: 'Zoom',
    isPhishing: true,
    redFlags: [
      { text: 'app-meeting.com', reason: 'Fake domain attempting to look like a generic app host' },
      { text: 'zoom-us', reason: 'Misleading subdomain to build trust' }
    ]
  },
  {
    id: 10,
    url: 'https://slack.com/signin',
    isSecure: true,
    title: 'Slack Sign in',
    content: 'Slack',
    isPhishing: false,
    redFlags: []
  }
];

export const WebSimulation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const addScore = useStore(state => state.addScore);
  
  const currentSite = websites[currentIndex];

  const handleDecision = (decision) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(decision);
    
    const isCorrect = 
      (decision === 'PHISHING' && currentSite.isPhishing) || 
      (decision === 'SAFE' && !currentSite.isPhishing);
      
    if (isCorrect) {
      addScore(50);
    }
    
    setTimeout(() => setShowAnalysis(true), 1000);
  };

  const nextSite = () => {
    setSelectedAnswer(null);
    setShowAnalysis(false);
    setCurrentIndex(prev => (prev + 1) % websites.length);
  };

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Globe className="text-[#00E5FF]" /> 
          Web Reconnaissance
        </h1>
        <p className="text-gray-400">Inspect the target URL and webpage structure. Identify deceptive domains and unsecured connections.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-grow">
        
        {/* Fake Browser */}
        <div className="flex-grow flex flex-col bg-[#060b18] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden relative">
          {/* Browser Chrome */}
          <div className="bg-[#0a1122] border-b border-white/10 p-3 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            
            {/* Address Bar */}
            <div className={`flex-grow flex items-center gap-2 bg-black/40 rounded-md px-3 py-1.5 border transition-colors duration-500 ${showAnalysis && currentSite.isPhishing ? 'border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'border-white/10'}`}>
              {currentSite.isSecure ? (
                <Lock className={`w-4 h-4 ${showAnalysis && currentSite.isPhishing ? 'text-red-500' : 'text-green-400'}`} />
              ) : (
                <Unlock className={`w-4 h-4 ${showAnalysis && currentSite.isPhishing ? 'text-red-500' : 'text-gray-400'}`} />
              )}
              <span className={`font-mono text-sm tracking-wide ${showAnalysis && currentSite.isPhishing ? 'text-red-500' : 'text-gray-200'}`}>
                {currentSite.url}
              </span>
            </div>
          </div>

          {/* Browser Content */}
          <div className="flex-grow bg-white flex flex-col items-center justify-center p-8 relative">
            
            {/* Fake Page Body */}
            <div className="w-full max-w-sm border border-gray-200 rounded-lg p-8 shadow-lg flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-6 flex items-center justify-center text-gray-500 font-bold text-xl">
                {currentSite.content.charAt(0)}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{currentSite.title}</h2>
              <input type="text" placeholder="Email or Username" className="w-full p-3 border border-gray-300 rounded mb-4" disabled />
              <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded mb-6" disabled />
              <button className="w-full py-3 bg-blue-600 text-white rounded font-semibold disabled:opacity-50">Sign In</button>
            </div>

            {/* Analysis Overlay */}
            <AnimatePresence>
              {showAnalysis && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-[#060b18]/95 backdrop-blur-md z-20 flex flex-col p-8"
                >
                  <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${currentSite.isPhishing ? 'text-red-500' : 'text-green-400'}`}>
                    {currentSite.isPhishing ? <AlertTriangle /> : <ShieldCheck />}
                    {currentSite.isPhishing ? 'Malicious Site Detected' : 'Verified Secure Site'}
                  </h3>
                  
                  {currentSite.redFlags.length > 0 ? (
                    <div className="space-y-4">
                      {currentSite.redFlags.map((flag, idx) => (
                        <motion.div 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.2 }}
                          className="bg-red-500/10 border border-red-500/30 p-4 rounded-lg flex flex-col gap-2 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                        >
                          <div className="text-red-500 font-mono font-bold">Target: {flag.text}</div>
                          <div className="text-gray-300 flex gap-2">
                            <CornerDownRight className="w-5 h-5 text-[#00E5FF] shrink-0" />
                            {flag.reason}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-300 text-lg">No anomalies detected. Domain and SSL certificate are valid.</p>
                  )}

                  <div className="mt-auto flex justify-end">
                    <button 
                      onClick={nextSite}
                      className="px-6 py-3 bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/50 hover:bg-[#00E5FF] hover:text-black transition-all rounded font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                    >
                      Next Target <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        {/* Action Panel */}
        <div className="w-full lg:w-80 flex flex-col gap-4 shrink-0">
          <div className="bg-[#060b18] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-xl p-6 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] text-white">Action Required</h3>
            <p className="text-sm text-gray-400 mb-6">Analyze the URL and site properties. Is this a legitimate login portal?</p>
            
            <div className="flex flex-col gap-4 mt-auto">
              <button 
                onClick={() => handleDecision('SAFE')}
                disabled={selectedAnswer !== null}
                className={`w-full py-4 rounded-lg border transition-all font-bold tracking-widest ${selectedAnswer === 'SAFE' ? 'bg-green-500 text-white border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 'bg-[#0a1122] border-white/10 hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400'} ${selectedAnswer !== null && selectedAnswer !== 'SAFE' ? 'opacity-30' : ''}`}
              >
                AUTHORIZE SITE
              </button>
              <button 
                onClick={() => handleDecision('PHISHING')}
                disabled={selectedAnswer !== null}
                className={`w-full py-4 rounded-lg border transition-all font-bold tracking-widest flex justify-center items-center gap-2 ${selectedAnswer === 'PHISHING' ? 'bg-red-500 text-white border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-[#0a1122] border-white/10 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-500'} ${selectedAnswer !== null && selectedAnswer !== 'PHISHING' ? 'opacity-30' : ''}`}
              >
                <AlertTriangle className="w-4 h-4" /> BLOCK SITE
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
