import React from 'react';
import "./footer.css";
import { socialIcon } from '../../assets';

export default function Footer() {
  return (
    <div className='footer py-5'>
      <div className='container'>
        <div className='row'> 
          <div className='col-12 col-md-4'>
            <div className='d-flex flex-column'>
            <a className='logo my-3'>
                Sound <span className='red'>DZign</span>
            </a> 
            <img src={socialIcon} alt='socialIcon' className='social_icon m-3'/>
            </div>
          </div>

          <div className='col-12 col-md-4'>
            <div className='d-flex flex-column'>
            <a className='red1 m-3'>
                Quick Links
            </a> 
            <p>Blog</p>
            <p> Privacy Policy</p>
            </div>
          </div>

          <div className='col-12 col-md-4'>
            <div className='d-flex flex-column'>
            <a className='red1 m-3'>
              Contact Us
            </a> 
            <p>contact@email.com</p><p> +1 999 9999 999</p>
            </div>
          </div>
          <span className='span1 col-12'>This website is designed by GTCoding Ⓒ 2022</span>
        </div>
      </div>

    </div>
  )
}
