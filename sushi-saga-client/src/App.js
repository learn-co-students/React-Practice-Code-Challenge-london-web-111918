import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

const API = "http://localhost:3000/sushis";

class App extends Component {
	state = {
		sushis: [],
		sushi1: 0,
		sushi2: 4,
		money: 100,
		eaten: []
	};

	componentDidMount = () => {
		fetch(API)
			.then(response => response.json())
			.then(data => {
				this.setState({
					sushis: data.map(sushis => ({ ...sushis, bought: false }))
				});
			});
	};

	showSushis = () => {
		return this.state.sushis.slice(this.state.sushi1, this.state.sushi2);
	};

	moreSushis = () => {
		this.setState({
			sushi1: this.state.sushi1 + 4,
			sushi2: this.state.sushi2 + 4
		});
	};

	boughtSushi = boughtSushi => {
		const buySushi = this.state.sushis.find(
			sushi => sushi.id === boughtSushi.id
		);

		const buySushiCopy = { ...buySushi };

		if (!buySushiCopy.bought && this.state.money >= buySushiCopy.price) {
			buySushiCopy.bought = true;
			this.setState({
				money: this.state.money - buySushiCopy.price,
				sushis: this.state.sushis.map(sushi =>
					sushi.id === buySushiCopy.id ? buySushiCopy : sushi
				),
				eaten: [...this.state.eaten, buySushiCopy]
			});
		}
	};

	render() {
		return (
			<div className="app">
				<SushiContainer
					sushis={this.showSushis()}
					moreSushis={this.moreSushis}
					buySushi={this.boughtSushi}
				/>
				<Table plates={this.state.eaten} money={this.state.money} />
			</div>
		);
	}
}

export default App;
