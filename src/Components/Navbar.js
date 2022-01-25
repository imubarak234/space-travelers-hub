import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/planet.png';
import '../index.css';

const Naver = () => (
  <div className="navs navigate">
    <nav className="navbar navbar-expand-lg navbar-light bg-lignt lead">
      <div className="container">
        <NavLink className="navbar-brand fw-normal d-flex" to="/" id="title">
          <img src={logo} alt="logo" id="logos-img" className="pe-3" />
          <h3>Space Travelers&lsquo; Hub</h3>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link fw-normal pe-4" to="/">
                Rockets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-normal pe-4 list-child" to="">
                Missions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-normal pe-4" to="">
                My Profile
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Naver;
