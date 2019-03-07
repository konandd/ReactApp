import React, { Component } from 'react';
import MailAddress from '../MailAddress/MailAddres'
import Password from '../Password/Password'
import LoginBtn from '../LoginBtn/LoginBtn'
import RememberBox from '../RememberBox/RememberBox'
import Name from '../Name/Name'
import './index.css';
class LoginForm extends Component{

        render() {
                const rememberBox = this.props.currentState && <RememberBox/>;
                const name = !this.props.currentState && <Name/>;
                const rePass = !this.props.currentState && <Password value = "Confirm Password"/>;
                return(
                <form>
                        <div className="wrapper">
                        {name}
                        <MailAddress/>
                        <Password value = "Password"/>
                        {rePass}
                        <div className="wrapper-btn">
                        {rememberBox}
                        <LoginBtn handleState = {this.props.handleState} text={this.props.text}/>
                        </div>
                        </div>
                </form>);
        }



}


export default LoginForm