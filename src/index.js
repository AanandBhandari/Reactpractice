import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Trello from './components/Trello';
import Data from './data/testData';
import LifeCycleDemo from './components/lifecycle';
// ReactDOM.render(<Trello data={Data}/>, document.getElementById('root'));
ReactDOM.render(<LifeCycleDemo/>, document.getElementById('root'));

