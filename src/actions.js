import { CHANGE_SEARCH_FIELD } from "./constants"


export const setSearchField=(text)=>({
    type: '_CHANGE_SEARCH_FIELD',
    payload: text
})