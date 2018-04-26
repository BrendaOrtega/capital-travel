import React, { Component } from 'react';
import './Nav.css';
import log from '../../assets/log.png';
import { Link } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <div className="nav" >
                <Link to="/">
                    <img src={log} alt="" />
                </Link>
                <div className="nav_data">
                    <hr className="line" />
                    <Link to="/login" >
                        <p>Login</p>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Nav;