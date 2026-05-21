import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Target, Zap, Shield, RotateCcw } from 'lucide-react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';
import { useStore } from '../store/useStore';

export const Dashboard = () => {
  const score = useStore(state => state.awarenessScore);
  const completedModules = useStore(state => state.completedModules);
  const resetProgress = useStore(state => state.resetProgress);

  const maxPossibleScore = 400; // 50+50 for email/web, + 300 for quiz (example)
  const percentage = Math.min(Math.round((score / maxPossibleScore) * 100), 100);

  // Fake analytics data for the radar chart based on score
  const analyticsData = [
    { subject: 'Email Analysis', A: Math.min(score / 2, 100), fullMark: 100 },
    { subject: 'URL Inspection', A: Math.min(score / 1.5, 100), fullMark: 100 },
    { subject: 'Social Eng.', A: Math.min(score / 3, 100), fullMark: 100 },
    { subject: 'Threat Response', A: percentage, fullMark: 100 },
    { subject: 'Policy Knowledge', A: completedModules.length > 0 ? 90 : 20, fullMark: 100 },
  ];

  return (
    <div className="flex flex-col h-full max-w-6xl mx-auto w-full">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <LayoutDashboard className="text-[#00E5FF]" /> 
            Operator Statistics
          </h1>
          <p className="text-gray-400">Review your tactical performance and threat awareness metrics.</p>
        </div>
        <button 
          onClick={resetProgress}
          className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-500 hover:bg-red-500/20 rounded-md transition-all text-sm font-bold uppercase tracking-widest"
        >
          <RotateCcw className="w-4 h-4" /> Reset Stats
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#060b18] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] p-6 rounded-xl flex items-center gap-6 border-t-2 border-t-[#00E5FF]"
        >
          <div className="p-4 bg-[#00E5FF]/10 rounded-full border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
            <Target className="w-8 h-8 text-[#00E5FF]" />
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-1">Total Score</p>
            <p className="text-4xl font-mono font-bold drop-shadow-[0_0_10px_rgba(0,229,255,0.5)] text-white">{score}</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#060b18] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] p-6 rounded-xl flex items-center gap-6 border-t-2 border-t-purple-400"
        >
          <div className="p-4 bg-purple-500/10 rounded-full border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Zap className="w-8 h-8 text-purple-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-1">Efficiency Rate</p>
            <p className="text-4xl font-mono font-bold drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">{percentage}%</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#060b18] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] p-6 rounded-xl flex items-center gap-6 border-t-2 border-t-green-400"
        >
          <div className="p-4 bg-green-400/10 rounded-full border border-green-400/30 shadow-[0_0_15px_rgba(74,222,128,0.2)]">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-1">Security Level</p>
            <p className="text-2xl font-bold text-green-400 uppercase drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]">
              {percentage >= 80 ? 'Elite' : percentage >= 50 ? 'Advanced' : 'Novice'}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
        
        {/* Radar Chart */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-[#060b18] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-xl p-6 flex flex-col items-center justify-center min-h-[400px]"
        >
          <h3 className="text-xl font-bold w-full text-center mb-4 uppercase tracking-widest text-[#00E5FF]">Competency Matrix</h3>
          <div className="w-full h-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={analyticsData}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0B1121', borderColor: '#00f6ff', borderRadius: '8px' }}
                  itemStyle={{ color: '#00f6ff', fontWeight: 'bold' }}
                />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#00f6ff"
                  fill="#00f6ff"
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Action Log */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#060b18] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)] rounded-xl p-6 flex flex-col"
        >
          <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Recent Activity Log</h3>
          <div className="space-y-4 overflow-y-auto pr-2 max-h-[300px]">
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#00E5FF] mt-2 shrink-0"></div>
              <div>
                <p className="text-white font-semibold">System Initialized</p>
                <p className="text-sm text-gray-400">Agent logged into the simulation platform.</p>
              </div>
            </div>

            {score > 0 && (
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
                <div>
                  <p className="text-white font-semibold flex gap-2 items-center">
                    Threat Neutralized <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded border border-green-500/30">+50 PTS</span>
                  </p>
                  <p className="text-sm text-gray-400">Successfully identified a simulated phishing vector.</p>
                </div>
              </div>
            )}
            
            {completedModules.includes('quiz_arena') && (
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                <div>
                  <p className="text-white font-semibold flex gap-2 items-center">
                    Evaluation Completed <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded border border-purple-500/30">BONUS PTS</span>
                  </p>
                  <p className="text-sm text-gray-400">Completed the Tactical Evaluation module.</p>
                </div>
              </div>
            )}
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};
