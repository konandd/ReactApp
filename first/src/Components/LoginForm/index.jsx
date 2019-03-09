import React from 'react';
import UserBtn from "../common/Button"
import EmailAddress from "../common/EmailAddress"
import Password from "../common/Password"


const RememberBox = () => (
    <label className="box"><input type="checkbox"/> Remember Me</label>
);

const LoginForm =  ({handleState}) => (
                <form>
                        <div className="wrapper">
                        <EmailAddress/>
                        <Password value = "Password"/>
                        <div className="wrapper-btn">
                        <RememberBox/>
                        <UserBtn handleState = {handleState} text = "Login"/>
                            <a href="#" onClick={handleState}>SignUpForm</a>
                        </div>
                        </div>
                </form>);

export default LoginForm