import Footer from './footer/Footer';
import React, { Component } from 'react';
import "./Experiences.css"
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

class Experiences extends Component {
    render() {
        return (
			<div className='area' id='Experiences'>
				<div className="service">
					<AnimationOnScroll animateOnce={true} animateIn="animate__slideInDown">
						<div className="title">
							<h2 className="expirience">Moje skúsenosti</h2>
						</div>
					</AnimationOnScroll>

					<div className="box">
					<AnimationOnScroll animateOnce={true} animateIn="animate__slideInUp">
						<div className="card" id='card1'>
							
							<h5>Programovanie</h5>
							<div className="pra">
								<p>Pokročilé skúsnosti v Html,Css, a Javascript a React.js.
									<br/>
									Znalost  Git a Github , wordpress , bootstrap , electron
								
								</p>
								<p>	V minulosti som pracoval aj s programovacími jazkymi C a PHP
								<br/>
									 Základne znalosti aj s jazykom SQL (mySQL)
								<br/>			
									Začiatočník v oblasti Java , Python
								</p>
							</div>
						</div>
					</AnimationOnScroll>


					<AnimationOnScroll animateOnce={true} animateIn="animate__slideInUp" delay={500}>
						<div className="card" id='card2'>
							
							<h5>Prax</h5>
							<div className="pra">
								<p>Donedávna som bol stážista v začínajúcej firme U:BIT</p>
								<p>Mám za sebou par freelance skúsenosti</p>
								<p>Vytvoril som viacero webov</p>
								<p>Podielal som sa na tvorený webovej aplikácie na objednávanie jedla</p>
							</div>
						</div>
					</AnimationOnScroll>
						
						<AnimationOnScroll animateOnce={true} animateIn="animate__slideInUp" delay={1000}>

						<div className="card" id='card3'>
							<h5>Vedlajšie</h5>
							<div className="pra">
								<p>Ovládam pokročilu Angličtinu (B2)</p>
								<p>Mám Základne znalosti Sietovích technológií a fungovania internetu</p>
								<p></p>
							</div>
								</div>
						</AnimationOnScroll>
					</div>
				</div>
			<Footer/>
			</div>

        );
    }
}

export default Experiences;