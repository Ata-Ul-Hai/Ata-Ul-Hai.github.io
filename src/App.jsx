/* ===========================================
   MAIN APP COMPONENT
   
   This is the root component that brings together
   all the other components to form the complete page.
   
   Think of it as assembling LEGO blocks - each component
   is a block, and App.jsx puts them together.
   =========================================== */

// Import the CSS file for styling
import './App.css';

// Import all our components
// Each component is in its own file for better organization
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App Component
 * 
 * This is the main component that React renders.
 * It simply arranges all sections in order.
 * 
 * The <> and </> are called "Fragments" - they let us
 * return multiple elements without adding extra HTML.
 */
function App() {
  return (
    <>
      {/* Fixed navigation header */}
      <Header />

      {/* Main content wrapped in 'main' tag for semantic HTML */}
      <main>
        <Hero />      {/* First impression - name & tagline */}
        <About />     {/* Brief introduction */}
        <Projects />  {/* Showcase your work */}
        <Contact />   {/* Social links & contact info */}
      </main>

      {/* Footer with copyright */}
      <Footer />
    </>
  );
}

// Export the App component so main.jsx can use it
export default App;
