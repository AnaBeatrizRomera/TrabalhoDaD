import styles from './Time.module.css'
import direita from '../../../assets/Fill With Left Arrow.png'
import esquerda from '../../../assets/Fill with Right Arrow.png'

function Time(props) {
    function botao(){
        if(props.botao=='true'){
            return (
                <div className={styles.botao}>
                    <p>View all</p>
                </div>
            )
        }else if(props.botao=='false'){
            return (
                <div>
                <img src={direita} className={styles.direita}/>
                <img src={esquerda} className={styles.esquerda}/>
                </div>
            )
        }
    }
    function tempo(){
        if(props.tempo=='true'){
            return (
                <div className={styles.container}>
                    <p className={styles.tempo}>Days</p>
            <p className={styles.hora}>03</p>
            <div className={styles.bolinhas}>            
            <div className={styles.bolinha1}></div>
            <div className={styles.bolinha2}></div></div>
            <p className={styles.tempo}>Hours</p>
            <p className={styles.hora}>23</p>     
            <div className={styles.bolinhas}>            
            <div className={styles.bolinha1}></div>
            <div className={styles.bolinha2}></div></div>     
            <p className={styles.tempo}>Minutes</p>
            <p className={styles.hora}>19</p>
            <div className={styles.bolinhas}>            
            <div className={styles.bolinha1}></div>
            <div className={styles.bolinha2}></div></div>
            <p className={styles.tempo}>Seconds</p>
            <p className={styles.hora}>56</p>

                </div>
            )
        }
    }
    return (
        <div className={styles.retorno}>
            <h1 className={styles.h1}>{props.texto}</h1>
            {tempo()}
            {botao()}
        </div>
    )
}

export default Time