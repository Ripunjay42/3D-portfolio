import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Certifications, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        {/* <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat"> */}
        <div className="bg-primary">
          <Navbar />
          <div className="relative z-0">
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
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
