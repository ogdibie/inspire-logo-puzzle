import React from 'react'
import { useDrag } from 'react-dnd'

function DraggableDot(props) {
  const [{ isDragging }, drag] = useDrag({
    item: { type: props.type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })
  const opacity = isDragging ? 0 : 1
  return (
    <img
      ref={drag}
      src={props.imageSrc}
      alt=''
      style={{
        opacity
      }}
    />
  )
}

export default DraggableDot
