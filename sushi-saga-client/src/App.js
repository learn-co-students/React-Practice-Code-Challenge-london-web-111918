import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      sushi: [],
      page: 1,
      tablePlates: [],
      customerMoney: 100,
      spentMoney: 0
    }
  }

  increasePage = () => {
    const newPage = parseInt(JSON.stringify(this.state.page)) + 1
    this.setState({
      page: newPage
    })
    return this.state.page
  }

  handleEatenSushi = (event) => {
    const newTablePlates = this.state.tablePlates.map(plate => plate)
    newTablePlates.push(event.target)
    if (this.state.sushi.find(sushi => sushi.img_url === event.target.src)) {
      let foundSushi = this.state.sushi.find(sushi => sushi.img_url === event.target.src)
      if ((this.state.customerMoney - this.state.spentMoney) > foundSushi.price){
        let spent = parseInt(JSON.stringify(this.state.spentMoney)) + foundSushi.price
        this.setState({
          spentMoney: spent,
          tablePlates: newTablePlates
        })
      }
    }
    return newTablePlates
  }

  fetchSushi = () => {
    return fetch(API)
    .then(response => response.json())
    .then(data => {
      this.setState({
        sushi: data
      })
    })
  }

  componentDidMount = () => this.fetchSushi()

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi} page={this.state.page} moreSushi={this.increasePage} handleEatenSushi={this.handleEatenSushi} remainingFunds={this.state.customerMoney-this.state.spentMoney} />
        <Table eatenSushi={this.state.tablePlates} customerMoney={this.state.customerMoney} spentMoney={this.state.spentMoney}/>
      </div>
    );
  }
}

// To be checked ----------
// removeSushiFromDB = (id) => {
//   return fetch(API + `/${id}`, {method: 'DELETE'})
//   .then(response => response.json())
//   .then(data => {
//     this.setState({
//       sushi: data
//     })
//   })
// }
//
// removeSushi = (id) => {
//   return this.removeSushiFromDB(id)
// }
// --------------------------

export default App;
