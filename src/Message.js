import React from "react";
import "./Message.css";

class Message extends React.Component {
    render() {
        return (
            <div className="Message-Container">
                <div className="Message" id={this.props.gameState}>{this.props.message}</div>
            </div>
        )
    }
}

export default Message;