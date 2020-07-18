import axios from 'axios';
import { bindActionCreators } from 'redux';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const fetchSmurfs = () => {
    return dispatch => {
        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch({ type: FETCH_SMURFS, payload: res.data })
            })
            .catch(err => {
                console.log('this is an error from the get request action', err)
            })

    }
}

export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const handleChange = (event) => {
    return {
         type: HANDLE_CHANGE, payload: event 
    }
}

export const HANDLE_SUBMIT = "HANDLE_SUBMIT";
export const handleSubmit = (name, age, height) => {
    return dispatch => {
        axios.post(`http://localhost:3333/smurfs`, {
            name: name,
            age: age,
            height: height
        })
            .then(res => {
                console.log(res)
                dispatch({ type: HANDLE_SUBMIT, payload: res.data })
            })
            .catch(err => {
                console.log('this is the post request error in actions', err)
            })

    }
}
