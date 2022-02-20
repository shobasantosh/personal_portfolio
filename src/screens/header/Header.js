import React from 'react'
import './Header.css'
import Typed from 'react-typed';

function Header() {
  return (
    <div className="main-info">
        <Typed 
            strings={[
                "",
                'Wander your creative space']}
                typeSpeed={40}
                backSpeed={50}
                loop
        />
    </div>
  )
}

export default Header