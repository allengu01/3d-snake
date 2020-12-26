import './App.css';
import React from "react";
import Game from "./Game.js";
import Settings from "./Settings.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {change: null,
                  gameState: "initial",
                  boundsSize: 7};

    this.handleBoundsSizeChange = this.handleBoundsSizeChange.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.handleGameOver = this.handleGameOver.bind(this);
  }

  handleBoundsSizeChange(newSize) {
    if (this.state.gameState === "initial") {
      this.setState({change: "bounds", boundsSize: newSize});
    }
  }

  handleStartClick() {
    console.log(this.state.gameState);
    if (this.state.gameState === "initial" || this.state.gameState === "stopped") {
      this.setState({change: "start", gameState: "started"});
    }
  }

  handleStopClick() {
    if (this.state.gameState === "started") {
      this.setState({change: "stop", gameState: "stopped"});
    }
  }

  handleResetClick() {
    this.setState({change: "reset", gameState: "initial"});
  }

  handleGameOver() {
    this.setState({change: "gameover", gameState: "gameover"});
  }

  render() {
      return (
          <div className="App">
              <div className="App-Game">
                  <Game change={this.state.change} 
                        boundsSize={this.state.boundsSize} 
                        gameState={this.state.gameState}
                        onGameOver={this.handleGameOver}/>
              </div>
              <div className="App-Settings">
                  <Settings gameState={this.state.gameState}
                            boundsSize={this.state.boundsSize}
                            onBoundsSizeChange={this.handleBoundsSizeChange}
                            onStartClick={this.handleStartClick}
                            onStopClick={this.handleStopClick}
                            onResetClick={this.handleResetClick}
                  />
              </div>
          </div>
      );
  }
}

export default App;
