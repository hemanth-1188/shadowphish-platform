import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, AlertTriangle, CheckCircle, ShieldAlert, ChevronRight, CornerDownRight } from 'lucide-react';
import { useStore } from '../store/useStore';

const emails = [
  {
    id: 1,
    sender: 'security@paypal-support-team.com',
    subject: 'Urgent: Your account has been temporarily restricted',
    date: '10:42 AM',
    content: `Dear Customer,\n\nWe detected unusual activity on your account. For your security, we have temporarily restricted your access. Please verify your identity immediately to restore full access.\n\nClick the link below to verify:\nhttp://www.paypal-secure-auth.com/login\n\nFailure to do so within 24 hours will result in permanent suspension.\n\nThank you,\nPayPal Security Team`,
    isPhishing: true,
    redFlags: [
      { text: 'security@paypal-support-team.com', reason: 'Fake domain. Real PayPal emails come from @paypal.com' },
      { text: 'Dear Customer,', reason: 'Generic greeting instead of your actual name' },
      { text: 'http://www.paypal-secure-auth.com/login', reason: 'Suspicious URL without HTTPS and using a fake domain' },
      { text: 'Failure to do so within 24 hours', reason: 'Creates a false sense of urgency' }
    ]
  },
  {
    id: 2,
    sender: 'hr@yourcompany.com',
    subject: 'Action Required: Updated Q3 Benefits Enrollment',
    date: '09:15 AM',
    content: `Hi Team,\n\nPlease review the updated benefits enrollment document for Q3 attached below. Note the changes to the health coverage plans starting next month.\n\nAttachment: Q3_Benefits_Update.pdf\n\nBest regards,\nSarah Jenkins\nHuman Resources`,
    isPhishing: false,
    redFlags: []
  },
  {
    id: 3,
    sender: 'IT-Helpdesk@yourcompany-it.net',
    subject: 'MANDATORY: Password Expiry Notification',
    date: '08:00 AM',
    content: `Attention Employee,\n\nYour corporate password will expire in 2 hours. According to the new security policy, you must retain your access by updating it immediately.\n\nUpdate here: https://corp-sso-portal.net/auth\n\nIf you do not update, you will be locked out of your workstation.\n\n- IT Department`,
    isPhishing: true,
    redFlags: [
      { text: 'IT-Helpdesk@yourcompany-it.net', reason: 'Spoofed external domain mimicking internal IT' },
      { text: 'Attention Employee,', reason: 'Impersonal greeting for an internal communication' },
      { text: 'https://corp-sso-portal.net/auth', reason: 'External non-standard URL for SSO' },
      { text: 'locked out of your workstation', reason: 'Fear tactic to force immediate compliance' }
    ]
  },
  {
    id: 4,
    sender: 'netflix-billing@ntflix.com',
    subject: 'Payment Declined - Update Required',
    date: '04:20 PM',
    content: `Hi there,\n\nWe couldn't process your latest payment. Your membership is now on hold. Please update your payment details within 3 days to continue watching your favorite shows.\n\nLink: http://update-payment-ntflix.com\n\nThe Netflix Team`,
    isPhishing: true,
    redFlags: [
      { text: 'ntflix.com', reason: 'Typosquatting in the sender domain (ntflix instead of netflix)' },
      { text: 'http://update-payment-ntflix.com', reason: 'Unsecured HTTP link and fake domain' }
    ]
  },
  {
    id: 5,
    sender: 'notifications@github.com',
    subject: '[GitHub] A new commit was pushed to main',
    date: '11:05 AM',
    content: `Hi team,\n\nA new commit has been pushed to the repository 'core-infrastructure' by 'johndoe'.\n\nCommit: 4a2b8c9 - Fixed authentication bypass bug.\n\nView changes: https://github.com/org/core-infrastructure/commit/4a2b8c9\n\nThanks,\nGitHub Notifications`,
    isPhishing: false,
    redFlags: []
  },
  {
    id: 6,
    sender: 'ceo@yourcompany.com',
    subject: 'Are you available right now?',
    date: '02:15 PM',
    content: `I am in a meeting and need you to handle an urgent task for me. I need you to purchase 5 Apple gift cards ($100 each) for a client presentation. I will reimburse you by the end of the day.\n\nPlease email me the codes as soon as you get them.\n\nThanks,\nCEO`,
    isPhishing: true,
    redFlags: [
      { text: 'Are you available right now?', reason: 'Classic Business Email Compromise (BEC) opening line' },
      { text: 'purchase 5 Apple gift cards', reason: 'Gift cards are virtually untraceable and a hallmark of BEC scams' },
      { text: 'email me the codes', reason: 'Bypassing standard financial procurement channels' }
    ]
  },
  {
    id: 7,
    sender: 'support@amazon.com',
    subject: 'Order Confirmation: MacBook Pro 16-inch',
    date: '07:30 PM',
    content: `Hello,\n\nThank you for your order! Your MacBook Pro 16-inch ($2,499.00) will be shipped to: [Unknown Address].\n\nIf you did not authorize this purchase, please call our fraud department immediately at 1-800-555-0199 or click here to cancel: http://amazon-cancel-order.com/auth.\n\nAmazon Support`,
    isPhishing: true,
    redFlags: [
      { text: 'MacBook Pro 16-inch ($2,499.00)', reason: 'High-value item used to induce panic' },
      { text: '1-800-555-0199', reason: 'Fake support number leading to a vishing (voice phishing) scam' },
      { text: 'http://amazon-cancel-order.com/auth', reason: 'Fake cancellation URL' }
    ]
  },
  {
    id: 8,
    sender: 'calendar-invites@google.com',
    subject: 'Invitation: Q4 Planning Sync @ Tomorrow 10am',
    date: '09:00 AM',
    content: `You have been invited to the following event.\n\nTitle: Q4 Planning Sync\nWhen: Tomorrow 10:00 AM - 11:00 AM\nJoin with Google Meet: https://meet.google.com/abc-defg-hij\n\nPlease accept or decline the invitation.`,
    isPhishing: false,
    redFlags: []
  },
  {
    id: 9,
    sender: 'admin@docusign-alerts.com',
    subject: 'Completed: Confidential NDA and Salary Review',
    date: '01:45 PM',
    content: `All parties have completed the document: Confidential NDA and Salary Review.pdf\n\nPlease review the finalized document by logging in below:\nhttps://secure-docusign-view.com/login\n\nPowered by DocuSign`,
    isPhishing: true,
    redFlags: [
      { text: 'admin@docusign-alerts.com', reason: 'Fake sender domain. Real emails come from @docusign.com' },
      { text: 'Confidential NDA and Salary Review', reason: 'Uses curiosity and sensitive topics as bait' },
      { text: 'https://secure-docusign-view.com/login', reason: 'Malicious credential harvesting link' }
    ]
  },
  {
    id: 10,
    sender: 'no-reply@linkedin.com',
    subject: 'You appeared in 14 searches this week',
    date: '08:30 AM',
    content: `Hi there,\n\nYour profile is getting noticed! You appeared in 14 searches this week. See who is looking at your profile.\n\nView searchers: https://www.linkedin.com/analytics/search-appearances\n\nKeep your profile updated to get found by more recruiters.`,
    isPhishing: false,
    redFlags: []
  }
];

