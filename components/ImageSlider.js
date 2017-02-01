import React from 'react'

class currentSlideIndex extends React.Component {
  constructor() {
  super()
  this.state = { currentSlideIndex: 0 }
}
  render (){
  return (
    <div className='currentSlideIndex'>I am on slide {this.state.currentSlideIndex}</div>
    )
  }
}

module.exports = currentSlideIndex;
