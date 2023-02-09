
const mainReducer = (state, action) => {
    switch (action.type){
        case 'ADD_NOTE':
            return {
                ...state,
                initialNote: [
                    ...state.initialNote, action.payload
                ],
                secondNoteList: [
                    ...state.initialNote, action.payload
                ],  
            }
        case 'SEARCH_NOTE':
            return{
                ...state,
                secondNoteList: state.initialNote.filter((item) => item.title.icludes(action.payload))
                

            }
    }
}


export default mainReducer;