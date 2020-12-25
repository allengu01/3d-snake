import './App.css';
import React from "react";
import Game from "./Game.js";
import Settings from "./Settings.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {change: null,
                  gridSize: 10};

    this.handleGridSizeChange = this.handleGridSizeChange.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
  }

  handleGridSizeChange(newSize) {
    this.setState({change: "grid", gridSize: newSize});
  }

  handleStartClick() {
    this.setState({change: "start"});
  }

  handleStopClick() {
    this.setState({change: "stop"});
  }

  render() {
      return (
          <div className="App">
              <div className="App-Game">
                  <Game change={this.state.change} gridSize={this.state.gridSize} start={this.state.start}/>
              </div>
              <div className="App-Settings">
                  <Settings gridSize={this.state.gridSize}
                            onGridSizeChange={this.handleGridSizeChange}
                            onStartClick={this.handleStartClick}
                            onStopClick={this.handleStopClick}
                  />
              </div>
          </div>
      );
  }
}

export default App;
