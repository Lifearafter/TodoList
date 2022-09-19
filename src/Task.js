import React, { Component } from 'react'

class Task extends Component {
  render() {
    return (
      <div>
      <input type='checkbox'/>
      {this.props.task}
      </div>
    )
  }
}

export default Task