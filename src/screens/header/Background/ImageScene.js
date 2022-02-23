import React from 'react'
import './imageScene.css'
import blue from './lightblue.png';
import birds from './birdswirls.png';


function ImageScene() {
  return (
    <div className="background">
        <img src={blue} className="image_back"/>
        <img src={birds} className="image_front"/>
    </div>
  )
  }

export default ImageScene