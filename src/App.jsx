import { BrowserRouter } from "react-router-dom";
import useThemeStore from "../src/components/theme"; // Import the theme store
import { About, Experience, Contact, Hero, Navbar, StarsCanvas, Works, Tech } from "./components";
import Footer from "./components/footer";

const App = () => {
  const { theme } = useThemeStore(); // Get theme state

  return (
    <BrowserRouter>
      <div className={`bg-primary z-0 relative ${theme === "dark" ? "dark" : ""}`}>
        <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
