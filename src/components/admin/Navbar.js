import React from 'react'

export const Navbar = () => (
    <section>
        <nav className="uk-navbar-container uk-navbar" uk-navbar>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"> <div className="uk-navbar-item uk-logo">Administración de Ruedas de negocio.</div></li>
                </ul>
            </div>
            <div className="uk-navbar-right">
                <div>
                    <i className="uk-navbar-toggle" uk-icon="icon: search; ratio: 1.5" href="#"></i>
                    <div className="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
                        <form className="uk-search uk-search-navbar uk-width-1-1">
                            <input className="uk-search-input" type="search" placeholder="Search..." autofocus />
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </section>
);
