import React from 'react';
// import ReactDOM from 'react-dom';
import Map from '../map/map.js';
import View1 from '../view1/view1.js'
import View2 from '../view2/view2.js'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
// import * as serviceWorker from './serviceWorker';
class Menu extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component = {Map}/>
                    <Route path="/view1" component = {View1}/>
                    <Route path="/view2/:id" component = {View2}/>
                </Switch>
            </Router>
        )
    }
}


export default Menu;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
