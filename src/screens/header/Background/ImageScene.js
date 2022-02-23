import React from 'react'
import './imageScene.css'
import logo from './lightblue.png';

function ImageScene() {
  return (
    <div>
        <img src={logo} className="image"/>
    </div>
  )
}

export default ImageScene