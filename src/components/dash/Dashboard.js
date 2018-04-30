import React, { Component } from 'react';
import {RuedaDetailDisplay} from './RuedaDetailDisplay';
import { Tabs } from 'antd';
import Participantes from './Paticipantes';
import CalendarContainer from './CalendarContainer';
import Review from './Review';
import {Cliente} from './Cliente';
import {getProductById, updateProductById} from '../../api/firebase';
import firebase from 'firebase';
const TabPane = Tabs.TabPane;


class Dashboard extends Component {
    state = {
        tabPosition: 'left',
        evento: {}

    };
    componentDidMount () {
        window.scroll(0,0)
    };
    componentWillMount(e) {
        // const id = this.props.match.params.id;
        // getProductById(id)
        //     .then(evento=>{
        //         this.setState({evento});
        //     })
        //     .catch(e.message);
            console.log(this.props.match.params.id);
            firebase.database().ref("eventos").child(this.props.match.params.id)
                .on("value", s=>{
                    let evento = s.val();
                    evento.id = s.key;
                    this.setState({evento});
                })
    }

    render() {
        const {evento} = this.state;

        return (
            <div style={{paddingTop:"60px"}}>

                <Tabs tabPosition={this.state.tabPosition}>
                    <TabPane tab="Rueda de Negocio" key="1">
                        <RuedaDetailDisplay
                            {...evento}
                        />
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