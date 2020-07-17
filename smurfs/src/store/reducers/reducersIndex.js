import {
    FETCH_SMURFS,
    HANDLE_CHANGE,
    HANDLE_SUBMIT
  } from '../actions/actionsIndex.js';

const initialState = {
    smurfs: [],
    newSmurf: {
        name: '',
        age: '',
        height: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS:
            return {
                ...state,
                smurfs: action.payload,
            };
        case HANDLE_CHANGE:
            return {
                ...state,
                newSmurf: {
                    ...state.newSmurf,
                    [action.payload.target.name]: action.payload.target.value
                }
            }
        case HANDLE_SUBMIT:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            }
        default:
            return state;
    }
};
