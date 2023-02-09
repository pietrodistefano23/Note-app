import styles from './index.module.scss'
import { useContext } from 'react';
import { GlobalCtx } from '../../store/state';
import NoteCard from '../noteCard';
const NoteList = () => {
    const {state} = useContext(GlobalCtx)
    return(
        <div className={styles.NoteList}>
            {state.secondNoteList.map((item)=>(
                <NoteCard data={item} key={item.id}/>
            ))}
        </div>
    )
}

export default NoteList ;