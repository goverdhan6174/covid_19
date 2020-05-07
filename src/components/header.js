import React from "react";
import { Link } from "react-router-dom";
function Header() {
  let navRef = React.createRef();
  let wrapperRef = React.createRef();

  function toggleNav() {
    const navList = navRef.current;
    navList.classList.toggle("nav-active");
    wrapperRef.current.classList.toggle("wrapper-active");
  }

  return (
    <header>
      <div className="logo">
        <span>COVID-19</span>
      </div>
      <ul className="nav" ref={navRef}>
        <Link to="/">
          <li className="navlink" onClick={toggleNav}>
            HOME
          </li>
        </Link>
        <Link to="/form">
          <li className="navlink" onClick={toggleNav}>
            
           Detail
          </li>
        </Link>
        <Link to="/faq">
          <li className="navlink" onClick={toggleNav}>
            FAQ
          </li>
        </Link>
      </ul>
      <div className="burger" onClick={toggleNav}>
        OOO
      </div>
      <div className="wrapper" ref={wrapperRef} onClick={toggleNav}></div>
    </header>
  );
}

export default Header;
