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
                  speed: 3,
                  score: 0,
                  player: "you"};
  }

  handleBoundsSizeChange = (newSize) => {
    if (this.state.gameState === "initial") {
      this.setState({change: "bounds", boundsSize: newSize});
    }
  }

  handleSpeedChange = (newSpeed) => {
    if (this.state.gameState === "initial") {
      this.setState({change: "speed", speed: newSpeed});
    }
  }

  handlePlayerChange = (newPlayer) => {
    if (this.state.gameState === "initial") {
      this.setState({change: "player", player: newPlayer});
    }
  }

  handleStartClick = () => {
    console.log(this.state.gameState);
    if (this.state.gameState === "initial" || this.state.gameState === "stopped") {
      this.setState({change: "start", gameState: "started", message: ""});
    }
  }

  handleStopClick = () => {
    if (this.state.gameState === "started") {
      this.setState({change: "stop", gameState: "stopped", message: "Paused: Press space to start"});
    }
  }

  handleSpaceBar = () => {
    if (this.state.gameState === "initial" || this.state.gameState === "stopped") {
      this.setState({change: "start", gameState: "started", message: ""});
    }
    else if (this.state.gameState === "started") {
      this.setState({change: "stop", gameState: "stopped", message: "Paused: Press space to start"});
    }
    else if (this.state.gameState === "gameover") {
      this.setState({change: "reset", gameState: "initial", message: "Press space to start"});
    }
  }

  handleResetClick = () => {
    this.setState({change: "reset", gameState: "initial", message: "Press space to start"});
  }

  handleScoreChange = (newScore) => {
    this.setState({change: "score", score: newScore});
  }

  handleGameOver = (cause) => {
    this.setState({change: "gameover", gameState: "gameover", message: `Game Over: ${cause}`});
  }

  render() {
      return (
          <div className="App">
              <div className="App-Game">
                  <Game change={this.state.change} 
                        boundsSize={this.state.boundsSize}
                        speed={this.state.speed} 
                        gameState={this.state.gameState}
                        player={this.state.player}
                        onSpaceBar={this.handleSpaceBar}
                        onScoreChange={this.handleScoreChange}
                        onGameOver={this.handleGameOver}/>
              </div>
              <div className="App-Settings">
                  <Settings gameState={this.state.gameState}
                            boundsSize={this.state.boundsSize}
                            speed={this.state.speed}
                            player={this.state.player}
                            onBoundsSizeChange={this.handleBoundsSizeChange}
                            onSpeedChange={this.handleSpeedChange}
                            onPlayerChange={this.handlePlayerChange}
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
