import React, { Component } from 'react';
import "./cut.css"
import cutImg1 from "./cut1.png";

console.log(cutImg1)

class Cut1 extends Component {
    render() {
        return (
      <div className='cut'>
<img className='cutimg' src={cutImg1} alt="cut1"/>   
<div className='blur'></div>
  </div>

        );
    }
}

export default Cut1;