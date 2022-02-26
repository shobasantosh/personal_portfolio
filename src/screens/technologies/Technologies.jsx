import React from 'react'
import './technologies.css'
import DevIcon from "devicon-react-svg";
import {techs} from '../../helpers/tech'

function Technologies() {
  return (
    <div className="technologies_container" id="technologies">
        <div>
            <h1 style={{textAlign: 'center'}}>Technologies I Use</h1>
        </div>
        <div className="tech_cards_container">
            {techs.map((e, idx) => {
                return (
                    <div key={idx} className="tech_card"> 
                        <DevIcon className="tech_icons" icon={e.iconName} />
                        <span style={{ margin: '5px', fontSize: '1.5rem'}}>{e.name}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Technologies