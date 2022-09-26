import React, { Component } from 'react';
import Arrows1 from "./arrows/arrow1"
import { Arrows2 } from './arrows/arrow2';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

import "./Faq.css";


export class Faq extends Component {
  render() {
    return(
     
      <div name='OMne' className="fld" id='OMne'>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight">
          <div className='contentbox1'>  
            <h3 className='faqtitle'>Predstava o budúcnosti</h3>
          <p className='txtsetup'>
            V budúcnosti mám v pláne pracovať na pokrokových  
            <br/>
             projektoch a technológiach
            <br/>
              a zdokonovalovať sa ako full-stack  developer.
            <br/>
              Chcem vám pomôcť dosiahnúť maximum.
            <br/>
              Poďme spolu vytvoriť pokrokové projekty !
            <br/>
            
            

          </p>

          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <Arrows1/>
          <div className='contentbox2'>  
            <h3 className='faqtitle'>Osobné vlastnosti</h3>
                <p className='txtsetup'>
                  Som komunikatívny a pracovitý človek. 
                <br/>
                 Medzi moje silné stránky patrí prevažne učenlivosť a schopnosť
                <br/>
                <br/>  
                rýchlo pochopiť a prispôsobiť sa novým veciam.
                <br/>
                  Som lenivý ,ale tým správnym spôsobom ako developer iste viete čo mám na mysli.
                </p>

          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight">
          <Arrows2/>
        </AnimationOnScroll>
          
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <div className='contentbox3'>  
            <h3 className='faqtitle'>Prečo práve ja ?</h3>
            <p className='txtsetup'>
              Mám za sebou pracovnú skúsenosť ako stážista v web development firme. 
              <br/>

              </p>
             
                <p className='txtsetup'>Vždy som bol tímový hráč. 
              <br/>
              Verím, že budem skvelý prínos do vašej firmy a vhodný
              <br/>
               človek do vášho kolektívu.  
              <br/>  
              
              <br/>
                
            </p>
          </div>
        </AnimationOnScroll>
              
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeft">
          <div className='imgteam'>
          </div>
        </AnimationOnScroll>
              
            </div>

    )
  }
  
}


export default Faq;