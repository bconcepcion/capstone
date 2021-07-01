import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
       
    }
    //update the state of form
    handleChange(event){
        console.log(event.target.value);
        this.setState({
            [event.target.name]:event.target.value})
    }

    loginClicked(){
        //username
        if(this.state.username==='Bryan' && this.state.password==='13375934k'){
            //saves user in session storage
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
        }
        else {  
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        } 
   }
 
    render(){
        return(
            <>
            <h1>Login</h1>
            <div className="container"></div>
            {this.state.hasLoginFailed && <div className="alert alert-warning">Login has failed.</div>}
            {this.state.showSuccessMessage && <div>Login successful!</div>}
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </>
            
        )
    }

    
}

export default LoginComponent