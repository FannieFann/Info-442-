import React from 'react';
import StoreDetail from '../storedetail/storedetail.js'
import { Redirect } from 'react-router-dom'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class View2 extends React.Component {
    constructor () {
        super()
        this.state = {
            items: [],
            isLoaded: false,
            redirect: false,
            path: 2
        }
        
    }
    handleClick =(pt)=> {
        this.setState({redirect: true, path: pt})
    }
    handleChange(event) {
        this.setState({searchtext: event.target.value})
    }
    renderRedirect = () => {
        if (this.state.redirect && this.state.path === 1) {
            return (
                <Redirect to='/view1' />
            )
        }
        else if (this.state.redirect && this.state.path === 0) {
            return (
                <Redirect to='/' />
            )
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/stores/" + this.props.match.params.id)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        })
    }
    render() {
        const view2style =  {
            marginLeft: "10%",
            marginRight: "10%"
        }
        const imgstyle = {
            width:"100%",
            height: "80%"
        }
        
        var { isLoaded, items } = this.state
        
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
        const img_url = "http://localhost:3001/images/stores/Store_"+items.data[0].StoreID+".jpg"
        return (
            <div>
                <div className="jumbotron text-center" style={{marginBottom: "0%", height: "150px"}}>
                <h1 style={{marginTop: "0px"}}>Souvenir Guidebook</h1>
                </div>
                {this.renderRedirect()}
                <nav className="navbar navbar-light" style={{backgroundColor: "#eee"}}>
                <div>
                <button className="btn btn-light" onClick={()=>this.handleClick(0)} style={{backgroundColor: "#eee"}} >
                <span className="oi oi-home"></span>&nbsp;&nbsp;Main Portal
                </button>
                <span className="oi oi-caret-right" ></span>
                <button className="btn btn-light" onClick={()=>this.handleClick(1)} style={{backgroundColor: "#eee"}} >
                    Result Page
                </button>
                <span className="oi oi-caret-right" ></span>
                <button className="btn btn-light" style={{backgroundColor: "#eee"}} >
                    Detail Page
                </button>
                </div>
                </nav>
                
                <br></br>
                <br></br>
                <h1 className="display-1" style={{marginLeft: "15%"}}>{items.data[0].StoreName}</h1>
                <div className="container-fluid" style = {view2style} >
                
                    {/* <div className="col-sm-6"> */}
                        <hr />
                        <img className="w3-round" src={img_url} alt="store" style={imgstyle}/>
                    {/* </div> */}
                    <StoreDetail detail = {items} />
                </div>
            </div>
            
        
        )
        }

    }
}


export default View2;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
