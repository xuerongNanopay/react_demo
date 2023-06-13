// Slide Menu with support of sub-menus
// This UI component needs NavLink. TODO: need to make it more general.
import css from './SlideMenu.module.scss'
import { 
  NavLink,
  Link
} from "react-router-dom";

import { BsBell } from "react-icons/bs";

import { useState } from 'react'

//menus is a list

// [
//   {name: 'transaction', element, to: 'to', submenus: []}
//   {name: 'login', to: '/'}
// ]
// redirection should only trigger when 

const MENU_DEMO = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    to: '/signIn',
    handler: () => {console.log("TODO: handler")},
    subMenus: [
      {
        id: 'contacts',
        name: 'Contacts',
        to: '/signIn',
        subMenus: undefined
      }
    ]
  },
  {
    id: 'sendMoney',
    name: 'Send Money',
    to: '/signIn',
    subMenus: undefined
  },
  {
    id: 'contacts',
    name: 'Contacts',
    to: '/signIn',
    subMenus: undefined
  },
  {
    id: 'myAccounts',
    name: 'My Accounts',
    to: '/signIn',
    subMenus: undefined
  },
  {
    id: 'userProfile',
    name: 'User Name',
    to: undefined,
    next: [
      {
        id: 'changePassword',
        name: 'Change Password',
        to: '/changePassword',
        subMenus: undefined
      }
    ]
  }
]

const SlideNav = ({menus=MENU_DEMO}) => {
  const [ test, setTest ] = useState(false);
  return (
    <>
        <div 
      // className={`${css.slideMenu}`}
      style={{
        height: '100vh'
      }}
    >
      <div 
        style={{
          position: 'relative',
          width: '300px',
          height: '100%',
          backgroundColor: '#b5f5ec',
          overflow: 'hidden'
        }}
      >
        {/* { test ? <Slide style={{backgroundColor: 'blue'}} /> : <Slide style={{backgroundColor: 'red'}} />} */}
        <Slide 
          style={{backgroundColor: 'blue'}} 
          className={test? css.show : ""}
        />
      </div>
    </div>
      <button 
        type="button"
        style={{
          position: 'fixed',
          right: '50px',
          top: '50px'
        }}
        onClick={() => setTest(!test)}
      >
        Testaa
      </button>
    </>
  )
}


const Slide = ({style, className}) => {
  return (
    <div
      style={{
        ...style
      }}
      className={`${className} ${css.slide}`}
    >
      <p>This is menu</p>
    </div>
  )
}

const slideItem = ({menu}) => {
  return (
    <>
      <NavLink></NavLink>
    </>
  )
}

// Menu control is responsible for decision on which menu should be should up.
const SlideController = ({menus}) => {
  return (
    <>
      <p>This is MenuController</p>
    </>
  )
}

//TODO: 
// 1. need to process menus, add parent - children relation ship
// 2. forward and back. try change elements now.

export default SlideNav