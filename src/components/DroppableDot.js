import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
function DroppableDot(props) {
  const [{ isOver }, drop] = useDrop({
    accept: props.type,
    drop: () => props.handleShowImage(),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  return (
    <img
      ref={drop}
      src={props.imageSrc}
      alt=''
      style={{
        opacity: props.show ? 1 : 0
      }}
    />
  )
}

export default DroppableDot
