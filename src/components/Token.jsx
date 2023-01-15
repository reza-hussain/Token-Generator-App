import { Typography } from "@mui/joy"
import { useEffect, useState } from 'react'


const Token = ({color, rows, name, width}) => {
  useEffect(() => {
    console.log(color)
  },[color])

  const buttonStyles = {
    width: (width / rows) - 30,
    height:(width / rows) - 30,
    maxWidth: 250,
    maxHeight: 250,
    padding: '',
    background: color,
    color: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
    
  return (
    <div style={buttonStyles}>
        <Typography fontSize={(width / rows) / 5} color="#FFFFFF">
            {name}
        </Typography>
    </div>
  )
}

export default Token