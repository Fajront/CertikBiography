import React, { Component } from 'react';
import "./WhoIM.css"
import manPC from './manPC.png';
import pictureofme from './pictureOfMe.jpg';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
console.log(manPC);
console.log(pictureofme)

export class WhoIM extends Component {
  render() {
    return(
      <div className="field" id="whoIM">
        <div className='contentbox'>  
          <img className='' src={manPC} alt="manPC" height={400}/>   
          <AnimationOnScroll animateOnce={true} animateIn="animate__zoomIn">
            <h1 className='whoIM'>Kto som ?</h1>
          </AnimationOnScroll>
          
          <AnimationOnScroll animateOnce={true} animateIn="animate__zoomIn" delay={500}>
            <h3>študent &  <span className='green'>progamátor</span></h3>
          </AnimationOnScroll>

            <p className='textSet'>
                Na začiatok vám poviem niečo o sebe. Volám sa Marek Čertík a som 
                <br/>  
                študentom strednej odbornej školy so zameraním na informačné a sieťové
                <br/>
                technológie. Mám 16 rokov a pochádzam z okresu Prievidza.  
                <br/>
                Vo voľnom čase sa venujem programovaniu, je to moja vášeň.
                <br/> 
          </p>
        </div>
        <div className='imgofME'>
          <img className='pictureofme' src={pictureofme} alt="manPC" height={550}/>;
        </div>
       </div>

    )
  }
}
export default WhoIM;