import React from 'react'
class CountingParent extends React.Component {
    state = {
        actionCount: 0
    }
    handleAction = (action) => {
        console.log('Child says', action);
        // actionCount is incremented, and
        // the new count replaces the existing one
        this.setState({
            actionCount: this.state.actionCount + 1
        });
    }
    render() {
        return (
            <div>
                <Child onAction={this.handleAction} />
                <p>Clicked {this.state.actionCount} times</p>
            </div>
        );
    }
}
function Child({onAction}) {
    return(
        <button onClick={onAction}>
            Click Me!
        </button>
    )
}
export default CountingParent;