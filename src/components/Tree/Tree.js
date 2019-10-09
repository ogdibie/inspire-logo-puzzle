import React, { Component } from 'react'
import logo from '../../assets/ia-logo-back.png'
import redDot from '../../assets/ia-logo-dot-red.png'
import greenDot from '../../assets/ia-logo-dot-green.png'
import blueDot from '../../assets/ia-logo-dot-blue.png'
import blackDot from '../../assets/ia-logo-dot-black.png'
import DroppableDot from '../DroppableDot'
import styles from './Tree.module.css'

export default class Tree extends Component {
  images = {
    redDot: redDot,
    greenDot: greenDot,
    blueDot: blueDot,
    leftBlackDot: blackDot,
    rightBlackDot: blackDot
  }
  render() {
    const dots = Object.keys(this.images).map((image) => {
      return (
        <div className={image} key={image}>
          <DroppableDot imageSrc={this.images[image]} />
        </div>
      )
    })
    return (
      <div
        className={styles.logoTree}
        style={{
          backgroundImage: `url(${logo})`
        }}
      >
        {dots}
      </div>
    )
  }
}
