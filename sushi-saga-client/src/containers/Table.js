import React, { Fragment } from "react";

const Table = props => {
	const renderPlates = plates => {
		return plates.map((plate, index) => {
			return (
				<div
					key={plate.id}
					className="empty-plate"
					style={{ top: -7 * index }}
				/>
			);
		});
	};

	return (
		<Fragment>
			<h1 className="remaining">You have: ${props.money} remaining!</h1>
			<div className="table">
				<div className="stack">{renderPlates(props.plates)}</div>
			</div>
		</Fragment>
	);
};

export default Table;
