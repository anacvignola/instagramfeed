import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../assets/images/logo.svg';
import camera from '../assets/images/camera.svg';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="InstaRocket" />
        </Link>
        <Link to="/new">
        <img src={camera} alt="Enviar publicação" />
        </Link>
      </div>
    </header>
  );
}
