import React, { Component, PropTypes } from 'react';
import CardList from './CardList'

class Card extends Component {
	render() {
		const {titulo, tarefas} = this.props.lista;

		return (
			<div className="card">
				<h1>{titulo}</h1>
				<CardList />
			</div>
		);
	}
}

Card.propTypes = {
	lista: PropTypes.object.isRequired
};

export default Card;