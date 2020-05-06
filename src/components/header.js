import React from "react";


function Header() {
  let navRef = React.createRef();

  function toggleNav() {
    const navList = navRef.current;
    navList.classList.toggle("nav-active"); 
  }
  
  return (
    <header>
      <h1 className="logo">COVID-19</h1>
      <ul className="nav" ref ={navRef}>
        <li className="navlink">HOME</li>
        <li className="navlink">ABOUT</li>
        <li className="navlink"> CONTRIBUTE</li>
      </ul>
      <h3 className="burger" onClick={toggleNav}>
        OOO
      </h3>
    </header>
  );
}

export default Header;
