import TodoList from "./TodoList";
import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      todo: "Hello"
    }
  }

  render(){
    return (
    <>
    <TodoList tasks={this.state.todo}/>
    <input type="text"/>
    <button >Add Todo</button>
    <button>Remove Completed Todo's</button>
    </>
  );
  }
}

export default App;
