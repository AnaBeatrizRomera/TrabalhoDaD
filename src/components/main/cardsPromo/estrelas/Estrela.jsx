import styles from '../estrelas/Estrela.module.css'
import starFull from '../../../../assets/Vector.png';
import starHalf from '../../../../assets/star-half-filled.png';
import starEmpty from '../../../../assets/Vector (1).png';
function Estrela(props) {

  function renderStars() {


    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(parseFloat(props.estrelas))) {
        stars.push(<img src={starFull} className={styles.estrela}/>);
      } else if (i < parseFloat(props.estrelas) && parseFloat(props.estrelas)< i+1) {
        stars.push(<img src={starHalf}  className={styles.estrela}/>);
      } else {
        stars.push(<img src={starEmpty} className={styles.estrela} />);
      }
    }
    return stars;
  }
    
    return (
    <div className={styles.container}>{renderStars()}</div>
    )
}

export default Estrela