import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './YouWon.css'

export default class YouWon extends Component {


    render() {
        return (
            <div className='win-container'>
            <h2>PLAYER_{this.props.winner} ВЫИГРАЛ! </h2>
            <Link to='/' className='link-home' onClick={this.props.resetState}>Продолжить</Link>
            </div>
        )
    }
}
