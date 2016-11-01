import React, {Component} from 'react';

class CardListItem extends Component {
	render() {
		const {item} = this.props;

		return (
			<li>
				<input type="checkbox" />
				{item.descricao}
			</li>
		);
	}
}

export default CardListItem;