import React, { Component } from 'react';
import "./cut.css"
import cutImg2 from "./cut2.png";

console.log(cutImg2)

class Cut2 extends Component {
    render() {
        return (
      <div className='cut' id="Cut2">
<img className='cutimg' src={cutImg2} alt="cut2"/>   
<div className='blur'></div>
  </div>

        );
    }
}

export default Cut2;