import { 
    GET_ALL_SERMON,
    GET_DETAIL,
    UPDATE_SERMON,
    POST_SERMON,
    DELETE_SERMON,
    SEARCH_BY_NAME
 } from "./actionTypes";

let initialState = {
    sermons: [],
    detail: [],
    filters: []
}

function rootReducer(state = initialState, {type, payload}){
     
    switch (type) {

        case GET_ALL_SERMON:
          return{
            ...state,
            sermons: payload
          }

        default:
            return{
                ...state
            }
    }
};

export default rootReducer;