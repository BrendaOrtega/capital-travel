import React from 'react'
import './Detail.css'
import FontAwesome from 'react-fontawesome';
import { List, Avatar } from 'antd';

const data = [
    {
        title: 'Juan Lopez',
        description:"Proveedor de Llantas al mayoreo (10 citas)",

    },
    {
        title: 'Fifi Hernandez ',
        description:"Proveedor de cuentas TIDAL"
    },
    {
        title: 'Mesfit Palma',
        description:"Proveedor de Alimentos azucarados"
    },
    {
        title: 'Brenda Ortega',
        description:"Proveedor de Software"
    },
];

const datos = [
    {
        title: 'Pablito Lopez',
        description:"Cliente 1"
    },
    {
        title: 'Dylan Juarez ',
        description:"Cliente 2"
    },
    {
        title: 'Deivid Tep',
        description:"Cliente 3"
    },
    {
        title: 'Brenda Ortega',
        description:"Cliente 4"
    },
];

export const ParticipanteslDisplay = ({  }) => (

    <div className="detail">
        <div className="flex">
            <div className="box_list">
                <h3>Proveedores</h3>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/19059459_1314745991954119_2064217828501685113_n.jpg?_nc_cat=0&oh=6991cac8dc518b1de0ecaaaf629bc63d&oe=5B9538ED" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
            <div className="box_list">
                <h3>Clientes</h3>
                <List
                    itemLayout="horizontal"
                    dataSource={datos}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/19059459_1314745991954119_2064217828501685113_n.jpg?_nc_cat=0&oh=6991cac8dc518b1de0ecaaaf629bc63d&oe=5B9538ED" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description={item.description}
                                citas={item.citas}/>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    </div>
);