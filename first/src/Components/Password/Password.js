import React, {Component} from 'react'

class Password extends Component{
    render() {
        return (
            <label className="pass">{this.props.value}<input type="password"/></label>
        )
    }
}

export default Password