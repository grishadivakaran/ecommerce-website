import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import ProductDetails from "./pages/productDetails";

import "./App.css";

function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Categories />
              <Products />
              <Testimonials />
              <Footer />
            </>
          }
        />

        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Products />
              <Footer />
            </>
          }
        />

        <Route
          path="/categories"
          element={
            <>
              <Navbar />
              <Categories />
              <Footer />
            </>
          }
        />

        <Route
          path="/testimonials"
          element={
            <>
              <Navbar />
              <Testimonials />
              <Footer />
            </>
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
      </Routes>
  );
}

export default App;