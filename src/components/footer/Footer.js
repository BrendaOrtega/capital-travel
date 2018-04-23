import React, { Component } from 'react';
import './Footer.css';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {

    render() {
        return (
            <div className="footer" >
                <div className="footer_box">
                    <div>
                        <h2>Listo para empezar? Recibe toda la información ahora!
                        </h2>
                        <div>
                            <div>
                                <input placeholder="Email" type="text"/>
                                <button>Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="footer_data flex">
                    <div className="ft">
                        <span>Sobre Capital Travel</span>
                        <span>Contacto</span>
                        <span>Políticas de Provacidad</span>
                    </div>
                    <div className="redes">
                        <FontAwesome name="facebook-square"/>
                        <FontAwesome name="twitter-square"/>
                        <FontAwesome name="instagram"/>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;