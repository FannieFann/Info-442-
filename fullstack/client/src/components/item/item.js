import React from 'react';
import { Link, Redirect } from 'react-router-dom'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Item extends React.Component {
    constructor() {
        super()
        this.state = {
            redirect: false
        }
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return (
                <Redirect to={{
                    pathname: '/view2/'+this.props.id,
                    state: { id: this.props.id }
                }} />
            )
        }
    }
    render() {
    const parameters = {
        pathname: '/view2/'+this.props.id,
        state: { id:  this.props.id}
    }
    const img_url = "http://localhost:3001/images/stores/Store_"+this.props.id +".jpg"
    return (
            <div>
                <div className="row">
                    {this.renderRedirect()}
                    <div className="col-md-7">             
                        <img className="img-fluid rounded mb-3 mb-md-0" src={img_url} onClick={()=>{this.setState({redirect: true})}} alt="" width="100%" height="250px" />
                    </div>
                    <div className="col-md-5">
                        <h3>{this.props.storename}</h3>
                        <p>Phone: {this.props.phone}</p>
                        <p>Address: {this.props.address}</p >
                        <Link to={parameters} className="btn btn-primary">Details</Link>
                    </div>
                    </div>
                <br />
            </div>
    //         <div className="col-sm-6">
    //             <div className="cardItem" style={item_style} >
    //                 <img className="card-img-top" src={img_url} alt="Card" width="286px" height="180px" />
    //                 <div className="card-body">
    //                     <h5 className="card-title">{this.props.storename}</h5>
    // <p className="card-text">Address: {this.props.address}</p>
    //                     <Link style= {{alignContent: "center"}} to={parameters} className="btn btn-primary">Detail</Link>
    //                 </div>
    //             </div>
    //         </div>
    )
    }
}


export default Item;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
