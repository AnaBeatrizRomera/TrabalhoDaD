import styles from '../header/Header.module.css'
import image from '../../assets/Component 2.png'
import coracao from '../../assets/Wishlist.png'
import carinho from '../../assets/Cart1 with buy.png'
function Header() {
    return (
        <div className={styles.fundo}>
            <h1 >Exclusive</h1>
            <h2 className={styles.home}>Home</h2>
            <h2>Contact</h2>
            <h2>About</h2>
            <h2>Sign up</h2>
            <div className={styles.fundopesquisa}>
                <p className={styles.texto}>What are you looking for?</p>
                <img src={image} className={styles.img}/>
            </div>
            <img src={coracao}  className={styles.coracao}/>
            <img src={carinho} className={styles.carinho}/>
        </div>
    )
}

export default Header