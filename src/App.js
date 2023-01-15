import { useState } from 'react'
import { CssVarsProvider } from "@mui/joy/styles"

import { Sheet, Typography } from "@mui/joy"

import Form from './components/Form'
import './App.css'
import TokenContainer from "./components/TokenContainer"

const App = () => {
  const [blueTokens, setBlueTokens] = useState({
    number: '',
    prefix: '',
    perRow: '',
    color: '#096BDE'
  })

  const [redTokens, setRedTokens] = useState({
    number: '',
    prefix: '',
    perRow: '',
    color: '#DC0000'
  })

  return (
    <CssVarsProvider>
        <Typography color="primary" level='h1' sx={{width: '80vw', m: 'auto', p: 3}} >Token Generator</Typography>
        <Sheet 
        sx={
            { p: 4,
             width: '1000px',
             height: '400px',
             display: 'flex',
             gap: 3,
             mx: 'auto',
             justifyContent:'center',
             alignItems: 'center',
             background: '#F4FAFF',
             borderRadius: 10
             }}>
            
            <Form redTokens={redTokens} setRedTokens={setRedTokens} blueTokens={blueTokens} setBlueTokens={setBlueTokens} />
            <div className="token-column">
                <TokenContainer tokens={blueTokens} />
                <TokenContainer tokens={redTokens} />
            </div>
        </Sheet>

    </CssVarsProvider>
  )
}

export default App