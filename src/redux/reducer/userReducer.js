import { PROMOTE_USER } from "../actions/types"

export const initialState = {
    promotedUsers: JSON.parse(localStorage.getItem("promotedUsers")) || []
}

 const reducer = (state = initialState, action) => {
    switch(action.type){
        case PROMOTE_USER:
            localStorage.setItem("promotedUsers", JSON.stringify([...state.promotedUsers, action.user]))
            return {
                promotedUsers: [...state.promotedUsers, action.user]
            }
        default:
            return state
    }
}

export default reducer