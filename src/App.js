import React, { Component } from 'react'
import redDot from './assets/ia-logo-dot-red.png'
import greenDot from './assets/ia-logo-dot-green.png'
import blueDot from './assets/ia-logo-dot-blue.png'
import blackDot from './assets/ia-logo-dot-black.png'
import DraggableDot from './components/DraggableDot'
import Tree from './components/Tree/Tree'

import './App.css'

class App extends Component {
  state = {
    dots: [
      { id: 'redImage', image: redDot },
      { id: 'blueImage', image: blueDot },
      { id: 'greenImage', image: greenDot },
      { id: 'leftBlackImage', image: blackDot },
      { id: 'rightBlackImage', image: blackDot }
    ]
  }
  render() {
    const dotsShown = this.state.dots.map((dot) => {
      return (
        <span key={dot.id} style={{ marginRight: '42px' }}>
          <DraggableDot imageSrc={dot.image} />
        </span>
      )
    })
    return (
      <div>
        <div
          style={{
            marginBottom: '16px'
          }}
        >
          {dotsShown}
        </div>
        <Tree />
      </div>
    )
  }
}

export default App
