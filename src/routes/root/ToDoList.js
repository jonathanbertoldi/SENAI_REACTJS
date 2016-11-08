import React, {Component} from 'react';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import AddTodoList from './components/AddTodoList';


class ToDoList extends Component {
	
	state = {
		listas: [],
		filtro: ""
	}

	fetchListas() {
		fetch("https://private-00cf6-reacttodo.apiary-mock.com/lista")
			.then(response => response.json())
			.then(json => {
				this.setState({
					listas: json
				});
			});
	}

	renderCards() {
		var filtro = this.state.filtro;
		var cards = this.state.listas;

		if (filtro != '') {
			cards = this.state.listas.filter(card => {
				var titulo = card.titulo.toLowerCase();
				return titulo.indexOf(filtro) != -1;
			});
		}

		
		return cards.map(function(lista) {
			return <Card lista={lista} />
		});
	}

	filtrar(valor) {
		this.setState({
			filtro: valor
		});
	}

	componentDidMount() {
		this.fetchListas();
	}

	render() {
		const pageWrapper = {
			width: "70%",
			margin: "20px auto"
		}

		const cardsStyle = {
			layout: "inline-block"
		}

		var actions = (
			<div>
				<button>Oi</button>
				<button>Tchau</button>
			</div>
		);

		return (
			<div style={pageWrapper}>
				<SearchBar filtrar={this.filtrar.bind(this)} />
				
				<div style={cardsStyle}>
					{this.renderCards()}
				</div>
				
				<AddTodoList />
			</div>
		);
	}
}

export default ToDoList;