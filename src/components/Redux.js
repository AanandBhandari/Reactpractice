import React from 'react';
import {createStore} from 'redux';

const Redux = () => {
    // createStore takes 2 params first the state with init value and 
    // anoter is action obj to take action according to action.type
    const store = createStore((state = {count:0},action)=>{
        console.log(state);
        return state;
    });
    // dispatch method takes action object to communicate with store,
    // action determines what kind of action to b taken
    store.dispatch({
        type: 'INCREMENT'
    })
    console.log(store.getState());
    return(
        <div>

        </div>
    )
}
export default Redux;