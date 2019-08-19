import React from 'react';
import {createStore} from 'redux';

const Redux = () => {
    // createStore takes 2 params first the state with init value and 
    // anoter is action obj to take action according to action.type
    const store = createStore((state = {count:0},action)=>{
        switch (action.type) {
            case 'INCREMENT':
                const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
                return {
                    count : state.count + incrementBy
                }
            case 'DECREMENT':
                const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
                return {
                    count: state.count - decrementBy
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
    });
    // suscribe will notify if state is changed
    // it takes a function as params
    store.subscribe(()=>{
        console.log(store.getState());
    })

    // dispatch method takes action object to communicate with store,
    // action determines what kind of action to b taken
    store.dispatch({
        type: 'INCREMENT',
        // costum action
        incrementBy : 5
    });
    store.dispatch({
        type: 'DECREMENT',
        decrementBy : 3
    })
    store.dispatch({
        type: 'SET',
        set : 2
    })
    store.dispatch({
        type: 'RESET'
    })
    return(
        <div>

        </div>
    )
}
export default Redux;