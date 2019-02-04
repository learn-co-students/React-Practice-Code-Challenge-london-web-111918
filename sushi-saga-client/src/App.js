import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    plateCounter: [],
    page: 0,
    total: 100
  }

  componentDidMount() {
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      sushis = sushis.map(sushi => {
        sushi.eaten = false
        return sushi
      });
      this.setState({sushis})
    })
  }
    
  handleEatSushi = (id) => {
    const newSushis = [...this.state.sushis]
    const eatenSushi = newSushis.find(sushi => sushi.id === id)
    if (this.state.total - eatenSushi.price > 0){
    eatenSushi.eaten = true
    this.setState({sushi: newSushis, plateCounter: [...this.state.plateCounter, eatenSushi], total: this.state.total - eatenSushi.price})
    } else {
      console.log(`You do not have enough money for this sushi!`)
    }
  } 

  incrementPage = () => {
    this.setState({page: this.state.page + 1})
  }

  render() {

    const step = this.state.page * 4
    const sushiForRendering = this.state.sushis.slice(step, step+4)
    
    return (
      <div className="app">
        <SushiContainer sushis={sushiForRendering} sushiQuantity={this.state.sushis.length} handleEatSushi={this.handleEatSushi} incrementPage={this.incrementPage} page={this.state.page} />
        <Table total={this.state.total} plateCounter={this.state.plateCounter}/>
      </div>
    );
  }
}

export default App;