import React from 'react'
class CountingParent extends React.Component {
    state = {
        actionCount: 0
    }
    handleAction = (action) => {
        console.log('Child says', action);
        // actionCount is incremented, and
        // the new count replaces the existing one
        // this.setState({
        //     actionCount: this.state.actionCount + 1
        // });
        this.setState((state,props) => {
            return {
                value: state.value + 1
            }
        })
    }
    resetAction = (action) => {
        this.setState({
            actionCount : 0
        })
    }
    render() {
        return (
            <div>
                <Child onAction={this.handleAction} />
                <Reset onAction={this.resetAction}/>
                <p>Clicked {this.state.actionCount} times</p>

            </div>
        );
    }
}
function Reset({onAction}) {
    return(
        <button onClick= {onAction}>
            Reset!
        </button>
    )
}
function Child({onAction}) {
    return(
        <button onClick={onAction}>
            Click Me!
        </button>
    )
}
export default CountingParent;