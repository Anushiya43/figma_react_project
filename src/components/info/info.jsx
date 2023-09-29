import React from 'react';
import "./info.css";
import { info1, info2, lImg2 } from '../../assets';

export default function Info() {
  return (
    <div  class="info d-flex flex-column text-center">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-6 d-flex flex-row mt-5 p-0'>
          <img src={lImg2} alt='lImg' className='info_img w-40'/>          
          <div className='mt-5 pt-5'>
            <img src={info1} alt='lImg' className='info_img'/>
            <h1>23,000+</h1>
            <p>Students</p>
          </div>
          </div>
          <div className='col-12 col-md-6 p-0 m-0 mt-5 pt-5'>
            <img src={info2} alt='lImg' className='mt-5 info_img'/>
            <h1>26 Hrs</h1>
            <p>Video Content</p>
          </div>          
      </div>
    </div>
    </div>
  )
}
