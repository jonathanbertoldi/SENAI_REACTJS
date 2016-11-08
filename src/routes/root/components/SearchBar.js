import React, {Component} from 'react';
import Icon from './magnify.svg'

class SearchBar extends Component {

	handleInput() {
		var value = this.refs['search'].value;
		this.props.filtrar(value);
	}

	render() {
		const style = {
			backgroundImage: "url("+ Icon +")",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "10px 10px",
			textIndent: "50px",
			width: "100%",
			height: "40px",
			border: "0px",
			boxShadow: "3px 3px 10px #CCC"
		}

		return (
			<div>
				<input 
					ref="search" 
					type="search" 
					onInput={this.handleInput.bind(this)} 
					placeholder="Pesquisa" 
					style={style} />
			</div>
		);
	}
}

export default SearchBar;