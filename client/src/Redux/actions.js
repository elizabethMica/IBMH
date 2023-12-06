import axios from 'axios';
import { 
    GET_ALL_SERMON, 
    GET_DETAIL,  
    SEARCH_BY_NAME, 
    POST_CONTACT, 
    CLEAR_DETAIL,
    GET_LAST_FOUR,
    PAGINADO,
    LAST_SERMON,
    FILTER_BOOK,
    GET_SERIE,
    ERRORS,
    CLEAR_ERRORS
} from "./actionTypes";

export function getLastSermon (){
    return async function(dispatch){
        try {
            const response = (await axios.get('http://localhost:3001/sermon')).data
            dispatch({
                type: LAST_SERMON,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};


export function getAllSermon (){
    return async function(dispatch){
        try {
            const response = (await axios.get('http://localhost:3001/sermon')).data
            dispatch({
                type: GET_ALL_SERMON,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export function paginado(value){
    return async function(dispatch){
     dispatch({
         type: PAGINADO,
         payload: value
     })
    }
 };

export function getDetail (id){
    return async function(dispatch){
        try {
            const response = (await axios.get(`http://localhost:3001/sermon/${id}`)).data
            dispatch({
                type: GET_DETAIL,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};


export function clearDetail (){
    return async function(dispatch){
        dispatch({
            type: CLEAR_DETAIL
        })
    }
};







export function searchByName (value){
    return async function(dispatch){
            const response = (await axios.get("http://localhost:3001/sermon?name=" + value)).data
            dispatch({
                type: SEARCH_BY_NAME,
                payload: response
            })  
    }
};

export function postContact (values) {
    return async function(dispatch){
        try {
            const headers = {'Content-Type':'application/json'}
            const response = (await axios.post("http://localhost:3001/contact-post", values, {headers})).data
            dispatch({
               type: POST_CONTACT,
               payload: response
            })
            return false
        } catch (error) {
            dispatch({
                type: ERRORS,
                payload: {type: "postContact", error: error.response.data}
            })
            return error
        }
    }
};





export function getLastFour (){
    return async function(dispatch){
        try{
            const response =(await axios.get('http://localhost:3001/sermon')).data
            dispatch({
                type: GET_LAST_FOUR,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
          }
    }
};

export function filterBook(book){
    return async function(dispatch){
            dispatch({
                type: FILTER_BOOK,
                payload: book
            })  
    }
};

export function getSerie(book){
    return async function(dispatch){
        dispatch({
            type: GET_SERIE,
            payload: book
        })
    }
};

export function setNewErrors(obj){
    return async function(dispatch){
        dispatch({
            type: ERRORS,
            payload: obj
        })
    }
};



export function clearErrors(){
    return async function(dispatch){
        dispatch({
            type: CLEAR_ERRORS
        })
    }
};