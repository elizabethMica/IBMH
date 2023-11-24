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
    GET_LAST_FOUR,
    PAGINADO
 } from "./actionTypes";

let initialState = {
    sermons: [],
    detail: {},
    filters: [],
    coincidences: true,
    contacts: [], //va en el front de admin
    lastFour : [],
    //paginado
    pageNumbers:[],
    paginado:[],
    currentPage: 1,
    pages:[],
    filteredPaginate:[]
}

function rootReducer(state = initialState, {type, payload}){
     const ITEMS_PER_PAGE = 15;

    switch (type) {

        case GET_ALL_SERMON:
            const reorderSermons = payload.toReversed()
            const totalPagesGet = Math.ceil(reorderSermons.length / ITEMS_PER_PAGE)
            const pagesGet = [...Array(totalPagesGet + 1).keys()].slice(1)

            const indexOfLastP = state.currentPage * ITEMS_PER_PAGE
            const indexOfFirstP = indexOfLastP - ITEMS_PER_PAGE

            const sermonRenderGet = reorderSermons.slice(indexOfFirstP, indexOfLastP)

            return{
                ...state,
                sermons: reorderSermons,
                pages: pagesGet,
                paginado: sermonRenderGet,
                filteredPaginate: reorderSermons
            }

        case PAGINADO:
            var current;
            if(isNaN(payload)){
                if(payload === "next"){
                    if(state.currentPage !== state.pages.lenght){ current = state.currentPage +1}
                    else{
                        return {...state}
                    }
                }else if(payload == "end"){
                    if(state.currentPage !== state.pages.length){
                        current = state.pages.length;
                    }else{
                        return{...state}
                    }
                }else if(payload === "prev"){
                    if(state.currentPage !== 1){
                        current = state.currentPage -1
                      }else{
                            return{...state}
                        }
                }else if(payload === "start"){
                    if(state.currentPage !== 1){
                        current = 1
                     }else{
                        return{...state}
                     }
                }
            }else{
                current = payload
            }
            const totalPages = Math.ceil(state.filteredPaginate.length / ITEMS_PER_PAGE)
            const pages = [...Array(totalPages + 1).keys()].slice(1)

            const indexOfLastPage = current * ITEMS_PER_PAGE
            const indexOfFirstPage = indexOfLastPage - ITEMS_PER_PAGE

            const sermonRender = state.filteredPaginate.slice(indexOfFirstPage, indexOfLastPage)
            return{
                ...state,
                currentPage: current,
                paginado: sermonRender,
                pages: pages
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
                sermons:payload,
                coincidences: true
            }
           }else{
            return{
                ...state,
                coincidences: false,
                sermons:[]
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