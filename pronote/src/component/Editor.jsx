import React, { Component } from 'react'
import './Editor.css'
class Editor extends Component {
  constructor(){
    super();
    this.state={
      value:""
    }
  }

  handleChange = (event)=>{
    this.setState({value: event.target.value})
  }
    
  render() {
    return (
        <div className="container">
        <div className="input">
            <h3>Input</h3>
            <textarea onChange={this.handleChange}  className="input-text" placeholder="Welcome to react tutorials. This would help you build a notepad" value={this.state.value}/>
        </div>
        <div className="output">
            <h3>Pro Note</h3>
            <div className="output-text">
            {this.state.value}
            </div>
        </div>                
    </div>
    )
  }
}

export default Editor