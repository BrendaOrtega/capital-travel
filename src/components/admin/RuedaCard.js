import React from 'react'
import './Admin.css'

export const RuedaCard = ({ nombre, fecha, status, lugar, desc }) => (
    <span>
        <div className="card-body uk-card uk-card-default">
            <div className="uk-card-header">
                <h3>{nombre}</h3>
            </div>
            <p>
                <strong>{lugar}</strong>, {fecha} <br />
                <strong>Descripción:</strong> {desc} <br />
                <strong>Status: </strong><span className="uk-badge">{status}</span>
            </p>
        </div>
    </span>
);