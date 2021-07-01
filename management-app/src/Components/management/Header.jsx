import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';


class Header extends Component {
    render(){
        // const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark">
                    <div><a href="#logo" className="navbar-brand">Logo</a></div>

                    <ul className="navbar-nav">

                        <li className="nav-link"><Link to="/welcome/wavvve">Home</Link></li>

                        <li className="nav-link"><Link to="/artists">Dashboard</Link></li>
                    </ul>
                    {/* <ul className="navbar-nav navbar-collapse justify-content-end">

                        <li className="nav-link"><Link className="nav-link" to="/login">Login</Link></li>

                        {isUserLoggedIn && <li className="nav-link"><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul> */}

                </nav>
            </div>

        )
    }
}


export default withRouter(Header)