import React, { Component } from "react";
export default class Todo extends Component {
  render() {
    return (
      <li className="lii">
        <h3 className={this.props.isChecked + "-class"}>{this.props.title}</h3>
        <input
          type="checkbox"
          onChange={() => this.props.handleChange(this.props.id)}
          value={this.props.isChecked}
        />
      </li>
    );
  }
}