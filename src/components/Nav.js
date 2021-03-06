import React from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeConsumer } from '../contexts/theme';

const activeStyle = {
  color: 'rgb(187, 46, 31)',
};

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <NavLink to="/" activeStyle={activeStyle} exact className="nav-link">
                Breweries
              </NavLink>
            </li>
            <li>
              <NavLink to="/beers" activeStyle={activeStyle} exact className="nav-link">
                Beers
              </NavLink>
            </li>
          </ul>
          <button style={{ fontSize: 30 }} className="btn-clear" onClick={toggleTheme} type="button">
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}