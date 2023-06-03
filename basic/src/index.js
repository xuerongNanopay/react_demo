import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Demo from './react/ref'
import Controlled from './react/controlComponent'
import UnControlled from './react/controlComponent'
import Function from './react/function';
import reportWebVitals from './reportWebVitals';
import User from './react/classComponent';
import Event from './react/event'
import OldLifeCycle from './react/oldLifeCycle';
import LifeCycle from './react/newLifeCycle'
import Snapshot from './react/snapshot';
import Person from './react/diff'
import TodoList from './component/todoList/TodoList'
import Axios from './axiosdemo/Axios'
import GithubSearch from './component/github_search/GithubSearch'
import MessageQueue from './component/sub_pub/Messaging'
import UseEffect from './react/useEffect'
import UseState from './react/useState'
import ReactRouter from './react/reactRouter'
import SideBar from './react-router/sidebar'
import { ReduxBasic } from './redux_basic/ReduxBasic'
import ReduxAdvance from './redux_advance/ReduxAdvance'
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ReduxAdvance />
  </>
  // <>
  //   <UseEffect />
  // </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
