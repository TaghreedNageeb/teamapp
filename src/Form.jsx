import React, { Component } from "react";
export default class Form extends Component {
  render() {
    return (
      <fieldset>
        <legend>ADD TODO</legend>
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            value={this.props.value}
            onChange={this.props.handleChange2}
          />
          <button><i className="fa fa-plus"></i></button>
        </form>
      </fieldset>
    );
  }
}