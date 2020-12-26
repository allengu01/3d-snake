import React from "react";
import ControlsImage from "./controls.svg";

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
            <label>
                Bounds Size:
                <select value={this.props.value} onChange={this.handleChange}>
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
            <div className="start-button">
                <button onClick={this.handleClick}>Start</button>
            </div>
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
            <div className="start-button">
                <button onClick={this.handleClick}>Stop</button>
            </div>
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
            <div className="reset-button">
                <button onClick={this.handleClick}>Reset</button>
            </div>
        )
    }
}

class Controls extends React.Component {
    render() {
        return (
            <div className="Controls">
                <div>Controls</div>
                <img src={ControlsImage} alt="Controls" width="320px" height="320px"></img>
            </div>
        )
    }
}

class Settings extends React.Component {
    render() {
        return (
            <>
                <BoundsSizeInput value={this.props.boundsSize}
                                 gameState={this.props.gameState} 
                                 onBoundsSizeChange={this.props.onBoundsSizeChange} />
                <StartButton onStartClick={this.props.onStartClick} />
                <StopButton onStopClick={this.props.onStopClick} />
                <ResetButton onResetClick={this.props.onResetClick} />
                <Controls />
            </>
        );
    }
}

export default Settings;
