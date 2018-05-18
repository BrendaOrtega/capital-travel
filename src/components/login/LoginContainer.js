import React, { Component } from 'react';
import './Login.css';
import { LoginDisplay } from './LoginDisplay';
import firebase from '../../firebase';

class LoginContainer extends Component {
    state = {
        mostrar: false,
        login: {
            email: null,
            password: null
        }
    };

    toggleMostrar = () => {
        // let mostrar = this.state.mostrar;
        // mostrar = !mostrar;
        // this.setState({mostrar});
        this.setState({ mostrar: !this.state.mostrar });
    };

    saveInput = (e) => {
        const input = e.target.name;
        const value = e.target.value;
        const login = this.state.login;
        login[input] = value;
        this.setState({ login });
        // console.log(login);
    };


    onLogin = (e) => {
        e.preventDefault();
        const { login } = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(login.email, login.password)
            .then(usuario => {
                let user = JSON.stringify(usuario);
                localStorage.setItem("user", user);
                this.props.history.push("/admin");
                console.log(user)
            })
            .catch(e => console.log(e));

    };


    render() {
        return (
            <div>
                <LoginDisplay
                    mostrar={this.state.mostrar}
                    toggleMostrar={this.toggleMostrar}
                    saveEmail={this.saveEmail} //Se le pasan como prop a mi display
                    savePass={this.savePass}
                    saveInput={this.saveInput}
                    onSubmit={this.onLogin}
                    error={this.state.error} // No se pa que sirve
                />

            </div>
        );
    }
}

export default LoginContainer;