import React from "react";
import "./Settings.css";
import ControlsImage from "./controls.svg";

class Instructions extends React.Component {
    render() {
        return (
            <div className="Instructions">
                <div className="Instructions-Header">Instructions</div>
                <ol>
                    <li>Choose the size.</li>
                    <li>Click "Start" or use the space bar to begin playing.</li>
                    <li>Check out my Pathfinding AI play the game (under "Player"). Keep the size to "Small".</li>
                    <li>Have fun :)</li>
                </ol>
            </div>
        )
    }
}

class BoundsSizeInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onBoundsSizeChange(e.target.value);
    }

    render() {
        return (
            <div>
                <label className="bounds-size-label">
                    Size: 
                    <select className="bounds-size-select" value={this.props.value} onChange={this.handleChange}>
                        <option value="7">Small</option>
                        <option value="15">Medium</option>
                        <option value="25">Large</option>
                    </select>
                </label>
            </div>
        );
    }
}

class SpeedInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        this.props.onSpeedChange(e.target.value);
    }

    render() {
        return (
            <div>
                <label className="speed-label">
                    Speed: 
                    <select className="speed-select" value={this.props.value} onChange={this.handleChange}>
                        <option value="1.5">Slow</option>
                        <option value="3">Medium</option>
                        <option value="6">Fast</option>
                    </select>
                </label>
            </div>
        );
    }
}

class PlayerInput extends React.Component {
    handleChange = (e) => {
        this.props.onPlayerChange(e.target.value);
    }

    render() {
        return (
            <div>
                <label className="player-label">
                    Player: 
                    <select className="player-select" value={this.props.value} onChange={this.handleChange}>
                        <option value="you">You</option>
                        <option value="pathfinding">Pathfinding AI</option>
                    </select>
                </label>
            </div>
        )
    }
}

class StartButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onStartClick();
    }

    render() {
        return (
            <a className="start-button">
                <button onClick={this.handleClick}>Start</button>
            </a>
        )   
    }
}

class StopButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onStopClick();
    }

    render() {
        return (
            <a className="start-button">
                <button onClick={this.handleClick}>Stop</button>
            </a>
        )
    }
}

class ResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onResetClick();
    }

    render() {
        return (
            <a className="reset-button">
                <button onClick={this.handleClick}>Reset</button>
            </a>
        )
    }
}

class Controls extends React.Component {
    render() {
        return (
            <div className="Controls">
                <div>Controls</div>
                <img src={ControlsImage} alt="Controls" width="200px" height="200px"></img>
            </div>
        )
    }
}

class ToDoList extends React.Component {
    render() {
        return (
            <div className="ToDo">
                To Do:
                <ul>
                    <li>Better 3D depth or grid?</li>
                    <li>Leaderboard</li>
                </ul>
            </div>
        )
    }
}

class Settings extends React.Component {
    render() {
        return (
            <div className="Settings">
                <Instructions />
                <BoundsSizeInput value={this.props.boundsSize}
                                 onBoundsSizeChange={this.props.onBoundsSizeChange} />
                <SpeedInput value={this.props.speed}
                            onSpeedChange={this.props.onSpeedChange} />
                <PlayerInput value={this.props.player}
                             onPlayerChange={this.props.onPlayerChange} />
                <div className="SettingsButtons">
                    <StartButton onStartClick={this.props.onStartClick} />
                    <StopButton onStopClick={this.props.onStopClick} />
                    <ResetButton onResetClick={this.props.onResetClick} />
                </div>
                <Controls />
                <ToDoList />
            </div>
        );
    }
}

export default Settings;
