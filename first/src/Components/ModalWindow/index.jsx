import React, { Component } from 'react';

import LoginForm from "../LoginForm";
import SignUpForm from "../SignUpForm";
import './style.css';
import Navigation from "../common/Navigation";


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

            return (
                <div className="container">
                            <Navigation>
                            {isLogin ? <LoginForm handleState = {this.handleState}/> : <SignUpForm handleState = {this.handleState}/>}
                            </Navigation>
                    </div>
           );

    }
}

export default ModalWindow