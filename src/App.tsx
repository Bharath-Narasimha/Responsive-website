import React from 'react';
import './App.css';
import NavBar from "./components/NavBar.tsx";
import Banner from './components/Banner.tsx';
import Categories from './components/Categories/Categories.tsx';
import Segments from './components/Segments.tsx';
import TrendingProducts from './components/TrendingProducts.tsx';
import InteriorDesign from './components/InteriorDesign/InteriorDesign.tsx';
import AboutUs from './components/AboutUs.tsx';
import OurProcess from './components/OurProcess.tsx';
import Features from './components/Features.tsx';
import Footer from './components/Footer.tsx';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Categories/>
      <Segments/>
      <TrendingProducts/>
      <InteriorDesign/>
      <AboutUs/>
      <OurProcess/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
