import React from "react";

class GridSizeInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onGridSizeChange(e.target.value);
    }

    render() {
        return (
            <label>
                Grid Size:
                <select value={this.props.value} onChange={this.handleChange}>
                    <option value="10">10 x 10 x 10</option>
                    <option value="15">15 x 15 x 15</option>
                    <option value="20">20 x 20 x 20</option>
                    <option value="25">25 x 25 x 25</option>
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

class Settings extends React.Component {
    render() {
        return (
            <>
                <GridSizeInput value={this.props.gridSize} 
                            onGridSizeChange={this.props.onGridSizeChange} />
                <StartButton onStartClick={this.props.onStartClick} />
                <StopButton onStopClick={this.props.onStopClick} />
            </>
        );
    }
}

export default Settings;
