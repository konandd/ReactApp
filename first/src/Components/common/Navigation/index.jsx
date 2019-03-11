import React, {Component} from "react";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import LoginForm from "../../LoginForm";
import SignUpForm from "../../SignUpForm";
import createBrowserHistory from "history/createBrowserHistory"

const history = createBrowserHistory();

class Navigation extends Component {
    render(){
        return(
            <BrowserRouter history={history}>
            <Switch>
                <Route exact path='/' component={LoginForm}/>
                <Route path='/signUp' component={SignUpForm}/>
            </Switch>
            </BrowserRouter>
        )

    }
}

export default Navigation
