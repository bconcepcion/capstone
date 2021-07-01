import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container"> 
                    You can manage your artists <Link to="/artists">here</Link>.
                </div>
            </>
        )        
    }

}






export default WelcomeComponent

