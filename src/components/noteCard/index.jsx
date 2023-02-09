import styles from './index.module.scss'

const NoteCard = ({data}) => {
    return(
        <div className={styles.NoteCard}>
            <h3>{data.title}</h3>
            <p>{data.content}</p>
        </div>
    )
}

export default NoteCard ;