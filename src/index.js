import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import TodoContainer from './functionBased/components/TodoContainer';

// stylesheet
import './functionBased/App.css';

ReactDOM.render(
  <HashRouter>
    <TodoContainer />
  </HashRouter>,
  document.getElementById('root'),
);
