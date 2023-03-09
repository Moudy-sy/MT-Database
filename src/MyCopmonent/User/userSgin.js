import React, { useState } from "react";
import ReactDOM from 'react-dom';
import './UserSign.css'

function UserSign() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting...', { username, password });
        // Add your sign-in logic here
    }

    return (
        <div className="container">
            <div className="user-signin container ">
                <form onSubmit={handleSubmit}>
                    <h1>Sign-In</h1>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default UserSign;
ReactDOM.render(<UserSign />, document.getElementById('root'));