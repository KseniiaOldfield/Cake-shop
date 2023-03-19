import { useState } from 'react';
import { data } from './data';
import './App.css';

function Booknow() {
  const [slides, setSlides] = useState(0);
  const {id, name, price, image,} = data[slides];
   const backSlide = () => {
    setSlides((slides => {
    slides --;
    if (slides < 0) {
      return data.length -1;
    }
        return slides;
    }))
  }
    const nextSlide = () => {
      setSlides((slides => {
        slides ++;
        if (slides > data.length -1){
          slides = 0;
        }
        return slides;
      }))
    } 
  return (
    <div className='boxbook'>
        <div className='btnbox'>
          <button className='btn' onClick={backSlide}> Back </button>
        </div>
        <div className="containercake">
        <h1 className='choose'>Choose a cake</h1>
          <img className='card' src={image} width="500px" alt='cake'/>
          <h2 className='namecake'>{id}. {name} - £ {price}</h2>
          <a  href="mailto:ks04.08@mail.ru" target="_blank"><button className='btn'>Book now</button></a>
        </div>
        <div className='btnbox'>
          <button className='btn' onClick={nextSlide}> Next </button>
        </div>
      
    </div>);
}

export default Booknow