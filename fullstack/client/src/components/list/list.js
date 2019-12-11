import React from 'react';
import Item from '../item/item.js'
// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

class List extends React.Component {
    // stores.data.map(item => <Item key = {item.StoreID} storename = {item.StoreName}/>)
    constructor () {
        super()
        this.changePage = this.changePage.bind(this)
        this.changeOrder = this.changeOrder.bind(this)
        this.state = {
            items: [],
            isLoaded: false,
            refresh: false,
            pagination: [],
            page_num: 0,
            order: 0,
        }
    }
    changePage (operation) {
        // console.log("Changing")
        const op = this.state.pagination[operation]
        this.setState({page_num: op})
    }
    changeOrder (od) {
        // alert(order)
        // console.log(this.state.order)
        this.setState({order: od})
        // console.log(this.state.order)
    }
    componentDidMount() {
        // console.log(this.context)
        fetch("http://localhost:3001/stores?page="+this.state.page_num + "&order_param="+this.state.order)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json.data,
                pagination: json.pagination
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        const { filter, refresh, search} = this.props;
        // console.log("page_num: "+page_num)
        // console.log("p_page_num: "+prevState.page_num)
        // console.log("refresh: "+refresh)
        // console.log("p_refresh: "+prevProps.refresh)
        if (prevProps.refresh !== refresh || prevState.page_num!== this.state.page_num || prevState.order!== this.state.order) {
            var basic_query
            if (prevProps.refresh!==refresh)
                this.setState({page_num: 0})
            basic_query = "http://localhost:3001/stores?page="+this.state.page_num+"&order_param="+this.state.order
            for (var i in Object.keys(filter)) {
                if (filter[Object.keys(filter)[i]]!=='')
                    basic_query+="&"+Object.keys(filter)[i]+"="+filter[Object.keys(filter)[i]]
            }
        
            
            if (search.length <= 500) {
                if (search !== '')
                    basic_query+="&search_text="+search
                fetch(basic_query)
                .then(res => res.json())
                .then(json => {
                    this.setState({
                        isLoaded: true,
                        items: json.data,
                        pagination: json.pagination
                    })
                })
            }
            else {
                this.setState({
                    isLoaded: true,
                    items: [],
                    pagination: []
                })
            }
        } 
            
        
      }

