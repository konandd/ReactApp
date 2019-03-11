import React from 'react';
import UserBtn from "../common/Button"
import EmailAddress from "../common/EmailAddress"
import Password from "../common/Password"
import {Link} from "react-router-dom";


const RememberBox = () => (
    <label className="box"><input type="checkbox"/> Remember Me</label>
);

const LoginForm =  ({handleState}) =>
    (
        <div><p>Login</p>
                <form>
                        <div className="wrapper">
                        <EmailAddress/>
                        <Password value = "Password"/>
                        <div className="wrapper-btn">
                        <RememberBox/>
                        <div className="btn">
                        <UserBtn handleState = {handleState} text = "Login"/>
                        <Link to='/signUp'>Sign Up</Link>
                        </div>
                        </div >

                        </div>
                </form>
        </div>);

export default LoginForm