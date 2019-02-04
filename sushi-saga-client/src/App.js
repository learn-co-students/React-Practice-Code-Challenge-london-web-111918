import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    position: [0, 4],
    emptyPlates: [],
    budget: 50
  }

  componentDidMount() {
    return fetch(API)
    .then(res => res.json())
    .then(data => {
      this.setState({sushis: data})
    })
  }

  nextPosition = () => {
    const newPosition = [this.state.position[0] + 4, this.state.position[1] + 4]
    this.setState({position: newPosition})
  }

  addPlate = (price) => {
    const newArray = this.state.emptyPlates.concat([0])
    const newBudget = this.state.budget - price
    this.setState({
      emptyPlates: newArray,
      budget: newBudget
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer budget={this.state.budget} sushis={this.state.sushis} position={this.state.position} nextPosition={this.nextPosition} addPlate={this.addPlate}/>
        <Table emptyPlates={this.state.emptyPlates} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;