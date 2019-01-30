import React, { Component } from 'react'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      flashMessage: '',
      inputValue: '',
    }
  }

  render() {
    const{ flashMessage, inputValue } = this.state
    const message = 'Congratulations! You are the 1 millionth clicker of this button!'
    return(
      <div>
        <div id="flash_message">{flashMessage}</div>
        <button
          id="click_me"
          onClick={ () => this.setState({ flashMessage: message}) }
        >Click Me!</button>
        <input
          id="type_here"
          name="type_here"
          value={this.state.inputValue}
          onChange={(e)=> this.setState({ inputValue: e.target.value})}
        />
        <div id="input_value">{inputValue}</div>
      </div>
    )
  }
}

export default Home
