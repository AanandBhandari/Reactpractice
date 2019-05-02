import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Trello from './components/Trello';
import Data from './data/testData';
ReactDOM.render(<Trello data={Data}/>, document.getElementById('root'));
