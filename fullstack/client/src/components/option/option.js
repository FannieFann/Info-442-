import React from 'react';

// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Option extends React.Component {
    constructor() {
        super()
        this.state = {
            checked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        // this.state.checked = !this.state.checked
        this.setState(function(prevState, props){
            return {checked: !prevState.checked}
         });
        
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log(this.props.reset)
        this.props.changeFilter(this.props.type, this.props.name, this.state.checked)
    }
    render() {
    return ( 
        <div className="custom-control custom-checkbox" size="lg">
            <input onClick = {this.handleClick} type="checkbox" className="custom-control-input" defaultChecked={this.state.checked} id="food" />
            <label className="custom-control-label">&nbsp;{this.props.name}</label>
        </div>
        // <li><a onClick = {()=>this.props.changeFilter(this.props.type, this.props.name)} className={"dropdown-item"} href={"#"}>{this.props.name}</a></li>
    )
    }
}


export default Option;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
