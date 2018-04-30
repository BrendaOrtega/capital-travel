import React, { Component } from 'react'
import { Navbar } from './Navbar'
import { AdminBody } from './AdminBody'
import firebase from 'firebase'
import moment from 'moment'
import { message } from 'antd'
import {getProductById, updateProductById} from '../../api/firebase';

class RuedasContainer extends Component {
    state = {
        loading: false,
        visible: false,
        photo: null,
        evento: {
            id: '',
            nombre: '',
            pais: '',
            fechaInicio: '',
            fechaFin: '',
            citas: '',
            sector: '',
            descripcion: '',
            linkImagen: ''
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
        const photo = this.state.photo
        if (photo) {
            firebase.storage().ref('/EventImages')
                .child(photo.name)
                .put(photo)
                .then(s => {
                    const linkImagen = s.downloadURL;
                    nuevoEvento['linkImagen'] = linkImagen;
                    firebase.database().ref('eventos').push(nuevoEvento)
                }
                )
        }
        else {
            firebase.database().ref('eventos').push(nuevoEvento)
        }
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


    saveDescription = (e) => {
        let evento = this.state.evento;
        const value = e.target.value
        evento['descripcion'] = value;
        this.setState({ evento })
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    savePhoto = (e) => {
        let state = this.state;
        const photo = e.target.files[0];
        state['photo'] = photo;
        this.setState({ state })
        console.log(this.state.photo)
    }

    remove = (id) => {
        if (window.confirm("Estas seguro de esto?")) {
            firebase.database().ref('eventos')
                .child(id)
                .remove()
                .then(r => message.success('Evento eliminado.'))
                .catch(e => message.warning("no se borró"));
        }

    };

    componentWillMount() {
        let eventos = this.state.eventos;
        firebase.database().ref('eventos')
            .on('child_added', snap => {
                let dbEventos = snap.val();
                dbEventos['id'] = snap.key;
                eventos.push(dbEventos)
                this.setState({ eventos })
            });

        firebase.database().ref('eventos')
            .on("child_removed", snap => {
                let id = snap.key;
                eventos = eventos.filter(p => p.id !== id);
                this.setState({ eventos });
            });


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
        }

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
                    saveDescription={this.saveDescription}
                    savePhoto={this.savePhoto}
                    remove={this.remove}
                />
            </div>
        )
    }
}

export default RuedasContainer;