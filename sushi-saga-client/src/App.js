import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!


class App extends Component {

  state = {
    sushis: [],
    remainingMoney: 200,
    eatenSushis: [],
    page: 0
  }

  //  addEatentoOneSushi = (sushi) => {
  //   sushi.eaten = false
  // }

  addEatentoState = (sushis) => {
    return sushis.map(sushi => {
      sushi.eaten = false
      return sushi
    });
  }

  componentDidMount() {
    const API = "http://localhost:3000/sushis"
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          sushis: [...this.addEatentoState(data)]
        }
      )
      })
  }

  incrementPage = () => {
    this.state.sushis.length >= (this.state.page + 1) * 4 && this.setState({page: this.state.page+1})
  }
  

  handlePlateClick = (id, price) => {
    
    if (this.state.remainingMoney >= price) {  
      const newSushis = [...this.state.sushis];
      const eatenSushis = [...this.state.eatenSushis]
      const eatenSushi = newSushis.find(sushi => sushi.id === id)
      eatenSushi.eaten = true
      eatenSushis.push(eatenSushi)
      this.setState({
        sushi: newSushis,
        remainingMoney: this.state.remainingMoney - eatenSushi.price,
        eatenSushis
      }) 
    }
  }

  render() {
    console.log(this.state.sushis)
    return (
      <div className="app">
      {
        this.state.sushis.length && <SushiContainer incrementPage={this.incrementPage} page = {this.state.page} handlePlateClick={this.handlePlateClick} sushis = {this.state.sushis}  />
      }
        
        <Table 
        sushis = {this.state.sushis}
        remainingMoney = {this.state.remainingMoney}
        eatenSushis = {this.state.eatenSushis} />
      </div>
    );
  }
}


export default App;