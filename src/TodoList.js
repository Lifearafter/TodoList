import React, { Component } from 'react'
import Task from './Task'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
  }
  addToState = () => {
    this.setState({
      tasks: [...this.state.tasks, this.props.tasks]
    })
  }
  render() {
    return (
      <div>
      {this.state.tasks.map((task, index) => {
        return <Task key={index} task={task}/>
      })}
      </div>
    )
  }

}

export default TodoList