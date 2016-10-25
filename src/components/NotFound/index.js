import React, { Component } from 'react';

class NotFound extends Component {
	render() {
		const divStyle = {
			width: "300px",
			height: "200px",
			backgroundColor: "white",
			margin: "0px auto",
			textAlign: "center",
			padding: "20px"
		}

		const pStyle = {
			color: "red"
		}

		return (
			<div style={divStyle}>
				<h1>
					<p style={pStyle}>:(</p>
					<p>Não encontrado</p>
				</h1>
			</div>
		);
	}
}

export default NotFound