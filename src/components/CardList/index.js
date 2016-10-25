import React, { Component } from 'react';
import CardListItem from '../CardListItem'

class CardList extends Component {
	render() {
		const {tarefas} = this.props;
		return (
			<ul>
				<CardListItem tarefa={tarefas[0]}/>
				<CardListItem tarefa={tarefas[1]}/>
				<CardListItem tarefa={tarefas[2]}/>
			</ul>
		);
	}
}

export default CardList;