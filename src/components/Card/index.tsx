import styles from './Card.module.css'
import './flip-transition.css'

interface cardProps {
    onClick: React.MouseEventHandler<HTMLDivElement>;
    imagePath: string;
}

function Card({ onClick, imagePath }: cardProps) {
    return (
        <div className={styles.card} onClick={onClick}>
            <div className={styles.card_back}>
                <span>Lorem ipsum dolor sit amet</span>
                <p>
                    Sed aliquid accusamus ut numquam voluptas ab error officiis qui dolor saepe aut sunt voluptatem. 
                    Sed aperiam aliquam sed dolor debitis aut temporibus molestias et sint tempora non placeat optio ut rerum iusto! 
                    Et molestias voluptatum ab nemo beatae ut possimus voluptatem.
                </p>
            </div>
            <div className={styles.card_front}>
                <img src={imagePath} alt="" />
            </div>
        </div>
    );
}

export default Card;