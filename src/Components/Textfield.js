import React from 'react'
import '../Styling/forms.css'

export const Textfield = ({placeholder}) => {
  return (
    <div>
        <input className ='input-custom' style={{width:'260px', height:'30px', fontSize:'12px'}} placeholder={placeholder}>
        </input>
    </div>
  )
}
