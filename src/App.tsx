import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './Pages/Home';
// import Pricing from './Pages/Pricing';
import Contact from './Pages/Contact';
import Business from './Pages/Business';
import Jobs from './Pages/Jobs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/business" element={<Business />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
}

export default App;
