import React, { Component } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{ id: 17727, title: "do the task one", isChecked: false }],
      value: ""
    };
  }
  handleSubmit = event => {
    let newItem = {
      id: Date.now(),
      title: this.state.value,
      isChecked: false
    };
    event.preventDefault();
    if (this.state.value.length < 1) return;
    this.setState({
      todos: [...this.state.todos, newItem],
      value: ""
    });
  };
  handleChange2 = item => {
    this.setState({ value: item.target.value });
  };
  handleChange = item => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === item) {
          todo.isChecked = !todo.isChecked;
          return todo;
        }
        return todo;
      })
    });
  };
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} handleChange={this.handleChange} />
        <Form
          handleChange2={this.handleChange2}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
      </div>
    );
  }
}