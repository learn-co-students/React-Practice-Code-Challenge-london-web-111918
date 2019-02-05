import React, { Fragment, Component } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

export default class SushiContainer extends Component {
	render() {
		return (
			<Fragment>
				<div className="belt">
					{this.props.sushis.map(sushi => {
						return (
							<Sushi key={sushi.id} sushi={sushi} buy={this.props.buySushi} />
						);
					})}
					<MoreButton nextSushis={this.props.moreSushis} />
				</div>
			</Fragment>
		);
	}
}
