import TodoList from "./TodoList";
import React, { Component, createRef } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      title: "",
    };
    this.refTextBox = createRef(null);
  }
  handleAddTodo = () => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        { title: this.state.title, completed: false },
      ],
    });
    this.refTextBox.current.value = "";
  };
  handleTextChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleRemoveCompleted = () => {
    this.setState(
      {
        tasks: this.state.tasks.filter((task) => !task.completed),
      },
      () => {
        console.log(this.state.tasks);
      }
    );
  };

  render() {
    return (
      <>
        <TodoList tasks={this.state.tasks} />
        <input
          type="text"
          onChange={this.handleTextChange}
          ref={this.refTextBox}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
        <button onClick={this.handleRemoveCompleted}>
          Remove Completed Todo's
        </button>
      </>
    );
  }
}

export default App;
