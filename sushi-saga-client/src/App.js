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
      selectionStart: 0,
      selection: [],
      budget: 100,
      plates: []
    }
  }

  payForSushi = (price) => this.setState({plates: [...this.state.plates, price], budget: this.state.budget - price})


  getMoreSushi = () => {
    this.setState({
      selectionStart: this.state.selectionStart + 4,
      selection: [...this.state.sushi.slice(this.state.selectionStart + 4, this.state.selectionStart + 8)]
    })
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({sushi: data, selection: [...data.slice(this.state.selectionStart, 4)]}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer selection={this.state.selection} payForSushi={this.payForSushi} getMoreSushi={this.getMoreSushi} budget={this.state.budget}/>
        <Table budget={this.state.budget} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;
