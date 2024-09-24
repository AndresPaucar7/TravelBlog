import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SouthAmerica from './components/SouthAmerica';
import Asia from './components/Asia';
import Africa from './components/Africa';
import Footer from './components/Footer';
import BrazilBlog from './components/blog/BrazilBlog';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/brazil-blog" element={<BrazilBlog />} /> 
        </Routes>
        <SouthAmerica />
        <Asia />
        <Africa />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
