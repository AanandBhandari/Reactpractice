import React from 'react'

class Cat extends React.Component {
    // chaseMouse()
    render() {
        const { mouse } = this.props
        return (
            <img src="/img/cat.png" style={{height:30, position: 'absolute', left: mouse.x, top: mouse.y }} alt={'cat'} />
            // <h1>hello</h1>
        )
    }
}
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
                {/*  “render prop” refers to a technique for sharing code between React components using a prop whose value is a function. */}
               {this.props.render(this.state)}
            </div>
        )
    }
}


export default class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>Move the mouse around!</h1>
                <Mouse render={(mouse)=>(
                    <Cat mouse={mouse}/>
                )}/>
            </div>
        )
    }
}