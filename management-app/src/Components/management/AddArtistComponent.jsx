import React, {Component} from 'react';
import ArtistManagementService from '../../API/Management/ArtistManagementService.js'

class AddArtistComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            id: props.match.params.id,
            type:'',
            manager:'',
            contract:''

        }
        this.nameHandler = this.nameHandler.bind(this);
        this.idHandler = this.idHandler.bind(this);
        this.typeHandler = this.typeHandler.bind(this);
        this.managerHandler = this.managerHandler.bind(this);
        this.contractHandler = this.contractHandler.bind(this);
        this.cancel = this.cancel.bind(this);


    }
    // componentDidMount(){
    //     ArtistManagementService.getArtistById(this.state.id).then(res=>{
    //        console.log(res.data)
    //        this.setState({
    //            name:res.data.name,
    //            id:res.data.id,
    //            type: res.data.type,
    //            manager:res.data.manager,
    //            contract:res.data.contract,
    //        })
    //         // this.props.history.push("/")
    //     }).catch(err=>{
    //         console.log('record not found');
    //     });
    // }
    nameHandler=(event) =>{
        this.setState({
            name: event.target.value
        });
    }
    idHandler=(event) =>{
        this.setState({
            id: event.target.value
        });
    }

    typeHandler=(event) =>{
        this.setState({
            type: event.target.value
        });
    }

    managerHandler=(event) =>{
        this.setState({
            manager: event.target.value
        });
    }

    contractHandler=(event) =>{
        this.setState({
            contract: event.target.value
        });
    }

    saveArtist =(e)=>{
        e.preventDefault();
        let artist={
            name: this.state.name,
            id: this.state.id,
            manager: this.state.manager,
            contract: this.state.contract
        };
        console.log(artist => JSON.stringify(artist));


        ArtistManagementService.createArtist(artist).then(res=>{
            this.props.history.push('/artists')
        }).catch(err=>{
            console.log('record not found');
        });

    }

    cancel(e){
        e.preventDefault();
        this.props.history.push('/artists');
    }

    render(){
        return(
        <div>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">Update Artist</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Artist Name:</label>
                                <input placeholder="Name" name="name" className="form-control"
                                value={this.state.name} onChange={this.nameHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Artist ID</label>
                                <input placeholder="id" name="id" className="form-control"
                                value={this.state.ID} onChange={this.idHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Artist Type</label>
                                <input placeholder="Type" name="type" className="form-control"
                                value={this.state.type} onChange={this.typeHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Artist Manager</label>
                                <input placeholder="Manager" name="manager" className="form-control"
                                value={this.state.manager} onChange={this.managerHandler}/>
                            </div>
                            <div className="form-group">
                                <label>Artist Contract</label>
                                <input placeholder="Contract" name="contract" className="form-control"
                                value={this.state.contract} onChange={this.contractHandler}/>
                            </div>
                            <button className="btn btn-success" onClick={this.saveArtist.bind(this)}>Save</button>
                            <button className="btn btn-success" onClick={this.cancel.bind(this)}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default AddArtistComponent




    
