import {createStore,combineReducers} from 'redux';
import React from 'react';
import uuid from 'uuid';


const ComplexRedux = () => {
// working with complex reducer and multiple reducer
// ADD_EXPENSE return action obj
const addExpense = ({description='',note='',amount=0,createdAt=0}={})=> ({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const deleteExpense = ({id}={}) => ({
    type : 'DELETE_EXPENSE',
    id
})

const editExpense = (id, updates)=> ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})


// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'DELETE_EXPENSE':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_EXPENSE' :
            return state.map(expense=> {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
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

store.subscribe(()=> {
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description: 'Rent',amount:100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Rent', amount: 450 }));
const deleteOne = store.dispatch(deleteExpense({id:expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));
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