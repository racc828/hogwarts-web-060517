import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Hogs from './porkers_data'
import HogsIndex from './components/Hogs.index'
import Hog from './components/Hog'
import HogInfo from './components/Hog.info'
import SortFilter from './components/Sort.filter'

class App extends Component {

  constructor(){
    super()

    this.state = {
      hogs: Hogs,
      filter: false,

    }
  }

  changeSort = (event)=>{
    console.log(event.target.innerText)
    let sortHogs = []
    if (event.target.innerText === 'Name') {
      sortHogs = this.state.hogs.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      }) //end sort
    } else if(event.target.innerText === 'Weight Ratio') {
      sortHogs = this.state.hogs.sort(function(a, b) {
        var weightRatioA = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']; // ignore upper and lowercase
        var weightRatioB = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'];// ignore upper and lowercase
        return weightRatioA - weightRatioB
      })
    } //end if
    else if(event.target.value === "default") {
      null
    }
      this.setState({
        hogs: sortHogs
      }) // end setState
    } // end fx

  filterGreased = (event) => {
    const greasedHogs = this.state.hogs.filter((hog)=>{
      return hog.greased === true
    }) // end filter
    if (event.target.checked === true){
      this.setState({
        hogs: greasedHogs
      })
    } else {
      this.setState({
        hogs: Hogs
      })
    }

  }

  render() {
    return (
      <div className="App">
          < Nav />
          < SortFilter onCheck={this.filterGreased} onChangeSort={this.changeSort} />
          < HogsIndex hogs = {this.state.hogs} />
      </div>
    )
  }
}

export default App;
