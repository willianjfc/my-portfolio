import { Grid, makeStyles } from "@mui/material"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Fab from '@mui/material/Fab'
import SignLanguageIcon from '@mui/icons-material/SignLanguage'
import { Flip, Fade } from "react-reveal";
import techs from '../imgs/techs.png'

const Apresentation = () =>{
    return(
        <>
        <Fade top>

        <Grid container id='home' xs={4} md={8} sm={12}  >

            <Grid item sx={{ color: '#ffffff', fontFamily:'Raleway', fontSize:'30px',}} >
                <Fab variant="extended" size="small" 
                aria-label="add" color="secondary"
                sx={{ border: 3, borderColor: '#ffff', marginBottom: '50px',marginTop:'200px' }}
            >
                <SignLanguageIcon sx={{ 
                    marginRight:'10px',
                }} />
                Seja bem vindo 
                </Fab>
               <h1>
                <Flip left cascade>
                Willian                    
                </Flip>
               </h1> 
               <h1>
                <Flip left cascade>
                Jefferson
                </Flip>
               </h1>
                
               <h3 style={{ color:'grey' }}>Front-end developer</h3>
               <img width='150%' height='auto' src={techs} alt='techs' style={{marginTop:'280px', marginLeft: '0px', }}/>
               
            </Grid>
            <Grid item sx={{ paddingTop: '80px' }}>
                <Fab href="https://contate.me/willianjefferson" target='_blank' variant="extended" size="small" 
                aria-label="add" color="secondary"
                sx={{ border: 3, borderColor: '#6a1b9a', marginBottom: '20px', padding: '0 15px'}}
                >
                <WhatsAppIcon  sx={{ 
                    marginRight:'10px',     
                }} />
                Vamos conversar
            </Fab>
            </Grid>
        </Grid>
        </Fade>
        </>
    )
}

export default Apresentation
