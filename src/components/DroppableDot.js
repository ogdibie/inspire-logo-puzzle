import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
function DroppableDot(props) {
  const [show, setShow] = useState(false)
  const dropped = () => {
    setShow(true)
  }
  const [{ isOver }, drop] = useDrop({
    accept: props.type,
    drop: () => dropped(),
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
        opacity: show ? 1 : 0
      }}
    />
  )
}

export default DroppableDot
