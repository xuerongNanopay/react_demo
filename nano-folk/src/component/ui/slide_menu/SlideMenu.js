// Slide Menu with support of sub-menus
// This UI component needs NavLink. TODO: need to make it more general.
import css from './SlideMenu.module.scss'
import { 
  NavLink,
  Link
} from "react-router-dom";

import { BsBell } from "react-icons/bs";

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
    subMenus: undefined
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
    subMenus: [
      {
        id: 'changePassword',
        name: 'Change Password',
        to: '/changePassword',
        subMenus: undefined
      }
    ]
  }
]

const SlideMenu = ({menus=MENU_DEMO}) => {
  return (
    <div className={`${css.slideMenu}`}>
      <div 
        style={{
          width: '250px',
          height: '100vh',
          backgroundColor: '#b5f5ec'
        }}
      >
        <MenuController/>
      </div>
    </div>
  )
}


const Menu = ({parent=undefined, menus}) => {
  return (
    <>
      <p>This is menu</p>
    </>
  )
}

const MenuItem = ({menu}) => {
  return (
    <>
      <NavLink></NavLink>
    </>
  )
}

// Menu control is responsible for decision on which menu should be should up.
const MenuController = ({menus}) => {
  return (
    <>
      <p>This is MenuController</p>
    </>
  )
}

//TODO: 
// 1. need to process menus, add parent - children relation ship
// 2. forward and back. try change elements now.

export default SlideMenu