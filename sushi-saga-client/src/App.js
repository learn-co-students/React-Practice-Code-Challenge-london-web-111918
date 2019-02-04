import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import SushiWallet from './components/sushiWallet';
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
        this.setState({ sushis })
      })
  }

  handleEatSushi = (id, price, eaten) => {
    if (this.state.total >= price && !eaten) {
      const newSushis = [...this.state.sushis]
      const eatenSushi = newSushis.find(sushi => sushi.id === id)
      eatenSushi.eaten = true
      this.setState({ sushi: newSushis, plateCounter: [...this.state.plateCounter, eatenSushi], total: this.state.total - price })
    }
  }

  incrementPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  handleSubmitForm = (event) => {
    event.preventDefault();
    const inputValue = parseInt(event.target.querySelector('.sushiWalletInput').value)
    const money = inputValue > 0? inputValue : 0
    this.setState({
      total: this.state.total + money
    })
    event.target.querySelector('.sushiWalletInput').value = '';
  }


  render() {

    const step = this.state.page * 4
    const sushiForRendering = this.state.sushis.slice(step, step + 4)

    return (
      <div className="app">
        <SushiWallet handleSubmitForm={this.handleSubmitForm}/>
        <SushiContainer sushis={sushiForRendering} sushiQuantity={this.state.sushis.length} handleEatSushi={this.handleEatSushi} incrementPage={this.incrementPage} page={this.state.page} />
        <Table total={this.state.total} plateCounter={this.state.plateCounter} />
      </div>
    );
  }
}

export default App;