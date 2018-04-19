import React, { Component } from 'react';
import './Home.css';
import logo from '../../assets/logo-inv.png';
import 'owl.carousel/dist/assets/owl.carousel.css';


class Slide extends Component {

    render() {
        return (
            <div>
              <div className="slide">
                <div className="cover">
                    <div>
                        <img className="logo" src={logo} alt=""/>
                        <p>ENCUENTRO DE NEGOCIOS</p>
                    </div>
                </div>
              </div>



            </div>
        );
    }
}

export default Slide;