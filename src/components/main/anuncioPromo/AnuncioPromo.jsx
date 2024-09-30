import styles from "./AnuncioPromo.module.css"
import caixa from "../../../assets/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"

function AnuncioPromo() {
    return (
        <div className={styles.fundo}>
        <p className={styles.texto}>Categories</p>
            <h1 className={styles.titulo}>Enhance Your Music Experience</h1>
            <img src={caixa} className={styles.som}  alt="" />
            <div className={styles.bolinha}></div>
            <div className={styles.bolinha2}>
            <p className={styles.hora}>23</p>
            <p className={styles.texto1}>Hours</p>
            </div>
            <div className={styles.bolinha3}>
            <p className={styles.hora1}>05</p>
            <p className={styles.texto2}>Days</p>
            </div>
            <div className={styles.bolinha4}>
            <p className={styles.hora2}>59</p>
            <p className={styles.texto3}>Minutes</p>
            </div>
            <div className={styles.bolinha5}>
            <p className={styles.hora3}>39</p>
            <p className={styles.texto4}>Seconds</p>
            </div>

            <button className={styles.botao}>
            <p>Buy Now!</p>
            </button>
            </div>
    );
}

export default AnuncioPromo