import React from 'react';
import "./header.css";
import Navbar from '../navbar/navbar';


export default function Header() {
  return (
    <div className='header d-flex flex-column justify-content-between'>
      <Navbar/>
      <div className='container'>
        <div className='row'>
          <div className='col-10 col-md-6 col-lg-4 box1'>
            <p className=''>Sound Design Masterclass</p>
            <h1 className=''>Learn the Art of Sound Design</h1>
            <button className=''>Demo Lesson</button>
          </div>
        </div>
      </div>
    </div>
    
    
  )
}
