import React from "react";
import "./Scoreboard.css";

class Scoreboard extends React.Component {
	render() {
		return (
			<div className="Scoreboard">Score: {this.props.score}</div>
	
		)
	} 
}

export default Scoreboard;