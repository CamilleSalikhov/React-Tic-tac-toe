import React, { Component } from 'react';
import './TicTacToe.css'


export default class TicTacToe extends Component {



    render() {
        let mappedCells = this.props.cells.map((cell, index) => (
        <div onClick ={this.props.onClick} id={index} className ='cell' key={index}>{cell}</div>
        ));
        return (
            <div className='container'>
                {mappedCells}                
            </div>
        )
    }
}

