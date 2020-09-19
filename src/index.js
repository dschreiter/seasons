import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

//Functional Component
// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => console.log(position), // success callback
// 		(err) => console.log(err) // error callback
// 	);

// 	return <div>Latitude: </div>;
// };

// Class Based Component
class App extends React.Component {
	state = { lat: null, errorMessage: '' };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => this.setState({ lat: position.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}

	render() {
		if (this.state.errorMessage && !this.state.latitude) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />; // passing state as a prop
		}

		return <div>Loading ...</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));

// return (
// 	<div>
// 		Latitude: {this.state.lat}
// 		<br />
// 		Error: {this.state.errorMessage}
// 	</div>
// );
