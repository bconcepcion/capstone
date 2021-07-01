import React, {Component} from 'react'
import ArtistManagementService from '../../API/Management/ArtistManagementService.js'

class ArtistComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            artists: 
            [
                // {name: "Khruangbin", id: 1, type: "band", manager: "Teddy Riley",contract: "5 years", done: false,targetDate: new Date()},
                // {name: "Fish", id: 2, type: "band", manager: "Teddy Riley",contract: "5 years", done: false,targetDate: new Date()},
                // {name: "Diddy", id: 4, type: "solo", manager: "Ben Riley",contract: "5 years", done: false,targetDate: new Date()},
                // {name: "Benzino", id: 9, type: "solo", manager: "Ric Riley",contract: "5 years", done: false,targetDate: new Date()},
            ]
        }
        this.addArtist = this.addArtist.bind(this);
    }
    componentDidMount(){
       ArtistManagementService.getArtists().then((res)=>
       {
           this.setState({artists: res.data});
        }
        
       );
    }

    addArtist(){
        this.props.history.push('/addartist');
    }

    render(){
        return (
            <div>
                <h1>Artists</h1>
                <div className="container">
                    <div className= "row">
                        <button className="btn btn-primary" onClick={this.addArtist}>Add Artist </button>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Type</th> 
                            <th>Manager</th> 
                            <th>Contract</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.artists.map(
                            artists =>
                            <tr key={artists.id}>
                                <td>{artists.name}</td>
                                <td>{artists.id}</td>
                                <td>{artists.type}</td>
                                <td>{artists.manager}</td>
                                <td>{artists.contract}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}

export default ArtistComponent