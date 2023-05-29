import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FlexBox from './component/css/flexbox/Flexbox'
import Grid from './component/css/grid/Grid'
import reportWebVitals from './reportWebVitals';
import TwoColumnLayout from './component/layout/reponsive_two_column/TwoColumn'
import CenterSingleContainer from './component/layout/center_single_container/CenterSingleContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App />
  // <FlexBox />
  // <Grid />
  // <TwoColumnLayout />
  <CenterSingleContainer />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
