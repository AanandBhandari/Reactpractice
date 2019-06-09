import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Trello from './components/Trello';
import Data from './data/testData';
import LifeCycleDemo from './components/lifecycle';
import AuthExample from './components/auth'
import MouseTracker from './components/RenderProps'
// ReactDOM.render(<Trello data={Data}/>, document.getElementById('root'));
ReactDOM.render(<AuthExample/>, document.getElementById('root'));

