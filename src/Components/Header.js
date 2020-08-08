import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className="head">
            <div className="header-wrapper">
            <h1>xpence</h1>
            <ul> 
                <li><NavLink exact activeClassName="active" to="/">{"Home"}</NavLink></li>
                <li><NavLink activeClassName="active" to="/add">{"Add"}</NavLink></li>
                <li><NavLink activeClassName="active" to="/edit">{"Edit"}</NavLink></li>
            </ul>
            </div>
        </div>
    )
}


export default Header;