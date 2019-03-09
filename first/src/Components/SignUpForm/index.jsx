import React from 'react';
import UserBtn from "../common/Button"
import EmailAddress from "../common/EmailAddress"
import Password from "../common/Password"



const Name = () => (
    <label className="mail">Name<input type="text"/></label>
);

const SignUpForm =  ({handleState}) => (
    <form>
        <div className="wrapper">
            <Name/>
            <EmailAddress/>
            <Password value = "Password"/>
            <Password value = "Confirm Password"/>
            <div className="wrapper-btn">
            <UserBtn handleState = {handleState} text = "Register"/>
                <a href="#" onClick={handleState}>Login</a>
            </div>
        </div>
    </form>);

export default SignUpForm