export const EmailSimulation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // 'SAFE' or 'PHISHING'
  const addScore = useStore(state => state.addScore);
  
  const currentEmail = emails[currentIndex];

  const handleDecision = (decision) => {
    if (selectedAnswer) return;
    
    setSelectedAnswer(decision);
    
    const isCorrect = 
      (decision === 'PHISHING' && currentEmail.isPhishing) || 
      (decision === 'SAFE' && !currentEmail.isPhishing);
      
    if (isCorrect) {
      addScore(50);
    }
  };

  const nextEmail = () => {
    setSelectedAnswer(null);
    setCurrentIndex(prev => (prev + 1) % emails.length);
  };

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
          <Mail className="text-[#00E5FF]" /> 
          Threat Inbox
        </h1>
        <p className="text-gray-400">Analyze the incoming messages. Identify social engineering tactics and malicious indicators.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow">
        
        {/* Email Content */}
        <div className="lg:col-span-2 bg-[#060b18] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden flex flex-col relative">
          <div className="bg-[#0a1122]/50 p-4 border-b border-[#00E5FF]/20 flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">From: <span className="text-white font-mono bg-white/5 px-2 py-1 rounded">{currentEmail.sender}</span></span>
              <span className="text-gray-500">{currentEmail.date}</span>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Subject: <span className="text-white font-semibold">{currentEmail.subject}</span></span>
            </div>
          </div>
          
          <div className="p-6 whitespace-pre-wrap text-gray-300 font-sans leading-relaxed relative z-10 flex-grow">
            {currentEmail.content}
          </div>

          {/* Overlay when answered */}
          <AnimatePresence>
            {selectedAnswer && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-[#060b18]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center"
              >
                {((selectedAnswer === 'PHISHING' && currentEmail.isPhishing) || (selectedAnswer === 'SAFE' && !currentEmail.isPhishing)) ? (
                  <>
                    <CheckCircle className="w-20 h-20 text-green-400 mb-4 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
                    <h2 className="text-3xl font-bold text-green-400 mb-2">Threat Neutralized</h2>
                    <p className="text-gray-300 mb-6">Excellent analysis. You correctly identified this as {currentEmail.isPhishing ? 'a phishing attempt' : 'safe communication'}.</p>
                  </>
                ) : (
                  <>
                    <ShieldAlert className="w-20 h-20 text-red-500 mb-4 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                    <h2 className="text-3xl font-bold text-red-500 mb-2">System Compromised</h2>
                    <p className="text-gray-300 mb-6">Incorrect. This was actually {currentEmail.isPhishing ? 'a phishing attempt' : 'safe communication'}.</p>
                  </>
                )}
                
                <button 
                  onClick={nextEmail}
                  className="px-6 py-3 bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/50 hover:bg-[#00E5FF] hover:text-black transition-all rounded font-bold tracking-widest uppercase flex items-center gap-2 shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                >
                  Next Scenario <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Analysis Panel */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#060b18] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4 border-b border-white/10 pb-2 drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] text-white">Threat Analysis</h3>
            
            {!selectedAnswer ? (
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 mb-2">Evaluate the communication and classify the threat level.</p>
                <button 
                  onClick={() => handleDecision('SAFE')}
                  className="w-full py-3 rounded-lg bg-[#0a1122] border border-white/10 hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400 transition-all font-bold tracking-widest"
                >
                  MARK AS SAFE
                </button>
                <button 
                  onClick={() => handleDecision('PHISHING')}
                  className="w-full py-3 rounded-lg bg-[#0a1122] border border-white/10 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-500 transition-all font-bold tracking-widest flex justify-center items-center gap-2"
                >
                  <AlertTriangle className="w-4 h-4" /> QUARANTINE THREAT
                </button>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-4"
              >
                <h4 className="text-[#00E5FF] font-semibold text-sm uppercase tracking-widest">Identified Indicators:</h4>
                {currentEmail.redFlags.length > 0 ? (
                  <ul className="space-y-4">
                    {currentEmail.redFlags.map((flag, idx) => (
                      <li key={idx} className="bg-[#0a1122]/50 p-3 rounded border border-red-500/30">
                        <div className="text-red-500 font-mono text-xs mb-1 bg-red-500/10 px-2 py-1 rounded inline-block shadow-[0_0_10px_rgba(239,68,68,0.2)]">"{flag.text}"</div>
                        <div className="text-sm text-gray-300 flex items-start gap-2 mt-2">
                          <CornerDownRight className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                          {flag.reason}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-400">No malicious indicators found. This was legitimate communication.</p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
