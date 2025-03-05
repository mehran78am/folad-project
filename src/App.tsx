import Navbar from "./components/Navbar";
import "font-awesome/css/font-awesome.min.css";
import SliderTop from "./components/SliderTop";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Article from "./components/Article";
import MobileBar from "./components/MobileBar";
const App = () => {
  return (
      <div className="container mx-auto px-4 py-1 overflow-x-hidden select-none relative">
        <Navbar />
        <SliderTop />
        <Gallery />
        <Article />
        <Contact />
        <About />
        <Footer />
        <MobileBar />
      </div>
  );
};

export default App;
