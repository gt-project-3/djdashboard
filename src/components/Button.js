import React from 'react'

export default function Button(props) {
  return (
    <div>
      <button className="btn" type="submit" onClick={props.handleClick}>Click Me</button>
    </div>
  )
}
