import styles from './index.module.scss'
import { useContext } from 'react';
import { GlobalCtx } from '../../store/state';
import NoteList from '../noteList';
const NoteContent = () => {
const {dispatch} = useContext(GlobalCtx)
    const onSearch = (e) => {
        dispatch({
            type: 'SEARCH_NOTE',
            payload: e.target.value
        });
    };
    return(
        <div className={styles.NoteContent}>
            <h3>Le tue note</h3>
            <input 
            type="text"
            onInput={onSearch}
            name='search'
            placeholder='🔍' />
            <NoteList />
        </div>
    )
}

export default NoteContent ;