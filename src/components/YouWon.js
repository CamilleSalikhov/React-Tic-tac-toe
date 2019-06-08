import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class YouWon extends Component {


    render() {
        return (
            <div style={winStyle}>
            <h2>PLAYER_{this.props.winner} ВЫИГРАЛ! </h2>
            <Link to='/' style={{alignSelf:'center'}}> <div onClick={this.props.resetState}>Продолжить</div></Link>
            </div>
        )
    }
}

const winStyle = {
    display:'flex',
    flexDirection: 'column'

}