    render() {
            var { isLoaded, items, pagination } = this.state
            
            
            if (!isLoaded) {
                return <div>Loading...</div>
            }
            else if (items.length === 0)
                return (
                <div className="col-lg-8">
                <div className="container-fluid">
                    <p>No Results! Try something else!</p>
                </div>
                </div>
                )
            else if (typeof pagination.next != 'undefined' && typeof pagination.previous != 'undefined'){
                return (
                    <div className="col-lg-8">
                        <div className="btn-group btn-group-toggle" style={{backgroundColor: "#eee", float: "right"}} data-toggle="buttons">
                            <label className="btn btn-secondary active" onClick={()=>this.changeOrder(0)}>
                            <input type="radio" name="options" id="option1" autoComplete="off" checked={this.props.checked} onChange={()=>{}}/> Default
                            </label>
                            <label className="btn btn-secondary" onClick={()=>this.changeOrder(1)}>
                            <input type="radio" name="options" id="option2" autoComplete="off" /> Price: Low to high
                            </label>
                            <label className="btn btn-secondary" onClick={()=>this.changeOrder(-1)}>
                            <input type="radio" name="options" id="option3" autoComplete="off" /> Price: High to low
                            </label>
                        </div>
                        <br/>
                        <br/>
                        <div className="container-fluid">
                        
                            {items.map(item => 
                            <Item key = {item.StoreID}
                                  id = {item.StoreID}
                                  address = {item.Address}
                                  phone = {item.PhoneNum}
                                  storename = {item.StoreName} 
                                  website = {item.Website}
                                  />)}
                        </div>
                        <br />
                        
                        <ul className="pager">
                                <li onClick = {()=>this.changePage("previous")} className="previous"><a href="#">Previous</a></li>
                                <li onClick = {()=>this.changePage("next")} className="next"><a href="#">Next</a></li>
                        </ul>
                    </div>
                )
            }
            else if (typeof pagination.next != 'undefined') {
                return (
                    <div className="col-lg-8">
                        <div className="btn-group btn-group-toggle" style={{backgroundColor: "#eee", float: "right"}} data-toggle="buttons">
                            <label className="btn btn-secondary active" onClick={()=>this.changeOrder(0)}>
                            <input type="radio" name="options" id="option1" autoComplete="off"  checked={this.props.checked} onChange={()=>{}}/> Default
                            </label>
                            <label className="btn btn-secondary" onClick={()=>this.changeOrder(1)}>
                            <input type="radio" name="options" id="option2"  autoComplete="off" /> Price: Low to high
                            </label>
                            <label className="btn btn-secondary" onClick={()=>this.changeOrder(-1)}>
                            <input type="radio" name="options" id="option3"  autoComplete="off" /> Price: High to low
                            </label>
                        </div>
                        <br/>
                        <br/>
                        <div className="container-fluid">
                        
                            {items.map(item => 
                            <Item key = {item.StoreID}
                                  id = {item.StoreID}
                                  address = {item.Address}
                                  phone = {item.PhoneNum}
                                  storename = {item.StoreName} 
                                  website = {item.Website}
                                  />)}
                        </div>
                        <br />
                        
                        <ul className="pager">
                        <li onClick = {()=>this.changePage("next")} className="next"><a href="#">Next</a></li>
                        </ul>
                    </div>
                )
            }
            else if (typeof pagination.previous != 'undefined') {
                return (
                    <div className="col-lg-8">
                        <div className="btn-group btn-group-toggle" style={{backgroundColor: "#eee", float: "right"}} data-toggle="buttons">
                            <label className="btn btn-secondary active" onClick={()=>this.changeOrder(0)}>
                            <input type="radio" name="options" id="option1" autoComplete="off" checked={this.props.checked} onChange={()=>{}}/> Default
                            </label>
                            <label className="btn btn-secondary" onClick={()=>this.changeOrder(1)}>
                            <input type="radio" name="options" id="option2" autoComplete="off"/> Price: Low to high
                            </label>
                            <label className="btn btn-secondary" onClick={()=>this.changeOrder(-1)}>
                            <input type="radio" name="options" id="option3" autoComplete="off"/> Price: High to low
                            </label>
                        </div>
                        <br/>
                        <br/>
                        <div className="container-fluid">
                            {items.map(item => 
                            <Item key = {item.StoreID}
                                  id = {item.StoreID}
                                  address = {item.Address}
                                  phone = {item.PhoneNum}
                                  storename = {item.StoreName} 
                                  website = {item.Website}
                                  />)}
                        </div>
                        <br />
                        
                        <ul className="pager">
                        <li onClick = {()=>this.changePage("previous")} className="previous"><a  href="#">Previous</a></li>
                        </ul>
                    </div>
                )
            }
            else {
                return (
                    <div className="col-lg-8">
                        <div className="btn-group btn-group-toggle" style={{backgroundColor: "#eee", float: "right"}} data-toggle="buttons">
                            <label className="btn btn-secondary active" onClick={()=>this.changeOrder(0)}>
                            <input type="radio" name="options" id="option1" autoComplete="off" checked={this.props.checked} onChange={()=>{}}/> Default
                            </label>
                            <label className="btn btn-secondary" onClick={()=>this.changeOrder(1)}>
                            <input type="radio" name="options" id="option2" autoComplete="off"/> Price: Low to high
                            </label>
                            <label className="btn btn-secondary" onClick={()=>this.changeOrder(-1)}>
                            <input type="radio" name="options" id="option3" autoComplete="off"/> Price: High to low
                            </label>
                        </div>
                        <br/>
                        <br/>
                        <div className="container-fluid">
                        
                            {items.map(item => 
                            <Item key = {item.StoreID}
                                  id = {item.StoreID}
                                  address = {item.Address}
                                  phone = {item.PhoneNum}
                                  storename = {item.StoreName} 
                                  website = {item.Website}
                                  />)}
                        </div>
                        <br />
                    </div>
                )
            }
        
    }
}


export default List;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
