import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Crisis from './pages/Crisis';
import Health from './pages/Health';
import TakeAction from './pages/TakeAction';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-soft-white flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crisis" element={<Crisis />} />
            <Route path="/health" element={<Health />} />
            <Route path="/take-action" element={<TakeAction />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
