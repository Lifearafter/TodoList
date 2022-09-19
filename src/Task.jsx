import React, { Component } from "react";
import "./Task.css";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  render() {
    return (
      <div id="Task">
        <span id="Title">{this.props.task.title}</span>

        <button
          id="Delete"
          onClick={() => {
            this.props.task.completed = true;
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Task;
