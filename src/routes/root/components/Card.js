import React, {Component} from 'react';
import CardList from './CardList'

class Card extends Component {
	render() {
		const style = {
			width: "230px",
			backgroundColor: "white",
			boxShadow: "3px 3px 10px #CCC",
			float: "left",
			margin: "20px 10px 20px 0px",
			padding: "20px"
		}

		return (
			<div style={style}>
				<h1>Título</h1>
				<CardList />
			</div>
		);
	}
}

export default Card;