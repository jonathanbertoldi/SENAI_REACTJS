import React, {Component} from 'react';
import CardListItem from './CardListItem'

class CardList extends Component {

	renderTarefas() {
		const {itens} = this.props;

		return itens.map(function(valor){
			return <CardListItem item={valor} />
		});
	}

	render() {
		return (
			<ul>
				{this.renderTarefas()}
			</ul>
		);
	}
}

export default CardList;