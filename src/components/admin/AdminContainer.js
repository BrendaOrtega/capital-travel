import React, { Component } from 'react'
import { Navbar } from './Navbar'
import { AdminBody } from './AdminBody'
import firebase from 'firebase'
import moment from 'moment'

class RuedasContainer extends Component {
    state = {
        loading: false,
        visible: false,
        nuevoEvento: {},
        evento: {
            nombre: '',
            pais: '',
            fechaInicio: '',
            fechaFin: '',
            citas: '',
            sector: '',
        },
        eventos: [],
    }

    // Modal fuctions

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        const nuevoEvento = this.state.evento
        firebase.database().ref('eventos').push(nuevoEvento)
        this.setState({ loading: false, visible: false });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }

    saveNombre = (e) => {
        let evento = this.state.evento;
        const value = e.target.value;
        evento['nombre'] = value;
        this.setState({ evento })
    };

    savePais = (value) => {
        let evento = this.state.evento;
        evento['pais'] = value;
        this.setState({ evento })
        console.log(this.state.evento.pais)
    }

    saveFechas = (e) => {
        let evento = this.state.evento;
        let fechaInicio = moment(e[0]._d).format('MMMM/DD/YYYY');
        let fechaFin = moment(e[1]._d).format('MMMM/DD/YYYY')
        evento['fechaInicio'] = fechaInicio;
        evento['fechaFin'] = fechaFin;
        console.log(this.state.evento.fechaInicio, this.state.evento.fechaFin)

    }

    saveCita = (e) => {
        let evento = this.state.evento;
        let citas = moment(e._d).format('MMMM/DD/YYYY');
        evento['citas'] = citas;
        console.log(this.state.evento.citas)
    }

    saveSector = (e) => {
        let evento = this.state.evento;
        const value = e.target.value;
        evento['sector'] = value;
        this.setState({ evento })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const nuevoEvento = this.state.evento
        firebase.database().ref('eventos').push(nuevoEvento)
    }

    componentWillMount() {
        let eventos = this.state.eventos;
        firebase.database().ref('eventos')
            .on('child_added', snap => {
                let dbEventos = snap.val();
                dbEventos["id"] = snap.key;
                eventos.push(dbEventos)
                this.setState({ eventos })
            });
    }

    saveInput = (e) => {
        console.log(e.target.value)
    }

    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const rangeConfig = {
            rules: [{ type: 'array', required: true, message: 'Por favor selecciona una fecha!' }],
        };

        const dataSource = ['Mexico', 'EUA', 'España'];

        const dateFormat = 'MMMM DD YYYY';
        return (
            <div>
                <Navbar saveInput={this.saveInput} />
                <AdminBody
                    eventos={this.state.eventos}
                    loading={this.state.loading}
                    visible={this.state.visible}
                    showModal={this.showModal}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                    formItemLayout={formItemLayout}
                    rangeConfig={rangeConfig}
                    disabledDate={this.disabledDate}
                    disabledRangeTime={this.disabledRangeTime}
                    dataSource={dataSource}
                    dateFormat={dateFormat}
                    saveNombre={this.saveNombre}
                    savePais={this.savePais}
                    saveFechas={this.saveFechas}
                    saveCita={this.saveCita}
                    saveSector={this.saveSector}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}

export default RuedasContainer;