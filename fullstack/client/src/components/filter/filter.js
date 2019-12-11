import React from 'react';
import Dropdown from '../dropdown/dropdown.js'
import filterData from '../filter/filterData.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Filter extends React.Component {
    constructor (props) {
        super(props)
        this.dropdownComponents = filterData.map(filter => <Dropdown key = {filter.id} id = {filter.id} name = {filter.name} changeFilter = {this.props.changeFilter}/>)
    }
    render() {
    const filter_style = {
        marginLeft: "40%"
    }
    return (  
                <div className="col-lg-3">
                        <div className="container" style={filter_style} >
                                {this.dropdownComponents}
                            <br/>
                        </div>
                        
                        <br/>
                </div>
    )
    }
}


export default Filter;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
