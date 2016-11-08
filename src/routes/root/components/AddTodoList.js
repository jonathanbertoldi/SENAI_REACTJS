import React, {Component} from 'react';

import AddTodoListTarefas from './AddTodoListTarefas'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add'

class AddTodoList extends Component {
	state = {
		open: false
	}


	abrirModal() {
		this.setState({
			open: true
		})
	}

	fecharModal() {
		this.setState({
			open: false
		})
	}

	render() {

		const fabStyle = {
			position: "fixed",
    		bottom: "40px",
    		right: "40px"
		}

		const actions = (
			<div>
				<FlatButton label="Cancelar" primary={true} onTouchTap={this.fecharModal.bind(this)} />
				<FlatButton label="Cadastrar" primary={true} onTouchTap={this.fecharModal.bind(this)} />
			</div>
		)

		return (
			<div>
				<FloatingActionButton style={fabStyle} onClick={this.abrirModal.bind(this)} >
					<ContentAdd />
				</FloatingActionButton>

				<Dialog 
					open={this.state.open}
					onRequestClose={this.fecharModal.bind(this)}
					title="Cadastrar uma To-do List"
					actions={actions}
				>
					<form>
						<TextField 
							floatingLabelText="Título"
							hintText="Linguagens para aprender... lugares para viajar... etc"
							fullWidth={true} 
						/>
						<h3>Tarefas</h3>
						<AddTodoListTarefas />
					</form>
				</Dialog>
			</div>
		);
	}
}

export default AddTodoList;