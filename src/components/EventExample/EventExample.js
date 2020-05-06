import React from 'react'
import './EventExample.scss'

class EventExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: true}

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  render() {
    const {isToggleOn} = this.state
    return (
      <button
        className={`EventExample__toggle ${isToggleOn ? 'EventExample__toggle--on' : 'EventExample__toggle--off'}`}
        onClick={this.handleClick}
      >
        {this.state.isToggleOn ? 'TOGGLE IS ON' : 'TOGGLE IS OFF'}
      </button>
    )
  }
}

export default EventExample
