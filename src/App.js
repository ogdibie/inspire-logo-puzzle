import React, { Component } from 'react'
import redDot from './assets/ia-logo-dot-red.png'
import greenDot from './assets/ia-logo-dot-green.png'
import blueDot from './assets/ia-logo-dot-blue.png'
import blackDot from './assets/ia-logo-dot-black.png'
import DraggableDot from './components/DraggableDot'
import DroppableDot from './components/DroppableDot'
import Tree from './components/Tree'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import './App.css'

class App extends Component {
  state = {
    dots: [
      { id: 'redDot', type: 'red', showImage: false, image: redDot },
      { id: 'blueDot', type: 'blue', showImage: false, image: blueDot },
      { id: 'greenDot', type: 'green', showImage: false, image: greenDot },
      { id: 'leftBlackDot', type: 'black', showImage: false, image: blackDot },
      { id: 'rightBlackDot', type: 'black', showImage: false, image: blackDot }
    ],
    noCorrect: 0
  }

  showImage = (id) => {
    const dots = [...this.state.dots]
    const dotIndex = dots.findIndex((dot) => dot.id === id)
    dots[dotIndex].showImage = true
    this.setState({
      dots,
      noCorrect: this.state.noCorrect + 1
    })
  }

  resetApp = () => {
    this.setState({
      dots: this.dots
    })
  }

  render() {
    const dotsShown = this.state.dots.map((dot) => {
      if (dot.showImage) return null
      return (
        <span key={dot.id} style={{ marginRight: '42px' }}>
          <DraggableDot imageSrc={dot.image} type={dot.type} />
        </span>
      )
    })

    const treeDots = this.state.dots.map((dot, index) => {
      return (
        <div className={dot.id} key={dot.id}>
          <DroppableDot
            imageSrc={dot.image}
            type={dot.type}
            handleShowImage={this.showImage.bind(this, dot.id)}
            show={this.state.dots[index].showImage}
          />
        </div>
      )
    })
    const doneText = this.state.noCorrect === 5 ? <h1>Congratulation, You have completed the quiz</h1> : null

    const itemToShow = this.state.dots.length > 0 ? dotsShown : <h1>You have sucessfully solved the problem</h1>
    return (
      <DndProvider backend={HTML5Backend}>
        <div
          style={{
            marginBottom: '16px'
          }}
        >
          {itemToShow}
          <button onClick={this.resetApp}>Reset</button>
        </div>
        <Tree>{treeDots}</Tree>
        {doneText}
      </DndProvider>
    )
  }
}

export default App
