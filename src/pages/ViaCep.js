import { useForm } from 'react-hook-form'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) =>({
    cep:{
      fontFamily:'Ralwey',
      fontSize:'30px',
      paddingBottom:'70px',
    },
    input:{
        border: '2px solid green',
        height:'25px',
        fontSize:'15px',
        marginLeft:'10px',
    },

  }))

const ViaCep = () =>{
    const classes = useStyles()
    const {register, handleSubmit, setValue, setFocus} = useForm()

    const onSubmit = (e) =>{
        console.log(e)
    }

    const checkCEP = (e) =>{
        const cep = e.target.value.replace(/\D/g,'')
        console.log(cep)
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data =>{
        setValue('adress', data.logradouro)        
        setValue('neighborhood', data.bairro)    
        setValue('city', data.localidade)    
        setValue('state', data.uf)
        setFocus('number')
        })
    }
    return(
        <Grid container sx={{height:'100vh'}}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ color:'#ffffff' }}>
        <Grid item className={classes.cep}>
            <label >
                CEP:
                <input type='text' {...register('cep')} onBlur={checkCEP} className={classes.input} />
            </label>
        </Grid>
        <Grid item className={classes.cep}>
            <label >
                Logradouro:
                <input type='text' {...register('adress')} className={classes.input}/>
            </label>
        </Grid>
        <Grid item className={classes.cep}>
            <label >
                Número:
                <input type='text' {...register('number')} className={classes.input}/>
            </label>
        </Grid>
        <Grid item className={classes.cep}>
            <label >
                Complemento:
                <input type='text' {...register('complement')} className={classes.input}/>
            </label>
        </Grid>
        <Grid item className={classes.cep}>
            <label >
                Bairro:
                <input type='text' {...register('neighborhood')} className={classes.input}/>
            </label>
        </Grid>
        <Grid item className={classes.cep}>
            <label >
                Cidade:
                <input type='text' {...register('city')} className={classes.input}/>
            </label>
        </Grid>
        <Grid item className={classes.cep}>
            <label >
                Estado:
                <input type='text' {...register('state')} className={classes.input}/>
            </label>
        </Grid>
        </form>
    </Grid>
    )
}

export default ViaCep