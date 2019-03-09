import React from 'react';
import './style.css';

const UserBtn = ({text, handleState}) => (
    <button type="submit" onClick={handleState}>{text}</button>
);

const MailAddress = () => (
    <label>E-Mail Address<input type="text"/></label>
);

const Password = ({value}) => (
    <label className="pass">{value}<input type="password"/></label>
);

const RememberBox = () => (
    <label className="box"><input type="checkbox"/> Remember Me</label>
);

const Name = () => (
    <label className="mail">Name<input type="text"/></label>
);


const UserForm =  ({text, currentWindow, handleState}) => (
                <form>
                        <div className="wrapper">
                        {!currentWindow && <Name/>}
                        <MailAddress/>
                        <Password value = "Password"/>
                        {!currentWindow && <Password value = "Confirm Password"/>}
                        <div className="wrapper-btn">
                        {currentWindow && <RememberBox/>}
                        <UserBtn handleState = {handleState} text = {text}/>
                        </div>
                        </div>
                </form>);

export default UserForm