// React app entry point

const React = require('react');
const ReactDOM = require('react-dom');

const Main = require('./MainComponent.jsx').default;

// Algolia App ID and Public Search Key global variables
const APP_ID         = 'MY_APP_ID',
      SEARCH_API_KEY = 'MY_SEARCH_API_KEY',
      INDEX_NAME     = 'MY_INDEX_NAME';

ReactDOM.render(
  <Main />,
  document.getElementById('app-container')
);
