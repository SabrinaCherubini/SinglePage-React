import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';
import California from './img/california.png';
import Dragon from './img/dragon.png';
import Dynamite from './img/dynamite.png';
import Philadelfia from './img/philadelphia.png';
import Rainbow from './img/rainbow.png';
import Shrimp from './img/shrimp.png';
import Logo from './img/logo.png';

class App extends Component {
  state = {    //ogg.js
    cards: [
      { id: 0, nome: "California", prezzo: 3.99, img: California, quantità: 0 },
      { id: 1, nome: "Dragon", prezzo: 4.50, img: Dragon, quantità: 0 },
      { id: 2, nome: "Dynamite", prezzo: 8.00, img: Dynamite, quantità: 0 },
      { id: 3, nome: "Philadelfia", prezzo: 2.99, img: Philadelfia, quantità: 0 },
      { id: 4, nome: "Rainbow", prezzo: 1.49, img: Rainbow, quantità: 0 },
      { id: 5, nome: "Shrimp", prezzo: 4.20, img: Shrimp, quantità: 0 }
  ]
    
  }
  
   handleDelete = cardId =>{
   const cards=this.state.cards.filter(card=>card.id!==cardId);
   this.setState({cards});
  }

  handleIncrement = card =>{
    const cards=[...this.state.cards];
    const id=cards.indexOf(card);
    cards[id]={...card};
    cards[id].quantità++;
    this.setState({cards})
  }


  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1> Cosa desideri ordinare?</h1>
          <hr></hr>
          <div className='row'>
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                card={card}

              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
