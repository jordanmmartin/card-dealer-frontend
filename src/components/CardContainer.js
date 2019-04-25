import React, { Component } from 'react'

class CardContainer extends Component {

handleCardDeal = () =>{
  console.log('DEALING CARDS...');
}

render(){
  return(
    <div className='card-container'>
    Card Container
    <button>Deal Cards!</button>
    </div>
  )
}
}

export default CardContainer
