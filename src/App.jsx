import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CyberLayout } from './components/CyberLayout';
import { LandingPage } from './pages/LandingPage';
import { Education } from './pages/Education';
import { EmailSimulation } from './pages/EmailSimulation';
import { WebSimulation } from './pages/WebSimulation';
import { Quiz } from './pages/Quiz';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <Router>
      <CyberLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/education" element={<Education />} />
          <Route path="/inbox" element={<EmailSimulation />} />
          <Route path="/web" element={<WebSimulation />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </CyberLayout>
    </Router>
  );
}

export default App;
