import React, { Component } from 'react'
import Card from './Card'

class Table extends Component {

  state = {
    deck: {},
    showCards: false,
    hand: []
  }

  //When the 'Deal Cards!' button is clicked, a fetch request is sent to get 5 random cards from a specific decks
  handleCardDeal = () =>{
    fetch(`http://localhost:3000/decks/${this.state.deck.id}/deal`)
      .then(r => r.json())
      .then(r => this.setState({
        hand: r.decks,
        showCards: true
        }))
  }

  // Returns a Card component for each of the card objects in hand array of state
  displayHand = () => {
    let hand = this.state.hand.map(card => <Card cardObj={card} key={card.id}/>)
    return hand
  }

  //Once the Table component mounts, a fetch request is sent to create a new deck
  componentDidMount(){
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({})
    }
    fetch('http://localhost:3000/decks', options)
      .then(r => r.json())
      .then(r => this.setState({
        deck: r.deck
        }))
  }

  render(){
    return(
        <div className='main'>
          <div className='table'>
            <div className='board'>
              {this.state.showCards && this.displayHand()}
            </div>
          </div>
          {!this.state.showCards && <button onClick={this.handleCardDeal} className='deal-button'>Deal Cards!</button>}
        </div>
    )
  }
}

export default Table
