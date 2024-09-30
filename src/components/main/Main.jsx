import Anuncio from "./promo/Anuncio.jsx"
import styles from "./Main.module.css"
import Card from "./card/Card.jsx"
import Time from "./time/Time.jsx"
import CardP from "./cardsPromo/cardP/CardP.jsx"
import controle from '../../assets/g92-2-500x500 1.png'
import teclado from "../../assets/Frame 612 (1).png"
import monitor from "../../assets/g27cq4-500x500 1.png"
import cadeira from "../../assets/Frame 614.png"
import Botao from "./botao/Botao.jsx"
import casaco from "../../assets/Frame 605.png"
import bolsa from "../../assets/Frame 606.png"
import som from "../../assets/Frame 610.png"
import estante from "../../assets/Frame 612.png"
import Categoria from "./categoria/Categoria.jsx"
import celular from "../../assets/Category-CellPhone.png"
import computador from "../../assets/Category-Computer.png"
import relogio from "../../assets/Category-SmartWatch.png"
import cameraI from "../../assets/Category-Camera.png"
import fones from "../../assets/Category-Headphone.png"
import game from "../../assets/Category-Gamepad.png"
import AnuncioPromo from "./anuncioPromo/AnuncioPromo.jsx"
import creme from "../../assets/curology-j7pKVQrTUsM-unsplash 1.png"
import camera from "../../assets/Frame 604 (1).png"
import comida from "../../assets/Frame 604.png"
import note from "../../assets/ideapad-gaming-3i-01-500x500 1.png"
import carro from "../../assets/Frame 608.png"
import tenis from "../../assets/Frame 608 (1).png"
import controle1 from "../../assets/Frame 608 (2).png"
import casaco1 from "../../assets/Frame 608 (3).png"
import Grid from "./gridAnuncios/GridAnuncios.jsx"
import Bolinha from './bolinha/Bolinha.jsx'
import caminhao from '../../assets/icon-delivery.png'
function Main() {
    return (
        <div >
            <div className={styles.fundo}><Anuncio/></div>
            <Card nome="Today's"/>
            <Time tempo='true' texto='Flash Sales' botao='false'/>
            <div className={styles.container}>
            <CardP desc='HAVIT HV-G92 Gamepad' link={controle} valor='$120' valorantigo='$160' desconto='true' valorDesconto='-31%' avaliacao='88' estrelas='5'/>
            <CardP desc='AK-900 Wired Keyboard' link={teclado} valor='$960' valorantigo='$1160' desconto='true' valorDesconto='-35%' avaliacao='75' estrelas='4' card='true'/>
            <CardP desc='IPS LCD Gaming Monitor' link={monitor} valor='$370' valorantigo='$400' desconto='true' valorDesconto='-30%' avaliacao='99' estrelas='5'/>
            <CardP desc='S-Series Comfort Chair ' link={cadeira} valor='$375' valorantigo='$400' desconto='true' valorDesconto='-25%' avaliacao='99' estrelas='4.5'/>
            </div>
            <div className={styles.botao}><Botao /></div>
            <div className={styles.linha}></div>
            <Card nome="Categories"/>
            <Time tempo='false'texto='Browse By Category' botao='false'/>
            <div className={styles.categoria}>
                <Categoria texto="Phones" link={celular}/>
                <Categoria texto="Computers" link={computador}/>
                <Categoria texto="SmartWatch" link={relogio}/>
                <Categoria texto="Camera" imagem="true" link={cameraI}/>
                <Categoria texto="HeadPhones" link={fones}/>
                <Categoria texto="Gaming" link={game}/>
            </div>
            <div className={styles.linha}></div>
            <Card nome="This Month"/>
            <Time tempo='false' texto='Best Selling Products' botao='true'/>
            <div className={styles.container}>
            <CardP desc='The north coat' link={casaco} valor='$260' valorantigo='$360'  avaliacao='65' estrelas='5' new/>
            <CardP desc='Gucci duffle bag' link={bolsa} valor='$960' valorantigo='$1160'  avaliacao='65' estrelas='4.5'/>
            <CardP desc='RGB liquid CPU Cooler' link={som} valor='$160' valorantigo='$170' avaliacao='65' estrelas='4.5'/>
            <CardP desc='Small BookSelf ' link={estante} valor='$360'  avaliacao='65' estrelas='4.5'/>
            </div>
            <AnuncioPromo/>
            <Card nome="Our Products"/>
            <Time tempo='false'texto='Explore Our Products' botao='false'/>
            <div className={styles.container}>
            <CardP desc='Breed Dry Dog Food' link={comida} valor='$100' avaliacao='35' estrelas='3'/>
            <CardP desc='CANON EOS DSLR Camera' link={camera} valor='$360' avaliacao='95' estrelas='4' card='true'/>
            <CardP desc='ASUS FHD Gaming Laptop' link={note} valor='$700'  avaliacao='325' estrelas='5'/>
            <CardP desc='Curology Product Set  ' link={creme} valor='$500' avaliacao='145' estrelas='4' />
            </div>
            <div className={styles.container}>
            <CardP desc='Kids Electric Car' link={carro} valor='$960' avaliacao='65' estrelas='5' desconto='false' cores='vermelho'/>
            <CardP desc='Jr. Zoom Soccer Cleats' link={tenis} valor='$1160' avaliacao='35' estrelas='5' cores='amarelo'/>
            <CardP desc='GP11 Shooter USB Gamepad' link={controle1} valor='$660'  avaliacao='55' estrelas='4.5' desconto='false' cores='preto'/>
            <CardP desc='Quilted Satin Jacket  ' link={casaco1} valor='$660' avaliacao='55' estrelas='4.5'  cores='verde'/>
            </div>
            <div className={styles.botao}><Botao/></div>
            <Card nome="Featured"/>
            <Time tempo='false'texto='New Arrival' />
            <Grid/>
            <div className={styles.bolotas}> 
                <Bolinha link={caminhao} titulo='FREE AND FAST DELIVERY' texto='Free delivery for all orders over $140'/>
            <Bolinha link={caminhao} titulo='24/7 CUSTOMER SERVICE' texto='Friendly 24/7 customer support'/>
            <Bolinha link={caminhao} titulo='MONEY BACK GUARANTEE' texto='We reurn money within 30 days'/></div>

 
        </div>
    )
}

export default Main