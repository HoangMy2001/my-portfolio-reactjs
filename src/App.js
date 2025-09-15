import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
        <main>
            <About />
            <Projects />
            <Skills />
            <Contact />
        </main>
      <Footer />
    </>
  );
}

export default App;
