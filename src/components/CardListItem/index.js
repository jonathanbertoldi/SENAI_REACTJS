import React, { Component } from 'react';

class CardListItem extends Component {
	render() {
		const {descricao, feito} = this.props.tarefa;
		return (
			<li>
				<input type="checkbox" checked={feito}/>
				{descricao}
			</li>
		);
	}
}

export default CardListItem;