import React, { Component } from 'react';
import CardListItem from './CardListItem'

class CardList extends Component {
	render() {
		return (
			<ul>
				<CardListItem />
				<CardListItem />
				<CardListItem />
			</ul>
		);
	}
}

export default CardList;