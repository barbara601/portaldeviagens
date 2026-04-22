import styles from './CardDestino.module.css';
import { Destino } from '../../../types/types';
import Link from 'next/link';

type Props = {
    destino: Destino
}

const Card = ({destino}: Props) => {

    const {id, nome, description, imagem} = destino;
    return (
        <Link href={`/destinos/${id}`} className={styles.card}>
            
            <img className={styles.card__image} src={imagem} alt={nome} />
            <div className={styles.card__info}>
                <h3 className={styles.card__title}>{nome}</h3>
                <p className={styles.card__description}>{description}</p>
            </div>
        </Link>
    )
}
export default Card;