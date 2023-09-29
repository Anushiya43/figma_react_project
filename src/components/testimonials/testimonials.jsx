import React from 'react';
import "./testimonials.css";
import { testimonial1, testimonial2, testimonial3 } from '../../assets';

export default function Testimonials() {
  return (
    <div  class="test py-5">
      <div className='container'>
        <div className='row'>
          <h1 className='col-12 py-5 mb-5'>What our students say?</h1>          
          <div className='col-12 col-lg-4 box'>
            <img src={testimonial1} alt='lImg' className='info_img'/>
            <p>Peter Adams</p>
            <span>This is a great course. I got to learn a lot.</span>
          </div>
          <div className='col-12 col-lg-4 box'>
            <img src={testimonial2} alt='lImg' className='info_img'/>
            <p>Robert Fox</p>
            <span>I got to learn a lot about Music Production with this course. Thanks </span>
          </div>  
          <div className='col-12 col-lg-4 box'>
            <img src={testimonial3} alt='lImg' className='info_img'/>
            <p>Emily Smith</p>
            <span>Awesome! Great job!! </span>
          </div>          
      </div>
    </div>
    </div>
  )
}
