import React, {Component} from 'react';

class HamburgerMenu extends Component {
	render() {
		const retanguloStyle = {
			width: "25px",
			height: "3px",
			marginBottom: "5px",
			marginTop: "5px",
			display: "block",
			backgroundColor: "black"
		}

		const buttonStyle = {
			background: "none",
			border: "none",
			cursor: "pointer"
		}
		return (
			<button style={buttonStyle}>
				<span style={retanguloStyle}></span>
				<span style={retanguloStyle}></span>
				<span style={retanguloStyle}></span>
			</button>
		);
	}
}

export default HamburgerMenu;