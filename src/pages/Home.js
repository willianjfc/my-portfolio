import React from "react"
import Apresentation from "../partials/Apresentation"
import SectionProjects from "../partials/SectionProjects"
import SectionSkills from "../partials/SectionSkills"
import { makeStyles } from "@mui/styles"
import { Grid } from "@mui/material"
const useStyles = makeStyles((theme) =>({
  root:{
    flexGrow: 1,
  },
  card:{
    margin: theme.spacing(2),
  }
}))

const Home = () =>{  
  const classes = useStyles()
  return(
    <>
    <Grid container className={classes.home} xs={4} md={8} sm={12}>
      <Apresentation />
      <SectionProjects />
      <SectionSkills />
    </Grid>
    
    </>

    
  )
}

export default Home