import TodoList from "./TodoList";
import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      tasks: [],
      todo: ""
    }
  
  }
  handleAddTodo = () => {
    this.setState({tasks: [...this.state.tasks, this.state.todo]}, () => {console.log(this.state)});
  }
  handleTextChange = (event) =>{
    this.setState({todo: event.target.value});
  }

  render(){
    return (
    <>
    <TodoList tasks={this.state.tasks}/>
    <input type="text" onChange={this.handleTextChange}/>
    <button onClick={this.handleAddTodo}>Add Todo</button>
    <button>Remove Completed Todo's</button>
    </>
  );
  }
}

export default App;
