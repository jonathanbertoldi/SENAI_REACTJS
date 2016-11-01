import React, {Component} from 'react';
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import FloatingActionButton from './components/FloatingActionButton'

class ToDoList extends Component {
	
	state = {
		listas: []
	}

	fetchListas() {
		fetch("https://private-00cf6-reacttodo.apiary-mock.com/lista")
			.then(response => response.json())
			.then(json => {
				console.log(json);
				this.setState({
					listas: json
				});
			});
	}

	handleClick() {
		this.fetchListas();
	}

	renderCards() {
		return this.state.listas.map(function(lista) {
			return <Card lista={lista} />
		});
	}

	render() {
		const pageWrapper = {
			width: "70%",
			margin: "20px auto"
		}

		const cardsStyle = {
			layout: "inline-block"
		}

		return (
			<div style={pageWrapper}>
				<SearchBar />
				<div style={cardsStyle}>
					{this.renderCards()}
				</div>
				<button onClick={this.handleClick.bind(this)} >button</button>
				<FloatingActionButton />
			</div>
		);
	}
}

export default ToDoList;