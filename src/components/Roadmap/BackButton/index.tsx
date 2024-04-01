import styles from './BackButton.module.css'

interface BackButtonProps {
    onclick: () => void;
}

function BackButton ({onclick}: BackButtonProps) {
    return(
        <div className={styles.backbutton} onClick={onclick}>⬅</div>
    );
}

export default BackButton;