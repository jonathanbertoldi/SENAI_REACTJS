import React, {Component} from 'react';
import CardList from './CardList'

class Card extends Component {
	render() {
		const style = {
			width: "230px",
			backgroundColor: "white",
			boxShadow: "3px 3px 10px #CCC",
			float: "left",
			margin: "20px 20px 0px 0px",
			padding: "20px"
		}

		const {titulo,itens} = this.props.lista;

		return (
			<div style={style}>
				<h3>{titulo}</h3>
				<CardList itens={itens}/>
			</div>
		);
	}
}

export default Card;