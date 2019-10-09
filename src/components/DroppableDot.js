import React, { useState } from 'react'

function DroppableDot(props) {
  const [show, setShow] = useState(false)

  return (
    <img
      src={props.imageSrc}
      alt=''
      style={{
        opacity: show ? 1 : 0
      }}
    />
  )
}

export default DroppableDot
