import React from 'react'
import './Admin.css'
import { Card, Icon, Avatar } from 'antd';

export const RuedaCard = ({ nombre, fechaInicio, fechaFin, pais }) => (
    <span>
        <Card
            hoverable
            style={{ width: '300px', margin: '5px' }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[<Icon type="edit" />, <Icon type="delete" />]}
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        >
            <h3>{nombre}</h3>
            <p>
                <strong>Lugar: </strong> {pais} <br />
                <strong>Fecha Inicio: </strong> {fechaInicio} | <strong>Fecha Fin: </strong> {fechaFin}<br />
                <strong>Status: </strong>
            </p>
        </Card>
    </span >
);