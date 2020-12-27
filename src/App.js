import './App.css';
import React from "react";
import Game from "./Game.js";
import Settings from "./Settings.js";
import Scoreboard from "./Scoreboard.js";
import Message from "./Message.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {change: null,
                  gameState: "initial",
                  message: "Press space to start",
                  boundsSize: 7,
                  score: 0};

    this.handleBoundsSizeChange = this.handleBoundsSizeChange.bind(this);
    this.handleScoreChange = this.handleScoreChange.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
    this.handleSpaceBar = this.handleSpaceBar.bind(this);
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
      this.setState({change: "start", gameState: "started", message: ""});
    }
  }

  handleStopClick() {
    if (this.state.gameState === "started") {
      this.setState({change: "stop", gameState: "stopped", message: "Paused: Press space to start"});
    }
  }

  handleSpaceBar() {
    if (this.state.gameState === "initial" || this.state.gameState === "stopped") {
      this.setState({change: "start", gameState: "started", message: ""});
    }
    else if (this.state.gameState === "started") {
      this.setState({change: "stop", gameState: "stopped", message: "Paused: Press space to start"});
    }
  }

  handleResetClick() {
    this.setState({change: "reset", gameState: "initial", message: "Press space to start"});
  }

  handleScoreChange(newScore) {
    this.setState({change: "score", score: newScore});
  }

  handleGameOver(cause) {
    this.setState({change: "gameover", gameState: "gameover", message: `Game Over: ${cause}`});
  }

  render() {
      return (
          <div className="App">
              <div className="App-Game">
                  <Game change={this.state.change} 
                        boundsSize={this.state.boundsSize} 
                        gameState={this.state.gameState}
                        onSpaceBar={this.handleSpaceBar}
                        onScoreChange={this.handleScoreChange}
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
              <div className="App-Scoreboard">
                  <Scoreboard score={this.state.score} />
              </div>
              <div className="App-Message">
                  <Message gameState={this.state.gameState} message={this.state.message} />
              </div>
          </div>
      );
  }
}

export default App;
