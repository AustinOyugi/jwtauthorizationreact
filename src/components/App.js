import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from "./Home";
import Login from "./Login";
import AuthenticatedComponent from "./AuthenticatedComponent";
import Protected from "./Protected";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login"  component={Login}/>
                <Route path="/" exact component={Home}/>
                <AuthenticatedComponent>
                    <Route path="/secured" component={Protected}/>
                </AuthenticatedComponent>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
