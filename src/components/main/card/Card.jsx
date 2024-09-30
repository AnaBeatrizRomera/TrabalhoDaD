import styles from '../card/Card.module.css'
function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.quadrado}></div>
            <p className={styles.texto}>{props.nome}</p>


        </div>

    )
}

export default Card