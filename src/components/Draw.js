import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Draw extends Component {
    render() {
        return (
            <div style={drawStyle}>
            <h2>НИЧЬЯ ! </h2>
            <Link to='/' style={{alignSelf:'center'}}> <div onClick={this.props.resetState}>Продолжить</div></Link>
            </div>
        )
    }
}

const drawStyle = {
    display:'flex',
    flexDirection: 'column'
}
