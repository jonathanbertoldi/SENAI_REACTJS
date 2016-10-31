import React, {Component} from 'react';

class HamburgerMenu extends Component {
	render() {
		const retanguloStyle = {
			width: "20px",
			height: "2px",
			marginBottom: "4px",
			marginTop: "4px",
			display: "block",
			backgroundColor: "black"
		}

		const buttonStyle = {
			background: "none",
			border: "none",
			cursor: "pointer",
			marginTop: "12px",
			float: "left",
			marginRight: "25px"
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