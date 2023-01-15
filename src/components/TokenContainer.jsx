import React, { useEffect, useRef } from 'react'
import { Grid } from "@mui/joy"
import Token from './Token'



const TokenContainer = ({tokens}) => {
  const parentRef = useRef(0)
  let tokensToShow = []
  
  for(let i = 1; i <= tokens.number; i++){
    tokensToShow.push(
      <Grid>
        <Token color={tokens.color} name={`${tokens.prefix}${i}`} rows={tokens.perRow} width={parentRef.current.clientWidth} />
      </Grid>
    )
  }
  
  return (
    <div style={{width: '100%', margin: "10px 0", padding: '5px'}} ref={parentRef}>

        <Grid
        classname="grid"
        container
        spacing={{xs:4}}
        columns={{xs: tokens.perRow}}
        >

        {tokensToShow}
        
        </Grid>

    </div>
  )
}

export default TokenContainer