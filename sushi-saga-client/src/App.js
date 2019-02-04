import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

const API = "http://localhost:3000/sushis";

class App extends Component {
	state = {
		sushis: [],
		sushi1: 0,
		sushi2: 4,
		money: 100
	};

	componentDidMount = () => {
		fetch(API)
			.then(response => response.json())
			.then(data => {
				this.setState({
					sushis: data.map(obj => ({ ...obj, bought: false }))
				});
			});
	};

	showSushis = () => {
		return this.state.sushis.slice(this.state.sushi1, this.state.sushi2);
	};

	moreSushis = () => {
		this.setState({
			...this.state,
			sushi1: this.state.sushi1 + 4,
			sushi2: this.state.sushi2 + 4
		});
	};

	boughtSushi = event => {
		console.log(event.target.id);
	};

	render() {
		return (
			<div className="app">
				<SushiContainer
					sushis={this.showSushis()}
					moreSushis={this.moreSushis}
					buySushi={this.boughtSushi}
				/>
				<Table plates={this.showSushis} money={this.state.money} />
			</div>
		);
	}
}

export default App;
