import React from 'react';
import './Notification.css'

const Notification = ({ count }) => {
  return (
    <div className="notification">
      {count}
    </div>
  );
};

export default Notification;

