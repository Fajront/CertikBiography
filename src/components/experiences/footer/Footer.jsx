import React from "react";
import "./Footer.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

  
const bottomFooter = () => {
  return (
    <div class="foot" >
      <div class="footere">
        <p className="thankYou" >Ďakujem, že ste sa dostali až sem</p>
        <span className="green">Tu ma možete kontaktovať:</span>
        <p>
        <br/>
         <span className="green">email: </span>marekcrtk@gmail.com
        </p>
        <p>
        <span className="green">Tel: </span>0907 452 248
        </p>

     
        <Router>
        <Routes>
          <Route path='#contact' component={() => { 
      window.location.href = 'https://mail.google.com/'; 
              return null;
            }}/>
      </Routes>
    </Router>
    
        <br/>
        <br/>
        <p>Stránka bola vytvorená: 24.9 2022</p>
      </div>
    </div>
  );
};
export default bottomFooter;