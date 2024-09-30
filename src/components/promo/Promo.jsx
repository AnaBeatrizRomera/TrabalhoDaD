import styles from './Promo.module.css'
import image from '../../assets/seta.png'

function Promo() {
    return (
        <div>
            <div className={styles.fundoanuncio}>
                <p className={styles.texto}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a href="#" className={styles.shoplink}>Shop Now</a>
                <div className={styles.language}>
                <p className={styles.languageescolha}>English</p>
                <img className={styles.image} src={image}></img>
                </div>
                
            </div>
            
        </div>
    )
}

export default Promo