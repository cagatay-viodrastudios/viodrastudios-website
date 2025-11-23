import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apps from './pages/Apps';
import AppDetail from './pages/AppDetail';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import KanjiQuizTerms from './pages/KanjiQuiz/Terms';
import KanjiQuizPrivacy from './pages/KanjiQuiz/Privacy';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="dragon-scales"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/apps/:id" element={<AppDetail />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* KanjiQuiz Specific Routes */}
          <Route path="/apps/kanjiquiz/terms" element={<KanjiQuizTerms />} />
          <Route path="/apps/kanjiquiz/privacy" element={<KanjiQuizPrivacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
