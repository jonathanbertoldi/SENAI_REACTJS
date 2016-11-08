import React, {Component} from 'react';

class CardListItem extends Component {
	render() {
		const {item} = this.props;

		return (
			<li>
				<input type="checkbox" defaultChecked={item.feito} />
				{item.descricao}
			</li>
		);
	}
}

export default CardListItem;