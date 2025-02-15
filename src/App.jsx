import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      
      {/* Main Content */}
      <main className="flex flex-col items-center">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
