import styles from './Anuncio.module.css'
import apple from '../../../assets/1200px-Apple_gray_logo 1.png'
import seta from '../../../assets/icons arrow-right (1).png'
import celular from '../../../assets/hero_endframe__cvklg0xk3w6e_large 2.png'
function Anuncio() {
    return (
        <div className={styles.fundoanuncio}>
            <img src={apple} className={styles.apple}/>
            <p className={styles.texto}>iPhone 14 Series</p>
            <h1 className={styles.desconto}>Up to 10% off Vaucher</h1>
            <a href="#" className={styles.shoplink}>Shop Now</a>
            <img src={seta} className={styles.seta} />
            <img src={celular} className={styles.celular}/>
            <div className={styles.bolinha}></div>
            <div className={styles.bolinhas}></div>
            <div className={styles.bolinhaEscolhida}></div>
            <div className={styles.bolinhas}></div>
            <div className={styles.bolinhas}></div>
        </div>

    )
}

export default Anuncio