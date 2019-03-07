import React, { Component } from 'react';
import './index.css';


class LoginBtn extends Component{

render() {
    return (
        <button type="submit" onClick={this.props.handleState}>{this.props.text}</button>
    )
}


}


export default LoginBtn