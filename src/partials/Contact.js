import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(({
    contact:{
        background:'radial-gradient(#14142b, #000000)',
        width: '100%',
        color:'#fff',
    }
}))
const Contact = () => {
    const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="extend" class={classes.contact}>
        <Toolbar>
          <Typography sx={{paddingLeft:'50%'}}>
            Copyright
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Contact