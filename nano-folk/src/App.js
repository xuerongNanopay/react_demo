// import logo from './logo.svg';
// import './App.css';

import SignIn from './component/unauth/SignIn'
import SignUp from './component/unauth/SignUp'
import ForgetPassword from './component/unauth/ForgetPassword'
import VerifyEmail from './component/unauth/VerifyEmail'
import SlideMenu from 'component/ui/side_nav/SideNav'
import MainMenu from 'component/menus/main-menu/MainMenu'
import FlinksIframe from 'component/flinks/flinks'

import {
  Routes,
  Navigate,
  Route
} from 'react-router-dom'

const App = _ => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/signIn" />} />
        {/* If login then navigate to main */}
        <Route path="/signIn" element={<SignIn />}/>
        <Route path="/SignUp" element={<SignUp />}/>
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/user" element={<MainMenu/>}/>
        <Route path="/verifyEmail" element={<VerifyEmail/>}/>
        <Route path="/test" element={<SlideMenu />} />
        <Route path="/mainMenu/*" element={<MainMenu />}></Route>
        <Route path="/flinks" element={<FlinksIframe />} />
        <Route path="*" element={<div>PageNotFound</div>}/>

        {/* <Route path="/service2" element={<Service2/>}>
          <Route index element={<Navigate to="news"/>} />
          <Route path="news" element={<Service2News/>}> 
            <Route path=":newsId" element={<Service2NewDetail/>}/>
          </Route>
          <Route path="messages" element={<Service2message/>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </>
  )
}

export default App

// export default _ => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
