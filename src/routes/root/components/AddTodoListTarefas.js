import React, {Component} from 'react';

import AddTarefa from './AddTarefa'

class AddTodoListTarefas extends Component {
	state = {
		tarefas: [
			{descricao: ""}
		]
	}

	renderTarefas() {
		return this.state.tarefas.map(tarefa=>{
			return <AddTarefa descricao={tarefa.descricao} />
		});
	}

	render() {
		return(
			<div>
				{this.renderTarefas()}
			</div>
		);
	}
}

export default AddTodoListTarefas;