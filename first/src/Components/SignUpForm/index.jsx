import React from 'react';
import UserBtn from "../common/Button"
import EmailAddress from "../common/EmailAddress"
import Password from "../common/Password"
import {Link} from 'react-router-dom'


const Name = () => (
    <label className="mail">Name<input type="text"/></label>
);

const SignUpForm =  ({handleState}) => (
    <div><p>Sign Up</p>
    <form>
        <div className="wrapper">
            <Name/>
            <EmailAddress/>
            <Password value = "Password"/>
            <Password value = "Confirm Password"/>
            <div className="wrapper-btn">
            <UserBtn handleState = {handleState} text = "Register"/>
            </div>
            <div className="link"><Link to='/'>Login</Link></div>
        </div>
    </form>
    </div>);

export default SignUpForm