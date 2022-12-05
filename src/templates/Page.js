import { makeStyles } from "@mui/styles"
import { Grid, Typography } from "@mui/material"

const useStyles = makeStyles (() =>({
    container:{
        padding:'25px',
        width: '100%',
        height: '100%',   
    }
}))
const Page = ({ title,Component }) =>{
    const classes = useStyles()
    return(
        <Grid container xs={4} md={12} sm={12} className={classes.container}>
            <Typography sx={{color:'#fff', margin: '50px 0px 50px 0px'}} variant="h3">
                {title}
            </Typography>
            <Component /> 
        </Grid>
        
    )
}

export default Page