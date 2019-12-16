import React, { Component } from "react";
import Todo from "./todo-component";
export default class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            isChecked={todo.isChecked}
            handleChange={this.props.handleChange}
          />
        ))}
      </div>
    );
  }
}