import React from 'react'
import './Admin.css'
import { Card, Icon } from 'antd';

export const RuedaCard = ({ nombre, fechaInicio, fechaFin, pais, descripcion, linkImagen }) => (
    <span style={{ margin: 'auto', display: 'flex', flexWrap: 'wrap' }}>
        <Card
            hoverable
            style={{ maxWidth: '420px', margin: '5px' }}
            cover={<div style={{ width: '420px', height: '210px', backgroundImage: `url(${linkImagen})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>}
            actions={[<Icon type="edit" />, <Icon type="delete" />]}
        >
            <h3>{nombre}</h3>
            <p>
                <strong>Lugar: </strong> {pais} <br />
                <strong>Fecha Inicio: </strong> {fechaInicio} <br />
                <strong>Fecha Fin: </strong> {fechaFin} <br />
                <strong>Descripción: </strong> {descripcion}
            </p>
        </Card>
    </span >
);