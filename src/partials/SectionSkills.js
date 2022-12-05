import HomeCard from "../components/HomeCard"
import { Grid } from '@mui/material'
import js from '../imgs/js.png'
import reactJS from '../imgs/reactJS.png'
import css from '../imgs/css.png'
import html from '../imgs/html.png'
import python from '../imgs/python.png'
import sql from '../imgs/sql.png'
import github from '../imgs/github.png'
import linux from '../imgs/linux.png'
import Titles from "../components/Titles"
import { Fade } from "react-reveal"


const SectionSkills = () =>{
  return(
    <>
        <Titles
        title='Skills'
        />
     <Fade right>

     <Grid container spacing={5} width= '140%' id='skills'>
      <Grid item >
        

        <HomeCard
        title='React JS'
        image={reactJS}
        text='O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
        descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        alt='React JS'
        />
      </Grid>
      <Grid item>
      <HomeCard 
      title='Javascript'
      image={js}
      text='JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível.'
      descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
      aside for 10 minutes.
      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
      aside for 10 minutes.'
      alt='Javascript'
      />
      </Grid>
      <Grid item >
        <HomeCard 
        title='HTML5'
        image={html}
        text='HTML5 é uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet.'
        descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        alt='HTML'
        />
      </Grid>
      <Grid item >
        <HomeCard 
        title='CSS3'
        image={css}
        text='Mais nova versão das famosas Cascading Style Sheets, pela qual se define estilos para um projeto web. '
        descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        alt='CSS'
        />
      </Grid>
      <Grid item >
        <HomeCard 
        title='Python'
        image={python}
        text='Python é uma linguagem de programação de alto nível, interpretada de script, de tipagem dinâmica e forte.'
        descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        alt='CSS'
        />
      </Grid>
      <Grid item >
        <HomeCard
        title='SQL'
        image={sql}
        text=' SQL é uma das mais usadas linguagem de pesquisa declarativa padrão para banco de dados relacional.'
        descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        alt='CSS'
        />
      </Grid>
      <Grid item >
        <HomeCard 
        title='Git/Github'
        image={github}
        text='GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. '
        descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        alt='CSS'
        />
      </Grid>
      <Grid item >
        <HomeCard 
        title='Negociação'
        image={linux}
        text='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        alt='CSS'
        />
      </Grid>
      <Grid item >
        <HomeCard 
        title='Coletivismo'
        image={linux}
        text='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        alt='CSS'
        />
      </Grid>
      <Grid item >
        <HomeCard 
        title='Proativismo'
        image={linux}
        text='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        alt='CSS'
        />
      </Grid>
      <Grid item >
        <HomeCard 
        title='Organização'
        image={linux}
        text='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        descrition='Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.'
        alt='CSS'
        />
      </Grid>
    </Grid>
    </Fade>
    </>
    )
}

export default SectionSkills