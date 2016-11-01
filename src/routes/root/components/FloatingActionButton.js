import React, {Component} from 'react';
import PlusIcon from './plus.svg'

class FloatingActionButton extends Component {
	render() {
		const buttonStyle = {
			position: "fixed",
    		bottom: "0",
    		right: "0",
    		margin: "0px 40px 40px 0px",
    		height: "60px",
    		width: "60px",
    		border: "0",
    		backgroundColor: "#03A9F4",
    		backgroundImage: "url("+PlusIcon+")",
    		backgroundRepeat: "no-repeat",
    		backgroundPosition: "12px 12px",
    		borderRadius: "30px",
    		boxShadow: "3px 3px 10px #CCC"
		}

		return (
			<input type="button" style={buttonStyle}/>
		);
	}
}

export default FloatingActionButton;