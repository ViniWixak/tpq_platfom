import BackButton from '../BackButton';
import styles from './ProgrammingIsland.module.css'


interface ProgrammingIslandProps {
    showProgramDiv: boolean;
    handleClick: () => void;
}

function ProgrammingIsland({ showProgramDiv, handleClick }: ProgrammingIslandProps) {

    return (
        <div>
            <div className={styles.programacaoDiv} onClick={handleClick}>
                {
                    <span className={styles.programacaoSpan}>Programação</span>
                }
            </div>
            {
                showProgramDiv && <div className={styles.programacaoInside}>
                    <div >
                        <BackButton onclick={handleClick} />
                    </div>
                </div>
            }

        </div>
    );
}

export default ProgrammingIsland