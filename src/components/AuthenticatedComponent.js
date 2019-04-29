import React, {Component} from 'react';
import {getJwt} from '../helpers/jwtHelper';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class AuthenticatedComponent extends Component
{
    state={
      user:undefined
    };

    componentDidMount(){
        const jwt = getJwt();
        if(!jwt) {
            this.props.history.push('/');
        }

        axios.get('http://localhost:5000/api/user/me', {
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        }).then(res =>{
            this.setState({
                user:res.data
            });

        }).catch( error =>{
            localStorage.removeItem('cool-jwt');
            this.props.history.push("/login");
            console.log(error);
        })
    }
    render() {
        if (this.state.user === undefined) {
            return (
                <h1>Loading .....</h1>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default withRouter(AuthenticatedComponent);