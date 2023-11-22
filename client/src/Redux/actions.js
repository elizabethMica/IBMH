import axios from 'axios';
import { 
    GET_ALL_SERMON, 
    GET_DETAIL, 
    POST_SERMON, 
    UPDATE_SERMON, 
    DELETE_SERMON, 
    SEARCH_BY_NAME, 
    POST_CONTACT, 
    DELETE_CONTACT, 
    GET_ALL_CONTACT,
    CLEAR_DETAIL,
    GET_LAST_FOUR
} from "./actionTypes";

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


//va en el otro front (admin)
export function postSermon (values){
    return async function(dispatch){
        try {
            const headers = {'Content-Type':'application/json'}
            const response = (await axios.post("http://localhost:3001/sermon-post", values, {headers})).data
            dispatch({
               type: POST_SERMON,
               payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

//va en el otro front (admin)
export function updateSermon (values){
    return async function(dispatch){
        try {
            const headers = {'Content-Type':'application/json'}
            const response = (await axios.patch(`http://localhost:3001/sermon-update/${id}` , values, {headers})).data
            dispatch({
                type: UPDATE_SERMON,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

//va en el otro front (admin)
export function deleteSermon (id){
    return async function(dispatch){
        try {
            const response = (await axios.delete(`http://localhost:3001/sermon-delete/${id}`)).data
            dispatch({
                type: DELETE_SERMON,
                payload: response
            })
        } catch (error) {
            throw Error(error.message)
        }
    }
};

export function searchByName (name){
    return async function(dispatch){
            const response = (await axios.get("http://localhost:3001/sermon?name=" + name)).data
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
        } catch (error) {
            throw Error(error.message)
        }
    }
};

//va en el otro front (admin)
export function deleteContact (id){
   return async function(dispatch){
    try {
        const response = (await axios.delete(`http://localhost:3001/contact-delete/${id}`)).data
        dispatch({
            type: DELETE_CONTACT,
            payload: response
        })
    } catch (error) {
        throw Error(error.message)
    }
   }
};

//va en el otro front (admin)
export function getAllContact (){
    return async function(dispatch){
      try {
        const response = (await axios.get("http://localhost:3001/contact")).data
        dispatch({
            type: GET_ALL_CONTACT,
            payload: response
        })
      } catch (error) {
        throw Error(error.message)
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
