import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import Header from './Header.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import Logout from './Logout.jsx'
import ArtistComponent from './ArtistComponent.jsx'
import Error from './Error.jsx'
import Footer from './Footer.jsx'



import { withRouter } from 'react-router';
import AddArtistComponent from './AddArtistComponent.jsx'

export default class ManagementApp extends Component {
    render() {
        return (
            <div className="ManagementApp">
                <Router>
                    <>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={LoginComponent}/>
                        <Route path="/login" component={LoginComponent}/>
                        <Route path="/welcome/:name" component={WelcomeComponent}/>
                        <Route path="/artists" component={ArtistComponent} />
                        <Route path="/logout" component={Logout}/>
                        <Route path = '/addartist' component = {AddArtistComponent}></Route>
                        <Route component={Error}/>
                    </Switch>
                    <Footer />
                    </>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent /> */}
                
            </div>
        )
    }
}











// function ShowInvalidCredentials(props){
//     if(props.hasLoginFailed){
//         return<div>Login Failed</div>
//     } else
//         return null
//     }

// function ShowLoginSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return<div>Login Successful</div>
//     }
//     return null
// }
