import React from 'react';
import '../styles/Header.css';

const Header = () => {
  const headerClass = 'header';
  const title = 'CGT 390 Lab 3';

  return (
    <header className={headerClass}>
      <h1>{title}</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;