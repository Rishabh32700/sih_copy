import React from 'react'

import './slider.css'

import slider_01 from '../../assets/slider_01.jpg'
import slider_02 from '../../assets/slider_02.jpg'
import slider_03 from '../../assets/slider_03.jpg'
import slider_04 from '../../assets/slider_04.png'
import slider_05 from '../../assets/slider_05.png'
import slider_06 from '../../assets/slider_06.jpg'
import slider_07 from '../../assets/slider_07.png'

const Slider = () => {
  function imgURL (hmm) {
    console.log("hello");
    var test = document.getElementById("img").src = hmm;
    console.log(test);
    
  }

  return (
    <>
        <div className="slider">
            <div className="slider__container">
                <div className="slider__section">
                    <img id='img' src={slider_01} alt="" />
                </div>
                <ul className="navigation">
                  <li><img onClick={()=>imgURL(slider_01)} src={slider_01} alt="" /></li>
                  <li><img onClick={()=>imgURL(slider_02)} src={slider_02} alt="" /></li>
                  <li><img onClick={()=>imgURL(slider_03)} src={slider_03} alt="" /></li>
                  <li><img onClick={()=>imgURL(slider_04)} src={slider_04} alt="" /></li>
                  <li><img onClick={()=>imgURL(slider_05)} src={slider_05} alt="" /></li>
                  <li><img onClick={()=>imgURL(slider_06)} src={slider_06} alt="" /></li>
                  <li><img onClick={()=>imgURL(slider_07)} src={slider_07} alt="" /></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Slider