import React, { Component } from 'react'
import logo from '../../assets/ia-logo-back.png'
import redDot from '../../assets/ia-logo-dot-red.png'
import greenDot from '../../assets/ia-logo-dot-green.png'
import blueDot from '../../assets/ia-logo-dot-blue.png'
import blackDot from '../../assets/ia-logo-dot-black.png'
import DroppableDot from '../DroppableDot'
import styles from './Tree.module.css'

export default class Tree extends Component {
  images = [
    { id: 'redDot', type: 'red', src: redDot },
    { id: 'greenDot', type: 'green', src: greenDot },
    { id: 'blueDot', type: 'blue', src: blueDot },
    { id: 'leftBlackDot', type: 'black', src: blackDot },
    { id: 'rightBlackDot', type: 'black', src: blackDot }
  ]
  render() {
    const dots = this.images.map((image) => {
      return (
        <div className={image.id} key={image.id}>
          <DroppableDot imageSrc={image.src} type={image.type} />
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
