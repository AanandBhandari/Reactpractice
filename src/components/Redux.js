import React from 'react';
import {createStore} from 'redux';
        const Redux = () => {

// action generator are functions that return action objects
// const incrementCount = ({ incrementBy})=> {
//     return {
//         type: 'INCREMENT',
//         // costum action
//         incrementBy
//     }
// }

// instead of using incrementBy params we make payload with default empty obj
//  as sometime we may not send incrementBy to the genetrator the incrementBy wii be undefined
// const incrementCount = (payload={})=> {
//     return {
//         type: 'INCREMENT',
//         // costum action
//         incrementBy : typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     }
// }

// by destructing the payload
// const incrementCount = ({incrementBy} = {}) => {
//     return {
//         type: 'INCREMENT',
//         // costum action
//         incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
//     }
// }

// more simplified
const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        // costum action
        incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 }={}) => {
    return {
        type: 'DECREMENT',
        // costum action
        decrementBy
    }
}

const resetCount = () => {
    return {
        type: 'RESET',
    }
}
const setCount = ({set}) => {
    return {
        type: 'SET',
        set
    }
}

// Reducers
// they are pure function
// never change state or action directly
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.set
            }
        case 'RESET':
            return {
                count: 0
            }

        default:
            return state;
    }
}

    // createStore takes 2 params first the state with init value and 
    // anoter is action obj to take action according to action.type
    const store = createStore(countReducer);
    // suscribe will notify if state is changed
    // it takes a function as params
    store.subscribe(()=>{
        console.log(store.getState());
    })

    // dispatch method takes action object to communicate with store,
    // action determines what kind of action to b taken
    store.dispatch(incrementCount({ incrementBy : 5}));
    store.dispatch(decrementCount({ decrementBy : 10}));
    store.dispatch(decrementCount())
    store.dispatch(resetCount());
    store.dispatch(setCount({set : 2}));
    return(
        <div>

        </div>
    )
}
export default Redux;