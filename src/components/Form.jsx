import React, { useEffect, useState } from 'react'
import { Input, Button, Typography } from "@mui/joy"

const Form = ({redTokens, setRedTokens, blueTokens, setBlueTokens}) => {

  const [blueNum, setBlueNum] = useState(0)
  const [bluePrefix, setBluePrefix] = useState('')
  const [blueRow, setBlueRow] = useState(0)

  const [redNum, setRedNum] = useState(0)
  const [redPrefix, setRedPrefix] = useState('')
  const [redRow, setRedRow] = useState(0)

  const onSubmit = () => {
    setBlueTokens({
        number: blueNum,
        prefix: bluePrefix,
        perRow: blueRow,
        color: '#096BDE'
    })

    setRedTokens({
        number: redNum,
        prefix: redPrefix,
        perRow: redRow,
        color: '#DC0000'
    })
  }

  return (
    <form className="form-column">
        <Input sx={{width: '80%'}} color="primary" placeholder="Number of Blue Tokens" variant="outlined" id="blueNum" type="number" onChange={(e) => setBlueNum(e.target.value)} />

        <Input sx={{width: '80%'}} color="primary" placeholder="Prefix for Blue Tokens" variant="outlined" id="bluePrefix" type="text" onChange={(e) => setBluePrefix(e.target.value)}/>

        <Input sx={{width: '80%'}} color="primary" placeholder="Number of Blue Rows" variant="outlined" id="blueRow" type="number" onChange={(e) => setBlueRow(e.target.value)}/>

        
        <Input sx={{width: '80%'}} color="primary" placeholder="Number of Red Tokens" variant="outlined" id="redNum" type="number" onChange={(e) => setRedNum(e.target.value)}/>
        

        <Input sx={{width: '80%'}} color="primary" placeholder="Prefix for Blue Tokens" variant="outlined" id="redPrefix" type="text" onChange={(e) => setRedPrefix(e.target.value)}/>

        <Input sx={{width: '80%'}} color="primary" placeholder="Number of Red Rows" variant="outlined" id="redRow"type="number" onChange={(e) => setRedRow(e.target.value)} />
        
        <Button onClick={() => onSubmit()} sx={{width: '80%'}}>Generate</Button>
    </form>
  )
}

export default Form