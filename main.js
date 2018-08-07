import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Nav from './App.jsx';

ReactDOM.render(<App heading="React App" titles={['Home','Profile','Statistics','Create','Request']}/>, document.getElementById('app'));
//ReactDOM.render(<Nav titles={['Home','Profile','Statistics','Create','Request']}/>,document.getElementById('nav'));