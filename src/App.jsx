// src/App.js
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import ContactPage from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., fetching data or waiting for resources)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default App;
