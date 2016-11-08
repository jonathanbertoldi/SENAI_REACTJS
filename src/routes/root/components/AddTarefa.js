import React, {Component} from 'react';

import TextField from 'material-ui/TextField'

class AddTarefa extends Component {
	adicionarTarefa() {

	}

	render() {
		return(
			<TextField fullWidth={true}
				hintText="Nova tarefa"
				onKeyDown={this.adicionarTarefa.bind(this)} 
				value={this.props.descricao}
			/>
		);
	}
}

export default AddTarefa;