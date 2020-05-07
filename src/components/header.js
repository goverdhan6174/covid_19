import React from "react";

function Header() {
  let navRef = React.createRef();

  function toggleNav() {
    const navList = navRef.current;
    navList.classList.toggle("nav-active");
  }

  return (
    <header>
      <div className="logo">
        <span>COVID-19</span>
        <i className="fas fa-viruses"></i>
      </div>
      <ul className="nav" ref={navRef}>
        <li className="navlink">HOME</li>
        <li className="navlink">ABOUT</li>
        <li className="navlink"> CONTRIBUTE</li>
      </ul>
      <div className="burger" onClick={toggleNav}>
        OOO
      </div>
    </header>
  );
}

export default Header;
