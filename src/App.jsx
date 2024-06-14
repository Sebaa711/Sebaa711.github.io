import { BrowserRouter } from "react-router-dom";
import { About, Hero, Navbar, Tech, Works, Thanks } from "./components";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    (async () => {
      try {
        await axios.get("https://back-bookshelf.onrender.com");
        console.log("Bookshelf is alive");
      } catch (error) {
        console.log("Bookshelf server is suspended");
      }
    })();
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary pb-20">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <Thanks />
      </div>
    </BrowserRouter>
  );
}

export default App;
