import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu(props) {
  const { menuItems, status } = props;


  return (
    <div className={`menu-container`}>
      <div className="logo-container">
        <NavLink to="/" className="logo">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User " className='user' style={{ width: '50px', padding: '8px', position: 'fixed', marginLeft: '-33px', marginTop: '-30px' }} />
          {status === 'Production' && <span className="dot green"></span>}
          {status === 'Break' && <span className="dot orange"></span>}
          {status === 'Offline' && <span className="dot gray"></span>}
          {status === 'Meeting' && <span className="dot orange"></span>}
          {status === 'Coaching' && <span className="dot orange"></span>}
        </NavLink>
      </div>
      <ul className="menu-items">
        {menuItems.map((menuItem, index) => (
          <li key={index} className="menu-item">
            <NavLink exact to={menuItem.path} activeClassName="active" className="menu-link">
              {menuItem.icon}
              <span className="menu-text">{menuItem.name}</span>
              {menuItem.notificationCount && (
                <div className="notification">{menuItem.notificationCount}</div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;





