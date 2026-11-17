import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CreativeBusiness from "./components/CreativeBusiness";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useSiteEffects from "./hooks/useSiteEffects";

function App() {
  const [ready, setReady] = useState(false);
  const { active, scrolled } = useSiteEffects(ready);

  // Fade out the loading screen (defined in index.html) once the app is mounted
  useEffect(() => {
    const loader = document.getElementById("loader");
    const t1 = setTimeout(() => loader && loader.classList.add("hide"), 600);
    const t2 = setTimeout(() => {
      if (loader) loader.remove();
      setReady(true);
    }, 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="main-content">
      <Navbar active={active} scrolled={scrolled} />
      <Hero ready={ready} />
      <About />
      <Education />
      <Experience />
      <CreativeBusiness />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
