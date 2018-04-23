import React from 'react';


export const LoginDisplay = ({mostrar, toggleMostrar, saveInput, onSubmit, error, changeRegistro}) => (

    <div className="formu">
        <div className="box_form">
            <h2 >Inicia sesión</h2>
            <h1>{error}</h1>
            <form onSubmit={onSubmit} >
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon" uk-icon="icon: user"></span>
                        <input className="uk-input" type="text" name="email"  onChange={saveInput} placeholder="Email"/>
                    </div>
                </div>
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input className="uk-input"  name="password" placeholder="Password" onChange={saveInput} type={mostrar ? "text" : "password"} />
                    </div>
                </div>

                <label className="mostrar" htmlFor="">
                    Mostrar password
                    <input onClick={toggleMostrar} type="checkbox" value="Mostrar pass"/>
                </label>
                <br/>
                <input className="btn_submit" type="submit"/>
            </form>
        </div>
    </div>
);