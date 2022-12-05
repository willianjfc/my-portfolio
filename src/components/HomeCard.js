import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import homeStyles from '../partials/styles/Home.style'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  color:'#ffffff',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const HomeCard = ({
  title,
  image,
  text,
  descrition,
  alt
}) =>{
  const [expanded, setExpanded] = React.useState(false)
  const [constColor, setColor] = React.useState('#ffff')
  
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  
  
  const handleToggleColor = () =>{
    setColor('red')  
  }
  
  const homeClasses = homeStyles()

  return (
    <>
    <Card sx={{ 
      maxWidth: 220,
      color: '#ffffff',
      background: '#0A0A15',
      borderRadius: '4%',
      border: 2,
      borderColor: '#6a1b9a',
      padding: '10px 30px 10px 30px',

     }}>
      <CardHeader
        title={title}
        />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={alt}
        />
      <CardContent>
        <Typography>
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: `${constColor}` }} onClick={() => handleToggleColor()}/>
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography >Method:</Typography>
          <Typography>
            {descrition}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </>
  )
}

export default HomeCard