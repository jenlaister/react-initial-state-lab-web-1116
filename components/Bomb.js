import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
  super(props)
  this.state = { secondsLeft: this.props.initialCount }
}
  render() {
    if(this.state.secondsLeft === 0) {
    return (
      <div className='Bomb'>Boom!</div>
    )
  } else {
  return (
    <div className='Bomb'>{this.state.secondsLeft} seconds left before I go boom!</div>
    )
  }
}
}


module.exports = Bomb
