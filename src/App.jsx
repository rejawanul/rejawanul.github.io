import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import CreativeBusiness from "./components/CreativeBusiness";
import Experience from "./components/Experience";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-layout">
        {/* Sticky Sidebar on Desktop */}
        <Sidebar />
        
        {/* Scrolling Main Content Sections */}
        <div className="section-container">
          <About />
          <Skills />
          <Projects />

          <CreativeBusiness />
          <Experience />
          <CurrentlyBuilding />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
