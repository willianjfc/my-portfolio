import React, {  useState} from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'
import ModalConfirm from './ModalConfirm'

const useStyles = makeStyles((theme) =>({
  root:{
    maxWidth:345,
    borderRadius: '30px',
  },
}))

const CustomerCard = ({
  id,
  name,
  lastname,
  email,
  avatar,
  className,
  onRemoveCustomer
}) => {
  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)

  const handleToogleOpenModal = () =>{
    setOpenModal(!openModal)
  }

  const handleConfirmModal = id =>{
    onRemoveCustomer(id)
    handleToogleOpenModal()
  }
  const handleRemoveCustomer = () =>{
    handleToogleOpenModal()
}
  return (
    <>
    <Card className={classNames(className,classes.root)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={avatar}>
            R
          </Avatar>
        }
        
        title={`${name} ${lastname}`}
        subheader={email}
        />
      <CardActions disableSpacing>
        <IconButton aria-label="Editar cadastro">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Deletar cadastro" onClick={handleRemoveCustomer}>
          <DeleteIcon />
        </IconButton>
      </CardActions>  
    </Card>
      <ModalConfirm 
      open={openModal} 
      onClose={handleToogleOpenModal}
      onConfirm={() =>handleConfirmModal(id)}
      title="Deseja realmente excluir este cadastro ?"
      message="Ao confirmar não será possível reverter esta operação."
      />
      </>
  )
}

export default CustomerCard