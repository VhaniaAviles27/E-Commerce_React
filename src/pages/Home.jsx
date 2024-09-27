import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Title from '../components/texts/Title';
import Card from '../components/cards/Card';
import "./Pages.css";
import Carousel from '../components/carrousel/Carousel';

const images = [
  'src/assets/images/image-2.jpg',
  'src/assets/images/image-2.jpg',
  'src/assets/images/image-2.jpg',

]
const Home = () => {
  return (
    <div className="containerPrincipal">
      <div className="body">
        <Header/>
        <div>
          <Carousel images = {images}/>
        </div>
        <Title text="PROMOCIONES" />
        <div id = "promotions" className='folioContainer'>
          <Card 
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="380px"
            height="380px"
          />
          <Card 
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="380px"
            height="380px"
          />
          <Card 
            imageSrc="src/assets/images/foto-girasoles.png"
            title="Flores amarillas"
            description="Odio de vos - Floricienta"
            width="380px"
            height="380px"
          />
       
        </div>
        
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
