import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Delivery from "./Components/Delivery";
import About from "./Components/About";
import Work from "./Components/Work";
import Menu from "./Components/Menu";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Delivery />
        <About />
        <Work />
        <Menu />
        <Testimonial />
        <Footer />
        <Routes>

         
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/testimonial" element={<Testimonial />} />
  
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
