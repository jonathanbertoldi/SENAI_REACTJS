import React, {Component} from 'react';
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import FloatingActionButton from './components/FloatingActionButton'

class ToDoList extends Component {
	render() {
		const pageWrapper = {
			width: "70%",
			margin: "20px auto"
		}

		const cards = {
			layout: "inline-block"
		}

		return (
			<div style={pageWrapper}>
				<SearchBar />
				<div style={cards}>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<FloatingActionButton />
			</div>
		);
	}
}

export default ToDoList;