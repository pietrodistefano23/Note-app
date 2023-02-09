import { useReducer } from 'react'
import { GlobalCtx , initialState } from './store/state'
import mainReducer from './store/reducer'
import styles from'./App.module.scss'
import Navbar from './components/Nav'
import MainContent from './components/main'
function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GlobalCtx.Provider value={{state, dispatch}}>
      <div className={styles.App}>
      <Navbar />
      <MainContent />
    </div>
    </GlobalCtx.Provider>
    
  )
}

export default App
