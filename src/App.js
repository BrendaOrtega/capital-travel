import React, { Component } from 'react';
import { Routes } from './routes';
import './App.css';
import Nav from './components/nav/NavContainer';


class App extends Component {

    render() {
        return (
            <div>
                <div>

                    <Nav />
                    <Routes />

                </div>
            </div>
        );
    }
}

export default App;