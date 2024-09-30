import styles from "./Categoria.module.css"

function Categoria(props) {

    function imagem() {
        if (props.imagem == 'true') {
            return (
                <div className={styles.containerV}>
                <img src={props.link} alt="" className={styles.img}/>
                <p className={styles.textV}>{props.texto}</p>
    
            </div>)
        }else {
            return (
                <div className={styles.container}>
                <img src={props.link} alt="" className={styles.img}/>
                <p className={styles.text}>{props.texto}</p>
    
            </div>)
        }
    }
    return (
        imagem()
    )
}

export default Categoria