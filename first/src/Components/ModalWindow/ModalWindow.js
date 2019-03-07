import React, { Component } from 'react';

import LoginForm from '../LoginForm/LoginForm.js'
import './index.css';
class ModalWindow extends Component {

    state = {
        isLogin: true
    };

render() {
    const nameForm = this.state.isLogin ? "Login" : "Register";
    const currentState = this.state.isLogin;
        return (<div className="container">
                    <div>
                        <p>{nameForm}</p>
                        <LoginForm handleState = {this.handleState} text={nameForm} currentState={currentState}/>
                    </div>
                </div>);

}

    handleState = (e) => {
        e.preventDefault();
        this.setState({isLogin: !this.state.isLogin})
    }
}

export default ModalWindow