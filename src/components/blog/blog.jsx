import React from 'react';
import "./blog.css";
import { blog1, blog2, blog3 } from '../../assets';

export default function Blog() {
  return (
        <div  class="blog py-5">
          <div className='container'>
            <div className='row'>
              <h1 className='col-12 py-5'>Latest Posts</h1>  
              <div className='col-12 d-none d-lg-block'>
                    <div className='d-flex justify-content-between'>
                    <div className='card card1 shadow'>                
                      <img src={blog1} alt='blog1' className='blog_img'/>                               
                      <div className='d-flex p-2'>
                        <p>How To Use Drum Machine in Logic Pro X</p>
                      </div>
                    </div>
                    <div className='card card1 shadow'>
                      <img src={blog2} alt='blog1' className='blog_img'/>
                      <div className='d-flex p-2'>
                        <p>How To Mix Guitars Effectively</p>
                      </div>
                    </div>
                    <div className='card card1 shadow'>
                      <img src={blog3} alt='blog1' className='blog_img'/>
                      <div className='d-flex p-2'>
                        <p>The Real Power of Harmonies in Music Production</p>
                      </div>
                    </div> 
                    </div>
               </div>                 
              <div className='col-12 col-md-5 d-lg-none '>
                <div className='card my-5 shadow'>                
                <img src={blog1} alt='blog1' className='blog_img'/>                               
                <div className='d-flex p-2'>
                  <p>How To Use Drum Machine in Logic Pro X</p>
                </div>
              </div>
              </div>
              <div className='col-12 col-md-5 d-lg-none '>
              <div className='card my-5 shadow'>
                <img src={blog2} alt='blog1' className='blog_img'/>
                <div className='d-flex p-2'>
                  <p>How To Mix Guitars Effectively</p>
                </div>
              </div>
              </div>
              <div className='col-12 col-md-12 d-lg-none'>
              <div className='card my-5 shadow'>
                <img src={blog3} alt='blog1' className='blog_img'/>
                <div className='d-flex p-2'>
                  <p>The Real Power of Harmonies in Music Production</p>
                </div>
              </div>
              </div>
            <div className='col-12 d-flex flex-row justify-content-end pt-3'>
            <button>All Posts</button>
            </div>     
     </div>
   </div>
   </div>
    
    )
}
