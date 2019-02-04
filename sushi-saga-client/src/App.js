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
      .then(data => this.setState({
        sushis: data
      }))
  }

  nextPosition = () => {
    const newPosStart = this.state.sushiPosition[0] + 4
    const newPosEnd = this.state.sushiPosition[1] + 4
    this.setState({
      sushiPosition: [newPosStart, newPosEnd]
    })
  }

  eat = (price) => {
    const newArray = this.state.emptyPlates.concat([0])
    const wallet = this.state.budget
    this.setState({
      emptyPlates: newArray,
      budget: wallet - price 
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis} sushiPosition={this.state.sushiPosition} nextPosition={this.nextPosition} eat={this.eat} budget={this.state.budget} />
        <Table plate={this.state.emptyPlates} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;