import React from 'react'
import img from '../../assets/logo-inv.png'
import './Admin.css'

export const RuedaCard = ({ nombre, fecha, status, lugar, desc }) => (
    <span>
        <div className="card-body">
            <h3>{nombre}</h3>
            <hr />
            <p uk-margin>
                <strong>{lugar}</strong>, {fecha} <br />
                <strong>Descripción:</strong> {desc} <br />
                <strong>Status: </strong><span class="uk-badge">{status}</span>
            </p>
        </div>
    </span>
);