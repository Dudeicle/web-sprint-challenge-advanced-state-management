import axios from 'axios';

export const FETCH_SMURFS = "FETCH_SMURFS";
export const fetchSmurfs = () => {
    return dispatch => {
        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                console.log(res)
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


