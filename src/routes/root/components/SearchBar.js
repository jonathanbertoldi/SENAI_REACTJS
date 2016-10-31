import React, {Component} from 'react';
import Icon from './magnify.svg'

class SearchBar extends Component {
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
			<input type="text" placeholder="Pesquisa" style={style}/>
		);
	}
}

export default SearchBar;