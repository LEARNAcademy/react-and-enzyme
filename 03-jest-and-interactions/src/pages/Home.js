import React, { Component } from 'react'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      flashMessage: '',
    }
  }

  render() {
    const{ flashMessage } = this.state
    const message = 'Congratulations! You are the 1 millionth clicker of this button!'
    return(
      <div>
        <div id="flash_message">{flashMessage}</div>
        <button
          id="click_me"
          onClick={ () => this.setState({ flashMessage: message}) }
        >Click Me!</button>
      </div>
    )
  }
}

export default Home
