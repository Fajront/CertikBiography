import React, { Component } from 'react';
import { TypeAnimation } from 'react-type-animation';
import "./AboutMe.css"
export class AboutMe extends Component {
  render() {
    return(
      <div className='heros' id="aboutMe">
        <div className="content1">
          <h4>Životopis</h4>
        
      <TypeAnimation
      sequence={[
        'Marek Čertík', // Types 'One'
        1000, // Waits 1s
        'Developer', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Developer a študent', // Types 'Three' without deleting 'Two'
        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="h1"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />
        <h3>Študent strednej školy a  programátor</h3>
       </div>

<div>

<div className="areas" >
                    <ul className="circles">
                        <li className='anm' id="anm1"></li>
                        <li className='anm' id="anm2" ></li>
                        <li className='anm' id='anm3'></li>
                        <li className='anm' id='anm4'></li>
                        <li className='anm' id='anm5'></li>
                        <li className='anm' id='anm6'></li>
                        <li className='anm' id='anm7'></li>
                        <li className='anm' id='anm8'></li>
                        <li className='anm' id='anm9'></li>
                        <li className='anm' id='anm10'></li>
                    </ul>
                </div>
</div>
       </div>

    )
  }
}
export default AboutMe;