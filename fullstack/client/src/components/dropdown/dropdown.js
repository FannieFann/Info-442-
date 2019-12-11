import React from 'react';
import Option from '../option/option.js'
import Data from './dropdownData.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class Dropdown extends React.Component {
    constructor(props) {
        super(props)
        this.productComponents = Data.productTypeData.map(option => <Option key = {option.id} name = {option.name} type = "product_type" changeFilter = {this.props.changeFilter} />)
        this.themeComponents = Data.themeData.map(option => <Option key = {option.id} type = "theme" name = {option.name} changeFilter = {this.props.changeFilter} />)
        this.neighborhoodComponents = Data.neighborhoodTypeData.map(option => <Option key = {option.id} type = "neighborhood" name = {option.name} changeFilter = {this.props.changeFilter} />)
        this.forwhomComponents = Data.forwhomTypeData.map(option => <Option key = {option.id} type = "for_whom" name = {option.name} changeFilter = {this.props.changeFilter} />)
    }
    
    showOptions() {
        if (this.props.id === 1)
            return this.productComponents
        else if (this.props.id === 2)
            return this.themeComponents
        else if (this.props.id === 3)
            return this.neighborhoodComponents
        else if (this.props.id === 4)
            return this.forwhomComponents
    }
    render() {
    return (
        <div>
                <h4>{this.props.name}</h4>
                {this.showOptions()}
        </div>
        // <div>
        // <div className="dropdown">
            
        //     <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">{this.props.name}
        //         <span className="caret"></span>
        //     </button>
        //     <ul className="dropdown-menu">
        //         {this.showOptions()}
        //     </ul>
        // </div>
        // <br/>
        // </div>  
        
    )
    }
}


export default Dropdown;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
