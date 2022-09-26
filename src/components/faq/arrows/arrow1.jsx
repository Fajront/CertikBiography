import React, { Component } from 'react';
import Arrow from "./Arrow1.png";
import "./Arrows.css"
console.log(Arrow)

export class Arrows1 extends Component {
  render() {
    return(
      <div className='arwCenter'>
        <img  src={Arrow} className="arw" alt="arrow" id='arw1' />   
       </div>

    )
  }
}
export default Arrows1;