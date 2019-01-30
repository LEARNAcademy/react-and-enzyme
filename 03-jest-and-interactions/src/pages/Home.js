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
    const message2 = 'We knew you would'
    return(
      <div>

        <div id="flash_message">{flashMessage}</div>
        <button
          id="dont_click_me"
          onClick={ () => this.setState({ flashMessage: message2}) }
        >Don't Click Me!</button>
      </div>
    )
  }
}

export default Home
