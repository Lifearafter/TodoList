import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }
  render() {
    return (
      <div>
        <input
          type="checkbox"
          onClick={() => {
            this.props.task.completed = true;
          }}
        />
        <span>{this.props.task.title}</span>
      </div>
    );
  }
}

export default Task;
