import { createContext } from "react";

const initialState = {
    initialNote: [
        {
            id: '1',
            title: 'title',
            content: 'content',
        }
    ],
    secondNoteList: [
        {
            id: '1',
            title: 'title',
            content: 'content',
        }
    ]
}


const GlobalCtx = createContext(initialState);

export {GlobalCtx, initialState};
