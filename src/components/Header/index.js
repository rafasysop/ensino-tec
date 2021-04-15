import React from 'react';
import './style.css';
import logo from '../../assets/logo.svg';
import UserProfile from '../../assets/UserProfile.svg';

function Header() {
  return (
    <header className="header-container">
      <img className="logo" src={logo} alt="" />
      <span className="elipse-p-1"></span>
      <span className="elipse-p-2"></span>
      <span className="elipse-p-3"></span>
      <div className="hamburguer">☰</div>
      <nav>
        <ul className="menu">
          <li>Soluções</li>
          <li>Preços</li>
          <li>Academy</li>
          <li>Blog</li>
          <li>Contato</li>
        </ul>
      </nav>
      <section className="profile">
        <ul>
          <img className="user-profile" src={UserProfile} alt="user" />
          <li>Entrar</li>
          <li>
            <button>Começar agora</button>
          </li>
          <li>PT</li>
        </ul>
      </section>
    </header>
  );
}

export default Header;
