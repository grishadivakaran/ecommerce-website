import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return ( 
    
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/products" element={<Products />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/navbar" element={<Navbar />} />
      
    </Routes>
  );
}

export default App;