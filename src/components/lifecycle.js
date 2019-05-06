import React from 'react';
import ReactDOM from 'react-dom';
class LifecycleDemo extends React.Component{
    state = {counter:0}
    constructor(props) {
        super(props);
        console.log('constructing...');
        console.log('State is already set to : ',this.state);
    }
    componentWillMount() {
        console.log('About the mount...');
    }
    componentDidMount() {
        console.log('mounted');
    }
    componentWillReceiveProps(nextProps) {
        console.log('Current props is : ',this.props);
        console.log('Next props is : ',nextProps);
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('Deciding to update');
        return true;
    }
    componentWillUpdate(nextProps,nextState) {
        console.log('About the update...');
    }
    componentDidUpdate() {
        console.log('updated');
    }
    componentWillUnmount(){
        console.log('goodBye Cruel world');
    }
    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };
    render() {
        console.log('Rendering...');
        return (
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>
                    Click to increment
                </button>
            </div>
        );
    }
}
export default LifecycleDemo;