import React from 'react'
import Component from './Component'

export default function Border({children}) {
  return (
    <div style={{border:"2px solid black"}}>{children}</div>
  )
}
