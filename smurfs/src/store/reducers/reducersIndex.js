import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE
  } from '../actions/actionsIndex.js';
  

const initialState = {
    isLoading: false,
    smurfs: [
        {
            name: 'Brainey',
            age: 200,
            height: '5cm',
            id: 0
          }
    ],
    error: ""
};

// let smurfs = [
//     {
//       name: 'Brainey',
//       age: 200,
//       height: '5cm',
//       id: 0
//     }
//   ];

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                error: ""
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};