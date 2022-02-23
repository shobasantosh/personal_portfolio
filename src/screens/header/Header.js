import React from 'react'
import './Header.css'
import Typed from 'react-typed';

function Header() {
  return (
    <div className="main-info">
      <h1>Lifelong Learning</h1>
        <Typed 
            strings={[
                'have the courage to create                                      ']}
                typeSpeed={40}
                backSpeed={50}
                loop
        />
    </div>
  )
}

export default Header