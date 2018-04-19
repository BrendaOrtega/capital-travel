import React, { Component } from 'react';
import './Home.css';
import Slide from './Slide';
import About from './About';

class HomeContainer extends Component {

    render() {
        return (
            <div>
               <Slide />
                <About />
            </div>
        );
    }
}

export default HomeContainer;