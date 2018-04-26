import React from 'react'
import { Input } from 'antd'
const Search = Input.Search

export const Navbar = ({ saveInput }) => (
    <section>
        <ul id="menu">
            <li>Administración de Ruedas de Negocios</li>
            <li><Search placeholder="Buscar Rueda de Negocios.." onChange={saveInput} enterButton style={{ width: '50%', float: 'right', marginRight: '10px' }} /></li>
        </ul>
    </section>
);
