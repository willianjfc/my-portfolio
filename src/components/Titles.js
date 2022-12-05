import useStyles from "../partials/styles/Titles.style"

const Titles = ({ title }) =>{
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <h1 id={title}>
            {title}
            </h1>
        </div>
    )
}

export default Titles