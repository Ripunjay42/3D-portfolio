import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { AudioProvider } from './AudioContext';
import { About, Contact, Experience, Certifications, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <AudioProvider>
      <BrowserRouter>
        <div className="bg-primary relative z-0">
          <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
            <Navbar />
              <div className="relative z-0">
                 <div class="absolute inset-0 z-[-2] bg-black opacity-80"></div> 
                 <Hero />
                 <StarsCanvas />
            </div>
          </div>
          <About />
          <Works />
          <Experience />
          <Tech />
          <Certifications />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </AudioProvider>
  );
};

export default App;
