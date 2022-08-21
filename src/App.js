import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 300 });
  }, []);
  return (
    <div className="App">
      <div className="grids">
        <div className="boxes">1</div>
        <div className="boxes">2</div>
        <div data-aos="fade-up" className="boxes">
          3
        </div>
        <div data-aos="fade-right" className="boxes">
          4
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="boxes">
          5
        </div>
        <div className="boxes">5</div>
      </div>
    </div>
  );
}

export default App;
