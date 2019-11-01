import React, { Component } from 'react';
import Task from './Task';
import './App.css';

import { Route, Redirect, Switch } from 'react-router-dom';

export default class App extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/task" />} />
                <Route path="/task" exact render={() => <Task {...this.state} />} />
            </Switch>
        );
    }
}
