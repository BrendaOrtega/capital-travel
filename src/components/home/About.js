import React, { Component } from 'react';
import './Home.css';
import OwlCarousel from 'react-owl-carousel';


const img = "https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

class Slide extends Component {

    render() {
        return (
            <div className="about">
                <div className="flex">
                    <div className="box_about">
                        <h2>DONDE LOS NEGOCIOS PROSPERAN</h2>
                        <p>Creamos un entorno que mejorará tu productividad, innovación y colaboración.</p>
                        <p>Diseñamos y organizamos encuentros o ruedas de negocio que, combinadas con una experiencia
                        turística inolvidable se conviertan en una propuesta de valor para quienes
                            buscan incrementar las relaciones comerciales de sus agremiados.
                        </p>
                    </div>
                    <div className="box_about owl">
                        <div className="owl_box">
                            <OwlCarousel
                                className="owl-theme"
                                loop margin={10} nav items={1}
                            >
                                <div class="item">
                                    <img src="https://images.pexels.com/photos/711009/pexels-photo-711009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>

                                </div>
                                <div class="item">
                                    <img src="https://images.pexels.com/photos/604897/pexels-photo-604897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                                </div>
                                <div class="item">
                                    <img src="https://images.pexels.com/photos/258626/pexels-photo-258626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                                </div>
                                <div class="item">
                                    <img src="https://images.pexels.com/photos/260645/pexels-photo-260645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                                </div>
                            
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className="pad">
                    <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style={{backgroundImage:`url("https://images.pexels.com/photos/953216/pexels-photo-953216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`}}>
                        <div className="cover">
                        <div className="uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical">
                            <h1 uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;">Descarga nuestra app</h1>
                            <div  uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;" className="fl">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2000px-Download_on_the_App_Store_Badge.svg.png" alt=""/>
                                <img src="https://mobileport.com.mx/wp-content/uploads/2017/11/googleplay_button_es.png" alt=""/>
                            </div>
                            <p uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;">No es solo una reunión, es una experiencia.</p>
                        </div></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Slide;