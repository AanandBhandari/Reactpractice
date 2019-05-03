import React from  'react'
function handleAction (event) {
    console.log('Child did :',event);
}

function Parent() {
    return (
        <Child onAction={handleAction} />
    );
}
function Child({onAction}) {
    return(
        <button onClick={onAction}>Click me!</button>
    )
}
export default Parent