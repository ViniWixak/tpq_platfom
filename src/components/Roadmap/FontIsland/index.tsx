import BackButton from '../BackButton';
import styles from './FrontIsland.module.css'

interface FrontIslandProps {
    showFrontIslandDiv: boolean;
    handleClick: () => void;
}

function FrontIsland({ showFrontIslandDiv, handleClick }: FrontIslandProps) {
    return (
        <div>
            <div className={styles.FrontIslandDiv} onClick={handleClick}>
                {
                    <span>Frontend</span>
                }
            </div>
            {
                showFrontIslandDiv && <div className={styles.FrontIslandInside}>
                    <div >
                        <BackButton onclick={handleClick} />
                    </div>
                </div>
            }

        </div>
    );
}

export default FrontIsland