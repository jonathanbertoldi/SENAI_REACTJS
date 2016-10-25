import React, {Component} from 'react';
import HamburgerMenu from './HamburgerMenu'

class Navbar extends Component {
	render() {
		const headerStyle = {
			backgroundColor: "#f4d27a",
			height: "70px",
			display: "flex"
		}
		return (
			<header style={headerStyle}>
				<HamburgerMenu />
				<h1>To-do-List</h1>
			</header>
		);
	}
}

export default Navbar;