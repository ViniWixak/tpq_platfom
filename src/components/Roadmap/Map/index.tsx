
import FrontIsland from '../FontIsland';
import ProgrammingIsland from '../ProgrammingIsland';
import styles from './Map.module.css'
import { useState } from 'react';

function Roadmap() {

    const [showProgramDiv, setShowProgramDiv] = useState(false);
    const [showFrontIslandDiv, setShowFrontIslandDiv] = useState(false);
    

    return (
        <>
            <div className={styles.roadmap}>
                <ProgrammingIsland showProgramDiv={showProgramDiv} handleClick={() => {setShowProgramDiv(!showProgramDiv);}}/>
                <FrontIsland showFrontIslandDiv={showFrontIslandDiv} handleClick={() => {setShowFrontIslandDiv(!showFrontIslandDiv);}}/>
            </div>
        </>
    );
}

export default Roadmap;