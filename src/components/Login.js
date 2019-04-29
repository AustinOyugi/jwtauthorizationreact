import React, {Component} from 'react';
import axios from "axios";

class Login extends Component {

    state={
        email:'',
        password:''
    };

    onChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    submit = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/signin', {
            usernameOrEmail: this.state.email,
            password:this.state.password
        }).then(res => {
            localStorage.setItem('cool-jwt',res.data.accessToken);
            this.props.history.push("/secured")
        }).catch(error =>{
            console.log(error)
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" onChange={this.onChange} value={this.state.email}/>
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" onChange={this.onChange} value={this.state.password}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );
    }
}

export default Login;