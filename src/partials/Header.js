import { useState } from 'react'
import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import useStyles from './styles/Header.style'
import { useHistory } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Link} from "react-scroll"


const Header = () => {
  const classes = useStyles()
  const history = useHistory()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = route =>{
    history.push(route)
  }
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' sx={{ width: '100vw' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
          </IconButton>
          
            <Button variant="h6" className={classes.title}>
              <Link onClick={() => handleMenuClick('/')} to='home' spy={true} offset={-100} duration={500} style={{
                fontFamily:'Raleway'
              }}>Home</Link>        
            </Button>
          <Button variant="h6" className={classes.title}>
            <Link to='projects' spy={true} offset={-100} duration={500} style={{
              fontFamily:'Raleway'
            }}>Projetos</Link>        
          </Button>
          <Button variant="h6" className={classes.title}>
            <Link to='skills' spy={true} offset={-100} duration={500} style={{
              fontFamily:'Raleway'
            }}>Skills</Link>        
          </Button>
          <Button variant="h6" className={classes.title}>
            <Link to='tecnology' spy={true} offset={-100} duration={500} style={{
              fontFamily:'Raleway'
            }}>Contato</Link>        
          </Button>
          <Button color='inherit' href='https://github.com/willianjfc' target='_blank'>
            <GitHubIcon />
          </Button>
          <Button color="inherit" href='https://www.linkedin.com/in/willianjefferson/' target='_blank'>
            <LinkedInIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    {/* <Drawer open={menuOpen} onClose={() => handleToogleMenu()} >
      <List sx={{ 
        height:'100vh',
        background: 'linear-gradient(#14142b, #000000)',
        color: '#ffff'
      }}>
        <ListItem button onClick={() => handleMenuClick('/')}>
          <ListItemIcon><HomeIcon sx={{ color:'#ffffff' }} /></ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('/customers')}>
          <ListItemIcon><PersonIcon sx={{ color:'#ffffff' }}/></ListItemIcon>
          <ListItemText>Lista de Cleintes</ListItemText>
        </ListItem>
        <ListItem button onClick={() => handleMenuClick('/')}>
          <ListItemIcon><PersonAddIcon sx={{ color:'#ffffff' }}/></ListItemIcon>
          <ListItemText>Cadastro de Clientes</ListItemText>
        </ListItem>
      </List>
    </Drawer> */}
    </>
  );
}

export default Header