import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, hexValue, index }) => {
  const [alert, setAlert] = useState(false)
  const bcgColor = rgb.join(',')
  const hex = rgbToHex(...rgb) //Using the function that passes rgb to hex 
  const hexColor = `#${hexValue}`

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 1500)

    return () => {
      clearTimeout(timeout)
    }
  }, [alert])

  return (
    <article 
      className={`color ${index > 10 && 'color-light'}`} 
      style={{backgroundColor: `rgb(${bcgColor})`}}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexColor)
      }}
    >        
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
      {alert && <p className='alert'>Copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
