import React, { Component } from "react";
import Message from "../Message";
import "./Chat.css";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageInput: '',
    }
  }

  changeInputMessage = (e) => {
    this.setState({messageInput: e.target.value});
  };

  sendMessageOnEnter = (e) => {
    if (e.keyCode === 13) {
      this.setState(({messages, messageInput}) => ({
        messages: [...messages, { text: messageInput }],
        messageInput: '',
      }))
    }
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((item, index) => (
              <Message key={`${item.text}+${index}`} text={item.text} />
            ))}
          </div>
        </div>        
        <input 
          type="text" 
          className="input.input-message" 
          value={this.state.messageInput} 
          onChange={this.changeInputMessage}
          onKeyUp={this.sendMessageOnEnter}
        />
      </div>
    )
  }
}