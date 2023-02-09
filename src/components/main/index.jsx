import styles from './index.module.scss'
import AddNotes from '../addNotes';
import NoteContent from '../noteContent';
const MainContent = () => {
    return(
        <div className={styles.MainContent}>
            <AddNotes />
            <NoteContent />

        </div>
    )
}

export default MainContent ;