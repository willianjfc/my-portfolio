import Header from '../partials/Header'
import { makeStyles } from "@mui/styles"
import { Container } from '@mui/system'

const useStyles = makeStyles (() =>({
    root:{
        background: 'radial-gradient(#14142b, #000000)',
        
    },
    container:{
        padding: '25px',
        
        
        
    }
}))
const Default = ({ children }) =>{
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Header />
            <Container className={classes.container} >
                {children}
            </Container>
        </div>
    )
}

export default Default