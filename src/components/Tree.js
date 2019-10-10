import React, { Component } from 'react'
import logo from '../assets/ia-logo-back.png'

export default class Tree extends Component {
  render() {
    return (
      <div
        className='logoTree'
        style={{
          backgroundImage: `url(${logo})`
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
