import styles from "./GridAnuncios.module.css"
function GridAnuncios() {
    return (
        <div className={styles.controle}>
            <div className={styles.videoGame}>
                <h2 className={styles.texto}>PlayStation 5</h2>
                <p className={styles.texto1}>Black and White version of the PS5 coming out on sale.</p>
                <a href="#" className={styles.shoplink}>Shop Now</a>
            </div>
            <div className={styles.chapeu}>
                <h2 className={styles.texto2}>Women’s Collections</h2>
                <p className={styles.texto3}>Featured woman collections that give you another vibe. </p>
                <a href="#" className={styles.shoplink1}>Shop Now</a>
            </div>
            <div className={styles.falante}>
                <div className={styles.foto}></div>
                <h2 className={styles.texto4}>Speakers</h2>
                <p className={styles.texto5}>Amazon wireless speakers</p>
                <a href="#" className={styles.shoplink2}>Shop Now</a>
                </div>
            <div className={styles.perfume}>
            <h2 className={styles.texto6}>Perfume</h2>
                <p className={styles.texto7}>GUCCI INTENSE OUD EDP</p>
                <a href="#" className={styles.shoplink3}>Shop Now</a>
            </div>
            
    </div>

    )

}

export default GridAnuncios