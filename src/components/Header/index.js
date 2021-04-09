import React from 'react';
import './style.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <header>
      <img className="logo" src={logo} alt="" />
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
