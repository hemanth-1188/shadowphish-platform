import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, ShieldAlert, Users, Link as LinkIcon, Download, Smartphone, Briefcase, 
  GlobeLock, Cpu, ShieldCheck, Mail, Target, Phone, Copy, Search, ServerCrash, 
  AlertTriangle, Lock, Eye, HelpCircle, Activity, ChevronRight, CheckCircle, ArrowDown 
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const ModuleHeader = ({ title, subtitle, icon: Icon, moduleNum }) => (
  <div className="mb-8 border-b border-[#00E5FF]/20 pb-4 mt-24 first:mt-8">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-[#00E5FF] font-mono font-bold tracking-widest text-sm bg-[#00E5FF]/10 px-3 py-1 rounded">MODULE {moduleNum}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-3 flex items-center gap-4">
      <Icon className="w-10 h-10 text-[#00E5FF] drop-shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
      {title}
    </h2>
    <p className="text-gray-400 text-lg">{subtitle}</p>
  </div>
);

const FlowchartNode = ({ title, description, icon: Icon, color = "cyan", className="" }) => {
  const colorMap = {
    cyan: "border-[#00E5FF]/40 text-[#00E5FF] bg-[#00E5FF]/5 shadow-[0_0_15px_rgba(0,229,255,0.15)]",
    purple: "border-purple-500/40 text-purple-400 bg-purple-500/5 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    red: "border-red-500/40 text-red-500 bg-red-500/5 shadow-[0_0_15px_rgba(239,68,68,0.15)]",
    green: "border-green-500/40 text-green-400 bg-green-500/5 shadow-[0_0_15px_rgba(34,197,94,0.15)]",
    yellow: "border-yellow-500/40 text-yellow-400 bg-yellow-500/5 shadow-[0_0_15px_rgba(234,179,8,0.15)]",
  };

  return (
    <div className={`flex flex-col items-center p-4 border rounded-xl w-full max-w-xs text-center relative z-10 ${colorMap[color]} ${className}`}>
      {Icon && <Icon className="w-8 h-8 mb-3" />}
      <h4 className="font-bold text-white mb-1">{title}</h4>
      {description && <p className="text-xs text-gray-400">{description}</p>}
    </div>
  );
};

const FlowArrow = () => (
  <div className="flex flex-col items-center my-2">
    <div className="w-0.5 h-8 bg-gradient-to-b from-[#00E5FF]/50 to-purple-500/50"></div>
    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-purple-500/50"></div>
  </div>
);

export const Education = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full pb-32 px-4 lg:px-8">
      
      {/* Master Header */}
      <div className="mb-8 text-center pt-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center justify-center w-24 h-24 bg-[#00E5FF]/10 rounded-2xl mb-6 border border-[#00E5FF]/30 shadow-[0_0_30px_rgba(0,229,255,0.2)]"
        >
          <BookOpen className="w-12 h-12 text-[#00E5FF] drop-shadow-[0_0_10px_currentColor]" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">Cyber Intelligence Curriculum</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          The complete educational module for the ShadowPhish platform. Understand phishing attacks, fake websites, scam emails, social engineering, and cyber safety awareness.
        </p>
      </div>

      {/* ================= MODULE 1 ================= */}
      <FadeIn>
        <ModuleHeader moduleNum="1" title="What is Phishing?" subtitle="Introduction to Phishing" icon={ShieldAlert} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Phishing is a cyberattack where attackers trick users into revealing sensitive information such as passwords, banking details, OTPs, email credentials, and personal information by pretending to be trusted organizations or legitimate websites.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#0a1122] p-4 rounded-lg border border-white/5">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Target className="w-4 h-4 text-purple-400" /> Attackers Impersonate</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Banks</li>
                  <li>• Social media platforms</li>
                  <li>• Payment services</li>
                  <li>• Delivery companies</li>
                  <li>• Government organizations</li>
                  <li>• Recruiters</li>
                  <li>• Technical support teams</li>
                </ul>
              </div>
              <div className="bg-[#0a1122] p-4 rounded-lg border border-white/5">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2"><ServerCrash className="w-4 h-4 text-red-500" /> Main Purpose</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• Stealing credentials</li>
                  <li>• Financial fraud</li>
                  <li>• Identity theft</li>
                  <li>• Malware distribution</li>
                  <li>• Unauthorized account access</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#060b18] p-8 rounded-xl border border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#00E5FF] mb-6 tracking-widest uppercase">How Phishing Works</h3>
            <FlowchartNode color="purple" icon={Mail} title="Attacker Creates Fake Email" />
            <FlowArrow />
            <FlowchartNode color="cyan" icon={Smartphone} title="Victim Receives Message" />
            <FlowArrow />
            <FlowchartNode color="red" icon={LinkIcon} title="Victim Clicks Malicious Link" />
            <FlowArrow />
            <FlowchartNode color="yellow" icon={GlobeLock} title="Victim Visits Fake Website" />
            <FlowArrow />
            <FlowchartNode color="red" icon={Lock} title="Victim Enters Credentials" />
            <FlowArrow />
            <FlowchartNode color="purple" icon={AlertTriangle} title="Attacker Steals Information" />
          </div>
        </div>
      </FadeIn>

      {/* ================= MODULE 2 ================= */}
      <FadeIn delay={0.2}>
        <ModuleHeader moduleNum="2" title="Types of Phishing Attacks" subtitle="Explore the different vectors attackers use." icon={Users} />
        
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#060b18] p-6 rounded-xl border border-white/10 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">1. Email Phishing</h3>
              <p className="text-gray-400 text-sm mb-4">The most common phishing attack where attackers send fake emails pretending to be trusted companies.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fake bank verification</li>
                <li>• Password reset scams</li>
                <li>• Fake invoices</li>
                <li>• Suspicious attachments</li>
              </ul>
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-xs text-red-400">
                Warning: Urgent language, suspicious sender, spelling mistakes.
              </div>
            </div>

            <div className="bg-[#060b18] p-6 rounded-xl border border-white/10 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">2. Spear Phishing</h3>
              <p className="text-gray-400 text-sm mb-4">Targets specific individuals using personalized info (names, job roles, social media).</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fake HR email</li>
                <li>• Fake CEO request</li>
                <li>• Fake recruiter communication</li>
              </ul>
            </div>

            <div className="bg-[#060b18] p-6 rounded-xl border border-white/10 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">3. Smishing</h3>
              <p className="text-gray-400 text-sm mb-4">Phishing through SMS or text messages.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fake parcel delivery</li>
                <li>• Fake OTP alerts</li>
                <li>• Suspicious payment links</li>
              </ul>
            </div>

            <div className="bg-[#060b18] p-6 rounded-xl border border-white/10 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">4. Vishing</h3>
              <p className="text-gray-400 text-sm mb-4">Phishing through voice calls.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Fake bank officers</li>
                <li>• Fake police</li>
                <li>• Fake tech support</li>
              </ul>
            </div>

            <div className="bg-[#060b18] p-6 rounded-xl border border-white/10 shadow-lg">
              <h3 className="text-xl font-bold text-white mb-2">5. Clone Phishing</h3>
              <p className="text-gray-400 text-sm mb-4">Copies legitimate emails and replaces safe links with malicious links.</p>
            </div>
          </div>

          <div className="bg-[#0a1122] p-8 rounded-xl border border-[#00E5FF]/20 flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#00E5FF] mb-8 uppercase tracking-widest">Phishing Attacks Tree</h3>
            
            <FlowchartNode color="purple" icon={Target} title="Phishing Attacks" />
            <div className="w-1 h-8 bg-purple-500/50"></div>
            <div className="w-full max-w-3xl border-t-2 border-purple-500/50 h-8 flex justify-between relative">
              <div className="absolute top-0 left-0 w-1 h-8 bg-purple-500/50"></div>
              <div className="absolute top-0 left-1/4 w-1 h-8 bg-purple-500/50"></div>
              <div className="absolute top-0 left-2/4 w-1 h-8 bg-purple-500/50"></div>
              <div className="absolute top-0 left-3/4 w-1 h-8 bg-purple-500/50"></div>
              <div className="absolute top-0 right-0 w-1 h-8 bg-purple-500/50"></div>
            </div>
            
            <div className="w-full max-w-4xl grid grid-cols-5 gap-2 text-center">
              <div className="bg-[#060b18] border border-white/10 p-2 rounded text-xs text-white">Email Phishing<br/><span className="text-gray-500">Fake company emails</span></div>
              <div className="bg-[#060b18] border border-white/10 p-2 rounded text-xs text-white">Spear Phishing<br/><span className="text-gray-500">Targeted intel</span></div>
              <div className="bg-[#060b18] border border-white/10 p-2 rounded text-xs text-white">Smishing<br/><span className="text-gray-500">SMS / Texts</span></div>
              <div className="bg-[#060b18] border border-white/10 p-2 rounded text-xs text-white">Vishing<br/><span className="text-gray-500">Voice calls</span></div>
              <div className="bg-[#060b18] border border-white/10 p-2 rounded text-xs text-white">Clone Phishing<br/><span className="text-gray-500">Copied emails</span></div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* ================= MODULE 3 ================= */}
      <FadeIn delay={0.2}>
        <ModuleHeader moduleNum="3" title="Fake Website Detection" subtitle="How Fake Websites Trick Users" icon={Search} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Attackers create fake websites that look identical to real websites to steal login credentials and financial information.
            </p>
            <ul className="text-gray-400">
              <li>• Fake PayPal login</li>
              <li>• Fake banking portals</li>
              <li>• Fake Instagram pages</li>
              <li>• Fake Gmail login screens</li>
            </ul>

            <h4 className="text-red-400 font-bold uppercase mt-6">Suspicious Indicators</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-red-500/10 border border-red-500/30 px-3 py-1 rounded text-red-300">Fake domain names</span>
              <span className="bg-red-500/10 border border-red-500/30 px-3 py-1 rounded text-red-300">Missing HTTPS</span>
              <span className="bg-red-500/10 border border-red-500/30 px-3 py-1 rounded text-red-300">Spelling mistakes</span>
              <span className="bg-red-500/10 border border-red-500/30 px-3 py-1 rounded text-red-300">Suspicious popups</span>
              <span className="bg-red-500/10 border border-red-500/30 px-3 py-1 rounded text-red-300">Poor website quality</span>
              <span className="bg-red-500/10 border border-red-500/30 px-3 py-1 rounded text-red-300">Urgency warnings</span>
            </div>

            <div className="space-y-4 mt-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 p-3 rounded">
                  <span className="text-green-400 text-xs font-bold block mb-1">REAL:</span>
                  <span className="text-white font-mono text-sm">paypal.com</span>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded">
                  <span className="text-red-400 text-xs font-bold block mb-1">FAKE:</span>
                  <span className="text-white font-mono text-sm">paypa1-security.com</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-500/10 border border-green-500/30 p-3 rounded">
                  <span className="text-green-400 text-xs font-bold block mb-1">REAL:</span>
                  <span className="text-white font-mono text-sm">amazon.com</span>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 p-3 rounded">
                  <span className="text-red-400 text-xs font-bold block mb-1">FAKE:</span>
                  <span className="text-white font-mono text-sm">amazon-login-security.net</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#060b18] p-8 rounded-xl border border-white/5 shadow-xl flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#00E5FF] mb-6 uppercase tracking-widest">Fake Website Attack Flow</h3>
            <FlowchartNode color="cyan" title="Victim Receives Fake Link" />
            <FlowArrow />
            <FlowchartNode color="yellow" title="Victim Opens Fake Website" />
            <FlowArrow />
            <FlowchartNode color="purple" title="Website Mimics Legitimate Brand" />
            <FlowArrow />
            <FlowchartNode color="red" title="Victim Enters Login Credentials" />
            <FlowArrow />
            <FlowchartNode color="red" title="Attacker Receives Credentials" />
            <FlowArrow />
            <FlowchartNode color="red" icon={ServerCrash} title="Account Compromise Occurs" />
          </div>
        </div>
      </FadeIn>

      {/* ================= MODULE 4 ================= */}
      <FadeIn delay={0.2}>
        <ModuleHeader moduleNum="4" title="Social Engineering" subtitle="Psychological Manipulation in Cyberattacks" icon={Cpu} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#060b18] p-8 rounded-xl border border-white/5 shadow-xl flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#00E5FF] mb-6 uppercase tracking-widest">Social Engineering Process</h3>
            <FlowchartNode color="green" title="Attacker Builds Trust" />
            <FlowArrow />
            <FlowchartNode color="yellow" title="Creates Urgency or Fear" />
            <FlowArrow />
            <FlowchartNode color="red" title="Victim Panics" />
            <FlowArrow />
            <FlowchartNode color="red" title="Victim Takes Unsafe Action" />
            <FlowArrow />
            <FlowchartNode color="red" icon={AlertTriangle} title="Sensitive Information Exposed" />
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Social engineering is the psychological manipulation of users into revealing sensitive information or performing unsafe actions.
            </p>
            
            <h4 className="text-[#00E5FF] font-bold uppercase mt-6">Common Tactics</h4>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
              <div className="bg-[#0a1122] p-3 border border-white/5 rounded">Fear tactics</div>
              <div className="bg-[#0a1122] p-3 border border-white/5 rounded">Urgency manipulation</div>
              <div className="bg-[#0a1122] p-3 border border-white/5 rounded">Fake rewards</div>
              <div className="bg-[#0a1122] p-3 border border-white/5 rounded">Impersonation</div>
              <div className="bg-[#0a1122] p-3 border border-white/5 rounded">Authority abuse</div>
              <div className="bg-[#0a1122] p-3 border border-white/5 rounded">Emotional pressure</div>
            </div>

            <h4 className="text-purple-400 font-bold uppercase mt-6">Common Examples</h4>
            <ul className="space-y-2 text-white italic">
              <li>"Your account will be suspended!"</li>
              <li>"You won a free iPhone!"</li>
              <li>"Immediate verification required!"</li>
              <li>"Your package delivery failed!"</li>
            </ul>
          </div>
        </div>
      </FadeIn>

      {/* ================= MODULE 5 ================= */}
      <FadeIn delay={0.2}>
        <ModuleHeader moduleNum="5" title="Best Practices & Cyber Safety" subtitle="How to Stay Safe Online" icon={ShieldCheck} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg">
              Users should follow cybersecurity best practices to avoid phishing attacks and online scams.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-3 rounded">Verify URLs carefully</div>
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-3 rounded">Avoid unknown links</div>
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-3 rounded">Never share OTPs</div>
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-3 rounded">Use strong passwords</div>
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-3 rounded">Enable two-factor authentication</div>
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-3 rounded">Verify email senders</div>
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-3 rounded">Avoid suspicious attachments</div>
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-3 rounded">Keep devices updated</div>
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-3 rounded">Use password managers</div>
              <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-3 rounded">Check HTTPS certificates</div>
            </div>
          </div>

          <div className="bg-[#060b18] p-8 rounded-xl border border-white/5 shadow-xl flex flex-col items-center">
            <h3 className="text-xl font-bold text-[#00E5FF] mb-6 uppercase tracking-widest">Safe Internet Practices</h3>
            <FlowchartNode color="cyan" title="Receive Message" />
            <FlowArrow />
            <FlowchartNode color="yellow" title="Verify Sender" />
            <FlowArrow />
            <FlowchartNode color="yellow" title="Check URL Carefully" />
            <FlowArrow />
            <FlowchartNode color="purple" title="Analyze Content" />
            <FlowArrow />
            <FlowchartNode color="green" title="Avoid Clicking Suspicious Links" />
            <FlowArrow />
            <FlowchartNode color="green" title="Report Suspicious Activity" />
            <FlowArrow />
            <FlowchartNode color="green" icon={ShieldCheck} title="Stay Safe Online" />
          </div>
        </div>
      </FadeIn>

      {/* ================= MODULE 6 ================= */}
      <FadeIn delay={0.2}>
        <ModuleHeader moduleNum="6" title="Real-World Phishing Examples" subtitle="Case Studies" icon={BookOpen} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#0a1122] p-6 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-white mb-2">Fake Banking Email</h4>
            <p className="text-sm text-gray-400 mb-2"><strong>Scenario:</strong> Email claims account is locked.</p>
            <p className="text-sm text-red-400 mb-2"><strong>Indicators:</strong> Urgent language, generic greeting.</p>
            <p className="text-sm text-purple-400 mb-2"><strong>Goal:</strong> Steal banking credentials.</p>
            <p className="text-sm text-green-400"><strong>Prevention:</strong> Call bank directly via official number.</p>
          </div>
          <div className="bg-[#0a1122] p-6 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-white mb-2">Fake PayPal Invoice</h4>
            <p className="text-sm text-gray-400 mb-2"><strong>Scenario:</strong> You received an invoice for a large sum.</p>
            <p className="text-sm text-red-400 mb-2"><strong>Indicators:</strong> Links to paypal-security-update.com.</p>
            <p className="text-sm text-purple-400 mb-2"><strong>Goal:</strong> Financial fraud.</p>
            <p className="text-sm text-green-400"><strong>Prevention:</strong> Log into PayPal independently.</p>
          </div>
          <div className="bg-[#0a1122] p-6 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-white mb-2">Fake Instagram Reset</h4>
            <p className="text-sm text-gray-400 mb-2"><strong>Scenario:</strong> "Someone logged into your account!"</p>
            <p className="text-sm text-red-400 mb-2"><strong>Indicators:</strong> Sent from a non-Instagram email domain.</p>
            <p className="text-sm text-purple-400 mb-2"><strong>Goal:</strong> Steal social media identity.</p>
            <p className="text-sm text-green-400"><strong>Prevention:</strong> Use 2FA, check Instagram app alerts.</p>
          </div>
          <div className="bg-[#0a1122] p-6 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-white mb-2">Fake Crypto Scam</h4>
            <p className="text-sm text-gray-400 mb-2"><strong>Scenario:</strong> Elon Musk is giving away 2x crypto.</p>
            <p className="text-sm text-red-400 mb-2"><strong>Indicators:</strong> "Send 1 ETH to get 2 ETH back" (Greed).</p>
            <p className="text-sm text-purple-400 mb-2"><strong>Goal:</strong> Direct theft of cryptocurrency.</p>
            <p className="text-sm text-green-400"><strong>Prevention:</strong> If it sounds too good to be true, it is.</p>
          </div>
          <div className="bg-[#0a1122] p-6 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-white mb-2">Fake Delivery Link</h4>
            <p className="text-sm text-gray-400 mb-2"><strong>Scenario:</strong> SMS saying FedEx package is delayed.</p>
            <p className="text-sm text-red-400 mb-2"><strong>Indicators:</strong> Bit.ly link, asks for a small re-delivery fee.</p>
            <p className="text-sm text-purple-400 mb-2"><strong>Goal:</strong> Steal credit card info.</p>
            <p className="text-sm text-green-400"><strong>Prevention:</strong> Check tracking number on official site.</p>
          </div>
          <div className="bg-[#0a1122] p-6 rounded-xl border border-white/5">
            <h4 className="text-xl font-bold text-white mb-2">Fake Job Offer</h4>
            <p className="text-sm text-gray-400 mb-2"><strong>Scenario:</strong> Recruiter offers high-paying remote job.</p>
            <p className="text-sm text-red-400 mb-2"><strong>Indicators:</strong> Asks for SSN/Banking info upfront.</p>
            <p className="text-sm text-purple-400 mb-2"><strong>Goal:</strong> Identity theft.</p>
            <p className="text-sm text-green-400"><strong>Prevention:</strong> Verify recruiter via LinkedIn.</p>
          </div>
        </div>
      </FadeIn>

      {/* ================= MODULE 7 & 8 (CTAs) ================= */}
      <FadeIn delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          
          <div className="bg-gradient-to-br from-[#060b18] to-purple-900/20 p-8 rounded-2xl border border-purple-500/30 flex flex-col items-center text-center shadow-[0_0_40px_rgba(168,85,247,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors"></div>
            <HelpCircle className="w-16 h-16 text-purple-400 mb-6 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] relative z-10" />
            <h2 className="text-2xl font-bold text-white mb-3 relative z-10">Module 7: Interactive Quizzes</h2>
            <p className="text-gray-400 mb-8 relative z-10">Is this email legitimate or phishing? Which URL is suspicious? Test your knowledge in the Quiz Arena.</p>
            <Link 
              to="/quiz" 
              className="relative z-10 px-8 py-3 bg-purple-500/20 text-purple-300 border border-purple-500/50 hover:bg-purple-500 hover:text-white transition-all rounded font-bold tracking-widest uppercase flex items-center gap-2"
            >
              Enter Quiz Arena <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="bg-gradient-to-br from-[#060b18] to-[#00E5FF]/10 p-8 rounded-2xl border border-[#00E5FF]/30 flex flex-col items-center text-center shadow-[0_0_40px_rgba(0,229,255,0.15)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#00E5FF]/5 group-hover:bg-[#00E5FF]/10 transition-colors"></div>
            <Activity className="w-16 h-16 text-[#00E5FF] mb-6 drop-shadow-[0_0_15px_rgba(0,229,255,0.5)] relative z-10" />
            <h2 className="text-2xl font-bold text-white mb-3 relative z-10">Module 8: Performance Report</h2>
            <p className="text-gray-400 mb-8 relative z-10">View your phishing awareness score, completed modules, quiz accuracy, and cyber safety level.</p>
            <Link 
              to="/dashboard" 
              className="relative z-10 px-8 py-3 bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/50 hover:bg-[#00E5FF] hover:text-black transition-all rounded font-bold tracking-widest uppercase flex items-center gap-2"
            >
              View Dashboard <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </FadeIn>

    </div>
  );
};
