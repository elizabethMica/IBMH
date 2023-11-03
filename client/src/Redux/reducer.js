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
    filters: [],
    coincidences: true,
}

function rootReducer(state = initialState, {type, payload}){
     
    switch (type) {

        case GET_ALL_SERMON:
            return{
                ...state,
                sermons: payload
            }
            //fijarse si van en este o el otro front
        case POST_SERMON:
            return{
                ...state,
            }
             //fijarse si van en este o el otro front
        case UPDATE_SERMON:
            return{
                ...state
            }
             //fijarse si van en este o el otro front
        case DELETE_SERMON:
            return{
                ...state
            }
        case SEARCH_BY_NAME:
           if(payload.length > 0){
            return{
                ...state,
                filters:payload,
                coincidences: true
            }
           }else{
            return{
                ...state,
                coincidences: false
            }
            }            

        default:
            return{
                ...state
            }
    }
};

export default rootReducer;