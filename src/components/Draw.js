import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Draw.css'

export default class Draw extends Component {
    render() {
        return (
            <div className='draw-container'>
            <h2>НИЧЬЯ ! </h2>
            <Link to='/' className='link-home' onClick={this.props.resetState}>Продолжить</Link>
            </div>
        )
    }
}
