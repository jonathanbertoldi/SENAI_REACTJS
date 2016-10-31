import React, {Component} from 'react';
import HamburgerMenu from './HamburgerMenu'

class NavBar extends Component {
	render() {
		const style = {
			width: "100%",
			height: "50px",
			backgroundColor: "#FFEB3B",
			boxShadow: "0px 3px 10px #CCC",
			display: "inline-block"
		}

		const pageWrapper = {
			width: "70%",
			height: "50px",
			margin: "0px auto"
		}

		const titleStyle = {
			margin: "0px",
			lineHeight: "50px",
			verticalAlign: "middle"
		}

		return (
			<div style={style}>
				<div style={pageWrapper}>
					<HamburgerMenu />
					<h3 style={titleStyle}>To-do list</h3>
				</div>
			</div>
		);
	}
}

export default NavBar;