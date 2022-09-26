import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import NavbarComp from './components/navBar/Navbar';
import AboutMe from './components/aboutMe/AboutMe';
import WhoIM from './components/whoIM/WhoIM'
import Faq from './components/faq/Faq'
import Experiences from './components/experiences/Experiences';
import Cut1 from './components/faq/cuts/Cut1';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavbarComp/>
      <AboutMe/>
      <WhoIM/>
      <Cut1/>
      <Faq/>
      <Experiences/>    
      </header>
    </div>
    
  );
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);

  
}

export default App;
