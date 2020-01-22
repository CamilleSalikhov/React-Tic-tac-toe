import React from 'react';
import { BrowserRouter,Switch, Route, Redirect } from 'react-router-dom'
import './App.css';
import TicTacToe from './components/TicTacToe';
import YouWon from './components/YouWon';
import Draw from './components/Draw'


export default class App extends React.Component {



  state = {
    playerOne: 'X',
    playerTwo: 'O',
    cells: ['','','','','','','','',''],
    currentPlayer: 'X',
    winningCombinations:[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]


  }

  
  handleOnClick = (e) => {
    e.persist();
    if( this.state.cells[e.target.id] ==='') { 
    this.setState(() =>({
      currentPlayer: this.state.currentPlayer === this.state.playerOne ? this.state.playerTwo : this.state.playerOne,
      cells: this.state.cells.map((cell, currentIndex) => {
        if (`${currentIndex}` === e.target.id) {
          return this.state.currentPlayer
        } else {
          return cell
        }
      }
      )
      
    }));
  }
  }


  resetState = (e) => {
    this.setState({
      playerOne: 'X',
      playerTwo: 'O',
      cells: ['','','','','','','','',''],
      currentPlayer: 'X',
      winningCombinations:[[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  
    });
  }

  


  render() {
    let currCells = this.state.cells;
    let exactPath =  (this.state.winningCombinations.find((elem) => {
      if(currCells[elem[0]] !== "" && currCells[elem[1]] !== ""  && currCells[elem[2]] !== ""  && currCells[elem[0]] === currCells[elem[1]] && currCells[elem[1]] === currCells[elem[2]]) {
        console.log('we have a winner');
        return true
      } else {
        return false
      } 
    })) ? <Redirect to='/winner' /> : ((currCells.find(elem => elem === '') === '') ? <TicTacToe cells={this.state.cells} onClick={this.handleOnClick} /> : <Redirect to='/draw' />);
    
    let possibleWinner = this.state.currentPlayer === this.state.playerOne ? this.state.playerTwo : this.state.playerOne;
    
    return (
      <div className="App">
        <header className="App-header">
          Крестики-нолики
        </header>
      <BrowserRouter>
    <Switch>
      <Route exact path='/' render = {props => exactPath} />
      <Route path='/winner' render = {props => <YouWon resetState={this.resetState} winner={possibleWinner} />} />
      <Route path ='/draw' render = {props => <Draw resetState={this.resetState} />} />
      <Route render={() =><div>Страница не найдена!</div>} />
    </Switch>
    </BrowserRouter>
    </div>
    )
  }
}


