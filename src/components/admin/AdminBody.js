import React from 'react'
import { RuedaCard } from './RuedaCard'

export const AdminBody = ({ rueda }) => (
    <section >
        <div className="card-container">
            {rueda.map((r, index) => <RuedaCard key={index} {...r} />)}
        </div>
        <button className="uk-button uk-button-default floatButton">Agregar rueda <span uk-icon="icon:plus-circle; ratio: 1.5;"></span></button>
    </section>
);
