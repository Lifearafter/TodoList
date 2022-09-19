import Task from "./Task";
import React, { Component, createRef } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      title: "",
      countEntries: 1,
    };
    this.refTextBox = createRef(null);
  }
  handleAddTodo = () => {
    if (this.state.countEntries === 0) {
      this.setState(
        {
          tasks: [
            ...this.state.tasks,
            { title: this.state.title, completed: false },
          ],
        },
        () => {
          this.setState({ countEntries: 1 });
        }
      );
      this.refTextBox.current.value = "";
    }
  };
  handleTextChange = (event) => {
    this.setState({ title: event.target.value }, () => {
      this.setState({ countEntries: 0 });
    });
  };
  handleRemoveCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed),
    });
  };
  handleSubmitKey = (event) => {
    if (event.key === "Enter") {
      this.handleAddTodo();
    }
  };

  render() {
    return (
      <>
        <h1>To-Do App</h1>
        <br />
        <div>
          <input
            id="TextBox"
            type="text"
            placeholder="Enter a Task Here"
            onChange={this.handleTextChange}
            onClick={() => {
              this.refTextBox.current.value = "";
            }}
            onKeyPress={this.handleSubmitKey}
            autoComplete="off"
            ref={this.refTextBox}
          />
          <button onClick={this.handleAddTodo} id="AddTodo">
            Add Todo
          </button>

          <div id="TodoList">
            {this.state.tasks.map((task, index) => {
              return (
                <Task
                  delFunc={this.handleRemoveCompleted}
                  task={task}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
