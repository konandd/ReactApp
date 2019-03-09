import React, { Component } from 'react';
import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
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
                            {isLogin ? <LoginForm handleState = {this.handleState}/> : <SignUpForm handleState = {this.handleState}/>}
                        </div>
                    </div>);

    }
}

export default ModalWindow