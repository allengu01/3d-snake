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
                    <li>Have fun :)</li>
                </ol>
            </div>
        )
    }
}

class BoundsSizeInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (this.props.gameState === "initial") {
            this.props.onBoundsSizeChange(e.target.value);
        }
    }

    render() {
        return (
            <label className="bounds-size-label">
                Size: 
                <select className="bounds-size-select" value={this.props.value} onChange={this.handleChange}>
                    <option value="7">Small</option>
                    <option value="15">Medium</option>
                    <option value="25">Large</option>
                </select>
            </label>

        );
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
                    <li>First person mode</li>
                    <li>Leaderboard</li>
                    <li>Pathfinding AI</li>
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
                                 gameState={this.props.gameState} 
                                 onBoundsSizeChange={this.props.onBoundsSizeChange} />
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
