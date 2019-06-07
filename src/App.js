import React from 'react';

import './App.css';
import TicTacToe from './components/TicTacToe';


export default class App extends React.Component {
  state = {
    playerOne: 'X',
    playerTwo: 'O',
    cells: ['','','','','','','','',''],
    currentPlayer: 'X'

  }
  
  handleOnClick = (e) => {
    if( this.state.cells[e.target.id] ==='') { 
    //for dev
    console.log(e.target.id)
    this.setState({
      currentPlayer: this.state.currentPlayer === this.state.playerOne ? this.state.playerTwo : this.state.playerOne,
      cells: this.state.cells.map((cell, currentIndex) => {
        if (`${currentIndex}` === e.target.id) {
          return this.state.currentPlayer
        } else {
          return cell
        }
      }
      )
      
    });
  }
  }


  render() {
    return (
      <div className="App">
      <header className="App-header">
       Крестики-нолики
      </header>
      <TicTacToe cells={this.state.cells} onClick={this.handleOnClick}/>
    </div>
    )
  }
}
