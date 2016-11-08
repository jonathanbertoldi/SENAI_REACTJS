import React, {Component} from 'react';
import NavBar from './components/NavBar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Layout extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<NavBar />
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}

export default Layout;