import React, { Component } from 'react';
import Arrow2 from "./Arrow2.png";
import "./Arrows.css"
console.log(Arrow2)

export class Arrows2 extends Component {
  render() {
    return(
      <div>
        <img  src={Arrow2} className="arw" alt="arrow" id='arw2' />   
       </div>

    )
  }
}
export default Arrows2;