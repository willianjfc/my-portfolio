import * as React from 'react'
import Button from '@mui/material/Button'
const Dashboard = ({ 
    title,
    image,
    onclick
    }) =>{

  return (
    <div>
      <Button
        id="basic-button"
        onClick={onclick}
        sx={{ color:'#ffffff',backgroundRepeat: 'no-repeat', 
              backgroundSize:'cover',
              width:'140%', height:'100px', 
              backgroundImage: `url(${image})`,
              marginBottom: '50px', marginTop: '50px',          
    }}
      >
        <h3>{title}</h3>
      </Button>
    </div>
  )
}

export default Dashboard