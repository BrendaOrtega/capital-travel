import React, { Component } from 'react'
import { Navbar } from './Navbar'
import { RuedaCard } from './RuedaCard'
import { AdminBody } from './AdminBody'

class RuedasContainer extends Component {
    state = {
        ruedas: [
            {
                id: 0,
                lugar: 'Los Ángeles, California',
                nombre: 'Rueda 1',
                fecha: 'Fecha 1',
                desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus.',
                status: 'Activo',
            },
            {
                id: 1,
                lugar: 'Los Ángeles, California',
                nombre: 'Rueda 2',
                fecha: 'Fecha 2',
                desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus.',
                status: 'Activo',
            },
            {
                id: 2,
                lugar: 'Los Ángeles, California',
                nombre: 'Rueda 3',
                fecha: 'Fecha 3',
                desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus.',
                status: 'Activo',
            },
            {
                id: 3,
                lugar: 'Los Ángeles, California',
                nombre: 'Rueda 4',
                fecha: 'Fecha 4',
                desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, doloribus.',
                status: 'Activo',
            },

        ]
    }
    render() {
        return (
            <div>
                <Navbar />
                <AdminBody rueda={this.state.ruedas} />
            </div>
        )
    }
}

export default RuedasContainer;