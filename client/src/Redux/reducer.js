import { 
    GET_ALL_SERMON,
    GET_DETAIL,
    UPDATE_SERMON,
    POST_SERMON,
    DELETE_SERMON,
    SEARCH_BY_NAME,
    POST_CONTACT,
    GET_ALL_CONTACT,
    CLEAR_DETAIL,
    GET_LAST_FOUR
 } from "./actionTypes";

let initialState = {
    sermons: [],
    detail: {},
    filters: [],
    coincidences: true,
    contacts: [], //va en el front de admin
    lastFour : []
}

function rootReducer(state = initialState, {type, payload}){
     
    switch (type) {

        case GET_ALL_SERMON:
            return{
                ...state,
                sermons: payload
            }
        case GET_DETAIL:
            return{
                ...state,
                detail: payload
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
        case POST_CONTACT:
            return{
                ...state
            }
        //fijarse si van en este o el otro front
        case GET_ALL_CONTACT:
            return {
                ...state,
                contacts: payload
            }
        case CLEAR_DETAIL:
            return{
                ...state,
                detail: {}
            }
        case GET_LAST_FOUR:
            let aux = payload.slice(-4)
            let lastFirst = aux.toReversed()
            return{
                ...state,
                lastFour: lastFirst
            }                          

        default:
            return{
                ...state
            }
    }
};

export default rootReducer;