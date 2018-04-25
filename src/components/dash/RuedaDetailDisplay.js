import React from 'react'
import './Detail.css'
import FontAwesome from 'react-fontawesome';

export const RuedaDetailDisplay = ({  }) => (
    <div className="detail">
        <div className="flexi">
            <div className="data box_detail">
                <h2 className="event">Proveedores Metal-mecanica 2018</h2>
                <div className="flexi geo">
                    <span><FontAwesome name="globe" />México</span>,
                    <span><FontAwesome name="map-pin" />Pachuca de Soto</span>
                </div>
                <br/>
                <div className="date">
                    <h3>05 de Mayo 2018 - 8 de Mayo 2018</h3>
                </div>
                <br/>
                <p>
                    Empresarios de la industria metalmecánica celebran una rueda de negocios
                    en el marco de la Feria Internacional de Bogotá (FIB). El encuentro,
                    el más grande en la historia del sector metal del país, cuenta con
                    la asistencia de 25 compradores internacionales y 150 oferentes de
                    la industria metalmecánica mexicana.
                </p>
                <button className="etiqueta">
                    Industrial
                </button>

            </div>
            <div className="event_photo box_detail">

            </div>
        </div>
    </div>
);