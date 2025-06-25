// import React from 'react';
// import AnimatedCursor from 'react-animated-cursor'; // 👈 Import this
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { ExperienceSection } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <>
      {/* 👇 Add this at the top of your app */}
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="52, 152, 219"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2}
        clickables={['a', 'button', 'input', 'textarea', '.link']} */}
      

      {/* Your actual page structure */}
      <div className="min-h-screen bg-dark-50">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <ExperienceSection />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
