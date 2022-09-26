import { useState } from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import "./Navbar.css"

export default function NavbarComp() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
<Router>
    <nav className="navigation">
      <a href="/" className="brand-name">
        Marek Čertík
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
         
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Nav.Link  href="#aboutMe" className="nav_link">Home</Nav.Link>
          </li>
          <li>
            <Nav.Link  href="#whoIM" className="nav_link">Kto som</Nav.Link>
          </li>
          <li>
            <Nav.Link  href="#OMne" className="nav_link">O mne</Nav.Link>
          </li>
          <li>
            <Nav.Link  href="#Experiences" className="nav_link">Skúsenosti</Nav.Link>
          </li>
          <li>
          </li>
        </ul>
      </div>
      <webloc/>
    </nav>
    </Router>
  );
}
