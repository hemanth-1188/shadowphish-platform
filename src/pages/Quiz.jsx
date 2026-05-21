import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Check, X, Shield, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: "What is the primary goal of a phishing attack?",
    options: [
      "To improve website loading speeds",
      "To trick users into revealing sensitive information like passwords or financial details",
      "To physically damage computer hardware",
      "To test a network's bandwidth"
    ],
    correctAnswer: 1,
    explanation: "Phishing is a cyberattack where attackers impersonate trusted entities to trick users into revealing sensitive information such as credentials or credit card numbers."
  },
  {
    id: 2,
    question: "Which of the following describes 'Spear Phishing'?",
    options: [
      "A random mass email sent to millions of users",
      "A phishing attack launched via SMS",
      "A highly targeted attack aimed at a specific individual using personalized information",
      "An attack that duplicates physical smart cards"
    ],
    correctAnswer: 2,
    explanation: "Spear phishing uses customized information (like your name or job role) to target specific individuals, making the deceptive emails much harder to detect than generic mass phishing."
  },
  {
    id: 3,
    question: "If an attacker calls you pretending to be from your bank's fraud department, what type of attack is this?",
    options: [
      "Smishing",
      "Vishing",
      "Clone Phishing",
      "Whaling"
    ],
    correctAnswer: 1,
    explanation: "Vishing (Voice Phishing) occurs when attackers use voice calls, often spoofing caller ID or using AI voice cloning, to extract sensitive information like 2FA codes."
  },
  {
    id: 4,
    question: "What is 'Smishing'?",
    options: [
      "Phishing via SMS or text messages",
      "Smashing server hardware",
      "Phishing over social media direct messages",
      "A specialized attack targeting smart home devices"
    ],
    correctAnswer: 0,
    explanation: "Smishing involves sending fraudulent text messages (SMS) claiming urgent action is required, often containing malicious links optimized for mobile browsers."
  },
  {
    id: 5,
    question: "You receive an email that looks exactly like an invoice you received yesterday, but the sender says this is an 'updated version' with a new link. What is this?",
    options: [
      "Spear Phishing",
      "Vishing",
      "Clone Phishing",
      "Typosquatting"
    ],
    correctAnswer: 2,
    explanation: "Clone phishing intercepts a legitimate, previously delivered email and replaces safe links or attachments with malicious ones, exploiting established trust."
  },
  {
    id: 6,
    question: "Which of the following is an example of 'Typosquatting' if the real site is amazon.com?",
    options: [
      "amazon-secure-login.com",
      "amaz0n.com",
      "amazon.company.com",
      "amazon.com/login"
    ],
    correctAnswer: 1,
    explanation: "Typosquatting relies on slight typographical errors (like replacing 'o' with '0') that victims might not notice when quickly scanning a URL."
  },
  {
    id: 7,
    question: "Why is seeing a padlock icon (HTTPS) in the address bar NOT a guarantee that a website is safe?",
    options: [
      "Because HTTPS only protects against viruses",
      "Because the padlock icon is just a picture",
      "Because attackers can easily obtain SSL certificates for their fake domains",
      "Because HTTPS is an outdated protocol"
    ],
    correctAnswer: 2,
    explanation: "HTTPS simply means the connection between you and the server is encrypted. Attackers routinely encrypt their fake websites to make them appear legitimate."
  },
  {
    id: 8,
    question: "What psychological tactic is heavily used in Social Engineering attacks?",
    options: [
      "Boredom",
      "Patience",
      "Urgency and Fear",
      "Logic and Reasoning"
    ],
    correctAnswer: 2,
    explanation: "Attackers manipulate emotions by creating artificial urgency or fear (e.g., 'Your account will be suspended in 24 hours') to bypass your critical thinking."
  },
  {
    id: 9,
    question: "An email from 'IT Support' asks you to click a link pointing to 'http://microsoft.update-login.com'. Is this safe?",
    options: [
      "Yes, because it says 'microsoft' in the URL",
      "Yes, because IT support teams use different domains",
      "No, because the actual domain is 'update-login.com', not 'microsoft.com'",
      "No, because Microsoft never sends emails"
    ],
    correctAnswer: 2,
    explanation: "In URLs, the true domain is the part immediately before the top-level domain (.com). Subdomains (like 'microsoft') can be created by anyone who owns 'update-login.com'."
  },
  {
    id: 10,
    question: "If you accidentally enter your credentials into a fake website, what is the FIRST thing you should do?",
    options: [
      "Turn off your computer",
      "Delete your browsing history",
      "Change your password immediately on the legitimate site and notify Security",
      "Wait to see if money is stolen before acting"
    ],
    correctAnswer: 2,
    explanation: "Changing your password immediately on the real site can lock the attackers out before they use the stolen credentials. Notifying security ensures they can monitor for unauthorized access."
  },
  {
    id: 11,
    question: "What is 'Whaling'?",
    options: [
      "A phishing attack launched via the dark web",
      "A specialized form of spear phishing targeting high-level executives (CEOs, CFOs)",
      "An attack against marine tracking databases",
      "Sending mass emails with massive attachments"
    ],
    correctAnswer: 1,
    explanation: "Whaling targets the 'big fish' in an organization. Attackers impersonate or target executives to authorize large wire transfers or access classified intellectual property."
  },
  {
    id: 12,
    question: "Which of the following is a classic indicator of a Business Email Compromise (BEC) attack?",
    options: [
      "An email with a .pdf attachment",
      "An urgent request from the CEO asking you to buy gift cards",
      "A newsletter from a vendor",
      "An invite to a calendar meeting"
    ],
    correctAnswer: 1,
    explanation: "BEC attacks often bypass technical filters by using plain text. Asking employees to buy untraceable gift cards under the guise of an executive is a hallmark BEC tactic."
  },
  {
    id: 13,
    question: "What makes Homoglyph attacks particularly dangerous?",
    options: [
      "They use advanced malware that bypasses antivirus",
      "They use characters from different alphabets (like Cyrillic) that look identical to Latin characters",
      "They attack the router directly",
      "They are always sent from legitimate internal accounts"
    ],
    correctAnswer: 1,
    explanation: "Homoglyph attacks exploit visual similarities between characters. A Cyrillic 'a' looks exactly like a Latin 'a' to a human, but the computer registers it as a completely different domain."
  },
  {
    id: 14,
    question: "You receive an email saying you won a free iPhone and need to click a link to claim it. What social engineering tactic is this?",
    options: [
      "Authority abuse",
      "Fear tactics",
      "Fake rewards / Greed",
      "Impersonation"
    ],
    correctAnswer: 2,
    explanation: "Attackers exploit greed and curiosity by offering unbelievable rewards. If it sounds too good to be true, it is almost certainly a trap."
  },
  {
    id: 15,
    question: "Why should you avoid opening unexpected encrypted ZIP files sent via email?",
    options: [
      "They take too much storage space",
      "They are used to bypass email security scanners because the contents cannot be analyzed",
      "They corrupt the operating system immediately",
      "They require expensive software to open"
    ],
    correctAnswer: 1,
    explanation: "Security gateways cannot scan the contents of an encrypted ZIP file. Attackers use this to sneak malicious payloads past automated defenses and trick the user into decrypting them."
  },
  {
    id: 16,
    question: "What is an 'Evil Twin' Wi-Fi attack?",
    options: [
      "A virus that duplicates files",
      "Two hackers working together",
      "A rogue Wi-Fi hotspot set up with the exact same name as a legitimate public network",
      "A phishing email sent twice"
    ],
    correctAnswer: 2,
    explanation: "An Evil Twin mimics a trusted network (like 'Starbucks Guest'). Once you connect, the attacker intercepts all your traffic and can serve you fake login pages."
  },
  {
    id: 17,
    question: "Why are password managers recommended for defense against fake websites?",
    options: [
      "They encrypt your hard drive",
      "They will refuse to auto-fill your credentials if the underlying domain doesn't perfectly match",
      "They block all incoming phishing emails",
      "They report attackers to the authorities"
    ],
    correctAnswer: 1,
    explanation: "Even if a fake website looks visually identical to the real one, a password manager looks at the underlying URL. It will not auto-fill on a typosquatted domain, saving you from the attack."
  },
  {
    id: 18,
    question: "You get a text message with a link saying your package delivery failed. You aren't expecting a package. What should you do?",
    options: [
      "Click the link to see if it's a surprise gift",
      "Reply 'STOP' to the message",
      "Ignore it and do not click the link",
      "Call the number back"
    ],
    correctAnswer: 2,
    explanation: "This is a classic Smishing attempt. Replying or calling confirms your number is active, and clicking the link could download malware or lead to a credential harvesting site."
  },
  {
    id: 19,
    question: "What is the danger of enabling macros in an unexpected Microsoft Word document?",
    options: [
      "It will format the document incorrectly",
      "Macros can execute malicious scripts that download ransomware or spyware in the background",
      "It will share the document publicly",
      "It charges a fee to your Microsoft account"
    ],
    correctAnswer: 1,
    explanation: "Macros are powerful scripts. Attackers embed malicious macros in documents (like fake invoices) to silently download and install malware onto your system."
  },
  {
    id: 20,
    question: "Which of the following is the best overall defense against social engineering?",
    options: [
      "Buying expensive antivirus software",
      "Never using the internet",
      "Maintaining a healthy level of skepticism and verifying out-of-band (e.g., calling the sender)",
      "Using a VPN at all times"
    ],
    correctAnswer: 2,
    explanation: "Technology cannot stop all social engineering. The human firewall—pausing, verifying requests through a different channel, and remaining skeptical—is the ultimate defense."
  }
];

