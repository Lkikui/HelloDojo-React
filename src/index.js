import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const title = React.createElement('h1', null, 'Hello Dojo!');
const listHeader = React.createElement('h3', null, 'Things I need to do:');
var listOpening = React.createElement('ul', null);
const listItem1 = React.createElement('li', null, 'Learn React');
const listItem2 = React.createElement('li', null, 'Run a marathon');
const listItem3 = React.createElement('li', null, 'Climb Mt. Everest');
const listItem4 = React.createElement('li', null, 'Feed the dogs');
const listClosing = React.createElement('ul', null);

ReactDOM.render(
    [title, listHeader, listOpening, listItem1, listItem2, listItem3, listItem4, listClosing], 
    document.getElementById('root')
);