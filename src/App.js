import React, { Component } from 'react'
import redDot from './assets/ia-logo-dot-red.png'
import greenDot from './assets/ia-logo-dot-green.png'
import blueDot from './assets/ia-logo-dot-blue.png'
import blackDot from './assets/ia-logo-dot-black.png'
import DraggableDot from './components/DraggableDot'
import Tree from './components/Tree/Tree'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import './App.css'

class App extends Component {
  state = {
    dots: [
      { id: 'redImage', type: 'red', image: redDot },
      { id: 'blueImage', type: 'blue', image: blueDot },
      { id: 'greenImage', type: 'green', image: greenDot },
      { id: 'leftBlackImage', type: 'black', image: blackDot },
      { id: 'rightBlackImage', type: 'black', image: blackDot }
    ]
  }
  render() {
    const dotsShown = this.state.dots.map((dot) => {
      return (
        <span key={dot.id} style={{ marginRight: '42px' }}>
          <DraggableDot imageSrc={dot.image} type={dot.type} />
        </span>
      )
    })
    return (
      <DndProvider backend={HTML5Backend}>
        <div
          style={{
            marginBottom: '16px'
          }}
        >
          {dotsShown}
        </div>
        <Tree />
      </DndProvider>
    )
  }
}

export default App
