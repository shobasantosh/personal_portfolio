import React from 'react'
import './technologies.css'
import DevIcon from "devicon-react-svg";
import {techs} from '../../helpers/tech'
import figmalogo from '../../images/figmalogo.png';
import mirologo from '../../images/mirologo.png';

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
            <div className="figma_card">
                <img src={figmalogo} className="figma_icon"/>
                <span style={{ margin: '5px', fontSize: '1.5rem'}}>Figma</span>
            </div>
            <div className="miro_card">
                <img src={mirologo} className="miro_icon"/>
                <span style={{ margin: '5px', fontSize: '1.5rem'}}>Miro</span>
            </div>
        </div>
        <div>
            <p> This is my Github page:&nbsp;
                <a href="https://github.com/shobasantosh" target="_blank" rel="noreferrer">https://github.com/shobasantosh</a>
            </p>
        </div>
    </div>
  )
}

export default Technologies