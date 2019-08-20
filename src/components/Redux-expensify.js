import {createStore,combineReducers} from 'redux';
import React from 'react';


const ComplexRedux = () => {
// working with complex reducer and multiple reducer

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
// filter reducer
const filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}
const filterReducer = (state = filterReducerDefaultState,action)=> {
    switch (action.type) {
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filter : filterReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses : [{
        id : 'fsdfs',
        description : 'January Rent',
        note : 'This was the final payment for that address',
        amount : 54500,
        createdAt : 0
    }],
    filters : {
        text : 'rent',
        sortBy : 'amount' ,// date or amount
        startDate : undefined,
        endDate : undefined
    }
}

    return(
        <div></div>
    )
}
export default ComplexRedux;