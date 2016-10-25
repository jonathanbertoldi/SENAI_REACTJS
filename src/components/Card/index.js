import React, { Component, PropTypes } from 'react';
import CardList from '../CardList'
import "./Card.css"

class Card extends Component {
	render() {
		const {titulo, tarefas} = this.props.lista;

		const style = {
			width: "200px",
			backgroundColor: "white",
			float: "left",
			marginRight: "20px",
			padding: "20px"
		}

		return (
			<div style={style}>
				<h3>{titulo}</h3>
				<CardList tarefas={tarefas}/>
			</div>
		);
	}
}

Card.propTypes = {
	lista: PropTypes.object.isRequired
};

export default Card;