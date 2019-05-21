import React from 'react'
// making mouse as reusable component
class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this)
        this.state = {
            x:0,
            y:0
        }
    }
    handleMouseMove(e) {
        this.setState({
            x:e.clientX,
            y:e.clientY
        })
    }
    render() {
        return (
            <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
                <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
            </div>
        )
    }
}

export default class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse />
            </div>
        )
    }
}