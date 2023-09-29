import React, { useState } from 'react';
import "./topics.css";
import { lImg, topic1, topic2, topic3, topic4 } from '../../assets';

export default function Topics() {
  const [img,setImg]=useState(topic1)
  return (
    <div className='topics d-flex flex-column justify-content-center'>
      <div className='container'>
        <div className='row'>
        <h1 className='col-12 my-5'>What will you learn?</h1>
        <ul className='col-10 col-md-5 px-5'>
          <li onMouseOver={()=>{setImg(topic2)}}><p>What are frequencies?</p></li>
          <li onMouseOver={()=>{setImg(topic3)}}><p>Using DAW</p></li>
          <li onMouseOver={()=>{setImg(topic4)}}><p>Vocals processing</p></li>
          <li onMouseOver={()=>{setImg(topic3)}}><p>Mixing</p></li>
          <li onMouseOver={()=>{setImg(topic1)}}><p>Mixing Console</p></li>
          <li onMouseOver={()=>{setImg(topic2)}}><p>Mastering</p></li>
        </ul>
        <div className='col-5 d-none d-md-block pr-5 mb-0 pb-0'>
          <img src={img} alt='topic' className='topicimg'/>          
        </div>
        <div className='col-12 topiclimg text-right'>
          <img src={lImg} alt='topic1' className=''/>
        </div>
        </div>
      </div>
    </div>
  )
}
