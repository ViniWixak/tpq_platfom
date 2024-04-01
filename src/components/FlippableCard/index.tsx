import styles from './Flippablecard.module.css'
import Card from '../Card';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';

interface flippableProps {
    imagePath: string;
}

function FlippableCard({ imagePath }: flippableProps) {
    const [showFront, setShowFront] = useState(true);
    return (
        <div className={styles.flippable_container}>
            <CSSTransition
                in={showFront}
                timeout={300}
                classNames='flip'
            >
                <Card
                    onClick={() => {
                        setShowFront((v) => !v)
                    }}
                    imagePath={imagePath}
                />
            </CSSTransition>
        </div>
    )
}

export default FlippableCard;