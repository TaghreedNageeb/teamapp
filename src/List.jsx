import React, { Component } from "react";
import ListItem from "./ListItem";

export class List extends Component {
  render() {
    return (
      <ul>
        {this.props.listItems.map((item,index) => {
          return <ListItem itemName={item} deleteItem={this.props.deleteItem} key={index} id={index} style={{ color: "red" }} />;
        })}
      </ul>
    );
  }
}

export default List;
