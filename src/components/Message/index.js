import React, { Component } from "react";
import "./Message.css";

export default class Message extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    const { text } = this.props;
    return (
      <span className="message">{text}</span>
    );
  };
}