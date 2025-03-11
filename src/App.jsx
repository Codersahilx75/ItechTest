import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home"; // Import Home component
import Contact from "./pages/Contact"
import About from "./pages/About";
import Product from "./pages/Product";
import Portfolio from "./pages/Portfolio";
import './assets/css/all.min.css';

import './assets/css/animate.css';
import './assets/css/jquery.fancybox.css';
import './assets/css/lity.css';
import './assets/css/swiper.min.css';
import './assets/css/style.css';
import './assets/css/all.min.css';
import './assets/css/jquery-ui.min.css';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/portfolio" element={<Portfolio />} />
        

      </Routes>
    </Router>
  );
}
export default App;
