import React, { Component } from 'react';
import UserForm from "../UserForm";
import './style.css';


class ModalWindow extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLogin: true
        }
    };

    handleState = (e) => {
        e.preventDefault();
        this.setState(state => ({isLogin: !state.isLogin}))
    };

    render() {
        const {isLogin} = this.state;
        const nameForm = isLogin ? "Login" : "Register";
            return (<div className="container">
                        <div>
                            <p>{nameForm}</p>
                            <UserForm handleState = {this.handleState} text={nameForm} currentWindow={isLogin}/>
                        </div>
                    </div>);

    }
}

export default ModalWindow