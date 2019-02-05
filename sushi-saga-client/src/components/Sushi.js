import React, { Fragment } from "react";

const Sushi = props => {
	return (
		<Fragment>
			<div className="sushi">
				<div className="plate" onClick={() => props.buy(props.sushi)}>
					{props.sushi.bought ? null : (
						<img
							src={props.sushi.img_url}
							id={props.sushi.id}
							alt={props.sushi.name}
							width="100%"
						/>
					)}
				</div>
				<h4 className="sushi-details">
					{props.sushi.name} - ${props.sushi.price}
				</h4>
			</div>
		</Fragment>
	);
};

export default Sushi;
