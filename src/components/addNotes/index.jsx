import styles from './index.module.scss'
import { useContext,useState } from 'react';
import { GlobalCtx } from '../../store/state';
const AddNotes = () => {
    const {dispatch,state} = useContext(GlobalCtx)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')


    const onSubmitHandler = () => {
        
        console.log('ciao')
        dispatch({
            type: 'ADD_NOTE', 
            payload:{
                id: Math.floor(Math.random()*100),
                title: title,
                content : content,
            },
        });
        setTitle('');
        setContent('');
        console.log(state)
    }
    return(
        <div className={styles.AddNotes}>
            {/* <form onSubmit={onSubmitHandler}>
                <input
                type="text" 
                placeholder='title'
                name='title'
                value= {title}
                onChange={(e) => {
                    setTitle(()=> e.target.value);
                    console.log(title);
                    }}/>
                
                <input 
                type="text" 
                placeholder='content'
                name='title'
                value= {content}
                onChange={(e) => {setContent(() =>e.target.value)}}
                />
               <button type='submit'>click-me</button>

            </form> */}
            <input type="text" 
             placeholder='title'
             name='title'
             value= {title}
             onChange={(e) => {
                 setTitle(()=> e.target.value);
                 console.log(title);
                 }}/>
            <input 
                type="text" 
                placeholder='content'
                name='title'
                value= {content}
                onChange={(e) => {setContent(() =>e.target.value)}}
                />
                <button onClick={onSubmitHandler}>click</button>     
        </div>
    )
}

export default AddNotes ;