import Dashboard from "../components/Dashboard"
import { Grid, Typography } from "@mui/material"
import ManagementClients from '../imgs/backgroundManagementClients.png'
import Calculator from '../imgs/calculator.png'
import WallpaperBrasil from '../imgs/wallpaperBrasil.png'
import Ecommerce from '../imgs/ecommerce.png'
import { useHistory } from "react-router-dom"

const SectionProjects = () => {
  const history = useHistory()
  
  const handleMenuClick = route =>{
    history.push(route)
  }
  return(
    <Grid container flexDirection='column' id='projects'>
        <Typography color='#ffffff' sx={{ 
            fontFamily:'Raleway', fontSize:'30px',
         }}>
            Projetos
        </Typography>
    <Dashboard 
    title='Gerenciamento de Clientes'
    image={ManagementClients}
    onclick={() => handleMenuClick('/customers')}
    />
    <Dashboard 
    title='Calculadora'
    image={Calculator}
    />
    <Dashboard 
    title='Consulta Cep'
    image={WallpaperBrasil}
    onclick={() => handleMenuClick('/viacep')}
    />
    </Grid>
  )
}
export default SectionProjects