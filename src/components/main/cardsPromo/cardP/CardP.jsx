import styles from "./CardP.module.css"
import olho from '../../../../assets/Fill Eye.png'
import coracao from '../../../../assets/Fill Heart.png'
import Estrela from '../estrelas/Estrela'
function CardP(props) {
    function desconto(){
        if(props.desconto=='true'){
            return (
                <div className={styles.desconto}><p className={styles.p}>{props.valorDesconto}</p></div>
            )
        }else if(props.desconto=='false'){
            return (
                <div  className={styles.new} ><p className={styles.p}>new</p></div>
            )
        }
    }

    function card(){
        if(props.card=='true'){
            return (
                <div className={styles.card}>Add To Card</div>
            )
        }
    }

    function cores(){
        if(props.cores=='vermelho'){
            return (
                <div className={styles.cores}><div className={styles.branco}><div className={styles.vermelho}></div></div>
                <div className={styles.vinho}></div></div>
            )
        }else if(props.cores=='amarelo'){
            return (
                <div className={styles.cores}><div className={styles.branco}><div className={styles.amarelo}></div></div>
                <div className={styles.vinho}></div></div>
            )
    }else if(props.cores=='preto'){
        return (
            <div className={styles.cores}><div className={styles.branco}><div className={styles.preto}></div></div>
            <div className={styles.vinho}></div></div>
        )
}else if(props.cores=='verde'){
    return (
        <div className={styles.cores}><div className={styles.branco}><div className={styles.verde}></div></div>
        <div className={styles.vinho}></div></div>
    )
}
    }
    return (
        <div className={styles.container}>
            <div className={styles.fundo}>
                <div className={styles.alinhamento}>{desconto()}</div>
                <img src={props.link} alt="" className={styles.imagem} />
                <img src={coracao} className={styles.coracao}/>
                <img src={olho} className={styles.olho}/>
                <div className={styles.alinhamentoCard}>{card()}</div>
            </div>
            <h1 className={styles.desc}>{props.desc} </h1>
            <h1 className={styles.valor} >{props.valor}</h1>
            <h1 className={styles.valorantigo}>{props.valorantigo}</h1>
            <div className={styles.estrelas}><Estrela estrelas={props.estrelas}/></div>
            <p className={styles.avaliacao}>({props.avaliacao})</p>
            <div className={styles.cor}>{cores()}</div>

            

        </div>
    )
}

export default CardP