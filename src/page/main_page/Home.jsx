import React from 'react';
import mainImage1 from './mainPhoto.jpg'; // Ensure this file exists
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToSection = () => {
    navigate('/section');
  };

  const goToDetection =() =>{
    navigate('/Detection');
  };
  

  return (
    <div className='body-home'>
      <div className="main_photo">
        <img src={mainImage1} alt="Main Display" className="main-photo" />
      </div>

      <div className="main-form">
        <div className="Topic">Auvanaka</div>
        <div className="page">
          Project Proposal: Plant Disease Detection and Crop Recommendation Web Application
        </div>
      </div>
      
      <div className="button-click">
        <button onClick={goToSection}>Go to Section</button>
      </div>

      <div className='button_ML'>
        <button onClick={goToDetection}>Go to</button>
      </div>
    </div>
  );
}

export default Home;
