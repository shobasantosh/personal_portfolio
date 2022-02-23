import React from 'react'
import './aboutMe.css'
import profilepic from '../../images/profilepic.jpg'

function AboutMe() {
  return (
    <div className="about_container" id="about-me">
      <div>
        <img src={profilepic} alt="my pic"/>
      </div>
      <div className="about_text">
        <h1>ABOUT ME</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
      </div>
    </div>
  )
}

export default AboutMe