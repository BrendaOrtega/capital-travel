import React, { Component } from 'react';
import RuedaDetail from './RuedaDetail';
import { Tabs } from 'antd';
import Participantes from './Paticipantes';
import CalendarContainer from './CalendarContainer';
import Review from './Review';
import {Cliente} from './Cliente';
const TabPane = Tabs.TabPane;


class Dashboard extends Component {
    state = {
        tabPosition: 'left',
    };

    render() {
        return (
            <div style={{paddingTop:"60px"}}>


                <Tabs tabPosition={this.state.tabPosition}>
                    <TabPane tab="Rueda de Negocio" key="1">
                        <RuedaDetail />
                    </TabPane>
                    <TabPane tab="Calendario" key="2">
                        <CalendarContainer/>
                    </TabPane>
                    <TabPane tab="Participantes" key="3">
                        <Participantes />
                    </TabPane>
                    <TabPane tab="Resumen" key="4">
                        <Review />
                    </TabPane>
                    <TabPane tab="Contacto" key="5">
                        <Cliente />
                    </TabPane>
                </Tabs>

            </div>
        )
    }
}

export default Dashboard;