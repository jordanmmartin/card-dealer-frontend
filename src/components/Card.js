import React, { Component } from 'react'

class Card extends Component {

showColor = () => {
  if(this.props.cardObj.suit === 'clubs' || this.props.cardObj.suit === 'spades'){
    return 'black'
  } else {
    return 'red'
  }
}

showSuit = () => {
  if(this.props.cardObj.suit === 'clubs'){
    return <p className={`card-suit-center ${this.showColor()}`}>&clubs;</p>
  } else if(this.props.cardObj.suit === 'spades'){
    return <p className={`card-suit-center ${this.showColor()}`}>&spades;</p>
  } else if(this.props.cardObj.suit === 'hearts'){
    return <p className={`card-suit-center ${this.showColor()}`}>&hearts;</p>
  } else if(this.props.cardObj.suit === 'diamonds'){
    return <p className={`card-suit-center ${this.showColor()}`}>&diams;</p>
  }
}

render(){
  console.log(this.props)
  return(
    <div className='card' id={this.props.cardObj.id}>
      <p className={`card-rank-top-left ${this.showColor()}`}>{this.props.cardObj.rank}</p>
      {this.showSuit()}
      <p className={`card-rank-bottom-right ${this.showColor()}`}>{this.props.cardObj.rank}</p>
    </div>
  )
}
}

export default Card
