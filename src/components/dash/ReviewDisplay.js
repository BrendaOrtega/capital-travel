import React from 'react'
import './Detail.css'
import { Timeline, Icon } from 'antd';
import { Card } from 'antd';


export const ReviewDisplay = ({  }) => (

    <div className="resumen">
        <div className="flex">
            <div className="box_list">
                <Timeline>
                    <Timeline.Item color="grey">9:00 am Registro</Timeline.Item>
                    <Timeline.Item  color="grey">9:30 am Bienvenidas</Timeline.Item>
                    <Timeline.Item  color="grey">10:00 am Conferencia Magistral</Timeline.Item>
                    <Timeline.Item  color="grey">11:00 am Break</Timeline.Item>
                    <Timeline.Item dot={<Icon type="area-chart" style={{ fontSize: '14px' }} />} color="green">11:30 am Rueda de Negocio Aula 1 </Timeline.Item>
                    <Timeline.Item dot={<Icon type="pie-chart" style={{ fontSize: '14px' }} />} color="green">2:30 pm Rueda de Negocio Aula 5</Timeline.Item>
                    <Timeline.Item dot={<Icon type="bar-chart" style={{ fontSize: '14px' }} />} color="green">4:30 pm Rueda de Negocio Aula 8</Timeline.Item>
                    <Timeline.Item  color="grey">6:30 pm Coctel</Timeline.Item>
                    <Timeline.Item  color="grey">8:30 pm Cierre</Timeline.Item>
                </Timeline>
            </div>
            <div className="box_list">
                <Card title="Citas Programadas" extra={<a href="/">More</a>} style={{ width: 300, height:120, margin: "0 0 20px 0" }}>
                    <p>450 citas</p>

                </Card>
                <Card title="Citas Canceladas" extra={<a href="/">More</a>} style={{ width: 300, height:120, margin: "0 0 20px 0" }}>
                    <p>45 citas</p>

                </Card>
                <Card title="Citas Concluidas" extra={<a href="/">More</a>} style={{ width: 300, height:120, margin: "0 0 20px 0" }}>
                    <p>300 citas</p>

                </Card>
            </div>
        </div>
    </div>
);