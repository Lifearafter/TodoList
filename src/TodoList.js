import React, { Component } from 'react'
import Task from './Task'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: ['Why not', 'Hello Neighbor']
    }
  }
  
  render() {
    return (
      <div>
      {this.props.tasks.map((task, index) => {
        return <Task task={task} key={index}/>
      })}
      </div>
    )
  }

}

export default TodoList