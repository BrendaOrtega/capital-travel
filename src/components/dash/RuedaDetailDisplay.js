import React from 'react'
import './Detail.css'
import FontAwesome from 'react-fontawesome';
import capitalTravel from '../../assets/capitalTravel.jpg'

export const RuedaDetailDisplay = ({id, nombre, pais, fechaInicio, fechaFin, sector, descripcion, linkImagen  }) => (

    <div className="detail">
        <div className="flexi">
            <div className="data box_detail">
                <h2 className="event">{nombre}</h2>
                <div className="flexi geo">
                    <span><FontAwesome name="globe" />{pais}</span>,
                    <span><FontAwesome name="map-pin" />Pachuca de Soto</span>
                </div>
                <br/>
                <div className="date">
                    <h3>{fechaInicio} - {fechaFin}</h3>
                </div>
                <br/>
                <p>
                    {descripcion}
                </p>
                <button className="etiqueta">
                    {sector}
                </button>

            </div>
            <div className="box_detail event_photo" style={{backgroundImage:`url(${linkImagen ? linkImagen : capitalTravel})`}}>

            </div>
        </div>
    </div>
);