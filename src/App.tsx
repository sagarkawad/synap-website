import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Trainings from './pages/Trainings';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainings" element={<Trainings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;