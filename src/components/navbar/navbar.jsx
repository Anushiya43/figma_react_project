import React from 'react';
import "./navbar.css";
import { nav } from '../../assets';
export default function Navbar() {
  return (
  <div className="navbar">
    <div className='container'>
    <div className='row w-100'>
    <nav className='col-12 d-flex flex-row justify-content-between w-100'>
    <a className='logo'>
        Sound <span className='red'>DZign</span>
    </a> 
    <div className=' d-none d-md-block'>   
    <ul className='nav_item'>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>course Details</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
      <li>
        <a>Testimonials</a>
      </li>
    </ul>
    </div>
    <div className='d-block d-md-none'><img src={nav} alt='nav' className='navImg'/> </div>     
    </nav>    
    </div>    
  </div>
  </div>
  )
}
