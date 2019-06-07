import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class YouWon extends Component {
    handleClick = (e) => {

    }


    render() {
        return (
            <div>
            <h2>PLAYER_{this.props.currentPlayer} WON! </h2>
            <div onClick={this.props.resetState}><Link to='/'>  Continue</Link></div>
            </div>
        )
    }
}
