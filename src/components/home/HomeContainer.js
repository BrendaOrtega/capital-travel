import React, { Component } from 'react';
import './Home.css';
import Slide from './Slide';
import About from './About';
import Footer from '../footer/Footer';

class HomeContainer extends Component {

    render() {
        return (
            <div>
               <Slide />
                <About />
                <Footer />
            </div>
        );
    }
}

export default HomeContainer;