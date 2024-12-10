import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SouthAmerica from './components/SouthAmerica';
import Asia from './components/Asia';
import Africa from './components/Africa';
import Footer from './components/Footer';
import BrazilBlog from './components/blog/BrazilBlog';
import SignIn from './components/SignIn';
import Security from './components/Security';
import RegistrationForm from './components/RegistrationForm';
import SignUpRequestForm from './components/SignUpRequestForm';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MainSection />
                <SouthAmerica />
                <Asia />
                <Africa />
              </>
            }
          />
          <Route path="/brazil-blog" element={<Security element={<BrazilBlog />} />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/signup" element={<SignUpRequestForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
