import React, { Component } from 'react'

class Card extends Component {

render(){
  console.log(this.props)
  return(
    <div className='card' id={this.props.cardObj.id}>
      <p className="card-rank-top-left black">A</p>
      <p className="card-suit-center black">&clubs;</p>
      <p className="card-rank-bottom-right black">A</p>
    </div>
  )
}
}

export default Card
