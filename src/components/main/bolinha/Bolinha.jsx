import styles from './Bolinha.module.css'
function Bolinha(props) {
    return (
        <div className={styles.container}>
        <div className={styles.bolinha}><img className={styles.img} src={props.link} alt="" /></div>
        <h2 className={styles.titulo}>{props.titulo}</h2>
        <p className={styles.texto}>{props.texto}</p>
        </div>
    )
}

export default Bolinha