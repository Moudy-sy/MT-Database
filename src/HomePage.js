import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './HomePage.css'
import Clock from './MyCopmonent/Clock';
import Products from './MyCopmonent/Pages/Products';
import UserSign from './MyCopmonent/User/userSgin';

function HomePage() {
    const [state, setState] = useState(null);

    useEffect(() => {
        // add code here to fetch data or update state
    }, []);
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function handleColorSchemeChange(e) {
        const isDarkMode = e.matches;
        document.body.classList.toggle('dark-mode', isDarkMode);
        document.body.classList.toggle('light-mode', !isDarkMode);
    }

    mediaQuery.addEventListener('change', handleColorSchemeChange);

    // Set the initial color scheme based on the user's preference
    handleColorSchemeChange(mediaQuery);
    const [darkMode, setDarkMode] = useState(false);
    function toggleDarkMode() {
        setDarkMode(darkMode);
    }
    return (
        <div className={`container `}>
            <div className="column">
                <view className="container">
                    <h1>Good afternoon Mohammad!</h1>
                    <p>Performance is growing well done!</p>
                    <img src={"https://static.vecteezy.com/system/resources/previews/010/872/944/original/3d-businessman-doing-business-growth-png.png"} alt="Logo" style={{ width: "90%", height: "290px" }} />
                </view>
                <view className="container">
                    <div className="column-1">
                        <div>
                            <h2>Qualities</h2>
                            <h4>Total Product: £1922.92 </h4>
                        </div>

                    </div>
                </view>

                <div className=""></div>
            </div>
            <div className="column-group blur-background ">
                {/* <MyComponent /> */}
                <div className="column column-2">
                    <view className=" Group">
                        <h1>Orders:</h1>
                        <h4>Customer ${Products.name} has paid for order!</h4>
                        <h4>Customer ${Products.cart} put item in cart</h4>
                        <h4>Customer ${Products.name} has paid for order!</h4>
                        <h4>Customer ${Products.cart} put item in cart</h4>
                    </view>
                </div>
                <div className="column column-3">
                    <view className=" Group Clock-House">
                        <Clock />
                        <h4>192 today our customer loves new items.</h4>
                        <h4>You have {4} tasks to do today!</h4>
                        <h4>Meeting with new client at 14:30PM</h4>
                        <h4>You have {4} tasks to do today!</h4>
                    </view>
                </div>
            </div>
        </div >
    );
}


<div>
</div>

export default HomePage;
ReactDOM.render(<HomePage />, document.getElementById('root'));
