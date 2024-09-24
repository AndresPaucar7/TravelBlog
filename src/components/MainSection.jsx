import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainSection.css';

const MainSection = () => {
  const navigate = useNavigate(); 

  const handleExploreClick = () => {
    navigate('/brazil-blog'); 
  };

  return (
    <section className="main-section">
      <h1>Travel the World Wisely. Join the Discussion</h1>
      <p>We’re a community-driven travel company where real users share real experiences.<br/>
      Discover destinations through authentic stories and gain insights from fellow<br/>
      travelers to plan your next adventure.</p>
      <button className="explore-btn" onClick={handleExploreClick}>Explore</button> 
    </section>
  );
};

export default MainSection;
