import "./css/App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ChatWithMe from "./components/ChatWithMe";
import About from "./components/About";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <About />
      <ChatWithMe />
      <Footer />
    </>
  );
}

export default App;
