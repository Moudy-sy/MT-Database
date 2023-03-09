import React, { useState } from 'react';
import Menu from './Menu';
import Notification from './Notification';
import Products from './MyCopmonent/Pages/Products';
import UserSign from './MyCopmonent/User/userSgin';
import Chat from './MyCopmonent/User/Chat';
import HomePage from './HomePage';
import { faUser, faHouse, faShop, faUpload, faLandmark, faComment, faDolly } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Notification.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const menuItems = [
    {
      name: '',
      path: '/',
      icon: <FontAwesomeIcon icon={faHouse} />,
      notificationCount: 1
    },
    {
      name: '',
      path: '/Chat',
      icon: <FontAwesomeIcon icon={faComment} />,
      notificationCount: 3
    },
    {
      name: '',
      path: '/locations',
      icon: <FontAwesomeIcon icon={faLandmark} />,
    },
    {
      name: '',
      path: '/products',
      icon: <FontAwesomeIcon icon={faShop} />,
    },
    {
      name: '',
      path: '/upload',
      icon: <FontAwesomeIcon icon={faUpload} />,
    },
    {
      name: '',
      path: '/locations',
      icon: <FontAwesomeIcon icon={faDolly} />,
      notificationCount: 5
    },
    {
      name: '',
      path: '/UserSign',
      icon: <FontAwesomeIcon icon={faUser} />,
      notificationCount: 5
    },
  ];

  const status = 'Production';



  return (
    <Router>
      <Menu menuItems={menuItems} status={status}>
      </Menu>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route exact path="/UserSign">
            <UserSign />
          </Route>
          <Route exact path="/Chat">
            <Chat />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




