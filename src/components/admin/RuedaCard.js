import React from 'react'
import './Admin.css'
import { Card, Icon } from 'antd';
import capitalTravel from '../../assets/capitalTravel.jpg'
import {Link} from 'react-router-dom';

export const RuedaCard = ({ remove, nombre, id, fechaInicio, fechaFin, pais, descripcion, linkImagen }) => (
    <span style={{ margin: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

        <Card
            hoverable

            style={{ width: '300px', margin: '5px', flexGrow: '1' }}
            cover={<div style={{ width: '298px', height: '210px', backgroundImage: `url(${linkImagen ? linkImagen : capitalTravel})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>}
            actions={[<Icon type="edit" />, <Icon type="delete" onClick={() => remove(id)} />]}
        >
            <Link to={`/rueda/${id}`}>

            <h3>{nombre}</h3>
            <p>
                <strong>Lugar: </strong> {pais} <br />
                <strong>Fecha Inicio: </strong> {fechaInicio} <br />
                <strong>Fecha Fin: </strong> {fechaFin} <br />
                <strong>Descripción: </strong> {descripcion}
            </p> </Link>
</Card>
     </span >

);

