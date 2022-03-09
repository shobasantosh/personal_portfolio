import React from 'react'
import './imageScene.css'
import lightblue from './images/lightblue.png';
import birds from './images/birdswirls.png';
import blue from './images/blue.jpg';


function ImageScene() {
  return (
    <div className="back_container" id="header">
      <div>
        <img src={blue}/>
      </div>
    </div>
  )
}

export default ImageScene


//<img src={birds} className="image_front"/>


