import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
import AdminContainer from '../admin/AdminContainer';
import RuedaDetail from './RuedaDetail';
import { Tabs, Select } from 'antd';
import Participantes from './Paticipantes';
import CalendarContainer from './CalendarContainer';
import Review from './Review';

const TabPane = Tabs.TabPane;
const Option = Select.Option;


class Dashboard extends Component {
    state = {
        tabPosition: 'left',
    };
    changeTabPosition = (tabPosition) => {
        this.setState({ tabPosition });
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
                </Tabs>

            </div>
        )
    }
}

export default Dashboard;