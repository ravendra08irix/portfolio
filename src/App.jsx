import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Content/Navbar';
import Projects from './components/Content/Projects';
import Contact from './components/Content/Contact';
import Updates from './components/Content/Updates';
import Slider from './components/Content/Slider';
import Timeline from './components/Content/Timeline';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Timeline />  {/* Add Timeline component here */}
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/updates" element={<Updates />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
