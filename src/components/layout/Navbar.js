import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Stagger from 'react-css-stagger';
import '../../css/navbar.css';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="nav-logo"></span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <Stagger transition="fadeIn" delay={200}  className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/main">
                  accenture internal
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/youtubeplayer">
                  youtube player
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tablefilter">
                  table filter
                </Link>
              </li>
            </Stagger>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;
