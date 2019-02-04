import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    sushiPosition: [0, 4],
    emptyPlates: [],
    budget: 50
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => this.setState({ sushis: data }))
  }

  nextPosition = () => {
    const pos1 = this.state.sushiPosition[0] + 4
    const pos2 = this.state.sushiPosition[1] + 4
    this.setState({ sushiPosition: [pos1, pos2] })
  }

  eat = (price) => {
    const newArr = this.state.emptyPlates.concat([0])
    const remaining = this.state.budget - price
    this.setState({
      emptyPlates: newArr,
      budget: remaining
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} position={this.state.sushiPosition} nextPosition={this.nextPosition} eat={this.eat} budget={this.state.budget} />
        <Table emptyPlates={this.state.emptyPlates} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;