import "./App.css";
import About from "@views/About";
import Welcome from "@views/Welcome";
import Experience from "@views/Experience";
import Contact from "@views/Contact";
import Footer from "@components/Footer";
import configDarkMode from "@utils/darkMode";
import Skills from "@views/Skills";

function App() {
  configDarkMode();
  return (
    <main className="w-100 h-dvh flex flex-col overflow-y bg-gray-100 dark:bg-slate-800">
      <section className="w-full">
        <section id="welcome" className="w-full">
          <Welcome />
        </section>
        <section id="about" className="w-full">
          <About />
        </section>
        <section id="experience" className="w-full">
          <Experience />
        </section>
        <section id="skills" className="w-full">
          <Skills />
        </section>
        <section id="contact" className="w-full">
          <Contact />
        </section>
      </section>
      <footer className="fixed bottom-0 lg:bottom-10 left-0 right-0">
        <Footer />
      </footer>
    </main>
  );
}

export default App;