export const Quiz = () => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  
  const addGlobalScore = useStore(state => state.addScore);
  const markModuleComplete = useStore(state => state.markModuleComplete);
  const navigate = useNavigate();

  const currentQ = questions[currentQIndex];

  const handleSelect = (index) => {
    if (showResult) return;
    setSelectedOption(index);
    setShowResult(true);
    
    if (index === currentQ.correctAnswer) {
      setScore(s => s + 1);
      addGlobalScore(100);
    }
  };

  const handleNext = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      markModuleComplete('quiz_arena');
    }
  };

  if (quizComplete) {
    return (
      <div className="flex flex-col items-center justify-center h-full max-w-2xl mx-auto w-full text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-cyber-teal blur-[60px] opacity-20 rounded-full"></div>
          <Award className="w-32 h-32 text-cyber-teal drop-shadow-[0_0_20px_rgba(0,246,255,0.8)] relative z-10" />
        </motion.div>
        
        <h2 className="text-4xl font-bold mb-4">Evaluation Complete</h2>
        <p className="text-xl text-gray-300 mb-8">
          You scored <span className="text-cyber-teal font-bold">{score}</span> out of {questions.length}.
        </p>
        
        <button 
          onClick={() => navigate('/dashboard')}
          className="px-8 py-4 bg-cyber-teal/20 text-cyber-teal border border-cyber-teal/50 hover:bg-cyber-teal hover:text-cyber-darkest transition-all rounded font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,246,255,0.2)]"
        >
          View Final Statistics
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col max-w-4xl mx-auto w-full">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <Shield className="text-[#00E5FF]" /> 
            Tactical Evaluation
          </h1>
          <p className="text-gray-400">Test your knowledge against simulated threat scenarios.</p>
        </div>
        <div className="text-[#00E5FF] font-mono font-bold bg-[#060b18] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] px-4 py-2 rounded-full">
          Q: {currentQIndex + 1} / {questions.length}
        </div>
      </div>

      <div className="bg-[#060b18] rounded-xl p-8 lg:p-12 border border-white/5 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 h-1 bg-[#0a1122] w-full">
          <motion.div 
            className="h-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF]"
            initial={{ width: `${(currentQIndex / questions.length) * 100}%` }}
            animate={{ width: `${((currentQIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <h2 className="text-2xl font-bold mb-8 mt-2">{currentQ.question}</h2>

        <div className="flex flex-col gap-4">
          {currentQ.options.map((option, idx) => {
            let btnClass = "text-left p-4 rounded-lg border transition-all duration-300 flex items-center justify-between ";
            
            if (!showResult) {
              btnClass += "border-white/10 bg-[#0a1122] hover:border-[#00E5FF]/50 hover:bg-[#00E5FF]/10";
            } else {
              if (idx === currentQ.correctAnswer) {
                btnClass += "border-green-500 bg-green-500/20 text-green-400";
              } else if (idx === selectedOption) {
                btnClass += "border-red-500 bg-red-500/20 text-red-500";
              } else {
                btnClass += "border-white/5 bg-[#0a1122]/50 opacity-50";
              }
            }

            return (
              <button 
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={showResult}
                className={btnClass}
              >
                <span className="text-lg">{option}</span>
                {showResult && idx === currentQ.correctAnswer && <Check className="w-5 h-5 text-green-400" />}
                {showResult && idx === selectedOption && idx !== currentQ.correctAnswer && <X className="w-5 h-5 text-red-500" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {showResult && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-8 overflow-hidden"
            >
              <div className={`p-6 rounded-lg border ${selectedOption === currentQ.correctAnswer ? 'border-green-500/30 bg-green-500/10' : 'border-red-500/30 bg-red-500/10'}`}>
                <h4 className={`font-bold mb-2 uppercase tracking-wider ${selectedOption === currentQ.correctAnswer ? 'text-green-400' : 'text-red-500'}`}>
                  {selectedOption === currentQ.correctAnswer ? 'Correct Classification' : 'Incorrect Assessment'}
                </h4>
                <p className="text-gray-300">{currentQ.explanation}</p>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button 
                  onClick={handleNext}
                  className="px-8 py-3 bg-[#00E5FF] text-black hover:bg-white transition-all rounded font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.4)]"
                >
                  {currentQIndex < questions.length - 1 ? 'Next Scenario' : 'Complete Evaluation'} 
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
