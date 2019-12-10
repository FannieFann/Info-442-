import React from 'react';
import "./view1.css"
import Search from '../search/search.js'
import Filter from '../filter/filter.js'
import List from '../list/list.js'

// import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';
class View1 extends React.Component {
    constructor () {
      super()
      this.changeFilter = this.changeFilter.bind(this)
      this.changeSearch = this.changeSearch.bind(this)
      this.state = {
        filter: {
        "product_type": "",
        "theme": "",
        "neighborhood": "",
        "for_whom": ""
        },
        searchtext: "",
        refresh: false
      }
      // this.filter = 
      // this.searchtext = ""
      // this.refresh = false
    }
    changeFilter(filtertype, filtername, checked) {
      var filt = this.state.filter
      if (checked) {
        if(filt[filtertype]!=="")
          filt[filtertype] += "," + filtername
        else
          filt[filtertype] += filtername
        this.setState(filt)
        this.setState({
          refresh: !this.state.refresh
        })
      }
      else {
        var one = filt[filtertype].search(","+filtername)
        var three = filt[filtertype].search(filtername+",")
        var two = filt[filtertype].search(filtername)
        
        // console.log(two)
        if (one !== -1)
          filt[filtertype]=filt[filtertype].replace(","+filtername, "")
        else if (three !== -1)
          filt[filtertype]=filt[filtertype].replace(filtername+",", "")
        else if (two !== -1)
          filt[filtertype] = filt[filtertype].replace(filtername, "")
        this.setState(filt)
        this.setState({
          refresh: !this.state.refresh
        })
      }
      // this.state.filter[filtertype] = filtername
      // this.state.refresh = !this.state.refresh
      // console.log(checked)
      // console.log(this.state.filter)
    }

    changeSearch(text) {
      this.setState({
        searchtext: text,
        refresh: !this.state.refresh
      })
      // this.state.searchtext = text;
      // this.state.refresh = !this.state.refresh
      // console.log(this.state.searchtext)
    }
    
    render() {
    return (
      // <FilterContext.Provider>
      <div>
        <Search changeSearch = {this.changeSearch}/>  
        <div className={"container-fluid"}>
          <div className="row">
            <Filter changeFilter = {this.changeFilter}/>
            <List refresh = {this.state.refresh} filter = {this.state.filter} search = {this.state.searchtext}/>
          </div>
            
        </div>
        
      </div>
      // </FilterContext.Provider>
    )
    }
}


export default View1;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
